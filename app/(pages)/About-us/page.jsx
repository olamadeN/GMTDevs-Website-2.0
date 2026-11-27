
import Navbar from '@/app/component/navbar/page';
export { metadata } from "./metadata";
import styles from './about.module.css';
import { MoveRight } from 'lucide-react';
import AcademySection from '@/app/component/academySection/academy';
import Testimonials from '@/app/component/testimonialSection/testimonial';
import Link from 'next/link';
import SlideUp from '@/app/component/animations/slideUp';
import SlideInRight from '@/app/component/animations/slideRight';
const About = () => {
    return ( 
        <div className={styles.aboutCont}>
            <header className='header'>
                <div className="navbarContainer">
                    <Navbar />
                </div>
                <div className='container headerContent'>   
                    <div className='headerTxt'>
                        <SlideUp delay={0.2} duration={0.8} distance={30}> 
                            <h1><span style={{ color: 'var(--text-secondary)' }}>About</span> us</h1>
                            <p>We develop and implement solutions that support your business growth and simplify daily operations every step of the way.</p>
                        </SlideUp>
                    </div>
                    
                    <div className='globeWrapper'>
                        <img className='globe' src='/images/globe.png' alt="globe" />
                    </div>
                   
                </div>
            </header>
            <section className={styles.aboutSection1}>
                <div className={`container double ${styles.sectionLeft}`}>
                    <div className='doubleLeft'>
                        <h3>GMTDevs</h3>
                        <div className='underline'></div>
                    </div>
                    <div className='doubleRight'>
                        <p className={styles.doubleRightP}> GMTDevs is a technology and digital product company helping businesses turn ideas, challenges and opportunities into useful digital experiences. We design and develop websites, applications, business platforms and digital products that are built around real people and real business needs. We believe technology should do more than look impressive. It should make something easier, faster, clearer or possible. </p>
                    </div>
                </div>
                <div className={styles.sectionRight}>
                    <div className={styles.darkBrown}>
                        <img src="/images/aboutGuy.png" alt="man holding a laptop" />
                    </div>  
                    <div className={styles.aboutCardCont}>
                        <div className={styles.aboutCardInner}>
            
                            <div className={`${styles.aboutCard1} ${styles.card}`}>                                    
                                <p>Business</p>
                                <p>We understand your business goals, customer needs and the value your digital solution should deliver.</p>
                            </div>                    
    
                            <div className={`${styles.aboutCard2} ${styles.card}`}>
                                <p>Design</p>
                                <p>We create experiences that are clear, intuitive and purposeful.</p>
                            </div>                                            
    
                            <div className={`${styles.aboutCard3} ${styles.card}`}>
                                <p>Development</p>
                                <p>We build reliable digital products that solve real business problems, improve operations and support sustainable growth.</p>
                            </div>                           
                            
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.aboutSection2}>
                <div className='container'>
                    <div className={styles.getThingHeader}>
                        <h5>GMTDevs</h5>
                        <h2>How we get things done</h2>
                    </div>
                    <div className={styles.getThingsCardPack}>
                        <div className={styles.getThingsCard}>
                            <div className={styles.cardNumber}>
                                <p>01.</p>
                            </div>
                            <div className={styles.cardContent}>
                                <h4>Understand</h4>
                                <p>	We begin by listening, understanding your business, your customers and what you want to achieve.</p>
                            </div>
                        </div>
                        <div className={styles.getThingsCard}>
                            <div className={styles.cardNumber}>
                                <p>02.</p>
                            </div>
                            <div className={styles.cardContent}>
                                <h4>Plan</h4>
                                <p>	We recommend the right solution, defining features, priorities and timelines around your business goals.</p>
                            </div>
                        </div>
                        <div className={styles.getThingsCard}>
                            <div className={styles.cardNumber}>
                                <p>03.</p>
                            </div>
                            <div className={styles.cardContent}>
                                <h4>Create</h4>
                                <p>	We design and develop responsive, user-friendly digital solutions that meet your business and customer needs.</p>
                            </div>
                        </div>
                        <div className={styles.getThingsCard}>
                            <div className={styles.cardNumber}>
                                <p>04.</p>
                            </div>
                            <div className={styles.cardContent}>
                                <h4>Support</h4>
                                <p>	After launch, we provide hosting, maintenance and ongoing improvements to keep your solution valuable to your business.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.btnPack}>
                        <Link href="/contact" className='btnPills'> Get in touch with us </Link>
                        <Link href="/projects" className='btn'>Explore projects <MoveRight size={20} /></Link>
                    </div>
                </div>
            </section>
            <section className={styles.section4}>
                <div className="container">
                    <Testimonials />
                </div>
            </section>
            <section>
                <AcademySection />
            </section>
        </div>
    );
}
 
export default About;