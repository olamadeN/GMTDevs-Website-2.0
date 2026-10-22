'use client';
import styles from './projects.module.css';
import imStyles from '../../page.module.css';
import { CircleChevronRight } from "lucide-react";
import { useRouter } from 'next/navigation';

const Data = [
    {
        "title": "EdvalTours Website Project",
        "description": "Edval Tours is a leading vacation specialist in Nigeria and West Africa, with years of experience delivering seamless, memorable and personalised travel experiences across Africa and around the world. With a strong commitment to quality, the company has built a reputation for creating well organised holidays tailored to the unique needs and expectations of every traveller. Its highly competent team combines professionalism with personal care, ensuring that every guest receives attentive support throughout their journey and enjoys a truly memorable holiday experience. Proudly based in Nigeria, Edval Tours centres many of its tours and experiences around the country while also curating international travel opportunities. Its strong local presence enables the company to provide hands on support and real time updates.",
        "images": ["/images/edvaltour/1.png", "/images/edvaltour/2.png", "/images/edvaltour/3.png", "/images/edvaltour/4.png", "/images/edvaltour/5.png", "/images/edvaltour/6.png", "/images/edvaltour/side.png"],
        "thumb": "/images/tours.png",
        "banner": "/images/tours.png",
        "featured": "/images/edvaltour/side.png",
        "link": "/projects/edvaltour",
        "year": 2026,
        "slug": "EdvalTours-Website-Project"
    },
    {
        "title": "EdvalBiography Website Project",
        "description": "GMTDevs designed and developed a modern, responsive website for EDVAL Biography, a company specialising in biography writing, historical documentation, and research services. The project focused on creating a professional digital presence that effectively showcases the company's expertise, communicates its services, and makes it easy for potential clients to connect. Key features include a clean and modern interface, responsive design across all devices, intuitive navigation, dedicated service pages, streamlined enquiry pathways, and strategically placed calls to action. The website strengthens the brand's credibility, improves user experience, and provides an effective platform for attracting and engaging prospective clients.",
        "images": ["/images/biography/1.png", "/images/biography/2.png", "/images/biography/3.png"],
        "thumb": "/images/ebiography.png",
        "banner": "/images/biography/thumb.png",
        "featured": "/images/biography/featured.png",
        "link": "/projects/edvalbiography",
        "year": 2025,
        "slug": "EdvalBiography-Website-Project"
    },
  /*   {
        "title": "Arise Contractors Group Project",
        "description": "GMTDevs designed and developed a modern, responsive website for Arise Contractors Group, a Texas-based construction and remodeling company specialising in residential and commercial projects. The project focused on creating a professional digital presence that showcases the company's expertise, highlights its completed projects, and makes it easy for potential clients to explore services and request consultations. Key features include a visually appealing interface, responsive design across all devices, intuitive navigation, dedicated service pages, an interactive project portfolio gallery, client testimonials, and strategically placed calls to action. The website strengthens the company's brand identity, builds credibility with prospective clients, and provides an effective platform for showcasing its craftsmanship and generating new business opportunities.",
        "images": ["/images/arise/1.png", "/images/arise/2.png", "/images/arise/3.png", "/images/arise/4.png", "/images/arise/5.png"],
        "thumb": "/images/arise/thumb.png",
        "banner": "/images/arise/thumb.png",
        "featured": "/images/arise/featured.png",
        "year": 2023,
        "link": "/projects/arise-contractors-project",
        "slug": "Arise-contractors-Website-Project"
    }, */
    {
        "title": "Foremaj Nigeria Project",
        "description": "GMTDevs designed and developed a modern, responsive website for FOREMAJ Nigeria Limited, a Nigerian company specialising in the sourcing and export of high-quality agricultural products, local spices, and authentic Nigerian food products to international markets. The project focused on establishing a professional digital presence that showcases the company's product offerings, communicates its commitment to quality, and connects it with potential customers and business partners worldwide. Key features include a clean and visually appealing interface, responsive design across all devices, intuitive navigation, dedicated product categories, engaging product displays, and streamlined contact and enquiry options. The website strengthens FOREMAJ's brand credibility, improves product visibility, and provides an effective digital platform for attracting international buyers and supporting business growth.",
        "images": ["/images/foremaj/1.png", "/images/foremaj/2.png", "/images/foremaj/3.png", "/images/foremaj/4.png", "/images/foremaj/5.png", "/images/foremaj/6.png"],
        "year": 2024,
        "thumb": "/images/foremaj/thumb.png",
        "featured": "/images/foremaj/2.png",
        "banner": "/images/foremaj/thumb.png",
        "link": "/projects/foremaj",
        "slug": "foremaj-Website-Project"
    },
    {
        "title": "Foodieland concept Project",
        "description": "Tobams Foodieland is a responsive food-themed web application developed to demonstrate modern web development capabilities and user-centred design principles. The project focuses on delivering an engaging digital experience through a clean, visually appealing interface that makes it easy for users to explore food offerings. Key features include responsive layouts across devices, intuitive navigation, engaging food displays, and a streamlined user interface. The project showcases practical expertise in front-end development, interface design, and building functional, visually appealing web experiences.",
        "images": ["/images/foodieland/1.png", "/images/foodieland/2.png", "/images/foodieland/3.png", "/images/foodieland/4.png", "/images/foodieland/featured.png"],
        "year": 2024,
        "thumb": "/images/foodieland/thumb.png",
        "featured": "/images/foodieland/featured.png",
        "banner": "/images/foodieland/thumb.png",
        "link": "/projects/foodieland",
        "slug": "Foodieland-Concept-Project"
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