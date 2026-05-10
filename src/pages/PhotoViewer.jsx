import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, ChevronLeft, ChevronRight } from 'lucide-react';

const allImages = [
  { src: '/assets/gallery1.jpeg', caption: 'E2E Global Mission — Networking Session' },
  { src: '/assets/gallery2.jpeg', caption: 'E2E Global Mission — Industry Leaders Forum' },
  { src: '/assets/gallery3.jpeg', caption: 'E2E Global Mission — Singapore Delegation' },
  { src: '/assets/gallery4.jpeg', caption: 'E2E Global Mission — Cultural Exchange' },
  { src: '/assets/gallery5.jpeg', caption: 'E2E Global Mission — Business Summit' },
  { src: '/assets/gallery6.jpeg', caption: 'E2E Global Mission — Expo Hall' },
  { src: '/assets/gallery7.jpeg', caption: 'E2E Global Mission — Award Ceremony' },
  { src: '/assets/moment4.jpg',   caption: 'E2E Global Mission — Field Visit' },
  { src: '/assets/moment5.jpg',   caption: 'E2E Global Mission — Team Highlight' },
  { src: '/assets/moment6.jpg',   caption: 'E2E Global Mission — Community Moment' },
  { src: '/assets/moment7.jpg',   caption: 'E2E Global Mission — Special Moment' },
  { src: '/assets/moment8.jpg',   caption: 'E2E Global Mission — Global Connect' },
  { src: '/assets/moment9.jpg',   caption: 'E2E Global Mission — Together We Grow' },
];

export default function PhotoViewer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const idx = parseInt(id, 10);
  const photo = allImages[idx] || allImages[0];
  const prev = idx > 0 ? idx - 1 : allImages.length - 1;
  const next = idx < allImages.length - 1 ? idx + 1 : 0;

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') navigate(`/photo/${prev}`);
      if (e.key === 'ArrowRight') navigate(`/photo/${next}`);
      if (e.key === 'Escape') navigate(-1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [prev, next, navigate]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #060e24 0%, #0d1b3e 60%, #0a1628 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
      paddingTop: '110px',   /* clears navbar */
      paddingBottom: '2rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      boxSizing: 'border-box',
    }}>

      {/* ── Top action bar ── */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1000px',
        marginBottom: '1.25rem',
        flexWrap: 'wrap',
        gap: '0.75rem',
      }}>
        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate(-1)}
          style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white',
            padding: '0.55rem 1.1rem',
            borderRadius: '999px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)',
            fontWeight: 600,
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(226,180,79,0.25)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        >
          <ArrowLeft size={16} /> Back
        </motion.button>

        {/* Counter */}
        <span style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
          fontWeight: 500,
        }}>
          {idx + 1} / {allImages.length}
        </span>

        {/* Download */}
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          href={photo.src}
          download
          style={{
            background: 'rgba(226,180,79,0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(226,180,79,0.4)',
            color: '#E2B44F',
            padding: '0.55rem 1.1rem',
            borderRadius: '999px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(226,180,79,0.3)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(226,180,79,0.15)'}
        >
          <Download size={16} /> Save
        </motion.a>
      </div>

      {/* ── Main photo ── */}
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: '1000px', width: '100%', textAlign: 'center' }}
      >
        <img
          src={photo.src}
          alt={photo.caption}
          style={{
            width: '100%',
            maxHeight: 'clamp(220px, 55vh, 680px)',
            objectFit: 'contain',
            borderRadius: 'clamp(0.75rem, 2vw, 1.5rem)',
            boxShadow: '0 30px 70px rgba(0,0,0,0.6)',
            border: '1px solid rgba(226,180,79,0.3)',
          }}
        />

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{
            marginTop: '1.25rem',
            color: 'rgba(255,255,255,0.7)',
            fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
            fontWeight: 500,
            letterSpacing: '0.02em',
          }}
        >
          {photo.caption}
        </motion.p>
      </motion.div>

      {/* ── Prev / Next ── */}
      <div style={{
        display: 'flex',
        gap: 'clamp(0.5rem, 3vw, 1rem)',
        marginTop: '1.75rem',
        width: '100%',
        maxWidth: '1000px',
        justifyContent: 'center',
      }}>
        <motion.button
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={() => navigate(`/photo/${prev}`)}
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'white',
            padding: 'clamp(0.55rem, 2vw, 0.75rem) clamp(1rem, 4vw, 2rem)',
            borderRadius: '999px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: 'clamp(0.82rem, 2.5vw, 0.95rem)',
            display: 'flex', alignItems: 'center', gap: '0.4rem',
          }}
        >
          <ChevronLeft size={18} /> Prev
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={() => navigate(`/photo/${next}`)}
          style={{
            background: 'rgba(226,180,79,0.2)',
            border: '1px solid rgba(226,180,79,0.4)',
            color: '#E2B44F',
            padding: 'clamp(0.55rem, 2vw, 0.75rem) clamp(1rem, 4vw, 2rem)',
            borderRadius: '999px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: 'clamp(0.82rem, 2.5vw, 0.95rem)',
            display: 'flex', alignItems: 'center', gap: '0.4rem',
          }}
        >
          Next <ChevronRight size={18} />
        </motion.button>
      </div>

      {/* ── Thumbnail strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          display: 'flex',
          gap: 'clamp(0.4rem, 1.5vw, 0.75rem)',
          marginTop: '1.75rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
          maxWidth: '1000px',
          width: '100%',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(226,180,79,0.3) transparent',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {allImages.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/photo/${i}`)}
            style={{ cursor: 'pointer', flexShrink: 0 }}
          >
            <img
              src={img.src}
              alt={`Thumbnail ${i + 1}`}
              style={{
                width: 'clamp(52px, 10vw, 80px)',
                height: 'clamp(36px, 7vw, 56px)',
                objectFit: 'cover',
                borderRadius: '0.4rem',
                border: i === idx ? '2px solid #E2B44F' : '2px solid rgba(255,255,255,0.1)',
                opacity: i === idx ? 1 : 0.5,
                transition: 'all 0.2s ease',
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Keyboard hint */}
      <p style={{
        marginTop: '1.25rem',
        color: 'rgba(255,255,255,0.2)',
        fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)',
        textAlign: 'center',
      }}>
        Use ← → arrow keys to navigate · Esc to go back
      </p>
    </div>
  );
}
