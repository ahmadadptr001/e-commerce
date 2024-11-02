import projectImage from "../../assets/images/project.svg";
import Navbar from "../navbar";
import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"


export default function A_Year_Main() {
    const revealRef1 = useRef(null);
    const revealRef2 = useRef(null);
    const revealRef3 = useRef(null);
    const revealRef4 = useRef(null);
    const revealRef5 = useRef(null);

    useEffect( () => {
        ScrollReveal().reveal( revealRef1.current, {
            origin: 'left',
            distance: '100px',
            duration: 1200,
            delay: 200,
            easing: 'ease-in-out',
        })
        ScrollReveal().reveal( revealRef2.current, {
            origin: 'top',
            distance: '100px',
            duration: 1200,
            delay: 350,
            easing: 'ease-in-out',
        })
        ScrollReveal().reveal( revealRef3.current, {
            origin: 'left',
            distance: '100px',
            duration: 1200,
            delay: 400,
            easing: 'ease-in-out',
        })
        ScrollReveal().reveal( revealRef4.current, {
            origin: 'left',
            distance: '100px',
            duration: 1200,
            delay: 600,
            easing: 'ease-in-out',
        })
        ScrollReveal().reveal( revealRef5.current, {
            origin: 'bottom',
            distance: '100px',
            duration: 1200,
            delay: 800,
            easing: 'ease-in-out',
        })
    })
    return (
        <>
        <Navbar a_year="active" />
        <div className="container p-5">
            <div className="row">
                <div className="card border-0 col-12 col-md-6 text-center">
                    <div className="card-header border-bottom-0 bg-transparent">
                        <h1 className="card-title" style={{fontFamily : "Playwrite GB S"}} ref={revealRef1}>
                            A Year In Indonesian
                        </h1>
                        <h3 className="card-semi-title mt-4" style={{fontWeight : "100", fontSize : "1.4rem"}} ref={revealRef3}>
                            An Illustrated Guide and Memoir
                        </h3>
                    </div>
                    <div className="card-body mt-5">
                        <p style={{fontSize : ".8rem"}} ref={revealRef4}>
                            The summer after I turned 21, I moved to Indonesian. A Year in Indonesian follows
                            the thirteen magical months I spent in the city of ginkgo leaves. From becoming a
                            travel writer and English teacher to navigating cultural nuances, financial adversity
                            and the abomination known as peanut cream, this book is a candid exploration of what
                            it was really like to live and work in the world’s greatest megacity.
                        </p>

                        <div className="p-5" ref={revealRef5}>
                            <p>
                                eBook :
                            </p>
                            <button className="btn btn-success px-5 py-3">
                                <span className="fst-italic" style={{fontFamily : "advent pro"}}>Buy Now</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 text-end overflow-hidden text-center">
                    <img src={ projectImage } alt="jual buku" className="img-fluid" ref={revealRef2}/>
                </div>
            </div>
        </div>
        </>
    )
}