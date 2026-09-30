"use client";

import { useState } from "react";
import styles from './testimonial.module.css';
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "GMTDevs delivered a pixel-perfect implementation ahead of schedule. Their attention to detail and clear communication made the whole process easy. Highly recommend for anyone needing quality web development.",
    name: "Isaac Kayode",
  },
  {
    text: "Working with GMTDevs was a smooth experience from start to finish. They understood our requirements, communicated clearly, and delivered exactly what we needed.",
    name: "David Williams",
  },
  {
    text: "The attention to detail was impressive. GMTDevs took the time to understand our vision and turned the design into a website that represents our business perfectly.",
    name: "Michael Johnson",
  },
  {
    text: "Professional, responsive, and reliable. The team handled our project efficiently and made sure everything was working properly before delivery.",
    name: "Sarah Adeyemi",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const handlePrevious = () => {
    setDirection("previous");

    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setDirection("next");

    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const testimonial = testimonials[activeIndex];

  return (
    <section className={styles.testimonials}>
            {/* Left Content */}
            <div className={styles.intro}>
                <div className={styles.introTxtBox}>
                    <h3>Testimonials</h3>
                    <p><strong>Results</strong> Our Clients Stand <strong>Behind</strong></p>
                    <span className='underline'></span>
                </div>
                <div className={styles.controls}>
                    <button type="button" onClick={handlePrevious} aria-label="Previous testimonial" className={styles.btn}>
                        <span>‹</span>
                    </button>

                    <button type="button" onClick={handleNext} aria-label="Next testimonial" className={styles.btn}>
                        <span>›</span>
                    </button>
                </div>
            </div>

            {/* Testimonial Card */}
            <div className={styles.cardWrapper}>
            <div key={activeIndex} className={`${styles.card} ${direction === "next" ? styles.slideNext : styles.slidePrevious }`}>
                <div>               
                    <div className={styles.stars} aria-label="5 out of 5 stars">
                        <span><Star color="#F8C749" fill="#F8C749"/></span>
                        <span><Star color="#F8C749" fill="#F8C749"/></span>
                        <span><Star color="#F8C749" fill="#F8C749"/></span>
                        <span><Star color="#F8C749" fill="#F8C749"/></span>
                        <span><Star color="#F8C749" fill="#F8C749"/></span>
                
                    </div>

                    <p> {testimonial.text} </p>
                </div>
                <h4>{testimonial.name}</h4>
            </div>
            </div>
    </section>
  );
}

export default Testimonials;