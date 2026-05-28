import React, { useState } from 'react';
import antPodium from '../assets/ant_podium.png';
import antFlag from '../assets/ant_flag.png';
import antHead from '../assets/ant_head.png';
import { 
  Users, 
  Flame, 
  Ban, 
  Skull, 
  Brain, 
  Wifi, 
  Smile, 
  Play, 
  ArrowLeft, 
  ArrowRight,
  Send
} from 'lucide-react';

interface HomeProps {
  onNavigate: (tab: string) => void;
  onOpenTrailer: () => void;
  onOpenJoinModal: () => void;
}

export default function Home({ onNavigate, onOpenTrailer, onOpenJoinModal }: HomeProps) {
  // Meme Carousel state
  const memes = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80",
      topText: "WHEN THEY SAY \"EXPERIENCE CHAHIYE\"",
      bottomText: "BUT JOB KE LIYE JOB CHAHIYE",
      alt: "Cat looking at laptop"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      topText: "ME APPLYING FOR 100TH TIME WITH SAME RESUME",
      bottomText: "AB TO HO JAYEGA BHAI",
      alt: "Man praying/stressing"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&q=80",
      topText: "DESIGNED TO WORK 24/7 THEY SAID",
      bottomText: "PASSION HOGA THEY SAID",
      alt: "Tired developer"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      topText: "JUMLE AATE HAIN JATE HAIN",
      bottomText: "BUT EMI NAHI JATI",
      alt: "Man smiling ironically"
    }
  ];

  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const nextMeme = () => {
    setCurrentMemeIndex((prev) => (prev + 1) % memes.length);
  };

  const prevMeme = () => {
    setCurrentMemeIndex((prev) => (prev - 1 + memes.length) % memes.length);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="home-view">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-text-col">
            <h1 className="hero-title">
              Not Against <br />
              <span className="text-white">The People.</span> <br />
              <span className="text-gradient-orange glitch-text" data-text="Against The Problems.">
                Against The Problems.
              </span>
            </h1>
            <p className="hero-subtext">
              A satirical youth movement using memes, movies & madness to fight real issues.
            </p>
            <div className="hero-ctas">
              <button className="btn-orange" onClick={onOpenJoinModal}>
                Join The Movement <span className="ant-icon">🐜</span>
              </button>
              <button className="btn-outline-white" onClick={onOpenTrailer}>
                Watch Trailer <Play size={16} fill="white" />
              </button>
            </div>
          </div>

          <div className="hero-image-col">
            <div className="hero-illustration-container">
              <img src={antPodium} alt="AJP Ant Mascot standing at podium" className="hero-main-img float-anim" />
              {/* Crowds signs overlays overlayed virtually in HTML */}
              <div className="crowd-sign sign-left-1">
                <span>DEGREE HAI JOB KAHAN HAI?</span>
                <span className="hashtag">#GEN-Z</span>
              </div>
              <div className="crowd-sign sign-right-1">
                <span>KAAM DO <br /> NAAM MAT LO</span>
              </div>
              <div className="crowd-sign sign-right-2">
                <span>PROMISES JUMLE LOAD NAHI BRO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Four Pillars Banner */}
      <section className="pillars-section">
        <div className="container pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon-wrapper">
              <Users className="text-orange" size={24} />
            </div>
            <div className="pillar-info">
              <h4>With The People</h4>
              <p>Hum aapke saath hain.</p>
            </div>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-wrapper">
              <Flame className="text-orange" size={24} />
            </div>
            <div className="pillar-info">
              <h4>Against Corruption</h4>
              <p>Na khayenge, na khane denge.</p>
            </div>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-wrapper">
              <Ban className="text-orange" size={24} />
            </div>
            <div className="pillar-info">
              <h4>Against Fake Promises</h4>
              <p>Ab bas. Bohot ho gaya.</p>
            </div>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-wrapper">
              <Skull className="text-orange" size={24} />
            </div>
            <div className="pillar-info">
              <h4>Against Toxic Politics</h4>
              <p>Waqt badlega, system bhi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who We Are & Our Mascot Section */}
      <section className="about-preview-section">
        <div className="container about-preview-grid">
          {/* Who We Are */}
          <div className="about-card card-glow-orange flex-col">
            <div className="card-header">
              <span className="card-tag">Who we are?</span>
              <h3>We Are The Anti Janta Party</h3>
            </div>
            <p className="card-body-text">
              AJP is a modern, internet-powered youth movement. Funny outside. Real message inside. 
              We use satire, memes, cinematic storytelling & digital culture to highlight public frustration, 
              unemployment & toxic politics.
            </p>
            <button className="btn-outline-orange read-story-btn" onClick={() => onNavigate('about')}>
              Read Our Story
            </button>
            <div className="about-card-img-container">
              <img src={antHead} alt="Ant Head Close-up" className="about-card-img" />
            </div>
          </div>

          {/* Our Mascot */}
          <div className="about-card card-glow-orange flex-col mascot-card-adjust">
            <div className="card-header">
              <span className="card-tag">Our Mascot</span>
              <h3>The Ant</h3>
            </div>
            <p className="card-body-text">
              Small but powerful. We work together. We never stop. We are underestimated, but unstoppable together.
            </p>
            <div className="mascot-flag-container">
              <img src={antFlag} alt="Ants carrying AJP flag" className="mascot-flag-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Manifesto Section */}
      <section className="manifesto-preview-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Our Manifesto</span>
            <h2 className="section-title">
              Sachai Ke Saath, <span className="text-orange">Thoda Mazaak</span>
            </h2>
            <p className="section-description">
              Serious problems. Satirical solutions. Because rona to sabko aata hai, hum hasta hua system change karenge.
            </p>
            <button className="btn-outline-orange" onClick={() => onNavigate('manifesto')}>
              Explore Manifesto
            </button>
          </div>

          <div className="manifesto-grid">
            {/* Card 1 */}
            <div className="manifesto-card card-glow-orange">
              <span className="mission-tag">Mission 01</span>
              <h4>Emotional Support Leave</h4>
              <div className="manifesto-icon-wrapper">
                <Smile size={32} className="text-orange" />
              </div>
              <p>Mental Health &gt; Toxic Work Culture</p>
            </div>

            {/* Card 2 */}
            <div className="manifesto-card card-glow-blue">
              <span className="mission-tag blue-tag">Mission 02</span>
              <h4>Free WiFi For All</h4>
              <div className="manifesto-icon-wrapper">
                <Wifi size={32} className="text-blue" />
              </div>
              <p>Internet is not luxury, It's a Right!</p>
            </div>

            {/* Card 3 */}
            <div className="manifesto-card card-orange-bg">
              <span className="mission-tag">Mission 03</span>
              <h4>Anti Overthinking Program</h4>
              <div className="manifesto-icon-wrapper">
                <Brain size={32} className="text-navy" />
              </div>
              <p>Overthinking se azaadi, Productivity ki guarantee!</p>
            </div>

            {/* Card 4 */}
            <div className="manifesto-card card-glow-blue">
              <span className="mission-tag blue-tag">Mission 04</span>
              <h4>No More Fake Promises</h4>
              <div className="manifesto-icon-wrapper">
                <Skull size={32} className="text-blue" />
              </div>
              <p>Jumle nahi, Results chahiye!</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Ticker Marquee */}
      <section className="marquee-divider">
        <div className="ticker-container">
          <div className="ticker-wrap">
            {/* Double the list to ensure infinite scroll loops seamlessly */}
            {Array(4).fill([
              "Not Left, Not Right, Just Anti Wrong.",
              "Sarcasm Is Our Weapon.",
              "Memes Are Our Media.",
              "Youth Is Our Power.",
              "Change Is Our Agenda."
            ]).flat().map((text, idx) => (
              <React.Fragment key={idx}>
                <div className="ticker-item">
                  <span>{text}</span>
                </div>
                <div className="ticker-dot"></div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Memes Section */}
      <section className="memes-preview-section">
        <div className="container memes-preview-grid">
          <div className="memes-intro-col">
            <span className="section-tag">Memes &gt; Movement</span>
            <h2 className="section-title">
              Laugh. Share. <span className="text-orange">Aware.</span>
            </h2>
            <p className="memes-desc">
              Memes are the new posters. And the internet is our battlefield.
            </p>
            <button className="btn-outline-orange" onClick={() => onNavigate('memes')}>
              Check Memes
            </button>
          </div>

          <div className="memes-carousel-col">
            <div className="carousel-outer-wrapper">
              <button className="carousel-nav-btn prev-btn" onClick={prevMeme}>
                <ArrowLeft size={20} />
              </button>

              <div className="meme-display-card">
                <div className="meme-img-wrap">
                  <img src={memes[currentMemeIndex].image} alt={memes[currentMemeIndex].alt} className="meme-bg-image" />
                  <div className="meme-dark-overlay"></div>
                  <div className="meme-text-overlay top-text">
                    {memes[currentMemeIndex].topText}
                  </div>
                  <div className="meme-text-overlay bottom-text">
                    {memes[currentMemeIndex].bottomText}
                  </div>
                </div>
                <div className="meme-card-indicator">
                  {memes.map((_, i) => (
                    <div 
                      key={i} 
                      className={`indicator-dot ${i === currentMemeIndex ? 'active' : ''}`}
                      onClick={() => setCurrentMemeIndex(i)}
                    ></div>
                  ))}
                </div>
              </div>

              <button className="carousel-nav-btn next-btn" onClick={nextMeme}>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer CTA Block */}
      <section className="footer-cta-block">
        <div className="container footer-cta-grid">
          <div className="cta-left">
            <h3>Tu Hai Na, <br /><span className="text-orange">Toh System Hai</span></h3>
            <p>Join AJP. Because silence is also a problem.</p>
            <button className="btn-orange join-btn-adjust" onClick={onOpenJoinModal}>
              Join The Movement 🐜
            </button>
          </div>

          <div className="cta-center">
            <h4>Stay Updated. Stay Rebellious.</h4>
            <p>Get memes, movement updates & mission alerts.</p>
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required 
              />
              <button type="submit" className="btn-orange">
                Subscribe <Send size={14} />
              </button>
            </form>
            {subscribed && (
              <span className="subscribe-success">🫡 Welcome to the resistance! Checked your inbox soon.</span>
            )}
          </div>

          <div className="cta-right flex-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://instagram.com/antijantaparty" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                <i className="social-logo-mock">📸</i>
              </a>
              <a href="https://x.com/AntiJantaParty" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                <i className="social-logo-mock">𝕏</i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                <i className="social-logo-mock">📺</i>
              </a>
              <a href="https://reddit.com/r/AntiJantaParty" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                <i className="social-logo-mock">👽</i>
              </a>
            </div>
            <div className="footer-ant-head-container">
              <img src={antHead} alt="Ant Head Mascot" className="footer-ant-head" />
            </div>
          </div>
        </div>
      </section>

      {/* CSS styling specifically for Home component elements to keep it aligned with design mock */}
      <style>{`
        /* Hero Section styles */
        .hero-section {
          padding: 80px 0;
          position: relative;
          background: radial-gradient(circle at 70% 50%, rgba(255, 122, 0, 0.08) 0%, transparent 60%);
        }
        
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .hero-subtext {
          font-size: 1.2rem;
          color: var(--text-gray-light);
          margin-bottom: 32px;
          max-width: 500px;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
        }

        .hero-image-col {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .hero-illustration-container {
          position: relative;
          width: 100%;
          max-width: 420px;
          aspect-ratio: 1;
        }

        .hero-main-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 30px rgba(255, 122, 0, 0.2));
        }

        /* Protest Signs Overlays */
        .crowd-sign {
          position: absolute;
          background: #000;
          border: 2px solid var(--text-white);
          color: var(--text-white);
          padding: 8px 12px;
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 0.75rem;
          text-transform: uppercase;
          transform: rotate(-5deg);
          box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          line-height: 1.2;
        }

        .crowd-sign::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          width: 4px;
          height: 15px;
          background: var(--text-white);
        }

        .sign-left-1 {
          top: 35%;
          left: -15%;
          transform: rotate(-12deg);
          border-color: var(--primary-orange);
          font-size: 0.7rem;
        }
        .sign-left-1 .hashtag {
          color: var(--primary-orange);
          font-size: 0.65rem;
        }

        .sign-right-1 {
          top: 15%;
          right: -10%;
          transform: rotate(8deg);
          border-color: var(--primary-orange);
          padding: 6px 10px;
        }

        .sign-right-2 {
          bottom: 20%;
          right: -5%;
          transform: rotate(-4deg);
          font-size: 0.65rem;
        }

        /* Pillars Section Styles */
        .pillars-section {
          background-color: var(--bg-navy-dark);
          padding: 40px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .pillar-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(11, 26, 62, 0.4);
          padding: 16px;
          border-radius: var(--border-radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .pillar-icon-wrapper {
          background: rgba(255, 122, 0, 0.1);
          padding: 10px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pillar-info h4 {
          font-size: 0.85rem;
          color: var(--text-white);
          margin-bottom: 2px;
          letter-spacing: 0.02em;
        }

        .pillar-info p {
          font-size: 0.75rem;
          color: var(--text-gray);
        }

        /* Who We Are & Mascot */
        .about-preview-section {
          padding: 80px 0;
        }

        .about-preview-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 30px;
        }

        .about-card {
          padding: 40px;
          position: relative;
          overflow: hidden;
          min-height: 380px;
          display: flex;
          flex-direction: column;
        }

        .card-tag {
          font-family: var(--font-heading);
          color: var(--primary-orange);
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 8px;
        }

        .about-card h3 {
          font-size: 1.8rem;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .card-body-text {
          color: var(--text-gray-light);
          font-size: 0.95rem;
          margin-bottom: 30px;
          max-width: 480px;
          position: relative;
          z-index: 2;
        }

        .read-story-btn {
          align-self: flex-start;
          position: relative;
          z-index: 2;
        }

        .about-card-img-container {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 220px;
          opacity: 0.85;
          pointer-events: none;
        }

        .about-card-img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .mascot-flag-container {
          margin-top: auto;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .mascot-flag-img {
          max-width: 90%;
          height: auto;
          object-fit: contain;
        }

        /* Manifesto preview */
        .manifesto-preview-section {
          padding: 80px 0;
          background: radial-gradient(circle at 30% 50%, rgba(0, 229, 255, 0.03) 0%, transparent 60%);
        }

        .section-intro {
          text-align: center;
          margin-bottom: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-tag {
          font-family: var(--font-heading);
          color: var(--primary-orange);
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 8px;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 16px;
        }

        .section-description {
          max-width: 600px;
          color: var(--text-gray-light);
          margin-bottom: 24px;
        }

        .manifesto-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .manifesto-card {
          padding: 30px 20px;
          border-radius: var(--border-radius-md);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          min-height: 250px;
        }

        .mission-tag {
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          background: rgba(255, 122, 0, 0.15);
          color: var(--primary-orange);
          padding: 3px 8px;
          border-radius: 20px;
          margin-bottom: 15px;
          letter-spacing: 0.05em;
        }

        .blue-tag {
          background: rgba(0, 229, 255, 0.15);
          color: var(--accent-blue);
        }

        .manifesto-card h4 {
          font-size: 0.95rem;
          margin-bottom: 20px;
          letter-spacing: 0.02em;
          line-height: 1.3;
        }

        .manifesto-icon-wrapper {
          margin: 10px 0;
        }

        .manifesto-card p {
          font-size: 0.8rem;
          color: var(--text-gray);
          line-height: 1.4;
        }

        .card-orange-bg {
          background: var(--primary-orange);
          color: var(--bg-navy-dark);
          box-shadow: 0 8px 30px var(--primary-orange-glow);
          border: none;
        }

        .card-orange-bg h4 {
          color: var(--bg-navy-dark);
        }

        .card-orange-bg p {
          color: #0b1a3e;
          font-weight: 500;
        }

        .text-navy {
          color: var(--bg-navy-dark);
        }

        .card-orange-bg .mission-tag {
          background: rgba(0, 0, 0, 0.2);
          color: var(--bg-navy-dark);
        }

        /* Memes section */
        .memes-preview-section {
          padding: 80px 0;
        }

        .memes-preview-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 50px;
          align-items: center;
        }

        .memes-desc {
          color: var(--text-gray-light);
          margin-bottom: 30px;
          font-size: 1.1rem;
        }

        .carousel-outer-wrapper {
          display: flex;
          align-items: center;
          gap: 20px;
          position: relative;
        }

        .carousel-nav-btn {
          background: var(--bg-navy-card);
          color: var(--text-white);
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
          z-index: 2;
        }

        .carousel-nav-btn:hover {
          background: var(--primary-orange);
          border-color: var(--primary-orange);
          color: var(--text-white);
          transform: scale(1.1);
        }

        .meme-display-card {
          flex: 1;
          background: #000;
          border: 4px solid var(--bg-navy-card);
          border-radius: var(--border-radius-md);
          overflow: hidden;
          position: relative;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        .meme-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1.25;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #050a1b;
        }

        .meme-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.65;
        }

        .meme-dark-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.7) 100%);
        }

        .meme-text-overlay {
          position: absolute;
          left: 0;
          width: 100%;
          text-align: center;
          color: #fff;
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.3rem;
          text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000;
          padding: 15px;
          text-transform: uppercase;
          pointer-events: none;
        }

        .top-text {
          top: 0;
        }

        .bottom-text {
          bottom: 0;
        }

        .meme-card-indicator {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding: 12px 0;
          background: var(--bg-navy-card);
        }

        .indicator-dot {
          width: 8px;
          height: 8px;
          background: rgba(255,255,255,0.3);
          border-radius: 50%;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .indicator-dot.active {
          background: var(--primary-orange);
          transform: scale(1.2);
        }

        /* Footer CTA block */
        .footer-cta-block {
          padding: 80px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          background: linear-gradient(180deg, var(--bg-navy-dark) 0%, #030815 100%);
        }

        .footer-cta-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr 1fr;
          gap: 40px;
        }

        .cta-left h3 {
          font-size: 2.2rem;
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .cta-left p {
          color: var(--text-gray);
          margin-bottom: 24px;
        }

        .join-btn-adjust {
          padding: 12px 28px;
        }

        .cta-center h4 {
          font-size: 1.1rem;
          margin-bottom: 6px;
          letter-spacing: 0.02em;
        }

        .cta-center p {
          color: var(--text-gray);
          font-size: 0.85rem;
          margin-bottom: 20px;
        }

        .subscribe-form {
          display: flex;
          gap: 10px;
        }

        .subscribe-form input {
          flex: 1;
          background: var(--bg-navy-card);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 10px 16px;
          border-radius: var(--border-radius-sm);
          color: var(--text-white);
          font-size: 0.9rem;
        }

        .subscribe-form input:focus {
          outline: 1px solid var(--primary-orange);
          border-color: var(--primary-orange);
        }

        .subscribe-success {
          display: block;
          color: var(--accent-blue);
          font-size: 0.8rem;
          margin-top: 8px;
        }

        .cta-right h4 {
          font-size: 1.1rem;
          margin-bottom: 15px;
          letter-spacing: 0.02em;
        }

        .social-links {
          display: flex;
          gap: 12px;
          margin-bottom: 25px;
        }

        .social-icon-btn {
          width: 40px;
          height: 40px;
          background: var(--bg-navy-card);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-style: normal;
          transition: var(--transition-smooth);
        }

        .social-icon-btn:hover {
          background: var(--primary-orange);
          border-color: var(--primary-orange);
          transform: translateY(-3px);
        }

        .social-logo-mock {
          font-style: normal;
          font-weight: bold;
          font-size: 1rem;
        }

        .footer-ant-head-container {
          align-self: flex-end;
          width: 120px;
          margin-top: auto;
        }

        .footer-ant-head {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 15px rgba(255,122,0,0.1));
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-subtext {
            margin: 0 auto 32px auto;
          }
          .hero-ctas {
            justify-content: center;
          }
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-preview-grid {
            grid-template-columns: 1fr;
          }
          .manifesto-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .memes-preview-grid {
            grid-template-columns: 1fr;
          }
          .footer-cta-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .subscribe-form {
            max-width: 400px;
            margin: 0 auto;
          }
          .social-links {
            justify-content: center;
          }
          .footer-ant-head-container {
            align-self: center;
            margin-top: 20px;
          }
        }

        @media (max-width: 600px) {
          .hero-title {
            font-size: 2.3rem;
          }
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .manifesto-grid {
            grid-template-columns: 1fr;
          }
          .section-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}
