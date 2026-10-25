'use client';
import styles from "./contact.module.css";
import imStyles from '../../page.module.css';
import Navbar from "@/app/component/navbar/page";
import Testimonials from "@/app/component/testimonialSection/testimonial";
import Select from 'react-select'
import AcademySection from "@/app/component/academySection/academy";
import { Mail, MapPinned, Phone } from "lucide-react";
const ContactPage = () => {
    const options = [
        { value: 'Development service', label: 'Development service' },
        { value: 'Design service', label: 'Design service' },
        { value: 'Both', label: 'Both' }
    ]
    return ( 
        <div>
            <header className='header'>
                <div className="navbarContainer">
                    <Navbar />
                </div>
                <div className='container headerContent'>                
                    <div className='headerTxt'>
                        <h1> Get in <span style={{color: 'var(--text-secondary)'}}>touch</span> with us.</h1>
                        <p>Do you have a project you want to start, a product that needs a rethink, or a business process that could work better with technology?</p>
                    </div>
                    <div className='globeWrapper'>
                        <img className='globe' src='/images/globe.png' alt="globe" />
                    </div>
                </div>
            </header>
            <section className={styles.body}>
                <div className="container">
                    <div className={styles.double}>
                        <div className={styles.left}>
                            <h2>Let’s talk about what you’re building</h2>
                            <form action="">
                                <input type="text" placeholder="Your name" name="yourName" />
                                <input type="email" placeholder="Your email address" name="email" />
                                <Select styles={{
                                    control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    border: state.isFocused ? "#f4eee5" : "none",
                                    fontSize:"16px",                            
                                    }),
                                }} placeholder="Service needed"
                                className={styles.select} options={options} />
                                <textarea className={styles.textarea} name="details" id="" placeholder="Type your message here . . ." />
                                <input className={styles.submit} type="submit" value="Send message" />
                            </form>
                        </div>
                        <div className={styles.right}>
                            <img src="/images/contact.png" alt="contact hero" />
                        </div>
                    </div>                
                
                    <div className={styles.contactPill}>
                        <div>
                            <h3>GMTDevs</h3>
                            <div className='underline'></div>
                        </div>
                        <div className={styles.contactPack}>
                            <div className={styles.contact}>
                                <Phone color="#CB8731"/>
                                <p>+234 801 234 5678</p>
                            </div>
                            <div className={styles.contact}>
                                <Mail color="#CB8731"/>
                                <p>support@gmtdevs.com</p>
                            </div>
                            <div className={styles.contact}>
                                <MapPinned color="#CB8731"/>
                                <p>123 Newtown Lane, Ikoyi, Lagos.</p>
                            </div>
                        </div>
                        <div>
                            <p className={styles.itemHeader}>FOLLOW US ON SOCIAL MEDIA</p>
                            <div className={styles.footerSocials}>
                                <img src="/images/instagram.png" alt="instagram" />
                                <img src="/images/x.png" alt="x" />
                                <img src="/images/linkedin.png" alt="linkedin" />
                                <img src="/images/facebook.png" alt="facebook" />
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            
            

            <section className={imStyles.section3}>
                <AcademySection />
            </section>
        </div>
    );
}
 
export default ContactPage;