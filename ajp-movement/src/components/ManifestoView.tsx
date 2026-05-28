import React, { useState } from 'react';
import { Smile, Wifi, Brain, Skull, Sparkles, MessageCircle } from 'lucide-react';

interface Problem {
  id: number;
  author: string;
  category: string;
  text: string;
  realCount: number;
  preachCount: number;
  fCount: number;
}

export default function ManifestoView() {
  // Support state for the 4 core missions
  const [missionVotes, setMissionVotes] = useState({
    m1: 1420,
    m2: 2310,
    m3: 1890,
    m4: 3120
  });

  const [hasVotedMission, setHasVotedMission] = useState({
    m1: false,
    m2: false,
    m3: false,
    m4: false
  });

  const handleMissionVote = (mId: 'm1' | 'm2' | 'm3' | 'm4') => {
    if (!hasVotedMission[mId]) {
      setMissionVotes(prev => ({ ...prev, [mId]: prev[mId] + 1 }));
      setHasVotedMission(prev => ({ ...prev, [mId]: true }));
    }
  };

  // Problems board state
  const [problems, setProblems] = useState<Problem[]>([
    {
      id: 1,
      author: "@frustrated_engineer",
      category: "Workplace Struggles",
      text: "Manager scheduled a 'quick sync' at 6:58 PM on a Friday. The sync lasted 90 minutes and could have been a 2-word Slack message.",
      realCount: 184,
      preachCount: 92,
      fCount: 320
    },
    {
      id: 2,
      author: "@college_survivor",
      category: "Education System",
      text: "College professors in 2026 still demanding handwritten assignments on practical files so they can throw them in the trash after grading.",
      realCount: 245,
      preachCount: 153,
      fCount: 182
    },
    {
      id: 3,
      author: "@mumbaikar_local",
      category: "Public Infrastructures",
      text: "Auto rickshaw driver rejected me saying 'no' before I even told him the destination. Truly peak level rejection.",
      realCount: 98,
      preachCount: 42,
      fCount: 54
    },
    {
      id: 4,
      author: "@digital_nomad",
      category: "Internet Blues",
      text: "Paid for high-speed fiber internet but it disconnects exactly when I join a client video call. Reconnects when I turn off the camera.",
      realCount: 112,
      preachCount: 88,
      fCount: 140
    }
  ]);

  const [newAuthor, setNewAuthor] = useState('');
  const [newCategory, setNewCategory] = useState('Workplace Struggles');
  const [newText, setNewText] = useState('');
  const [submitMessage, setSubmitMessage] = useState(false);

  const handleAddProblem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newText.trim()) {
      const p: Problem = {
        id: Date.now(),
        author: newAuthor.trim() ? (newAuthor.startsWith('@') ? newAuthor : `@${newAuthor}`) : "@anonymous_rebel",
        category: newCategory,
        text: newText.trim(),
        realCount: 1,
        preachCount: 0,
        fCount: 0
      };

      setProblems(prev => [p, ...prev]);
      setNewAuthor('');
      setNewText('');
      setSubmitMessage(true);
      setTimeout(() => setSubmitMessage(false), 5000);
    }
  };

  const reactToProblem = (pId: number, reaction: 'real' | 'preach' | 'f') => {
    setProblems(prev => prev.map(p => {
      if (p.id === pId) {
        return {
          ...p,
          realCount: reaction === 'real' ? p.realCount + 1 : p.realCount,
          preachCount: reaction === 'preach' ? p.preachCount + 1 : p.preachCount,
          fCount: reaction === 'f' ? p.fCount + 1 : p.fCount
        };
      }
      return p;
    }));
  };

  // Calculate percentage helper
  const totalVotes = missionVotes.m1 + missionVotes.m2 + missionVotes.m3 + missionVotes.m4;
  const getPercent = (val: number) => {
    return Math.round((val / totalVotes) * 100);
  };

  return (
    <div className="manifesto-view container">
      <header className="manifesto-header text-center">
        <span className="section-tag">The Red Manifesto</span>
        <h1 className="glitch-text" data-text="Sachai Ke Saath, Thoda Mazaak">Sachai Ke Saath, Thoda Mazaak</h1>
        <p className="manifesto-intro-desc">
          Official demands of the youth. We are tired of long debates. Here are the core bills we are passing in the court of internet opinion.
        </p>
      </header>

      {/* Interactive Bills Section */}
      <section className="manifesto-bills">
        <h2 className="text-orange text-center mb-40">Core Missions & Bills</h2>
        <div className="bills-container">
          {/* Bill 1 */}
          <div className="bill-detail-card card-glow-orange">
            <div className="bill-icon-col">
              <Smile size={48} className="text-orange" />
            </div>
            <div className="bill-info-col">
              <div className="bill-meta">
                <span className="bill-no">Bill #AJP-01</span>
                <span className="bill-status">Active Resolution</span>
              </div>
              <h3>The Emotional Support Leave Act</h3>
              <p className="bill-description">
                Mandatory 3 days of paid leaves per month for employees who experience the "Sunday Scaries" or post-weekend exhaustion. No reasons or doctor certificates required. HRs are strictly forbidden from texting 'Can we connect?' during these days.
              </p>
              <div className="voting-gauge-container">
                <div className="gauge-label">
                  <span>Community Endorsement</span>
                  <span className="text-orange font-bold">{missionVotes.m1} Votes ({getPercent(missionVotes.m1)}%)</span>
                </div>
                <div className="gauge-track">
                  <div className="gauge-fill orange-fill" style={{ width: `${getPercent(missionVotes.m1)}%` }}></div>
                </div>
              </div>
              <button 
                className={`btn-support ${hasVotedMission.m1 ? 'supported' : ''}`}
                onClick={() => handleMissionVote('m1')}
                disabled={hasVotedMission.m1}
              >
                {hasVotedMission.m1 ? 'SUPPORTED' : 'SUPPORT THIS BILL 🐜'}
              </button>
            </div>
          </div>

          {/* Bill 2 */}
          <div className="bill-detail-card card-glow-blue">
            <div className="bill-icon-col">
              <Wifi size={48} className="text-blue" />
            </div>
            <div className="bill-info-col">
              <div className="bill-meta">
                <span className="bill-no blue-no">Bill #AJP-02</span>
                <span className="bill-status status-blue">Priority Request</span>
              </div>
              <h3>The National Free High-Speed WiFi & Charging Act</h3>
              <p className="bill-description">
                Declares high-speed internet as a fundamental youth right. Public transport, parks, local trains, and bus stands must host free 5G WiFi routers. Charging points must be within 2 meters of any public bench, or the municipality faces mock meme trials.
              </p>
              <div className="voting-gauge-container">
                <div className="gauge-label">
                  <span>Community Endorsement</span>
                  <span className="text-blue font-bold">{missionVotes.m2} Votes ({getPercent(missionVotes.m2)}%)</span>
                </div>
                <div className="gauge-track">
                  <div className="gauge-fill blue-fill" style={{ width: `${getPercent(missionVotes.m2)}%` }}></div>
                </div>
              </div>
              <button 
                className={`btn-support-blue ${hasVotedMission.m2 ? 'supported' : ''}`}
                onClick={() => handleMissionVote('m2')}
                disabled={hasVotedMission.m2}
              >
                {hasVotedMission.m2 ? 'SUPPORTED' : 'SUPPORT THIS BILL ⚡'}
              </button>
            </div>
          </div>

          {/* Bill 3 */}
          <div className="bill-detail-card card-glow-orange">
            <div className="bill-icon-col">
              <Brain size={48} className="text-orange" />
            </div>
            <div className="bill-info-col">
              <div className="bill-meta">
                <span className="bill-no">Bill #AJP-03</span>
                <span className="bill-status">Under Consideration</span>
              </div>
              <h3>The National Anti-Overthinking Initiative</h3>
              <p className="bill-description">
                Establishment of anti-overthinking centers in all corporate hubs. Provides mandatory nap hours, gaming rooms, and soft cushions. Ban on bosses asking 'What are your plans for the weekend?' to prevent anxiety.
              </p>
              <div className="voting-gauge-container">
                <div className="gauge-label">
                  <span>Community Endorsement</span>
                  <span className="text-orange font-bold">{missionVotes.m3} Votes ({getPercent(missionVotes.m3)}%)</span>
                </div>
                <div className="gauge-track">
                  <div className="gauge-fill orange-fill" style={{ width: `${getPercent(missionVotes.m3)}%` }}></div>
                </div>
              </div>
              <button 
                className={`btn-support ${hasVotedMission.m3 ? 'supported' : ''}`}
                onClick={() => handleMissionVote('m3')}
                disabled={hasVotedMission.m3}
              >
                {hasVotedMission.m3 ? 'SUPPORTED' : 'SUPPORT THIS BILL 🧠'}
              </button>
            </div>
          </div>

          {/* Bill 4 */}
          <div className="bill-detail-card card-glow-blue">
            <div className="bill-icon-col">
              <Skull size={48} className="text-blue" />
            </div>
            <div className="bill-info-col">
              <div className="bill-meta">
                <span className="bill-no blue-no">Bill #AJP-04</span>
                <span className="bill-status status-blue">Lobbying Phase</span>
              </div>
              <h3>The Resumes & Job Fair Reform Act</h3>
              <p className="bill-description">
                resumes must accept memes as valid credentials of creative logic. Banishment of entry-level jobs requiring '5+ years of experience'. Every rejected application must receive a detailed, customized reason or a payment of Rs. 100 as reimbursement for time wasted.
              </p>
              <div className="voting-gauge-container">
                <div className="gauge-label">
                  <span>Community Endorsement</span>
                  <span className="text-blue font-bold">{missionVotes.m4} Votes ({getPercent(missionVotes.m4)}%)</span>
                </div>
                <div className="gauge-track">
                  <div className="gauge-fill blue-fill" style={{ width: `${getPercent(missionVotes.m4)}%` }}></div>
                </div>
              </div>
              <button 
                className={`btn-support-blue ${hasVotedMission.m4 ? 'supported' : ''}`}
                onClick={() => handleMissionVote('m4')}
                disabled={hasVotedMission.m4}
              >
                {hasVotedMission.m4 ? 'SUPPORTED' : 'SUPPORT THIS BILL 🫡'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem submission board */}
      <section className="problem-board-section">
        <div className="problem-board-grid">
          {/* Submit problem */}
          <div className="problem-form-card card-glow-orange">
            <h3 className="text-orange mb-20 flex-align">
              <Sparkles size={20} className="mr-8" /> Report A System Error
            </h3>
            <p className="p-desc">
              Frustrated by work, college, or daily life? Drop your struggle. Sarcastic suggestions only. Let's make it a movement.
            </p>
            <form onSubmit={handleAddProblem} className="problem-form">
              <div className="form-item">
                <label>Twitter Handle / Nickname (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. @silent_sufferer" 
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                />
              </div>

              <div className="form-item">
                <label>Frustration Category</label>
                <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
                  <option value="Workplace Struggles">Workplace Struggles</option>
                  <option value="Education System">Education System</option>
                  <option value="Public Infrastructures">Public Infrastructures</option>
                  <option value="Internet Blues">Internet Blues</option>
                  <option value="Social Anxiety">Social Anxiety</option>
                </select>
              </div>

              <div className="form-item">
                <label>Describe the Problem</label>
                <textarea 
                  rows={4} 
                  required
                  placeholder="Describe your issue with peak sarcasm..."
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn-orange w-full text-center">
                Submit Complaint 🎯
              </button>
            </form>
            {submitMessage && (
              <span className="submit-success">🫡 File added to the public board! Refreshing collective pain.</span>
            )}
          </div>

          {/* Complaints Feed */}
          <div className="problems-feed-col">
            <h3 className="mb-20 flex-align">
              <MessageCircle size={20} className="text-orange mr-8" /> Collective Frustration Wall
            </h3>
            <div className="problems-scroll">
              {problems.map((problem) => (
                <div key={problem.id} className="problem-feed-card">
                  <div className="feed-card-header">
                    <span className="problem-author text-orange">{problem.author}</span>
                    <span className="problem-cat">{problem.category}</span>
                  </div>
                  <p className="problem-text-content">"{problem.text}"</p>
                  <div className="problem-reactions">
                    <button className="react-btn" onClick={() => reactToProblem(problem.id, 'real')}>
                      💀 Real <span>{problem.realCount}</span>
                    </button>
                    <button className="react-btn" onClick={() => reactToProblem(problem.id, 'preach')}>
                      🎯 Preach <span>{problem.preachCount}</span>
                    </button>
                    <button className="react-btn" onClick={() => reactToProblem(problem.id, 'f')}>
                      🫡 F <span>{problem.fCount}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .manifesto-view {
          padding: 60px 0;
        }

        .manifesto-header {
          margin-bottom: 60px;
        }

        .manifesto-intro-desc {
          max-width: 700px;
          margin: 15px auto 0 auto;
          color: var(--text-gray-light);
        }

        .mb-40 {
          margin-bottom: 40px;
        }

        .mb-20 {
          margin-bottom: 20px;
        }

        .mr-8 {
          margin-right: 8px;
        }

        .flex-align {
          display: flex;
          align-items: center;
        }

        .w-full {
          width: 100%;
        }

        .text-center {
          text-align: center;
        }

        .font-bold {
          font-weight: bold;
        }

        /* Bills grid layout */
        .bills-container {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-bottom: 80px;
        }

        .bill-detail-card {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 30px;
          padding: 40px;
          border-radius: var(--border-radius-lg);
          align-items: flex-start;
        }

        .bill-icon-col {
          background: rgba(255, 122, 0, 0.08);
          border: 1px dashed rgba(255, 122, 0, 0.2);
          border-radius: var(--border-radius-md);
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bill-detail-card.card-glow-blue .bill-icon-col {
          background: rgba(0, 229, 255, 0.08);
          border-color: rgba(0, 229, 255, 0.2);
        }

        .bill-info-col h3 {
          font-size: 1.6rem;
          margin-bottom: 12px;
        }

        .bill-meta {
          display: flex;
          gap: 12px;
          margin-bottom: 8px;
        }

        .bill-no {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--primary-orange);
          background: rgba(255,122,0,0.12);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .blue-no {
          color: var(--accent-blue);
          background: rgba(0, 229, 255, 0.12);
        }

        .bill-status {
          font-size: 0.7rem;
          color: #10b981;
          font-weight: bold;
          text-transform: uppercase;
        }

        .status-blue {
          color: var(--accent-blue);
        }

        .bill-description {
          color: var(--text-gray-light);
          margin-bottom: 24px;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .voting-gauge-container {
          margin-bottom: 20px;
          max-width: 500px;
        }

        .gauge-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-gray);
          margin-bottom: 6px;
        }

        .gauge-track {
          width: 100%;
          height: 8px;
          background: var(--bg-navy-dark);
          border-radius: 4px;
          overflow: hidden;
        }

        .gauge-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .orange-fill {
          background: var(--primary-orange);
          box-shadow: 0 0 10px var(--primary-orange);
        }

        .blue-fill {
          background: var(--accent-blue);
          box-shadow: 0 0 10px var(--accent-blue);
        }

        .btn-support, .btn-support-blue {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.8rem;
          border: 1px solid var(--primary-orange);
          background: transparent;
          color: var(--primary-orange);
          padding: 8px 20px;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-support:hover {
          background: var(--primary-orange);
          color: var(--text-white);
          box-shadow: 0 0 15px var(--primary-orange-glow);
        }

        .btn-support-blue {
          border-color: var(--accent-blue);
          color: var(--accent-blue);
        }

        .btn-support-blue:hover {
          background: var(--accent-blue);
          color: var(--bg-navy-dark);
          box-shadow: 0 0 15px var(--accent-blue-glow);
        }

        .btn-support.supported, .btn-support-blue.supported {
          background: #10b981;
          color: white;
          border-color: #10b981;
          cursor: default;
          box-shadow: none;
        }

        /* Problem Board Styles */
        .problem-board-section {
          background: rgba(11, 26, 62, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 40px;
          border-radius: var(--border-radius-lg);
        }

        .problem-board-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
        }

        .problem-form-card {
          padding: 30px;
          border-radius: var(--border-radius-md);
        }

        .p-desc {
          font-size: 0.85rem;
          color: var(--text-gray);
          margin-bottom: 24px;
        }

        .problem-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-item label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-gray-light);
          text-transform: uppercase;
        }

        .form-item input, .form-item select, .form-item textarea {
          background: var(--bg-navy-dark);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 10px;
          border-radius: var(--border-radius-sm);
          color: var(--text-white);
          font-size: 0.85rem;
        }

        .form-item input:focus, .form-item select:focus, .form-item textarea:focus {
          outline: 1px solid var(--primary-orange);
          border-color: var(--primary-orange);
        }

        .submit-success {
          display: block;
          color: var(--accent-blue);
          font-size: 0.8rem;
          margin-top: 10px;
          text-align: center;
        }

        .problems-feed-col {
          display: flex;
          flex-direction: column;
          max-height: 520px;
        }

        .problems-scroll {
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-right: 10px;
        }

        .problem-feed-card {
          background: var(--bg-navy-dark);
          border-left: 3px solid var(--primary-orange);
          padding: 20px;
          border-radius: var(--border-radius-sm);
        }

        .feed-card-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-bottom: 10px;
        }

        .problem-author {
          font-weight: 700;
          font-family: var(--font-heading);
        }

        .problem-cat {
          color: var(--text-gray-dark);
        }

        .problem-text-content {
          font-size: 0.9rem;
          color: var(--text-gray-light);
          margin-bottom: 15px;
          font-style: italic;
        }

        .problem-reactions {
          display: flex;
          gap: 12px;
        }

        .react-btn {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          color: var(--text-gray-light);
          font-size: 0.75rem;
          padding: 4px 10px;
          border-radius: 4px;
          cursor: pointer;
          transition: var(--transition-smooth);
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .react-btn:hover {
          background: rgba(255, 122, 0, 0.1);
          border-color: var(--primary-orange);
          color: var(--primary-orange);
        }

        .react-btn span {
          font-weight: bold;
          color: var(--text-white);
        }

        /* Responsiveness */
        @media (max-width: 1024px) {
          .bill-detail-card {
            grid-template-columns: 1fr;
            padding: 30px;
          }
          .bill-icon-col {
            width: 80px;
            height: 80px;
          }
          .problem-board-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
