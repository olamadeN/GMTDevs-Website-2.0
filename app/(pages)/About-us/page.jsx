import Navbar from '@/app/component/navbar/page';
import styles from './about.module.css';
const About = () => {
  
    return ( 
        <div className={styles.aboutCont}>
            <header className='header'>
                <div className="navbarContainer">
                    <Navbar />
                </div>
                <div className='container headerContent'>                
                    <div className='headerTxt'>
                        <h1><span style={{ color: 'var(--text-secondary)' }}>About</span> us</h1>
                        <p>We develop and implement solutions that support your business growth and simplify daily operations every step of the way.</p>
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
                            <div className={styles.aboutCard1}>
                                <p>Business</p>
                                <p>We understand the objectives behind the product and the people it needs to serve.</p>
                            </div>
                            <div className={styles.aboutCard2}>
                                <p>Design</p>
                                <p>We create experiences that are clear, intuitive and purposeful.</p>
                            </div>
                            <div className={styles.aboutCard3}>
                                <p>Development</p>
                                <p>We build reliable digital products that can support real users and real growth. The result are solutions that aren’t only functional, but actually works.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    );
}
 
export default About;