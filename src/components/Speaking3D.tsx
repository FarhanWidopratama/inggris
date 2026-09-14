"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  target: string;
  targetId?: string;
  hint?: string;
};

export default function Speaking3D({ target, targetId, hint }: Props) {
  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [bars, setBars] = useState<number[]>(Array.from({ length: 24 }, () => 8));
  const [feedback, setFeedback] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioElRef = useRef<HTMLAudioElement | null>(null);

  // cleanup
  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
      streamRef.current?.getTracks().forEach((t) => t.stop());
      if (audioCtxRef.current?.state !== "closed") audioCtxRef.current?.close().catch(() => {});
    };
  }, []);

  function animateBars() {
    const analyser = analyserRef.current;
    if (!analyser) return;
    const data = new Uint8Array(analyser.frequencyBinCount);
    const tick = () => {
      analyser.getByteFrequencyData(data);
      // take 24 bars
      const next = Array.from({ length: 24 }, (_, i) => {
        const idx = Math.floor((i / 24) * data.length);
        const v = data[idx] || 0;
        return 6 + (v / 255) * 52; // 6..58
      });
      setBars(next);
      animRef.current = requestAnimationFrame(tick);
    };
    tick();
  }

  async function startRecording() {
    setFeedback(null);
    setAudioUrl(null);
    setElapsed(0);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
      streamRef.current = stream;

      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      audioCtxRef.current = ctx;
      const source = ctx.createMediaStreamSource(stream);
      sourceRef.current = source;
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.8;
      source.connect(analyser);
      analyserRef.current = analyser;

      const mr = new MediaRecorder(stream, { mimeType: MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "audio/mp4" });
      mediaRecorderRef.current = mr;
      audioChunksRef.current = [];
      mr.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };
      mr.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: mr.mimeType || "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        // mock feedback
        const len = blob.size;
        if (len < 8000) setFeedback("⚠️ Suara kecil / pendek — coba lebih keras & dekat mic, ulangi 1x lagi!");
        else setFeedback("✅ Keren! Rekaman kepotong jelas. Cek playback — kalau mirip target, lu lancar! 🔥 (+15 XP)");
        // stop analyser anim is still running while recording; we keep last bars as playback pseudo
        if (animRef.current) cancelAnimationFrame(animRef.current);
        // close mic
        stream.getTracks().forEach((t) => t.stop());
        audioCtxRef.current?.close().catch(() => {});
        if (timerRef.current) clearInterval(timerRef.current);
      };

      mr.start();
      setRecording(true);
      animateBars();
      timerRef.current = setInterval(() => setElapsed((s) => s + 0.1), 100);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes("NotAllowed") || msg.toLowerCase().includes("permission")) {
        setFeedback("❌ Mic diblokir. Klik gembok di address bar → Allow microphone, lalu coba lagi.");
      } else {
        setFeedback(`❌ Gagal rekam: ${msg}`);
      }
    }
  }

  function stopRecording() {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
    if (animRef.current) cancelAnimationFrame(animRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
  }

  function playAudio() {
    if (!audioUrl || !audioElRef.current) return;
    const el = audioElRef.current;
    setPlaying(true);
    el.currentTime = 0;
    el.play().catch(() => {});
    // pseudo bars during playback
    let t = 0;
    const id = setInterval(() => {
      t += 0.14;
      setBars((prev) => prev.map((_, i) => 10 + Math.abs(Math.sin(t + i * 0.45)) * 42 + Math.random() * 6));
    }, 70);
    el.onended = () => {
      clearInterval(id);
      setPlaying(false);
      setBars(Array.from({ length: 24 }, () => 8));
      el.onended = null;
    };
  }

  function speakTarget() {
    if (!("speechSynthesis" in window)) {
      setFeedback("⚠️ Browser gak support text-to-speech. Coba Chrome/Edge terbaru.");
      return;
    }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(target);
    u.lang = "en-US";
    u.rate = 0.92;
    window.speechSynthesis.speak(u);
  }

  return (
    <div className="relative overflow-hidden rounded-[22px] border border-zinc-200 bg-white p-5 sm:p-6" style={{ perspective: 1200 }}>
      {/* bg orbs */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-100/50 blur-[26px]" />
      <div className="pointer-events-none absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-sky-100/40 blur-[24px]" />

      <div className="relative flex items-center justify-between">
        <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-black tracking-widest text-white">SPEAKING 3D</span>
        <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-bold text-zinc-600">{recording ? `● REC ${elapsed.toFixed(1)}s` : playing ? "▶ PLAYING" : "Tap mic untuk rekam"}</span>
      </div>

      {/* target phrase card 3D */}
      <motion.div
        whileHover={{ y: -4, rotateX: 3, rotateY: -2 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative mt-4 rounded-2xl border border-zinc-900 bg-zinc-900 p-4 text-white shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:p-5"
      >
        <div className="text-xs font-bold tracking-widest text-zinc-400">TARGET PHRASE</div>
        <div className="mt-1 text-xl font-black leading-tight sm:text-2xl">{target}</div>
        {targetId && <div className="text-sm text-zinc-400">{targetId}</div>}
        {hint && <div className="mt-2 text-xs font-semibold text-amber-300">💡 {hint}</div>}
        <button onClick={speakTarget} className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-black text-zinc-900 hover:bg-zinc-100">
          🔊 Dengerin Native →
        </button>
      </motion.div>

      {/* Waveform 3D */}
      <div className="relative mt-5 rounded-2xl border border-zinc-200 bg-[#fcfbf8] p-4">
        <div className="flex items-end justify-center gap-[3px] h-[84px]" style={{ perspective: 600 }}>
          {bars.map((h, i) => (
            <motion.div
              key={i}
              animate={{ height: h, rotateX: recording ? -8 : 0 }}
              transition={{ type: "spring", stiffness: 380, damping: 18, mass: 0.4 }}
              style={{ transformStyle: "preserve-3d" }}
              className={`w-[7px] sm:w-[9px] rounded-full ${recording ? "bg-gradient-to-t from-emerald-500 to-emerald-300 shadow-[0_6px_16px_rgba(16,185,129,0.35)]" : playing ? "bg-gradient-to-t from-sky-500 to-sky-300" : "bg-zinc-300"}`}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-xs font-bold text-zinc-500">
          <span>{recording ? "● Listening... ngomong sekarang!" : playing ? "↻ Playing back..." : "Tekan & tahan mic, ucapkan target di atas"}</span>
          <span className="hidden sm:inline">{recording ? "Waveform 3D live (AnalyserNode)" : "3D bars spring"}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        {!recording ? (
          <motion.button
            onClick={startRecording}
            whileHover={{ scale: 1.03, y: -2, rotateX: 4 }}
            whileTap={{ scale: 0.94 }}
            style={{ transformStyle: "preserve-3d" }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-sm font-black text-white shadow-[0_12px_28px_rgba(16,185,129,0.35)]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">🎙️</span> Rekam Sekarang
          </motion.button>
        ) : (
          <motion.button onClick={stopRecording} whileTap={{ scale: 0.96 }} className="inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-sm font-black text-white shadow-[0_12px_28px_rgba(239,68,68,0.35)]">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-white" /> Stop Rekam
          </motion.button>
        )}

        <motion.button onClick={playAudio} disabled={!audioUrl} whileHover={audioUrl ? { scale: 1.03 } : undefined} className={`rounded-full px-5 py-3 text-sm font-black shadow-sm ${audioUrl ? "bg-zinc-900 text-white hover:bg-black" : "bg-zinc-100 text-zinc-400 cursor-not-allowed"}`}>
          ▶ Playback
        </motion.button>

        <button onClick={() => { setAudioUrl(null); setFeedback(null); setBars(Array.from({ length: 24 }, () => 8)); setElapsed(0); }} className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-bold hover:bg-zinc-50">
          ↺ Reset
        </button>

        <span className="ml-auto hidden text-xs font-bold text-zinc-500 sm:inline">🎧 Pakai headset biar akurat • Izin mic required</span>
      </div>

      <audio ref={audioElRef} src={audioUrl || undefined} className="hidden" preload="auto" />

      <AnimatePresence>
        {feedback && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }} className="mt-4 rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold leading-relaxed shadow-sm">
            {feedback}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-3 text-xs leading-relaxed text-zinc-500">
        <b>Tips 3D:</b> Ucapkan pelan & jelas. Waveform 3D naik = suara masuk. Bandingin playback lu sama tombol <b>Dengerin Native</b> di atas. Upload ke Supabase nanti bisa auto-score (next).
      </div>
    </div>
  );
}
