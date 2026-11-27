'use client';
import styles from './projects.module.css';
import imStyles from '../../page.module.css';
import { CircleChevronRight } from "lucide-react";
import { useRouter } from 'next/navigation';
import SlideUp from '@/app/component/animations/slideUp';

const Data = [
    {
        "title": "EdvalTours Website Project",
        "description":`Edval Tours is a Nigerian travel company offering personalised tours, vacation experiences and travel services across Africa and beyond.
GMTDevs designed and developed a responsive travel website that presents the company's destinations, tour packages and services in an accessible and engaging way.
The website provides prospective travellers with a central platform to explore available experiences, learn about the company's services and submit booking enquiries.`,
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
        "description": `Edval Biography specialises in biography writing, historical documentation and research services for individuals, institutions and organisations. 
        GMTDevs redesigned and developed a responsive website that presents the company's expertise and services in a professional and accessible way. Through dedicated service pages, intuitive navigation and clear enquiry pathways, prospective clients can easily understand the company's offerings and request its services. 
        The website helps Edval Biography establish credibility, communicate the value of its expertise and create opportunities to attract new clients.`,
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
        "description": `FOREMAJ Nigeria Limited specialises in sourcing and exporting quality agricultural products, local spices and authentic Nigerian food products to international markets.
        GMTDevs designed and developed a responsive business website that showcases the company's product offerings and makes them accessible to prospective buyers worldwide. With dedicated product categories, detailed product information and clear enquiry pathways, international buyers can easily explore available products and connect with the company. 
        The website supports FOREMAJ's efforts to build credibility, reach international customers and create new business opportunities beyond its local market.`,
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
        "description": `Foodieland is a responsive food and recipe website concept developed to demonstrate how digital platforms can help food brands engage and grow their audiences.
        The project features engaging food displays, organised recipe collections, intuitive navigation and a newsletter subscription interface. Its user-centred design makes it easier for visitors to discover recipes, explore content and engage with the platform across different devices.
        The concept demonstrates how thoughtful website design and front-end development can support content discovery, audience engagement and brand growth in the food and lifestyle industry.`,
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
        <section className={styles.bodySection}>
            <h2>Explore our selected work . . . </h2>
            <div className={imStyles.section2CardCont}>
                { Data.map((proj, index)=>(
                    <SlideUp delay={0.1} duration={0.8} distance={30}> 
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
                        </div>
                    </SlideUp>
                    ))
                }
            </div>
        </section>
    );
}
 
export default ProjectsPage;