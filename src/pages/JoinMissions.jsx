import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Users, Briefcase, GraduationCap } from 'lucide-react';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

const tracks = [
  { icon: <Briefcase size={28} color="var(--accent)" />, title: 'Business & Exporters', desc: 'Market visits, B2B meetings, trade body interactions, and export opportunity sessions.' },
  { icon: <Globe size={28} color="var(--accent)" />, title: 'Startups & Entrepreneurs', desc: 'Investor meets, ecosystem tours, pitch sessions, and innovation hub visits.' },
  { icon: <GraduationCap size={28} color="var(--accent)" />, title: 'Students & Professionals', desc: 'Campus visits, skill sessions, mentorship interactions, and global career exposure.' },
  { icon: <Users size={28} color="var(--accent)" />, title: 'Delegates & Leaders', desc: 'Government interactions, chamber meetings, strategic networking, and delegation activities.' },
];

export default function JoinMissions() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>

          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem', textAlign: 'center' }}>
            Join Missions
          </motion.h1>\n
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/engage_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <motion.p variants={fadeIn} style={{ textAlign: 'center', fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.7 }}>
            Step into the world. The E2E Singapore Mission — 21–24 May 2026 — is your gateway to Southeast Asia's most dynamic business ecosystem.
          </motion.p>

          {/* Mission Tracks */}
          <motion.div variants={fadeIn} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {tracks.map((t, i) => (
              <div key={i} style={{ background: 'var(--bg-alt)', borderRadius: '1rem', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {t.icon}
                <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, color: 'var(--primary)', fontSize: '1.05rem' }}>{t.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            <p>The "Join Missions" component of Explore2Expand (E2E) focuses on enabling participants to take part in curated international missions that provide real-world global exposure. These missions are the core experiences of the program, allowing individuals and organizations to step into international markets, interact with global ecosystems, and explore new opportunities.</p>
            <p>Participants who join missions gain access to a structured itinerary that includes industry visits, networking sessions, business meetings, and interactions with global experts. These activities are designed to provide a comprehensive understanding of the destination's economic environment, industry trends, and market opportunities.</p>
            <p>Joining a mission is not just about travel; it is about active engagement. Participants are encouraged to present their ideas, showcase their businesses, and build meaningful relationships. This hands-on approach helps them gain confidence and practical insights into global operations.</p>
            <p>Preparation is a key aspect of joining missions. Before departure, participants undergo orientation sessions where they learn about the destination, cultural expectations, and program objectives. Post-mission engagement is equally important — participants are encouraged to follow up on the connections and opportunities identified during the mission.</p>
            <p>Overall, the Join Missions component transforms global exploration into a structured and impactful experience. It enables participants to move beyond theoretical knowledge and gain real-world exposure, making it a key driver of growth and opportunity within E2E.</p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeIn} style={{ textAlign: 'center', background: 'var(--primary)', borderRadius: '1.5rem', padding: '3rem 2rem' }}>
            <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'white', marginBottom: '1rem' }}>
              Secure Your Spot on the Singapore Mission
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              21–24 May 2026 · Singapore · Limited Delegate Seats
            </p>
            <a
              href="https://bit.ly/explore2expand"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.15rem', padding: '1rem 2.5rem' }}
            >
              Book Your Seat Now <ArrowUpRight size={22} />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
