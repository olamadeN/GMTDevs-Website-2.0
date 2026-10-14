'use client';
import styles from './projectDetails.module.css';
import { ArrowLeft } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation'
const ProductDetails = () => {

    const searchParams = useSearchParams();
    const search = searchParams.get('data');
    const projectData = JSON.parse(search);
    const router = useRouter();
    console.log(projectData);
    return ( 
        <div>
            <div onClick={router.back} className={styles.back}>
                <ArrowLeft size={24} />
                <p>go back</p>
            </div>
            <h2>{projectData.title}</h2>
            <div className={styles.thumb}>
                <img src={projectData.thumb} alt={projectData.title} />
            </div>
            
            <p>{projectData.description}</p>
        </div>
    );
}
 
export default ProductDetails;