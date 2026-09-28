import { MoveRight } from 'lucide-react';
import styles from './serviceCard.module.css';
const OurServiceCard = () => {
    
    
    return(
        <div className={styles.cardCont}>
            <img src="" alt="" />
            <h4>Design services</h4>
            <p>
               We design and develop powerful, scalable applications tailored to your business needs. Our solutions are readily and directly built for security, functionality, performance and reliability, helping your business turn novel ideas into dependable digital products. 
            </p>
            <div className='btn'>Learn more <MoveRight size={20} /></div>
        </div>
    )
}

export default OurServiceCard