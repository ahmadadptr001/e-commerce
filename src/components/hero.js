import heroImage from "../assets/images/main.svg";
import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"

export default function Hero() {
    const revealRef1 = useRef(null);
    const revealRef2 = useRef(null);
    const revealRef3 = useRef(null);

    useEffect( () => {
        ScrollReveal().reveal( revealRef1.current, {
            origin: 'center',
            distance: '0px',
            duration: 1200,
            delay: 450,
            easing: 'ease-in-out',
        })
        ScrollReveal().reveal( revealRef2.current, {
            origin: 'right',
            distance: '100px',
            duration: 1200,
            delay: 200,
            easing: 'ease-in-out',
        })
        ScrollReveal().reveal( revealRef3.current, {
            origin: 'right',
            distance: '100px',
            duration: 1200,
            delay: 450,
            easing: 'ease-in-out',
        })
    })

    return (
        <div className="container-fluid">
            <div className="card border-0 overflow-hidden">
                <div className="card-header d-sm-flex align-items-center border-bottom-0 bg-transparent p-5 text-center">
                    <img src={heroImage} alt="gambar hero" id="hero-image" ref={revealRef1}/>
                    <p className="ms-3 mt-sm-0 mt-2" ref={revealRef2}>Writer. Video maker. Flâneuse.
                        <p className="display-6 text-semi-warning mt-3" ref={revealRef3}>
                            Searching for magic in between the cracks of ordinary objects.
                        </p>
                    </p>
                </div>
            </div>
        </div>
    )
}