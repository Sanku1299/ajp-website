import { useState, useEffect, useRef } from 'react';
import antPodium from '../assets/ant_podium.png';
import antHead from '../assets/ant_head.png';
import antFlag from '../assets/ant_flag.png';
import { Download, Sliders, RefreshCw, Sparkles } from 'lucide-react';

interface MemeTemplate {
  id: string;
  name: string;
  url: string;
  defaultTop: string;
  defaultBottom: string;
}

export default function MemeView() {
  const templates: MemeTemplate[] = [
    {
      id: "ant-podium",
      name: "Rebel Ant Podium (AJP Mascot)",
      url: antPodium,
      defaultTop: "WHEN THEY SAY \"CHILL BRO\"",
      defaultBottom: "BUT SYSTEM MEIN HI GLITCH HAI"
    },
    {
      id: "ant-head",
      name: "Cool Ant Close-up (AJP Mascot)",
      url: antHead,
      defaultTop: "ME OVERTHINKING",
      defaultBottom: "AT 3 AM ABOUT MY FUTURE"
    },
    {
      id: "ant-flag",
      name: "Ant Swarm Rebellion (AJP Mascot)",
      url: antFlag,
      defaultTop: "UNEMPLOYED FRESHERS",
      defaultBottom: "WALKING TO THE COFFEE MACHINE"
    },
    {
      id: "cat-laptop",
      name: "Experience Cat",
      url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80",
      defaultTop: "NEED JOB FOR EXPERIENCE",
      defaultBottom: "NEED EXPERIENCE FOR JOB"
    },
    {
      id: "tired-dev",
      name: "Passion Dev",
      url: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80",
      defaultTop: "DESIGNED TO WORK 24/7",
      defaultBottom: "BUT SALARY IS 2.4 LPA"
    }
  ];

  const [selectedTemplate, setSelectedTemplate] = useState<MemeTemplate>(templates[0]);
  const [topText, setTopText] = useState(templates[0].defaultTop);
  const [bottomText, setBottomText] = useState(templates[0].defaultBottom);
  const [fontSize, setFontSize] = useState(36);
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [strokeColor] = useState("#000000");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Re-draw meme whenever inputs change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = selectedTemplate.url;

    img.onload = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background template image
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Render dark overlay gradient (subtle vignette for readability)
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, 'rgba(0,0,0,0.3)');
      grad.addColorStop(0.2, 'transparent');
      grad.addColorStop(0.8, 'transparent');
      grad.addColorStop(1, 'rgba(0,0,0,0.5)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Configure text properties
      ctx.fillStyle = textColor;
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 6;
      ctx.textAlign = 'center';
      ctx.font = `900 ${fontSize}px "Montserrat", Impact, sans-serif`;
      ctx.textBaseline = 'top';

      // Draw Top Text
      wrapText(ctx, topText.toUpperCase(), canvas.width / 2, 20, canvas.width - 40, fontSize + 8, true);

      // Draw Bottom Text
      ctx.textBaseline = 'bottom';
      wrapText(ctx, bottomText.toUpperCase(), canvas.width / 2, canvas.height - 20, canvas.width - 40, fontSize + 8, false);
    };
  }, [selectedTemplate, topText, bottomText, fontSize, textColor, strokeColor]);

  // Wrap text helper (so long sentences wrap onto multiple lines)
  const wrapText = (
    ctx: CanvasRenderingContext2D, 
    text: string, 
    x: number, 
    y: number, 
    maxWidth: number, 
    lineHeight: number,
    isTop: boolean
  ) => {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    for (let i = 0; i < words.length; i++) {
      const testLine = currentLine + words[i] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > maxWidth && i > 0) {
        lines.push(currentLine);
        currentLine = words[i] + ' ';
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine);

    // Draw lines
    let startY = y;
    if (!isTop) {
      // Offset bottom text starting coordinate based on number of lines
      startY = y - (lines.length - 1) * lineHeight;
    }

    lines.forEach((line, index) => {
      const lineY = startY + index * lineHeight;
      ctx.strokeText(line.trim(), x, lineY);
      ctx.fillText(line.trim(), x, lineY);
    });
  };

  const handleTemplateChange = (templateId: string) => {
    const temp = templates.find(t => t.id === templateId);
    if (temp) {
      setSelectedTemplate(temp);
      setTopText(temp.defaultTop);
      setBottomText(temp.defaultBottom);
    }
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `ajp_meme_${selectedTemplate.id}_${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
  };

  const randomizeMeme = () => {
    const randomTemplates = [
      { top: "MY SALARY", bottom: "VS MY EXPLANATIONS TO PARENTS" },
      { top: "DEGREE COMPLETED", bottom: "NOW APPOINT ME AS CHIEF TEA OFFICER" },
      { top: "BOSS: WE ARE A FAMILY", bottom: "ME: THEN SPLIT YOUR PROPERTY WITH ME" },
      { top: "SUNDAY NIGHT", bottom: "MONDAY MORNING SNEAKING IN LIKE" }
    ];
    const rand = randomTemplates[Math.floor(Math.random() * randomTemplates.length)];
    setTopText(rand.top);
    setBottomText(rand.bottom);
  };

  return (
    <div className="meme-view container">
      <header className="meme-header text-center">
        <span className="section-tag">Weapon of Choice</span>
        <h1 className="glitch-text" data-text="Meme Generator">Meme Generator</h1>
        <p className="meme-intro-desc">
          Resumes are boring. Resistors fight with memes. Select a template, customize your message, and download your manifesto poster.
        </p>
      </header>

      <div className="meme-generator-grid">
        {/* Left Column: Editor controls */}
        <div className="editor-panel card-glow-orange">
          <h3 className="text-orange mb-20 flex-align">
            <Sliders size={20} className="mr-8" /> Customize Manifesto
          </h3>

          <div className="control-group">
            <label>Select Template</label>
            <select 
              value={selectedTemplate.id} 
              onChange={(e) => handleTemplateChange(e.target.value)}
              className="editor-select"
            >
              {templates.map(t => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label>Top Text</label>
            <input 
              type="text" 
              value={topText} 
              onChange={(e) => setTopText(e.target.value)}
              placeholder="TOP MEME TEXT"
              className="editor-input"
            />
          </div>

          <div className="control-group">
            <label>Bottom Text</label>
            <input 
              type="text" 
              value={bottomText} 
              onChange={(e) => setBottomText(e.target.value)}
              placeholder="BOTTOM MEME TEXT"
              className="editor-input"
            />
          </div>

          <div className="editor-row">
            <div className="control-group flex-1">
              <label>Font Size ({fontSize}px)</label>
              <input 
                type="range" 
                min="20" 
                max="60" 
                value={fontSize} 
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="editor-slider"
              />
            </div>
            
            <div className="control-group">
              <label>Text Color</label>
              <input 
                type="color" 
                value={textColor} 
                onChange={(e) => setTextColor(e.target.value)}
                className="editor-color-picker"
              />
            </div>
          </div>

          <div className="editor-ctas">
            <button className="btn-orange w-full text-center flex-center" onClick={handleDownload}>
              Download Meme <Download size={16} className="ml-8" />
            </button>
            <button className="btn-outline-white w-full text-center flex-center" onClick={randomizeMeme}>
              Randomize Texts <RefreshCw size={16} className="ml-8" />
            </button>
          </div>
        </div>

        {/* Right Column: Preview area */}
        <div className="preview-panel flex-col flex-center">
          <div className="canvas-container">
            <canvas 
              ref={canvasRef} 
              width={500} 
              height={400} 
              className="meme-canvas"
            ></canvas>
            <div className="canvas-watermark">AJP Resistance Platform</div>
          </div>
          <p className="preview-tip mt-20">
            <Sparkles size={14} className="text-orange mr-8 inline" /> Tip: Try exporting and sharing to X or Reddit to join the digital rebellion!
          </p>
        </div>
      </div>

      <style>{`
        .meme-view {
          padding: 60px 0;
        }

        .meme-header {
          margin-bottom: 60px;
        }

        .meme-intro-desc {
          max-width: 700px;
          margin: 15px auto 0 auto;
          color: var(--text-gray-light);
        }

        .meme-generator-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .editor-panel {
          padding: 30px;
          border-radius: var(--border-radius-lg);
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .control-group label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-gray-light);
          text-transform: uppercase;
        }

        .editor-select, .editor-input, .editor-slider {
          background: var(--bg-navy-dark);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-white);
          padding: 12px;
          border-radius: var(--border-radius-sm);
          font-size: 0.9rem;
        }

        .editor-select:focus, .editor-input:focus {
          outline: 1px solid var(--primary-orange);
          border-color: var(--primary-orange);
        }

        .editor-row {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .flex-1 {
          flex: 1;
        }

        .editor-color-picker {
          background: none;
          border: none;
          width: 50px;
          height: 40px;
          cursor: pointer;
        }

        .editor-ctas {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 10px;
        }

        .flex-center {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ml-8 {
          margin-left: 8px;
        }

        .mr-8 {
          margin-right: 8px;
        }

        .inline {
          display: inline-flex;
          vertical-align: middle;
        }

        .mt-20 {
          margin-top: 20px;
        }

        /* Preview Canvas container */
        .preview-panel {
          background: rgba(11, 26, 62, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 30px;
          border-radius: var(--border-radius-lg);
        }

        .canvas-container {
          position: relative;
          background: #000;
          border-radius: var(--border-radius-md);
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.6);
          border: 4px solid var(--bg-navy-card);
          max-width: 100%;
        }

        .meme-canvas {
          display: block;
          max-width: 100%;
          height: auto;
        }

        .canvas-watermark {
          position: absolute;
          bottom: 10px;
          right: 15px;
          color: rgba(255,255,255,0.4);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          pointer-events: none;
        }

        .preview-tip {
          font-size: 0.8rem;
          color: var(--text-gray);
          text-align: center;
        }

        /* Responsiveness */
        @media (max-width: 1024px) {
          .meme-generator-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
