
import Navbar from '@/app/component/navbar/page';
import styles from './services.module.css';
import Styles from '../../page.module.css';
import { MoveRight } from 'lucide-react';
export { metadata } from "./metadata";
import AcademySection from '@/app/component/academySection/academy';
import Link from 'next/link';
import SlideInRight from '@/app/component/animations/slideRight';
import SlideInLeft from '@/app/component/animations/slideLeft';
import SlideUp from '@/app/component/animations/slideUp';


const Services = () => {

    return ( 
        <div className={styles.aboutCont}>
            <header className='header'>
                <div className="navbarContainer">
                    <Navbar />
                </div>
                <div className='container headerContent'>   
                    <div className='headerTxt'>
                        <SlideUp delay={0.2} duration={0.8} distance={30}>
                            <h1>Our <span style={{ color: 'var(--text-secondary)' }}>Services</span></h1>
                            <p>Our Mission Is To Make Your Business Better Through Technology</p>
                        </SlideUp>
                    </div>
                    <div className='globeWrapper'>
                        <img className='globe' src='/images/globe.png' alt="globe" />
                    </div>
                   
                </div>
            </header>
            <div>
                <section className={styles.aboutSection1}>
                    <div id='design' className={`${Styles.aboutUsCont} ${styles.servicesCont}`}>
                        <div className={`${Styles.left} ${styles.left}`}>
                            <p className={styles.Number}>01.</p>
                        </div>
                        <div className={`${Styles.right} ${styles.right}`}>
                            <div className={Styles.right1}>
                                <h3>Design services</h3>
                                <p>Design is not decoration. It is how people understand your product, navigate your business and decide what to do next. We design digital experiences that bring clarity to complex ideas and make products easier for people to understand and use.</p>
                            </div>
                            <div className={Styles.right2}>
                                <img src='/images/plane.png'/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`container ${styles.aboutSection2}`}>
                    <SlideInRight delay={0.35} distance={50}>
                        <div className={`${styles.doubleSection} ${styles.sectionImgLeft}`}>
                            <div className={styles.sectionTxtPack}>
                                <h3>UI/UX Design</h3>
                                <p>We design digital experiences that are intuitive, purposeful and easy to navigate. From user flows and information architecture to wireframes and high fidelity interfaces, we think through how every part of the experience should work. The goal is to create products that feel natural to use while helping businesses achieve their objectives.</p>
                            </div>  
                            <div className={styles.sectionImgPack}>
                                <img src="/images/uiUx.png" alt="man holding a laptop" />
                            </div>
                        </div>
                    </SlideInRight>
                    <SlideInLeft delay={0.2} distance={30} duration={0.8}>
                        <div className={`${styles.doubleSection} ${styles.sectionImgRight}`}>
                            <div className={styles.sectionTxtPack}>
                                <h3>Website & Product Redesign</h3>
                                <p>When an existing website or digital product is difficult to use, giving it a new look may not solve the problem. We identify usability issues, confusing workflows and missed opportunities, then redesign the experience to better serve your customers and business objectives without losing what already works.</p>
                            </div>  
                            <div className={styles.sectionImgPack}>
                                <img src="/images/webDesign.png" alt="man holding a laptop" />
                            </div>
                        </div>
                    </SlideInLeft>
                    <SlideInRight delay={0.2} distance={30} duration={0.8}>
                        <div className={`${styles.doubleSection} ${styles.sectionImgLeft}`}>
                            <div className={styles.sectionTxtPack}>
                                <h3>Product Redesign</h3>
                                <p>When an existing digital product is difficult to use, simply giving it a new look may not solve the problem. We examine the current experience to identify friction, confusing workflows and missed opportunities, then redesign the product around how users actually need to interact with it. The result is a clearer, more efficient experience without losing the parts that already work.</p>
                            </div>  
                            <div className={styles.sectionImgPack}>
                                <img src="/images/prodRedesign.png" alt="man holding a laptop" />
                            </div>
                        </div>
                    </SlideInRight>
                    <div className='btnPack'>
                        <Link href="/contact" className='btnPills'> Get in touch with us </Link>
                        <Link href="/projects" className='btn'>Explore projects <MoveRight size={20} /></Link>
                    </div>
                </section>
            </div>
            <br /><br />
            <br /><br />
            <div>
                <section className={styles.aboutSection1}>
                    <div id='development' className={`${Styles.aboutUsCont} ${styles.servicesCont}`}>
                        <div className={`${Styles.left} ${styles.left}`}>
                            <p className={styles.Number}>02.</p>
                        </div>
                        <div className={`${Styles.right} ${styles.right}`}>
                            <div className={Styles.right1}>
                                <h3>Development services</h3>
                                <p>A beautiful interface is only the beginning. Our web development team creates reliable digital solutions that work across devices, meet customer needs and support business growth.</p>
                            </div>
                            <div className={Styles.right2}>
                                <img src='/images/plane.png'/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`container ${styles.aboutSection2}`}>
                    <SlideInLeft delay={0.2} distance={30} duration={0.8}>
                        <div className={`${styles.doubleSection} ${styles.sectionImgLeft}`}>
                            <div className={styles.sectionTxtPack}>
                                <h3>Website & Web App Development</h3>
                                <p>We develop custom websites, e-commerce platforms and web applications that help businesses reach customers and operate more efficiently. Whether you need a business website, online store, customer portal or booking platform, we build reliable, responsive solutions around your business goals and everyday needs.</p>
                            </div>  
                            <div className={styles.sectionImgPack}>
                                <img src="/images/webDev.png" alt="man holding a laptop" />
                            </div>
                        </div>
                    </SlideInLeft>
                    <SlideInRight delay={0.2} distance={30} duration={0.8}>
                        <div className={`${styles.doubleSection} ${styles.sectionImgRight}`}>
                            <div className={styles.sectionTxtPack}>
                                <h3>SaaS & Business Platforms</h3>
                                <p>We develop custom software, SaaS platforms and content management systems that help businesses manage information, automate processes and streamline operations. Instead of relying on disconnected tools and repetitive manual tasks, your team gets a solution designed around how your business works.</p>
                            </div>  
                            <div className={styles.sectionImgPack}>
                                <img src="/images/SaaS.png" alt="man holding a laptop" />
                            </div>
                        </div>
                    </SlideInRight>
                    <SlideInLeft delay={0.2} distance={30} duration={0.8}>
                        <div className={`${styles.doubleSection} ${styles.sectionImgLeft}`}>
                            <div className={styles.sectionTxtPack}>
                                <h3>Maintenance & Support</h3>
                                <p>Launching a digital product is only the beginning. We provide website maintenance, technical support, updates and ongoing improvements to keep your solution working as your needs change. Whether you need to fix issues, improve performance or introduce new features, we help your digital product remain useful and dependable over time.</p>
                            </div>  
                            <div className={styles.sectionImgPack}>
                                <img src="/images/support.png" alt="man holding a laptop" />
                            </div>
                        </div>
                    </SlideInLeft>
                    <div className='btnPack'>
                        <Link href="/contact" className='btnPills'> Get in touch with us </Link>
                        <Link href="/projects" className='btn'>Explore projects <MoveRight size={20} /></Link>
                    </div>
                </section>
            </div>
            <br /><br />
            <br /><br />
            <section>
                <AcademySection />
            </section>
        </div>
    );
}
 
export default Services;