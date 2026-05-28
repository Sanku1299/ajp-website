import antHead from '../assets/ant_head.png';
import antFlag from '../assets/ant_flag.png';
import { Target, Heart, Award, Shield } from 'lucide-react';

export default function AboutView() {
  const team = [
    {
      name: "Adi Chavan",
      title: "Chief Executive Overthinker",
      bio: "Can overanalyze a simple 'K.' text for 72 hours straight. In charge of national mental panic logistics.",
      avatar: antHead
    },
    {
      name: "Saurabh Dev",
      title: "Director of Sarcasm & Memes",
      bio: "Has a degree in sarcasm. Responsible for drafting highly offensive but relatable resumes.",
      avatar: antHead
    },
    {
      name: "Tanya Sharma",
      title: "Head of Unemployment Support Group",
      bio: "Expert at drinking free office coffees and providing emotional comfort to stressed freshers.",
      avatar: antHead
    },
    {
      name: "The Great Ant",
      title: "Supreme Leader & Mascot",
      bio: "Doesn't talk. Just lifts heavy objects and sets an example of peerless teamwork.",
      avatar: antHead
    }
  ];

  return (
    <div className="about-view container">
      <header className="about-header text-center">
        <span className="section-tag">About The Movement</span>
        <h1 className="about-title glitch-text" data-text="We Are Anti Janta Party">We Are Anti Janta Party</h1>
        <p className="about-subtitle">
          "Not Against The People. Against The Problems."
        </p>
      </header>

      {/* Story section */}
      <section className="about-story-section grid-2">
        <div className="story-text">
          <h2 className="text-orange">Our Origin Story</h2>
          <p>
            The Anti Janta Party (AJP) was founded in 2025 during a massive overthinking session at 3 AM. 
            Tired of high-pitched debates, broken promises, and the endless pressure of adulting, a group of exhausted 
            Gen-Z youth realized that the biggest problems weren't our fellow citizens—it was the system's absolute lack of self-awareness.
          </p>
          <br />
          <p>
            AJP isn't here to run for municipal seats or loot treasuries. We are here to run satirical campaigns, 
            support youth sanity, and weaponize sarcasm against the actual problems: toxic work culture, 
            runaway inflation, joblessness, and political hypocrisy.
          </p>
        </div>
        <div className="story-image-wrap flex-center">
          <img src={antFlag} alt="Ant Mascot Rebellion Flag" className="story-image float-anim" />
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values-section text-center">
        <h2 className="text-orange section-spacer-title">Our Sacred Pillars</h2>
        <div className="values-grid">
          <div className="value-card card-glow-orange">
            <Target className="value-icon text-orange" size={40} />
            <h3>100% Sarcasm</h3>
            <p>If we don't laugh, we will cry. Sarcasm is our armor and memes are our ammunition.</p>
          </div>

          <div className="value-card card-glow-blue">
            <Heart className="value-icon text-blue" size={40} />
            <h3>Youth Sanity</h3>
            <p>Your mental health matters. We stand for emotional support leaves and anti-panic measures.</p>
          </div>

          <div className="value-card card-glow-orange">
            <Award className="value-icon text-orange" size={40} />
            <h3>Unified Action</h3>
            <p>Like the Ants, we are small individually but unstoppable when we lift together.</p>
          </div>

          <div className="value-card card-glow-blue">
            <Shield className="value-icon text-blue" size={40} />
            <h3>Anti-Jumla Policy</h3>
            <p>Strictly against hollow slogans. We demand results and real opportunities, not speeches.</p>
          </div>
        </div>
      </section>

      {/* Team profiles */}
      <section className="about-team-section">
        <h2 className="text-orange text-center section-spacer-title">The Council of Overthinkers</h2>
        <div className="team-grid">
          {team.map((member, i) => (
            <div key={i} className="team-card card-glow-orange text-center">
              <div className="team-avatar-wrap">
                <img src={member.avatar} alt={member.name} className="team-avatar" />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <span className="team-title text-orange">{member.title}</span>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .about-view {
          padding: 60px 0;
        }

        .about-header {
          margin-bottom: 60px;
        }

        .about-title {
          font-size: 3rem;
          margin-top: 10px;
          margin-bottom: 10px;
        }

        .about-subtitle {
          color: var(--text-gray);
          font-size: 1.2rem;
          font-family: var(--font-heading);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 80px;
        }

        .story-text p {
          color: var(--text-gray-light);
          font-size: 1.05rem;
        }

        .story-image-wrap {
          display: flex;
          justify-content: center;
        }

        .story-image {
          max-width: 80%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 20px rgba(255, 122, 0, 0.15));
        }

        .section-spacer-title {
          margin-bottom: 40px;
          font-size: 2rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 80px;
        }

        .value-card {
          padding: 30px 20px;
          border-radius: var(--border-radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .value-icon {
          margin-bottom: 20px;
        }

        .value-card h3 {
          font-size: 1rem;
          margin-bottom: 12px;
          color: var(--text-white);
        }

        .value-card p {
          font-size: 0.85rem;
          color: var(--text-gray);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .team-card {
          padding: 30px 20px;
          border-radius: var(--border-radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .team-avatar-wrap {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--primary-orange);
          box-shadow: 0 0 15px rgba(255, 122, 0, 0.3);
          margin-bottom: 20px;
        }

        .team-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-name {
          font-size: 1.1rem;
          margin-bottom: 4px;
        }

        .team-title {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 12px;
          letter-spacing: 0.05em;
        }

        .team-bio {
          font-size: 0.8rem;
          color: var(--text-gray-light);
          line-height: 1.4;
        }

        /* Responsiveness */
        @media (max-width: 1024px) {
          .grid-2 {
            grid-template-columns: 1fr;
          }
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
