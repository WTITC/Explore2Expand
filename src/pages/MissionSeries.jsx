import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function MissionSeries() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
            Mission Series
          </motion.h1>
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/programs_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <motion.h3 variants={fadeIn} style={{ textAlign: 'center', color: 'var(--accent)', marginBottom: '2.5rem', fontWeight: 600 }}>
            Singapore & Beyond
          </motion.h3>
          
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              The Mission Series under Explore2Expand (E2E) is a flagship initiative designed to provide structured international exposure to businesses, exporters, students, and professionals. It begins with Singapore, a globally recognized hub for trade, innovation, and technology, and will expand to other strategic international destinations in the future.
            </p>
            <p>
              Each mission is carefully curated to deliver more than just travel—it is an immersive experience into global markets. Participants gain first-hand insights into international business environments, regulatory frameworks, and industry trends. The missions typically include industry visits, interactions with global companies, B2B meetings, networking sessions, and exposure to innovation ecosystems such as startup hubs, research centers, and trade organizations.
            </p>
            <p>
              The Singapore mission, for instance, is positioned as an entry point into Southeast Asian markets, offering participants an opportunity to understand regional trade dynamics, export opportunities, and cross-border collaboration models. Through guided sessions and expert-led interactions, participants can explore how global businesses operate, scale, and compete.
            </p>
            <p>
              A key strength of the Mission Series is its focus on outcomes. Rather than being a passive observational tour, it aims to facilitate tangible results such as partnerships, export deals, internships, and strategic collaborations. Participants are encouraged to engage actively, present their ideas or businesses, and build meaningful connections that extend beyond the mission.
            </p>
            <p>
              The “Beyond” aspect of the Mission Series reflects its long-term vision. Future missions are planned across major global destinations including Europe, the Middle East, North America, and other parts of Asia. Each destination will be selected based on its relevance to specific industries and opportunities for participants.
            </p>
            <p>
              In essence, the Mission Series serves as a launchpad for global exploration and expansion. It bridges the gap between local ambition and international opportunity, empowering participants to step into the global arena with confidence, knowledge, and connections.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
