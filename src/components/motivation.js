import sadImage1 from "../assets/images/sad-image1.svg";
import sadImage2 from "../assets/images/sad-image2.svg";


export default function Motivation () {
    return (
        <div className="container p-5">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-12 text-center">
                    <img src={sadImage1} alt="gambar sad 1" className="mb-lg-5 me-4 me-lg-0 img-fluid"/>
                    <img src={sadImage2} alt="gambar sad 2" className="ms-5 ms-lg-2 img-fluid mt-lg-5 mt-3"/>
                </div>
            </div>
            <div className="row mt-5 pt-5">
                <div className="col-12">
                    <p className="text-center" style={{ fontFamily: "Playwrite GB S", fontWeight : "500", fontSize : "1.3rem"}}>
                        ‘ If you’re feeling <span className="text-danger">down</span>, look around and <span className="text-primary">start moving forward!</span> ’
                    </p>
                    <p className="mt-5 text-center">
                        — Ahmad Bagas Adiputra
                    </p>
                </div>
            </div>
        </div>
    )
}