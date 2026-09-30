import { ArrowRight, Facebook, LucideInstagram, Mail, MapPinned, Phone } from 'lucide-react';
import styles from './footer.module.css';
import Image from "next/image";

const Footer = () => {
    return ( 
        <footer>
            <div className={styles.footer2}>
                <div className={styles.footer2Inner}>
                    <div className={styles.item1}>
                        <Image className={styles.footer1Logo} width={165} height={59} src="/images/logo.png" alt="logo" />
                        <p>We specialize in creating smart, clean, and effective web solutions tailored to meet the unique needs of businesses and personal brands helping business owners establish a powerful online presence that communicates their value and drives growth.</p>
                        <div className={styles.itemContacts}>
                            <li><Phone size={19} style={{color:"#CB8731"}} className='icon'/> +234 805 596 6609</li>
                            <li><Mail size={19} style={{color:"#CB8731"}} className='icon'/> contact@gmtdevs.com</li>
                            <li><MapPinned size={19} style={{color:"#CB8731"}} className='icon' /> 69, Second West Circular road, Benin City, Edo State.</li>
                        </div>
                    </div>
                    <div className={styles.item2}>
                        <p className={styles.itemHeader}>QUICK LINKS</p>
                        <ul className={`${styles.itemContacts} ${styles.item2Contacts}`}>
                            <li>About us</li>
                            <li>Our services</li>
                            <li>Explore projects</li>
                            <li>GMT Academy</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className={styles.item3}>
                        <p className={styles.itemHeader}>FOLLOW US ON SOCIAL MEDIA</p>
                        <div className={styles.footerSocials}>
                            <img src="/images/instagram.png" alt="instagram" />
                            <img src="/images/x.png" alt="x" />
                            <img src="/images/linkedin.png" alt="linkedin" />
                            <img src="/images/facebook.png" alt="facebook" />
                        </div>
                    </div>
                </div>
                <div className={styles.copyRight}>
                    <p>Coypright © 2026 GMTDevs. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;