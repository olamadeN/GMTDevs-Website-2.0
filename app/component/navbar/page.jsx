'use client';
import { MoveRight } from "lucide-react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className={styles.navbar}> 
            <img style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/'} src="/images/logo.png" alt="Logo" className={styles.logo} />
            <ul className={styles.navLinks}>
                <li className={ pathname==='/' ? `${styles.active}`: "" }><a href="/">Home</a></li>
                <li className={ pathname==='/about' ? `${styles.active}`: "" }><a href="/about">About Us</a></li>
                <li className={ pathname==='/services' ? `${styles.active}`: "" }><a href="/services">Services</a></li>
                <li className={ pathname==='/projects' ? `${styles.active}`: "" }><a href="/projects">Projects</a></li>
                <li className={ pathname==='/contact' ? `${styles.active}`: "" }><a href="/contact">Contact us</a></li>
            </ul> 
            <div className="btn">
                GMT Academy <MoveRight size={20} />
            </div>  
        </div>
    )
}
export default Navbar