
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { MoveRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/About-us' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact us', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const toggleRef = useRef(null);
  const firstLinkRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    // Return keyboard focus to the visible menu toggle.
    toggleRef.current?.focus();
  };

  // Close the mobile menu after a route change.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
      }
      if (event.key === 'Tab') {
        // The portal's close button and links are the only menu tab stops.
        const focusable = [
          closeRef.current,
          ...document.querySelectorAll('[data-mobile-nav-link]'),
        ].filter(Boolean);
        const index = focusable.indexOf(document.activeElement);
        if (event.shiftKey && index <= 0) {
          event.preventDefault();
          focusable[focusable.length - 1]?.focus();
        } else if (!event.shiftKey && index === focusable.length - 1) {
          event.preventDefault();
          focusable[0]?.focus();
        }
      }
    };

    const media = window.matchMedia('(min-width: 901px)');
    const onResize = () => {
      if (media.matches) setIsOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    media.addEventListener('change', onResize);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      media.removeEventListener('change', onResize);
    };
  }, [isOpen]);

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <Link href="/" className={styles.logoLink} aria-label="GMTDevs Global home" onClick={() => setIsOpen(false)}>
        <img src="/images/logo.png" alt="GMTDevs Global" className={styles.logo} />
      </Link>

      <ul className={styles.navLinks}>
        {links.map(({ label, href }) => (
          <li key={href} className={pathname === href ? styles.active : undefined}>
            <Link href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>
          </li>
        ))}
      </ul>

      {/* Preserve the original academy label. Add a link when its destination is known. */}
      <a href='https://academy.gmtdevs.com/' target='__blank' className={`${styles.academy} btn`}>
        GMT Academy <MoveRight size={20} aria-hidden="true" />
      </a>

      <button
        ref={toggleRef}
        type="button"
        className={`${styles.menuToggle} ${isOpen ? styles.menuToggleOpen : ''}`}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        tabIndex={isOpen ? -1 : 0}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className={styles.menuLine} />
        <span className={styles.menuLine} />
        <span className={styles.menuLine} />
      </button>

      {mounted && createPortal(
        <div
          id="mobile-navigation"
          className={`${styles.mobilePanel} ${isOpen ? styles.mobilePanelOpen : ''}`}
          aria-hidden={!isOpen}
          inert={!isOpen}
        >
          {/* The close icon is inside the portal so no page overlay can cover it. */}
          <button
            ref={closeRef}
            type="button"
            className={`${styles.menuToggle} ${styles.portalClose} ${isOpen ? styles.menuToggleOpen : ''}`}
            aria-label="Close navigation menu"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
          >
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </button>
          <div className={styles.mobilePanelInner}>
            <ul className={styles.mobileLinks}>
              {links.map(({ label, href }, index) => (
                <li key={href}>
                  <Link
                    href={href}
                    ref={index === 0 ? firstLinkRef : undefined}
                    data-mobile-nav-link
                    className={pathname === href ? styles.mobileActive : undefined}
                    aria-current={pathname === href ? 'page' : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href='https://academy.gmtdevs.com/' target='__blank' className={styles.mobileAcademy}>
              GMT Academy <MoveRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
}
