'use client'
import styles from "./page.module.css";
import Navbar from "./component/navbar/page";
import { CircleChevronRight, MoveRight } from "lucide-react";
import LaptopCarousel from "./component/headerSlider/page";
import Link from "next/link";
import AcademySection from "./component/academySection/academy";
import Testimonials from "./component/testimonialSection/testimonial";
import { motion, useReducedMotion } from "motion/react";



export default function Home() {
  const reduceMotion = useReducedMotion();
  const entrance = (delay = 0, distance = 18) => ({
    initial: reduceMotion ? false : { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.65, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
  });
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="navbarContainer">
          <Navbar />
        </div>
        <div className={styles.heroContent}>
          <motion.h1 {...entrance(0.05, 14)} className={styles.heroTitle}> Custom Websites, Web Apps and <span style={{color:'#CB8731'}}> Digital Solutions</span> for Growing Businesses</motion.h1>
          <motion.p {...entrance(0.16, 14)}>Your business is unique. Your software should be too. We design and develop bespoke websites, web applications, e-commerce platforms and digital solutions that simplify daily operations and support business growth.</motion.p>
          <motion.div {...entrance(0.26, 12)} className={styles.btnPack}>
            <Link href="/contact" className='btnPills'>Get in touch with us</Link>
            <Link href="/projects" className='btn'>Explore projects <MoveRight size={20} /></Link>
          </motion.div>
        </div>
        <div className={styles.heroContent2}>     
          <div className={`container ${styles.blankWhite}`}>
          </div>     
          <div className={`container ${styles.carouselContainer}`}>
            <LaptopCarousel className={styles.carousel} />
          </div>          
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.section1}>
          <div className={styles.aboutUsCont}>
            <motion.div {...entrance(0, 16)} className={styles.left}>
              <h3>About us.</h3>
              <div className='underline'></div>
            </motion.div>
            <div className={styles.right}>
              <motion.div {...entrance(0.08, 18)} className={styles.right1}>
                <p>At GMTDevs, we create clean, effective websites and digital solutions tailored to businesses and personal brands. Our designs focus on functionality, user experience, and your unique goals, making sure your website is not just beautiful but also working.
                  We are not just developers; we are your partners in taking your brand online
                  and helping you thrive in the digital world.
                </p>
                <Link href="/About-us" className='btn'>Learn more <MoveRight size={20} /></Link>
              </motion.div>
              <div className={styles.right2}>
                <img src='/images/plane.png'/>
              </div>
            </div>
          </div>
          <div className={`container ${styles.ourServices}`}>
            <motion.div {...entrance(0, 16)} className={styles.serviceLeft}>
              <h3>Our <span>Services</span> </h3>
              <div className='underline'></div>
            </motion.div>
            <div className={styles.ServiceRight}>
              <motion.div {...entrance(0.06, 18)} className={styles.cardCont}>
                <img src="/images/designService.png" alt="Design Service" />
                <h4>Design services</h4>
                <p>
                  We design and develop powerful, scalable applications tailored to your business needs. Our solutions are readily and directly built for security, functionality, performance and reliability, helping your business turn novel ideas into dependable digital products. 
                </p>
                <br />
                <Link href="/services#design" className='btn'>Learn more <MoveRight size={20} /></Link>
              </motion.div>
              <motion.div {...entrance(0.16, 18)} className={styles.cardCont}>
                <img src="/images/devService.png" alt="Development Service" />
                <h4>Development services</h4>
                <p>
                  We develop tailored software solutions that address your unique business requirements and workflows. Our applications are designed to improve efficiency, automate processes, and provide scalable solutions that grow with your organization.
                </p>
                <br />
                <Link href="/services#development" className='btn'>Learn more <MoveRight size={20} /></Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className={styles.section2}>
          <div className='container'>         
            <motion.div {...entrance(0, 16)} className={styles.section2Header}>
              <div>
                <h5>GMTDevs</h5>
                <h2>Curious About Our Work?</h2>
              </div>
              <Link href="/projects" className="btnPills">See more <MoveRight size={20} /></Link>
            </motion.div>
            <div className={styles.section2CardCont}>
              <motion.div {...entrance(0.05, 20)} className={styles.section2Card}>
                <Link href="https://www.edvaltour.com/" target='__blank'>
                  <img src='/images/tours.png' alt="edvaltours" />
                  <div className={styles.section2CardOverlay}>
                    <div className={`container ${styles.overlayTxt}`}>
                      <div>
                        <p>EdvalTours Website Project</p>
                        <p>2025</p>
                      </div>
                      <CircleChevronRight size={28}/>
                    </div>
                  </div>
                </Link>
              </motion.div>
              <motion.div {...entrance(0.12, 20)} className={styles.section2Card}>
                <Link href="https://edvalbiograhpy.com/" target='__blank'>
                  <img src='/images/ebiography.png' alt="edval biography" />
                  <div className={styles.section2CardOverlay}>
                    <div className={`container ${styles.overlayTxt}`}>
                      <div>
                        <p>Edval Biography Website Project</p>
                        <p>2026</p>
                      </div>
                      <CircleChevronRight size={28}/>
                    </div>
                  </div>
                </Link>
              </motion.div>
              <motion.div {...entrance(0.19, 20)} className={styles.section2Card}>
                <Link href="https://www.edvaltour.com/" target='__blank'>
                  <img src='/images/auction.png' alt="edval art auction" />
                  <div className={styles.section2CardOverlay}>
                    <div className={`container ${styles.overlayTxt}`}>
                      <div>
                        <p>Edval Art Auction Website Project</p>
                        <p>2026</p>
                      </div>
                      <CircleChevronRight size={28}/>
                    </div>
                  </div>
                </Link>  
              </motion.div>
              <motion.div {...entrance(0.26, 20)} className={styles.section2Card}>
                <Link href="https://www.eevents.event/" target='__blank'>
                  <img src='/images/eevents.jpg' alt="eevents" />
                  <div className={styles.section2CardOverlay}>
                    <div className={`container ${styles.overlayTxt}`}>
                      <div>
                        <p>E-events Website Project</p>
                        <p>2025</p>
                      </div>
                      <CircleChevronRight size={28}/>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className={styles.section3}>
          <AcademySection />
        </section>

        <section className={styles.section4}>
          <div className="container">
            <Testimonials />
          </div>
        </section>
      </main>
    </div>
  );
}




/* 'use client'
import styles from "./page.module.css";
import Navbar from "./component/navbar/page";
import { CircleChevronRight, MoveRight } from "lucide-react";
import LaptopCarousel from "./component/headerSlider/page";
import Link from "next/link";
import AcademySection from "./component/academySection/academy";
import Testimonials from "./component/testimonialSection/testimonial";
import { useRouter } from "next/navigation";



export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="navbarContainer">
          <Navbar />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}> Custom Websites, Web Apps and <span style={{color:'#CB8731'}}> Digital Solutions</span> for Growing Businesses</h1>
          <p>Your business is unique. Your software should be too. We design and develop bespoke websites, web applications, e-commerce platforms and digital solutions that simplify daily operations and support business growth.</p>
          <div className={styles.btnPack}>
            <div onClick={()=>router.push('/contact')} className='btnPills'> Get in touch with us </div>
            <div className='btn' onClick={()=>router.push('/projects')}>Explore projects <MoveRight size={20} /></div>
          </div>
        </div>
        <div className={styles.heroContent2}>     
          <div className={`container ${styles.blankWhite}`}>
          </div>     
          <div className={`container ${styles.carouselContainer}`}>
            <LaptopCarousel className={styles.carousel} />
          </div>          
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.section1}>
          <div className={styles.aboutUsCont}>
            <div className={styles.left}>
              <h3>About us.</h3>
              <div className='underline'></div>
            </div>
            <div className={styles.right}>
              <div className={styles.right1}>
                <p>At GMTDevs, we create clean, effective websites and digital solutions tailored to businesses and personal brands. Our designs focus on functionality, user experience, and your unique goals, making sure your website is not just beautiful but also working.
                  We are not just developers; we are your partners in taking your brand online
                  and helping you thrive in the digital world.
                </p>
                <div onClick={()=>router.push('/About-us')} className='btn'>Learn more <MoveRight size={20} /></div>
              </div>
              <div className={styles.right2}>
                <img src='/images/plane.png'/>
              </div>
            </div>
          </div>
          <div className={`container ${styles.ourServices}`}>
            <div className={styles.serviceLeft}>
              <h3>Our <span>Services</span> </h3>
              <div className='underline'></div>
            </div>
            <div className={styles.ServiceRight}>
              <div className={styles.cardCont}>
                <img src="/images/designService.png" alt="Design Service" />
                <h4>Design services</h4>
                <p>
                  We design and develop powerful, scalable applications tailored to your business needs. Our solutions are readily and directly built for security, functionality, performance and reliability, helping your business turn novel ideas into dependable digital products. 
                </p>
                <br />
                <div onClick={()=>router.push('/services#design')} className='btn'>Learn more <MoveRight size={20} /></div>
              </div>
              <div className={styles.cardCont}>
                <img src="/images/devService.png" alt="Development Service" />
                <h4>Development services</h4>
                <p>
                  We develop tailored software solutions that address your unique business requirements and workflows. Our applications are designed to improve efficiency, automate processes, and provide scalable solutions that grow with your organization.
                </p>
                <br />
                <div onClick={()=>router.push('/services#development')} className='btn'>Learn more <MoveRight size={20} /></div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section2}>
          <div className='container'>         
            <div className={styles.section2Header}>
              <div>
                <h5>GMTDevs</h5>
                <h2>Curious About Our Work?</h2>
              </div>
              <div onClick={()=>router.push('/projects')} className="btnPills">See more <MoveRight size={20} /></div>
            </div>
            <div className={styles.section2CardCont}>
              <div className={styles.section2Card}>
                <Link href="https://www.edvaltour.com/" target='__blank'>
                  <img src='/images/tours.png' alt="edvaltours" />
                  <div className={styles.section2CardOverlay}>
                    <div className={`container ${styles.overlayTxt}`}>
                      <div>
                        <p>EdvalTours Website Project</p>
                        <p>2025</p>
                      </div>
                      <CircleChevronRight size={28}/>
                    </div>
                  </div>
                </Link>
              </div>
              <div className={styles.section2Card}>
                <Link href="https://edvalbiograhpy.com/" target='__blank'>
                  <img src='/images/ebiography.png' alt="edval biography" />
                  <div className={styles.section2CardOverlay}>
                    <div className={`container ${styles.overlayTxt}`}>
                      <div>
                        <p>Edval Biography Website Project</p>
                        <p>2026</p>
                      </div>
                      <CircleChevronRight size={28}/>
                    </div>
                  </div>
                </Link>
              </div>
              <div className={styles.section2Card}>
                <Link href="https://www.edvaltour.com/" target='__blank'>
                  <img src='/images/auction.png' alt="edval art auction" />
                  <div className={styles.section2CardOverlay}>
                    <div className={`container ${styles.overlayTxt}`}>
                      <div>
                        <p>Edval Art Auction Website Project</p>
                        <p>2026</p>
                      </div>
                      <CircleChevronRight size={28}/>
                    </div>
                  </div>
                </Link>  
              </div>
              <div className={styles.section2Card}>
                <Link href="https://www.eevents.event/" target='__blank'>
                  <img src='/images/eevents.jpg' alt="eevents" />
                  <div className={styles.section2CardOverlay}>
                    <div className={`container ${styles.overlayTxt}`}>
                      <div>
                        <p>E-events Website Project</p>
                        <p>2025</p>
                      </div>
                      <CircleChevronRight size={28}/>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section3}>
          <AcademySection />
        </section>

        <section className={styles.section4}>
          <div className="container">
            <Testimonials />
          </div>
        </section>
      </main>
    </div>
  );
}
 */