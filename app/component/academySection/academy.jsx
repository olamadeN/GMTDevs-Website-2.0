import { MoveRight } from 'lucide-react';
import styles from './academy.module.css';
const AcademySection = () => {
    
    
    return(
        <div className={styles.container}>
            <div className={`container ${styles.contInner}`}>
                <div className={styles.textPack}>
                    <div>
                        <h5>INTRODUCING</h5>
                        <h3>GMTDevs Academy</h3>
                        <div className='underline'></div>
                    </div>
                    <div>
                        <h1>Launch your career in tech today.</h1>
                        <p>Our academy is a hands-on learning space for people who want to get into tech and actually understand how things work. Learn coding, software development, and other digital skills by building projects, solving problems, and learning from people who build technology for a living.</p>   
                        
                    </div>
                    <div className='btnPills'>Learn more <MoveRight size={20} /></div>
                </div>
            </div>
            
        </div>
    )
}

export default AcademySection