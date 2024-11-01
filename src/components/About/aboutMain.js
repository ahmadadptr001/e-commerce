import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"
import Navbar from "../navbar";
import aboutImage from "../../assets/images/about.svg";

export default function AboutMain() {

    const revealRef1 = useRef(null);
    const revealRef2 = useRef(null);

    useEffect( () => {
        ScrollReveal().reveal( revealRef1.current, {
            origin: 'left',
            distance: '100px',
            duration: 1500,
            delay: 200,
            easing: 'ease-in-out',
        })
        ScrollReveal().reveal( revealRef2.current, {
            origin: 'right',
            distance: '100px',
            duration: 1500,
            delay: 200,
            easing: 'ease-in-out',
        })
    })

    return (
        <>
            <Navbar about="active" />
            <div className="container p-5">
                <div className="row ">
                    <div className="col-12 col-md-6" ref={revealRef1}>
                        <h1 className="display-1 text-center border-bottom p-5 m-5" style={{ fontWeight: "550", fontFamily: "Playwrite GB S" }}>About</h1>
                        <p className="mt-5" style={{fontSize : ".8rem", fontFamily : "Edu VIC WA NT Beginner", lineHeight : "1.3rem"}}>
                            Ahmad Bagas Adiputra is a writer, illustrator and content creator from South Sulawesi, Indonesian / Kendari. In 2024, she released her first book,
                            A Year in Indonesian: An Illustrated Guide and Memoir, which follows her time as an English teacher and travel writer living in Japan. Her other writing work has been published in Japan Today, SavvyTokyo, GaijinPot and Voiceworks.
                            She is an avid lover of fantasy and speculative literature, as well as gothic fiction, contemporary lit and Japanese fiction. While studying her post-grad with Deakin University, her research specialised in fantasy, folklore, mythology and the works of Studio Ghibli.
                            When she was in high school, she uploaded a time-lapse painting video to YouTube on a whim. Her self-titled channel now has over 230,000 subscribers and 13 million total views. She posts book reviews, video essays and vlogs about her daily life.
                            She is represented by Bailey Tamayo at Sanford J. Greenburger Associates.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center" ref={revealRef2}>
                        <img className="img-fluid h-auto" src={aboutImage} alt="image profile" />
                    </div>
                </div>
            </div>
        </>
    )
}