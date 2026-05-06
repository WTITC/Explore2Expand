import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function Partnerships() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
            Partnerships
          </motion.h1>
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/insights_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>Partnerships are a fundamental pillar of Explore2Expand (E2E), as they enable participants to access opportunities that would otherwise be difficult to achieve independently. The initiative recognizes that global growth is rarely achieved in isolation and that collaboration is key to success in international markets. Through E2E, participants are connected with a wide range of partners including businesses, trade organizations, academic institutions, and industry experts.</p>
            <p>For businesses and exporters, partnerships open doors to new markets through joint ventures, distribution agreements, and strategic alliances. These collaborations help reduce entry barriers, share risks, and accelerate growth. By connecting with local partners in international markets, participants can gain valuable insights, establish trust more quickly, and navigate unfamiliar environments with greater ease.</p>
            <p>Students and professionals benefit from partnerships with universities, training institutions, and global companies. These connections create pathways for internships, skill development programs, and career opportunities. Exposure to international organizations also helps participants understand global work standards and expectations, enhancing their employability.</p>
            <p>Startups gain significant advantages through partnerships with incubators, accelerators, and investor networks. These collaborations provide access to funding, mentorship, and global markets, helping startups scale faster and more effectively. Networking plays a crucial role in building these partnerships, as E2E missions provide direct interaction with potential collaborators in a structured environment.</p>
            <p>The focus of E2E is not just on creating connections but on building long-term, sustainable relationships. Participants are encouraged to nurture these partnerships beyond the mission, turning initial interactions into meaningful collaborations. Trust, mutual benefit, and shared goals are emphasized as the foundation of successful partnerships.</p>
            <p>Overall, partnerships under E2E act as a catalyst for growth, enabling participants to expand their reach, enhance their capabilities, and achieve global success through collaboration and shared opportunities.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
