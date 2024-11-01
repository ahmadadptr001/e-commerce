import notebook from "../assets/images/notebook.svg"
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

export default function NotepadPage() {
    const revealRef1 = useRef(null);
    const revealRef2 = useRef(null);

    useEffect( () => {
        ScrollReveal().reveal( revealRef1.current, {
            origin: 'left',
            distance: '100px',
            duration: 1200,
            delay: 200,
            easing: 'ease-in-out',
        })
        ScrollReveal().reveal( revealRef2.current, {
            origin: 'right',
            distance: '100px',
            duration: 1200,
            delay: 200,
            easing: 'ease-in-out',
        })
    })

    return (
        <>
            <div className="container mt-5">
                <div className="card border-0 text-center">
                    <div className="card-header bg-transparent border-bottom-0">
                        <img src={ notebook } alt="catatan" className="img-fluid img-header"  ref={revealRef1} />
                    </div>
                    <div className="card-body p-5">
                        <h3 className="card-title mt-1" style={{ fontFamily : "Playwrite GB S"}} ref={revealRef2}>
                            An Ode to Empty Notebooks
                        </h3>
                        <div ref={revealRef1}>
                            <p className="card-text mt-5 text-center" style={{ fontSize : ".8rem"}}>
                                In between the bindings of every empty notebook lives a
                                sweet snippet of comfort. Paused, poised and balancing, in
                                the stoic arms of plastic and cardboard is, like the bottomless,
                                unexplored ocean, or the great expanses of enormous outer space, a realm of possibilities.
                            </p>
                            <p className="card-text mt-2 px-3" style={{ fontSize : ".8rem"}}>" Empty. "</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}