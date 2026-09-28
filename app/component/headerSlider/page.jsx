'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './page.module.css';

const initialImages = [
  { id: 'left', src: '/images/biography.png', alt: 'Professional Bio' },
  { id: 'center', src: '/images/eevents.png', alt: 'eBents' },
  { id: 'right', src: '/images/edvaltour.png', alt: 'Tours & Experiences' },
];

export default function LaptopCarousel() {
  const [images, setImages] = useState(initialImages);

  useEffect(() => {
    const timer = setInterval(() => {
      setImages((prevImages) => {
        const newArray = [...prevImages];
        const firstItem = newArray.shift();
        newArray.push(firstItem);
        return newArray;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      {/* 1. FOREGROUND: Laptop frame overlay with transparent screen */}
      <div className={styles.laptopFrame}>
        <img
          src="/images/laptopMockUp.png"
          alt="Laptop Frame"
          /* fill */
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* 2. BACKGROUND: Sliding track powered by Framer Motion */}
      <div className={styles.track}>
        {images.map((img, index) => {
          const isCenter = index === 1;

          return (
            <motion.div
              key={img.id}
              layout
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                duration: 0.8,
              }}
              className={`${styles.card} ${
                isCenter ? styles.centerCard : styles.sideCard
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
               /*  fill */
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}