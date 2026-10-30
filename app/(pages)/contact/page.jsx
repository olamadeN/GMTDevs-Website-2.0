/* 'use client';
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
 
export default ContactPage; */


'use client';
import styles from "./contact.module.css";
import imStyles from '../../page.module.css';
import Navbar from "@/app/component/navbar/page";
import Select from 'react-select'
import AcademySection from "@/app/component/academySection/academy";
import { Mail, MapPinned, Phone } from "lucide-react";
import { useState } from "react";
const ContactPage = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [sending, setSending] = useState(false);
    const [feedback, setFeedback] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (sending) return;
        setSending(true);
        setFeedback(null);

        const form = event.currentTarget;
        const data = new FormData(form);
        const payload = {
            yourName: String(data.get("yourName") || "").trim(),
            email: String(data.get("email") || "").trim(),
            service: selectedService?.value || "",
            details: String(data.get("details") || "").trim(),
            website: String(data.get("website") || ""),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || "Unable to send your message. Please try again.");
            setFeedback({ type: result.acknowledged ? "success" : "warning", message: result.message });
            form.reset();
            setSelectedService(null);
        } catch (error) {
            setFeedback({ type: "error", message: error.message || "Unable to send your message. Please try again." });
        } finally {
            setSending(false);
        }
    };

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
                            <form onSubmit={handleSubmit}>
                                <label className={styles.visuallyHidden} htmlFor="contact-name">Your name</label>
                                <input id="contact-name" type="text" placeholder="Your name" name="yourName" autoComplete="name" maxLength={120} required />
                                
                                <label className={styles.visuallyHidden} htmlFor="contact-email">Your email address</label>
                                <input id="contact-email" type="email" placeholder="Your email address" name="email" autoComplete="email" maxLength={254} required />
                                
                                <label className={styles.visuallyHidden} htmlFor="contact-service">Service needed</label>
                                <Select styles={{control: (baseStyles, state) => ({ ...baseStyles, border: state.isFocused ? "#f4eee5" : "none", fontSize:"16px"})}} placeholder="Service needed" inputId="contact-service" className={styles.select} options={options} value={selectedService} onChange={setSelectedService} isDisabled={sending} isClearable />
                                
                                <label className={styles.visuallyHidden} htmlFor="contact-details">Your message</label>
                                <textarea className={styles.textarea} name="details" id="contact-details" placeholder="Type your message here . . ." maxLength={10000} required />
                                
                                <div className={styles.honeypot} aria-hidden="true">
                                    <label htmlFor="contact-website">Leave this field empty</label>
                                    <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                                </div>
                                <button className={styles.submit} type="submit" disabled={sending}>
                                    {sending ? "Sending..." : "Send message"}
                                </button>
                                {feedback && <p role="status" aria-live="polite" className={`${styles.feedback} ${styles[feedback.type]}`}>
                                    {feedback.message}
                                </p>}
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
                                <p>contact@gmtdevs.com</p>
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