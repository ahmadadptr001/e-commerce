import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"

export default function Footer () {

    const revealRef = useRef(null);

    useEffect( () => {
        ScrollReveal().reveal( revealRef.current, {
            origin: 'bottom',
            distance: '100px',
            duration: 1500,
            delay: 200,
            easing: 'ease-in-out',
        })
    })

    return (
        <div className="row py-5 my-5" id="follow-up-link">
                <ul className="mt-5 d-flex align-items-center justify-content-center gap-3" ref={revealRef}>
                    <li>
                        <a href="#">
                            <i className="bx bxl-youtube"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bxl-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bxl-github"></i>
                        </a>
                    </li>
                </ul>
                <div className="text-center">
                    <p style={{fontSize : ".9rem", fontFamily : "Edu VIC WA NT Beginner"}}>&copy;Ahmad Adptr, 2024. Allright Reversed</p>
                </div>
            </div>
    )
}