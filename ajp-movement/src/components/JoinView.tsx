import React, { useState, useRef, useEffect } from 'react';
import antHead from '../assets/ant_head.png';
import antPodium from '../assets/ant_podium.png';
import antFlag from '../assets/ant_flag.png';
import { CreditCard, Download, Upload, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface JoinViewProps {
  initialName?: string;
}

export default function JoinView({ initialName = '' }: JoinViewProps) {
  const [name, setName] = useState(initialName);
  const [title, setTitle] = useState("Underestimated Overthinker");
  const [memberId, setMemberId] = useState('');
  const [avatarOption, setAvatarOption] = useState<string>('mascot-cool');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [cardGenerated, setCardGenerated] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const titles = [
    "Underestimated Overthinker",
    "Supreme Leader of Procrastination",
    "Senior Executive Coffee Consumer",
    "Director of Unemployment Operations",
    "Intern of Sarcastic Affairs",
    "Chief Anti-Jumla Analyst"
  ];

  const avatars = [
    { id: 'mascot-cool', name: 'Cool Ant', img: antHead },
    { id: 'mascot-rebel', name: 'Rebel Ant', img: antPodium },
    { id: 'mascot-flag', name: 'Flag Ant', img: antFlag }
  ];

  // Generate ID code once on component mount or generation
  useEffect(() => {
    generateNewId();
  }, []);

  const generateNewId = () => {
    const num = Math.floor(1000 + Math.random() * 9000);
    setMemberId(`AJP-2026-${num}`);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedImage(event.target.result as string);
          setAvatarOption('custom');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUploadClick = () => {
    fileInputRef.current?.click();
  };

  // Get active image URL
  const getActiveAvatarUrl = () => {
    if (avatarOption === 'custom' && uploadedImage) {
      return uploadedImage;
    }
    const av = avatars.find(a => a.id === avatarOption);
    return av ? av.img : antHead;
  };

  const handleGenerateCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setCardGenerated(true);

    // Trigger visual confetti
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FF7A00', '#FFFFFF', '#071739', '#00e5ff']
    });
  };

  // Draw card on canvas for download
  const handleDownloadCard = () => {
    const canvas = previewCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background Navy Fill
    ctx.fillStyle = '#071739';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Orange Glow Border
    ctx.strokeStyle = '#FF7A00';
    ctx.lineWidth = 10;
    ctx.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);

    // Neon Accent Lines
    ctx.strokeStyle = 'rgba(0, 229, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height - 80);
    ctx.lineTo(canvas.width, canvas.height - 80);
    ctx.stroke();

    // Draw header Text
    ctx.fillStyle = '#FF7A00';
    ctx.font = '900 24px "Montserrat", sans-serif';
    ctx.fillText('AJP RESISTANCE', 30, 50);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '700 13px "Montserrat", sans-serif';
    ctx.fillText('ANTI JANTA PARTY MEMBER', 30, 75);

    // Draw Serial Number
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '800 12px monospace';
    ctx.fillText(memberId, 30, 95);

    // Draw Avatar Frame
    ctx.fillStyle = '#0b1a3e';
    ctx.fillRect(30, 120, 130, 130);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.strokeRect(30, 120, 130, 130);

    // Load and draw avatar
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = getActiveAvatarUrl();
    img.onload = () => {
      ctx.drawImage(img, 30, 120, 130, 130);

      // Draw Name & Title Info (Right side)
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'left';
      
      // Name
      ctx.fillStyle = '#FF7A00';
      ctx.font = '900 24px "Montserrat", sans-serif';
      ctx.fillText(name.toUpperCase(), 180, 155);

      // Title
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '600 13px "Outfit", sans-serif';
      ctx.fillText(title, 180, 185);

      // Metas
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.font = '500 11px "Outfit", sans-serif';
      ctx.fillText('ISSUE DATE: MAY 2026', 180, 215);
      ctx.fillText('EXPIRES: NEVER', 180, 235);

      // Mascot Logo watermark bottom right
      const antHeadImg = new Image();
      antHeadImg.src = antHead;
      antHeadImg.onload = () => {
        ctx.globalAlpha = 0.15;
        ctx.drawImage(antHeadImg, canvas.width - 120, canvas.height - 120, 100, 100);
        ctx.globalAlpha = 1.0;

        // Trigger Download
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `ajp_member_id_${name.replace(/\s+/g, '_')}.png`;
        link.href = dataUrl;
        link.click();
      };
    };
  };

  return (
    <div className="join-view container">
      <header className="join-header text-center">
        <span className="section-tag">Identity card</span>
        <h1 className="glitch-text" data-text="Get Your AJP ID">Get Your AJP ID</h1>
        <p className="join-intro-desc">
          Declare your resistance officially. Enter your details, choose your title, and generate your custom digital AJP Member ID card.
        </p>
      </header>

      <div className="join-grid">
        {/* Left Column: Input Form */}
        <div className="form-panel card-glow-orange">
          <h3 className="text-orange mb-20 flex-align">
            <CreditCard size={20} className="mr-8" /> Recruit Form
          </h3>

          <form onSubmit={handleGenerateCard} className="recruit-form">
            <div className="control-group">
              <label>Your Full Name</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Saurabh Chavan" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={20}
                className="join-input"
              />
            </div>

            <div className="control-group">
              <label>Satirical Designation</label>
              <select 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                className="join-select"
              >
                {titles.map((t, idx) => (
                  <option key={idx} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="control-group">
              <label>Profile Picture</label>
              <div className="avatar-options-grid">
                {avatars.map(av => (
                  <div 
                    key={av.id} 
                    className={`avatar-option-card ${avatarOption === av.id ? 'active' : ''}`}
                    onClick={() => setAvatarOption(av.id)}
                  >
                    <img src={av.img} alt={av.name} />
                    <span>{av.name}</span>
                  </div>
                ))}
                
                {/* Upload option */}
                <div 
                  className={`avatar-option-card ${avatarOption === 'custom' ? 'active' : ''}`}
                  onClick={uploadedImage ? () => setAvatarOption('custom') : triggerUploadClick}
                >
                  {uploadedImage ? (
                    <img src={uploadedImage} alt="Uploaded custom" />
                  ) : (
                    <div className="upload-placeholder">
                      <Upload size={20} />
                    </div>
                  )}
                  <span>{uploadedImage ? 'Custom Photo' : 'Upload File'}</span>
                </div>
              </div>
              
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
                accept="image/*" 
                style={{ display: 'none' }} 
              />
            </div>

            <button type="submit" className="btn-orange w-full text-center">
              Generate ID Card ⚡
            </button>
          </form>
        </div>

        {/* Right Column: Live Card Preview / Result */}
        <div className="preview-panel flex-col flex-center">
          <div className="card-viewer-wrap">
            {/* HTML Glowing Card */}
            <div className={`ajp-id-card ${cardGenerated ? 'animated-glow' : ''}`}>
              <div className="card-inner-glow"></div>
              
              <div className="card-header-row">
                <div className="card-logo-info">
                  <h4 className="text-orange">AJP RESISTANCE</h4>
                  <span className="card-sub-header">Anti Janta Party Member</span>
                </div>
                <div className="card-serial-code">{memberId}</div>
              </div>

              <div className="card-profile-row">
                <div className="card-photo-frame">
                  <img src={getActiveAvatarUrl()} alt="Member Avatar" className="card-photo" />
                </div>
                <div className="card-details-frame">
                  <div className="label-meta">MEMBER NAME</div>
                  <div className="member-name-text text-orange">{name ? name : "YOUR NAME HERE"}</div>
                  
                  <div className="label-meta mt-10">DESIGNATION</div>
                  <div className="member-title-text">{title}</div>
                  
                  <div className="card-dates-grid mt-10">
                    <div>
                      <span className="mini-label">ISSUE DATE</span>
                      <span className="mini-val">MAY 2026</span>
                    </div>
                    <div>
                      <span className="mini-label">EXPIRES</span>
                      <span className="mini-val text-blue">NEVER</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-footer-watermark">
                NOT AGAINST THE PEOPLE. AGAINST THE PROBLEMS.
              </div>
            </div>
            
            {/* Hidden canvas used to draw & export the PNG */}
            <canvas 
              ref={previewCanvasRef} 
              width={500} 
              height={300} 
              style={{ display: 'none' }}
            ></canvas>
          </div>

          {cardGenerated ? (
            <div className="card-success-actions mt-30 text-center">
              <span className="success-tag-message mb-10 flex-align justify-center">
                <CheckCircle size={16} className="text-green mr-8" /> Membership Approved Successfully!
              </span>
              <button className="btn-orange flex-center" onClick={handleDownloadCard}>
                Download ID Card <Download size={16} className="ml-8" />
              </button>
            </div>
          ) : (
            <div className="card-tip-message mt-20 text-center">
              <Sparkles size={14} className="text-orange mr-8 inline" /> Fill out the Recruit Form to receive your cryptographic credential.
            </div>
          )}
        </div>
      </div>

      <style>{`
        .join-view {
          padding: 60px 0;
        }

        .join-header {
          margin-bottom: 60px;
        }

        .join-intro-desc {
          max-width: 700px;
          margin: 15px auto 0 auto;
          color: var(--text-gray-light);
        }

        .join-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.2fr;
          gap: 40px;
          align-items: start;
        }

        .form-panel {
          padding: 30px;
          border-radius: var(--border-radius-lg);
        }

        .recruit-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .join-input, .join-select {
          background: var(--bg-navy-dark);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-white);
          padding: 12px;
          border-radius: var(--border-radius-sm);
          font-size: 0.9rem;
        }

        .join-input:focus, .join-select:focus {
          outline: 1px solid var(--primary-orange);
          border-color: var(--primary-orange);
        }

        .avatar-options-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .avatar-option-card {
          background: var(--bg-navy-dark);
          border: 2px solid rgba(255,255,255,0.05);
          padding: 8px;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          transition: var(--transition-smooth);
          text-align: center;
        }

        .avatar-option-card img {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          border-radius: 4px;
        }

        .upload-placeholder {
          width: 100%;
          aspect-ratio: 1;
          background: rgba(255,255,255,0.03);
          border: 1px dashed rgba(255,255,255,0.15);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-gray);
        }

        .avatar-option-card span {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-gray-light);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
        }

        .avatar-option-card:hover {
          border-color: var(--primary-orange-glow);
        }

        .avatar-option-card.active {
          border-color: var(--primary-orange);
          box-shadow: 0 0 10px var(--primary-orange-glow);
        }

        /* ID Card Layout */
        .preview-panel {
          background: rgba(11, 26, 62, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 40px;
          border-radius: var(--border-radius-lg);
          min-height: 480px;
        }

        .card-viewer-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .ajp-id-card {
          width: 100%;
          max-width: 440px;
          aspect-ratio: 1.6;
          background: var(--bg-navy-main);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--border-radius-lg);
          position: relative;
          padding: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: var(--transition-smooth);
        }

        .ajp-id-card.animated-glow {
          border-color: var(--primary-orange);
          box-shadow: 0 0 35px var(--primary-orange-glow);
        }

        .card-inner-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 10% 10%, rgba(255,122,0,0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        .card-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 12px;
        }

        .card-logo-info h4 {
          font-size: 1.1rem;
          margin-bottom: 2px;
          letter-spacing: 0.05em;
        }

        .card-sub-header {
          font-size: 0.65rem;
          color: var(--text-gray-light);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-serial-code {
          font-family: monospace;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-gray);
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .card-profile-row {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 20px;
          align-items: center;
          margin: 15px 0;
        }

        .card-photo-frame {
          width: 100px;
          height: 100px;
          background: var(--bg-navy-dark);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--border-radius-sm);
          overflow: hidden;
        }

        .card-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-details-frame {
          display: flex;
          flex-direction: column;
        }

        .label-meta {
          font-size: 0.55rem;
          font-weight: 800;
          color: var(--text-gray-dark);
          letter-spacing: 0.05em;
        }

        .member-name-text {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.25rem;
          line-height: 1.1;
          margin-top: 2px;
        }

        .member-title-text {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-white);
          margin-top: 2px;
        }

        .card-dates-grid {
          display: flex;
          gap: 20px;
        }

        .mini-label {
          display: block;
          font-size: 0.5rem;
          color: var(--text-gray-dark);
          font-weight: 800;
        }

        .mini-val {
          font-size: 0.65rem;
          font-weight: 700;
        }

        .card-footer-watermark {
          font-family: var(--font-heading);
          font-size: 0.5rem;
          font-weight: 800;
          color: var(--text-gray-dark);
          text-align: center;
          letter-spacing: 0.1em;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 8px;
        }

        .mt-10 {
          margin-top: 10px;
        }
        .mt-30 {
          margin-top: 30px;
        }

        .text-green {
          color: #10b981;
        }

        .justify-center {
          justify-content: center;
        }

        .success-tag-message {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.85rem;
          color: #10b981;
        }

        .card-tip-message {
          font-size: 0.8rem;
          color: var(--text-gray);
        }

        /* Responsiveness */
        @media (max-width: 1024px) {
          .join-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
