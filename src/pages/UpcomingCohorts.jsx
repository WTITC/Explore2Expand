import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function UpcomingCohorts() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
            Upcoming Cohorts
          </motion.h1>
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/programs_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              Upcoming Cohorts in Explore2Expand (E2E) represent the structured groups of participants who will take part in future missions and programs. Each cohort is carefully planned and organized to ensure a seamless and impactful experience for all participants.
            </p>
            <p>
              A cohort typically consists of a diverse group of individuals, including business owners, exporters, students, startups, and professionals. This diversity is intentional, as it fosters cross-learning and collaboration. Participants can share their perspectives, learn from each other, and build strong networks.
            </p>
            <p>
              Each cohort follows a well-defined journey. It begins with an application and selection process, where participants are chosen based on their goals, potential, and alignment with the program. Once selected, participants undergo pre-departure preparation, which includes orientation sessions, goal-setting workshops, and briefings about the destination and activities.
            </p>
            <p>
              During the mission, the cohort participates in a range of activities such as industry visits, networking events, workshops, and interactions with global experts. These activities are designed to provide maximum exposure and engagement.
            </p>
            <p>
              Post-mission support is a key feature of the cohort model. After returning, participants receive guidance and support to implement their learnings and leverage the connections they have built. This may include follow-up sessions, mentorship, and assistance in pursuing opportunities identified during the mission.
            </p>
            <p>
              Upcoming Cohorts are scheduled periodically, allowing new participants to join the E2E platform on an ongoing basis. This ensures continuity and scalability of the initiative. Each new cohort builds upon the success of previous ones, creating a growing community of globally connected individuals.
            </p>
            <p>
              Ultimately, the cohort system ensures that E2E is not just a one-time experience but a continuous journey. It provides structure, support, and community, enabling participants to achieve meaningful and lasting outcomes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
