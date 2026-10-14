'use client';
import styles from './projects.module.css';
import imStyles from '../../page.module.css';
import { CircleChevronRight } from "lucide-react";
import { useRouter } from 'next/navigation';

const Data = [
    {
        "title": "EdvalTours Website Project",
        "description": "Edval Tours is a leading vacation specialist in Nigeria and West Africa, with years of experience delivering seamless, memorable and personalised travel experiences across Africa and around the world. With a strong commitment to quality, the company has built a reputation for creating well organised holidays tailored to the unique needs and expectations of every traveller. Its highly competent team combines professionalism with personal care, ensuring that every guest receives attentive support throughout their journey and enjoys a truly memorable holiday experience. Proudly based in Nigeria, Edval Tours centres many of its tours and experiences around the country while also curating international travel opportunities. Its strong local presence enables the company to provide hands on support and real time updates.",
        "images": ["/images/tour1.png", "/images/tour2.png", "/images/tour3.png"],
        "thumb": "/images/tours.png",
        "link": "/projects/edvaltour",
        "year": 2026,
        "slug": "EdvalTours-Website-Project"
    },
    {
        "title": "EdvalBiography Website Project",
        "description": "Edval Tours is a leading vacation specialist in Nigeria and West Africa, with years of experience delivering seamless, memorable and personalised travel experiences across Africa and around the world. With a strong commitment to quality, the company has built a reputation for creating well organised holidays tailored to the unique needs and expectations of every traveller. Its highly competent team combines professionalism with personal care, ensuring that every guest receives attentive support throughout their journey and enjoys a truly memorable holiday experience. Proudly based in Nigeria, Edval Tours centres many of its tours and experiences around the country while also curating international travel opportunities. Its strong local presence enables the company to provide hands on support and real time updates.",
        "images": ["/images/tour1.png", "/images/tour2.png", "/images/tour3.png"],
        "thumb": "/images/ebiography.png",
        "link": "/projects/edvalbiography",
        "year": 2026,
        "slug": "EdvalBiography-Website-Project"
    },
    {
        "title": "Edval Art Auction Website Project",
        "description": "Edval Tours is a leading vacation specialist in Nigeria and West Africa, with years of experience delivering seamless, memorable and personalised travel experiences across Africa and around the world. With a strong commitment to quality, the company has built a reputation for creating well organised holidays tailored to the unique needs and expectations of every traveller. Its highly competent team combines professionalism with personal care, ensuring that every guest receives attentive support throughout their journey and enjoys a truly memorable holiday experience. Proudly based in Nigeria, Edval Tours centres many of its tours and experiences around the country while also curating international travel opportunities. Its strong local presence enables the company to provide hands on support and real time updates.",
        "images": ["/images/tour1.png", "/images/tour2.png", "/images/tour3.png"],
        "thumb": "/images/auction.png",
        "year": 2026,
        "link": "/projects/edvaltour",
        "slug": "Edval-Art-Auction-Website-Project"
    },
    {
        "title": "E-event Website Project",
        "description": "Edval Tours is a leading vacation specialist in Nigeria and West Africa, with years of experience delivering seamless, memorable and personalised travel experiences across Africa and around the world. With a strong commitment to quality, the company has built a reputation for creating well organised holidays tailored to the unique needs and expectations of every traveller. Its highly competent team combines professionalism with personal care, ensuring that every guest receives attentive support throughout their journey and enjoys a truly memorable holiday experience. Proudly based in Nigeria, Edval Tours centres many of its tours and experiences around the country while also curating international travel opportunities. Its strong local presence enables the company to provide hands on support and real time updates.",
        "images": ["/images/tour1.png", "/images/tour2.png", "/images/tour3.png"],
        "year": 2026,
        "thumb": "/images/eevents.jpg",
        "link": "/projects/edvaltour",
        "slug": "E-event-Website-Project"
    }
   
]

const ProjectsPage = () => {
    const router = useRouter();
    return ( 
        <div>
            <section className={styles.bodySection}>
                <div className='container'>
                    <h2>Here’s a number of selected works . . . </h2>
                    <div className={imStyles.section2CardCont}>
                        { Data.map((proj, index)=>(
                           <div key={index} onClick={() => router.push(`/projects/${proj.slug}?data=${JSON.stringify(proj)}`)} className={imStyles.section2Card}>
                                <img src={proj.thumb} alt="edvaltours" />
                                <div className={imStyles.section2CardOverlay}>
                                    <div className={`container ${imStyles.overlayTxt}`}>
                                        <div>
                                            <p>{proj.title}</p>
                                            <p>{proj.year}</p>
                                        </div>
                                        <CircleChevronRight size={28}/>
                                    </div>
                                </div>
                            </div>))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default ProjectsPage;