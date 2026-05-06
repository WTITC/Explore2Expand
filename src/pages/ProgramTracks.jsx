import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function ProgramTracks() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
            Program Tracks
          </motion.h1>
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/programs_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              Program Tracks under Explore2Expand (E2E) are designed to provide structured and customized experiences for different categories of participants. Recognizing that businesses, students, exporters, and professionals have unique goals, E2E offers specialized tracks that align with their specific needs and aspirations.
            </p>
            <p>
              Each track is built around a clear objective. For exporters and businesses, the focus is on market entry, export readiness, and international partnerships. Participants in this track receive insights into global trade practices, regulatory requirements, supply chain dynamics, and buyer expectations. They also get opportunities to connect with potential clients, distributors, and collaborators.
            </p>
            <p>
              For students, the Program Tracks emphasize learning, exposure, and career development. These tracks include academic visits, skill-building workshops, interaction with global experts, and exposure to international education and work environments. Students gain a broader perspective of global industries and are better prepared for international careers.
            </p>
            <p>
              Startup-focused tracks are designed to support innovation and entrepreneurship. These tracks provide access to global startup ecosystems, investor networks, incubators, and accelerators. Startups can pitch their ideas, receive feedback, and explore opportunities for funding and collaboration.
            </p>
            <p>
              Professional tracks cater to individuals looking to enhance their skills, expand their networks, and explore global career opportunities. These tracks include leadership sessions, industry-specific interactions, and mentorship opportunities with global experts.
            </p>
            <p>
              One of the key features of Program Tracks is their flexibility. Participants can choose tracks based on their interests and goals, ensuring a personalized experience. Despite the specialization, there is also an element of cross-learning, where participants from different tracks interact and learn from each other.
            </p>
            <p>
              Overall, Program Tracks provide a structured pathway for participants to gain maximum value from the E2E platform. They ensure that every participant has a clear direction, relevant exposure, and meaningful outcomes aligned with their goals.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
