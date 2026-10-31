
import Navbar from '@/app/component/navbar/page';
import styles from './services.module.css';
import Styles from '../../page.module.css';
import { MoveRight } from 'lucide-react';
export { metadata } from "./metadata";
import AcademySection from '@/app/component/academySection/academy';
import Link from 'next/link';


const Services = () => {

    return ( 
        <div className={styles.aboutCont}>
            <header className='header'>
                <div className="navbarContainer">
                    <Navbar />
                </div>
                <div className='container headerContent'>                
                    <div className='headerTxt'>
                        <h1>Our <span style={{ color: 'var(--text-secondary)' }}>Services</span></h1>
                        <p>Our Mission Is To Make Your Business Better Through Technology</p>
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
                    <div className={`${styles.doubleSection} ${styles.sectionImgLeft}`}>
                        <div className={styles.sectionTxtPack}>
                            <h3>UI/UX Design</h3>
                            <p>We design digital experiences that are intuitive, purposeful and easy to navigate. From user flows and information architecture to wireframes and high fidelity interfaces, we think through how every part of the experience should work. The goal is to create products that feel natural to use while helping businesses achieve their objectives.</p>
                        </div>  
                        <div className={styles.sectionImgPack}>
                            <img src="/images/uiUx.png" alt="man holding a laptop" />
                        </div>
                    </div>
                    <div className={`${styles.doubleSection} ${styles.sectionImgRight}`}>
                        <div className={styles.sectionTxtPack}>
                            <h3>Website Design</h3>
                            <p>We turn product ideas into clear, structured and usable digital experiences. We explore the users, features, journeys and interactions that make a product valuable before shaping them into a complete interface. Whether you are starting with an early concept or refining an existing product, we help create an experience that makes sense from the first interaction to the last.</p>
                        </div>  
                        <div className={styles.sectionImgPack}>
                            <img src="/images/webDesign.png" alt="man holding a laptop" />
                        </div>
                    </div>
                    <div className={`${styles.doubleSection} ${styles.sectionImgLeft}`}>
                        <div className={styles.sectionTxtPack}>
                            <h3>Product Redesign</h3>
                            <p>When an existing digital product is difficult to use, simply giving it a new look may not solve the problem. We examine the current experience to identify friction, confusing workflows and missed opportunities, then redesign the product around how users actually need to interact with it. The result is a clearer, more efficient experience without losing the parts that already work.</p>
                        </div>  
                        <div className={styles.sectionImgPack}>
                            <img src="/images/prodRedesign.png" alt="man holding a laptop" />
                        </div>
                    </div>
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
                                <p>A beautiful interface is only the beginning. Our development team turns concepts and designs into reliable digital products that work across devices, users and real-world business situations.</p>
                            </div>
                            <div className={Styles.right2}>
                                <img src='/images/plane.png'/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`container ${styles.aboutSection2}`}>
                    <div className={`${styles.doubleSection} ${styles.sectionImgLeft}`}>
                        <div className={styles.sectionTxtPack}>
                            <h3>Website Development</h3>
                            <p>We develop web applications that allow businesses and their customers to do more online. Whether you need a customer portal, dashboard, booking platform or custom application, we build the functionality around the workflows that matter most. Every component is developed with usability, reliability and the realities of everyday use in mind</p>
                        </div>  
                        <div className={styles.sectionImgPack}>
                            <img src="/images/webDev.png" alt="man holding a laptop" />
                        </div>
                    </div>
                    <div className={`${styles.doubleSection} ${styles.sectionImgRight}`}>
                        <div className={styles.sectionTxtPack}>
                            <h3>SaaS, Business CMS Platforms</h3>
                            <p>We build custom digital platforms that help businesses bring important processes, information and operations into one place. Instead of relying on disconnected tools and repetitive manual processes, your team gets a system designed around how your organization actually works. </p>
                        </div>  
                        <div className={styles.sectionImgPack}>
                            <img src="/images/SaaS.png" alt="man holding a laptop" />
                        </div>
                    </div>
                    <div className={`${styles.doubleSection} ${styles.sectionImgLeft}`}>
                        <div className={styles.sectionTxtPack}>
                            <h3>Post-Launch Support</h3>
                            <p>Launching a digital product is only the beginning. We provide ongoing technical support, improvements, updates and feature development to keep your website or application working as your needs change. Whether you need to fix issues, improve performance or introduce new capabilities, we help your product remain useful and dependable over time.</p>
                        </div>  
                        <div className={styles.sectionImgPack}>
                            <img src="/images/support.png" alt="man holding a laptop" />
                        </div>
                    </div>
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