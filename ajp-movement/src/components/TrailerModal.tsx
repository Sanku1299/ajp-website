import { useEffect, useRef, useState } from 'react';
import { X, Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface TrailerModalProps {
  onClose: () => void;
}

export default function TrailerModal({ onClose }: TrailerModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentCaptionIndex, setCurrentCaptionIndex] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthIntervalRef = useRef<number | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  // Cinematic caption slides
  const captions = [
    { text: "IN A WORLD OF BROKEN PROMISES...", delay: 2500, type: "intro" },
    { text: "WHERE RESUMES REQUIRE 10 YEARS OF EXPERIENCE...", delay: 3000, type: "intro" },
    { text: "AND HR CHECKS IN AT 6:59 PM...", delay: 2500, type: "intro" },
    { text: "ONE ARMY STOOD TOGETHER...", delay: 2000, type: "build" },
    { text: "THEY ARE TINY.", delay: 1500, type: "mascot" },
    { text: "THEY ARE UNSTOPPABLE.", delay: 1500, type: "mascot" },
    { text: "AJP (ANTI JANTA PARTY)", delay: 3000, type: "title" },
    { text: "NOT AGAINST THE PEOPLE.", delay: 2000, type: "tagline" },
    { text: "AGAINST THE PROBLEMS.", delay: 3500, type: "tagline-orange" }
  ];

  // Start play logic
  const togglePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      startCinematicAudio();
      cycleCaptions(0);
    } else {
      setIsPlaying(false);
      stopCinematicAudio();
    }
  };

  // Web Audio API Synthesizer for Cinematic Sound Effects
  const startCinematicAudio = () => {
    // Initialize AudioContext
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;
    } catch (e) {
      console.warn("Web Audio API not supported", e);
      return;
    }

    let beatCount = 0;

    // Create a loop of synth triggers
    const triggerNextBeat = () => {
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state === 'closed') return;
      if (isMuted) return;

      const time = ctx.currentTime;

      // Bass Sub-Drop / Boom (every 3 seconds)
      if (beatCount % 3 === 0) {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        osc.type = 'sine';
        // Sub drop sweep: start at 70Hz, sweep down to 20Hz
        osc.frequency.setValueAtTime(70, time);
        osc.frequency.exponentialRampToValueAtTime(20, time + 2.0);

        gainNode.gain.setValueAtTime(0.6, time);
        gainNode.gain.exponentialRampToValueAtTime(0.001, time + 2.5);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        osc.start(time);
        osc.stop(time + 2.5);
      }

      // Rebellious Industrial Snare Hit (every 1.5 seconds)
      if (beatCount % 2 === 1) {
        // Noise buffer snare
        const bufferSize = ctx.sampleRate * 0.3; // 300ms
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        // Bandpass filter
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1000, time);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.25, time);
        gainNode.gain.exponentialRampToValueAtTime(0.001, time + 0.3);

        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        noise.start(time);
        noise.stop(time + 0.3);
      }

      beatCount++;
    };

    // Trigger immediately
    triggerNextBeat();
    
    // Setup interval loop (every 1.25s)
    synthIntervalRef.current = window.setInterval(triggerNextBeat, 1250);
  };

  const stopCinematicAudio = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
  };

  // Caption cycler logic
  const cycleCaptions = (index: number) => {
    if (index >= captions.length) {
      // Loop or stop
      setIsPlaying(false);
      stopCinematicAudio();
      setCurrentCaptionIndex(0);
      return;
    }

    setCurrentCaptionIndex(index);
    
    // Queue next slide
    synthIntervalRef.current = window.setTimeout(() => {
      cycleCaptions(index + 1);
    }, captions[index].delay);
  };

  // Clean loops on unmount
  useEffect(() => {
    // Start canvas visualizer loop
    startVisualizer();

    return () => {
      stopCinematicAudio();
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // Glitch TV Static Canvas Visualizer
  const startVisualizer = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      if (!ctx || !canvas) return;

      // Draw standard static pattern
      const width = canvas.width;
      const height = canvas.height;
      const imgData = ctx.createImageData(width, height);
      const data = imgData.data;

      for (let i = 0; i < data.length; i += 4) {
        // High percentage of dark navy dots mixed with white/gray static noise
        const grey = Math.floor(Math.random() * 255);
        
        // Glitch line stripes
        const noiseFactor = Math.random() > 0.98 ? 1.0 : 0.15;
        
        data[i] = Math.max(7, Math.floor(grey * noiseFactor));       // Red (Navy offset)
        data[i+1] = Math.max(12, Math.floor(grey * noiseFactor * 0.8)); // Green
        data[i+2] = Math.max(30, Math.floor(grey * noiseFactor * 0.4)); // Blue
        data[i+3] = 255;                                              // Alpha
      }

      ctx.putImageData(imgData, 0, 0);

      // Draw red recording circle on top left
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(40, 40, 8, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = '800 12px monospace';
      ctx.fillText('REC', 55, 44);

      // Trigger next frame
      animationFrameIdRef.current = requestAnimationFrame(render);
    };

    render();
  };

  return (
    <div className="trailer-modal-backdrop flex-center" onClick={onClose}>
      <div className="trailer-modal-card card-glow-orange" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Cinematic Teaser Trailer</h3>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Video Player Display Screen */}
        <div className="video-player-display">
          <canvas ref={canvasRef} width={640} height={360} className="visualizer-canvas"></canvas>

          {/* Glitch Overlay scanline */}
          <div className="scanlines"></div>

          {/* Movie caption slide overlays */}
          {isPlaying ? (
            <div className={`cinematic-text-slide slide-${captions[currentCaptionIndex].type}`}>
              <h2 className="title-caption-text">{captions[currentCaptionIndex].text}</h2>
            </div>
          ) : (
            <div className="cinematic-play-overlay flex-col flex-center">
              <button className="play-button" onClick={togglePlay}>
                <Play size={40} fill="white" />
              </button>
              <p className="mt-15">Click to Start Cinematic Teaser</p>
              <span className="caption-disclaimer font-bold text-orange">*(Headphones Recommended)*</span>
            </div>
          )}

          {/* Controls Bar */}
          {isPlaying && (
            <div className="controls-bar">
              <button className="controls-btn" onClick={togglePlay}>
                <Pause size={18} />
              </button>
              
              <div className="progress-track">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(currentCaptionIndex / captions.length) * 100}%` }}
                ></div>
              </div>

              <button className="controls-btn" onClick={() => setIsMuted(!isMuted)}>
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          )}
        </div>

        <div className="warning-note mt-15 flex-align justify-center">
          <span>AJP Cinematic Universe (AJPCU) - Release: Year of the Rebellion.</span>
        </div>
      </div>

      <style>{`
        .trailer-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(8px);
          z-index: 150;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .trailer-modal-card {
          width: 95%;
          max-width: 680px;
          padding: 24px;
          background: var(--bg-navy-main);
          border-radius: var(--border-radius-lg);
          position: relative;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 10px;
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--text-gray);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .close-btn:hover {
          color: var(--primary-orange);
        }

        /* Player display Screen */
        .video-player-display {
          width: 100%;
          aspect-ratio: 16/9;
          background: #000;
          position: relative;
          overflow: hidden;
          border-radius: var(--border-radius-sm);
          border: 3px solid var(--bg-navy-card);
        }

        .visualizer-canvas {
          width: 100%;
          height: 100%;
          display: block;
        }

        .scanlines {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            rgba(18, 16, 16, 0) 50%, 
            rgba(0, 0, 0, 0.25) 50%
          ), linear-gradient(
            90deg, 
            rgba(255, 0, 0, 0.06), 
            rgba(0, 255, 0, 0.02), 
            rgba(0, 0, 255, 0.06)
          );
          background-size: 100% 4px, 6px 100%;
          pointer-events: none;
        }

        .cinematic-play-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.8);
          z-index: 10;
        }

        .play-button {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--primary-orange);
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 25px var(--primary-orange-glow);
          transition: var(--transition-smooth);
        }

        .play-button:hover {
          transform: scale(1.1);
          background: var(--primary-orange-hover);
        }

        .caption-disclaimer {
          font-size: 0.75rem;
          margin-top: 8px;
        }

        /* Movie Title Card Overlays */
        .cinematic-text-slide {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          text-align: center;
          z-index: 5;
          animation: caption-fade 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes caption-fade {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .title-caption-text {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 2.1rem;
          color: white;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8);
          text-transform: uppercase;
        }

        .slide-build .title-caption-text {
          color: #f1f5f9;
          font-size: 2.2rem;
          letter-spacing: 0.05em;
        }

        .slide-mascot .title-caption-text {
          color: var(--accent-blue);
          font-size: 2.4rem;
          text-shadow: 0 0 15px var(--accent-blue-glow);
        }

        .slide-title .title-caption-text {
          color: white;
          font-size: 2.6rem;
          letter-spacing: 0.08em;
          border: 4px solid var(--primary-orange);
          padding: 10px 24px;
          background: rgba(0,0,0,0.7);
        }

        .slide-tagline .title-caption-text {
          font-size: 2.2rem;
        }

        .slide-tagline-orange .title-caption-text {
          color: var(--primary-orange);
          font-size: 2.4rem;
          text-shadow: 0 0 20px var(--primary-orange-glow);
        }

        /* Controls bar */
        .controls-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px 20px;
          z-index: 10;
        }

        .controls-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .controls-btn:hover {
          color: var(--primary-orange);
        }

        .progress-track {
          flex: 1;
          height: 6px;
          background: rgba(255,255,255,0.2);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--primary-orange);
          border-radius: 3px;
          transition: width 0.3s linear;
        }

        .mt-15 {
          margin-top: 15px;
        }
      `}</style>
    </div>
  );
}
