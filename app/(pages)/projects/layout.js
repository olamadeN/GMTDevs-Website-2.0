import styles from './projects.module.css';
import imStyles from '../../page.module.css';
import AcademySection from "@/app/component/academySection/academy";
import Testimonials from "@/app/component/testimonialSection/testimonial";
import Navbar from "@/app/component/navbar/page";


export const metadata = {
    title: "Our Projects & Portfolio - GMTDevs Global",
    description: "Explore the GMTDevs Global portfolio of custom websites, web applications, and digital solutions built to deliver seamless user experiences, functionality, and business value.",
    openGraph: {
        title: "Our Projects & Portfolio - GMTDevs Global",
        description: "Explore the GMTDevs Global portfolio of custom websites, web applications, and digital solutions built to deliver seamless user experiences, functionality, and business value.",
        url: "/projects",
    },
};

export default function RootLayout({ children }) {
  return (
    <div>
        <header className='header'>
            <div className="navbarContainer">
                <Navbar />
            </div>
            <div className='container headerContent'>                
                <div className='headerTxt'>
                    <h1> Explore our {/* recent */} <span style={{color: 'var(--text-secondary)'}}>projects</span>.</h1>
                    <p>A selection of {/* websites, applications, platforms and */} digital experiences we've designed and developed for businesses and organizations.</p>
                </div>
                <div className='globeWrapper'>
                    <img className='globe' src='/images/globe.png' alt="globe" />
                </div>
            </div>
        </header>
        <section className={styles.bodySection}>
            <div className='container'>                    
                {children}
            </div>
        </section>
        <section className={imStyles.section4}>
            <div className="container">
                <Testimonials />
            </div>
        </section>

        <section className={imStyles.section3}>
            <AcademySection />
        </section>
    </div>
        
 
  );
}
