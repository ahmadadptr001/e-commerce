import projectImage from "../../assets/images/project.svg";
import Navbar from "../navbar";
import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"

export default function MainShop() {
    const revealRef1 = useRef(null);
    const revealRef2 = useRef(null);
    const revealRef3 = useRef(null);

    useEffect( () => {
        ScrollReveal().reveal( revealRef1.current, {
            origin: 'top',
            distance: '100px',
            duration: 1500,
            delay: 200,
            easing: 'ease-in-out',
        })
        ScrollReveal().reveal( revealRef2.current, {
            origin: 'left',
            distance: '100px',
            duration: 1500,
            delay: 200,
            easing: 'ease-in-out',
        })
        ScrollReveal().reveal( revealRef3.current, {
            origin: 'bottom',
            distance: '100px',
            duration: 1500,
            delay: 200,
            easing: 'ease-in-out',
        })
    })

    return (
        <>
            <Navbar shopMain="active" />
            <div className="container p-5 text-center">
                <div className="row p-5 border-bottom">
                    <div className="col-12">
                        <p className="display-5 text-success" ref={revealRef1}>Shop</p>
                    </div>
                </div>
            </div>
            <div className="container p-5 pt-2 pt-sm-5">
                <img src={ projectImage } alt="" className="img-fluid"style={{width : "auto", height: "450px"}} ref={revealRef2}/>
                <div ref={revealRef3}>
                    <p className="m-0 mt-2 p-0" style={{fontFamily : "advent pro"}}>
                        A Year in Tōkyō: An Illustrated Guide and Memoir eBook</p>
                    <p className="p-0 m-0" style={{fontFamily : "advent pro"}}>$15.00</p>
                </div>
            </div>
        </>
    )
}