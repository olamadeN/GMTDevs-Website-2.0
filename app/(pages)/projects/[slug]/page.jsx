'use client';
import styles from './projectDetails.module.css';
import { ArrowLeft } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Zoom, Counter } from 'yet-another-react-lightbox/plugins';
const ProductDetails = () => {

    const searchParams = useSearchParams();
    const search = searchParams.get('data');
    const projectData = JSON.parse(search);
    const router = useRouter();
    console.log(projectData.images);

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const openImage = (i) => {
        setIndex(i);
        setOpen(true);
    };


    return ( 
        <div>
            <div onClick={router.back} className={styles.back}>
                <ArrowLeft size={24} />
                <p>go back</p>
            </div>
            <h2>{projectData.title}</h2>
            <div className={styles.thumb}>
                <img src={projectData.banner} alt={projectData.title} />
            </div>
            <section className={styles.double}>
                <p>{projectData.description}</p>
                <img src={projectData?.featured} alt={projectData.title} />
            </section>
            <section>
                <div className={styles.snapTitlePack}>
                    <h2>Project snapshots</h2>
                    <p>Click on any image to view</p>
                </div>
                <div className={styles.snapshotPack}>
                    {projectData?.images.map((img, i)=>(
                        <div key={img} className={styles.portfolioItem} onClick={() => openImage(i)} aria-label={`View screenshot`} >
                            <img src={img} alt='screenshot' loading="lazy"/>
                        </div>
                    ))}
                </div>
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={index}
                    slides={projectData?.images.map((image)=>({
                        src: image,
                    }))}
                    plugins={[Zoom, Counter]}
                    animation={{ fade: 300, swipe: 450 }}
                    carousel={{ imageFit: "contain", finite: true, }}
                    controller={{ closeOnBackdropClick: true }}
                    zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
                    styles={{
                        container: {
                            backgroundColor: "#F4EEE5",
                        },
                    }}
                />
            </section>
        </div>
    );
}
 
export default ProductDetails;