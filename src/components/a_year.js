import projectImage from "../assets/images/project.svg";
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

export default function A_year() {
    const revealRef1 = useRef(null);
    const revealRef2 = useRef(null);
    const revealRef3 = useRef(null);

    useEffect( () => {
        ScrollReveal().reveal( revealRef1.current, {
            origin: 'center',
            distance: '0px',
            duration: 1200,
            delay: 1000,
            easing: 'ease-in-out',
        })
        ScrollReveal().reveal( revealRef2.current, {
            origin: 'left',
            distance: '100px',
            duration: 1200,
            delay: 200,
            easing: 'ease-in-out',
        })
        ScrollReveal().reveal( revealRef3.current, {
            origin: 'bottom',
            distance: '100px',
            duration: 1200,
            delay: 450,
            easing: 'ease-in-out',
        })
    })
    return (
        <>
            <div className="container-fluid d-sm-flex p-0 mt-5">
                <div className="card col-sm-6 col-12 border-0 card-header text-center text-sm-end py-5 px-5 px-sm-2 align-items-center">
                    <div ref={revealRef2}>
                        <p className="text-title display-6 text-primary">A Year In Indonesia</p>
                        <p className="text-content">
                            An illustrated guide & memoir of 13 magical months spent exploring the city of ginkgo leaves.
                        </p>
                        <a href="#" className="w-100">
                            <button className="btn btn-dark rounded-pill px-3 mt-2 py-2 fw-semibold">Buy Now</button>
                        </a>
                    </div>
            </div>
            <div className="card col-sm-6 col-12 border-0 card-header py-5 px-5 px-sm-2 pt-sm-5 pt-0 align-items-center">
                <img src={projectImage} alt="project image" id="content-image"ref={revealRef3} />
            </div>
            </div>
            <div className="container p-3 mb-4 mt-2">
                <div className="row d-flex justify-content-center">
                    <h1 className="text-center text-success fw-normal p-5 w-75" style={{ fontFamily: 'Advent Pro', letterSpacing : '2px' }} ref={revealRef1}>
                        To search deeper and get updates and more products, please check my <span><a href="/e-comme/shop-more" className="text-dark display-6">Shop</a></span> ♡
                    </h1>
                </div>
            </div>
        </>
    )
}