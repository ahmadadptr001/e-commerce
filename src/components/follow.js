import followImage1 from "../assets/images/follow-image1.jpg";
import followImage2 from "../assets/images/follow-image2.jpg";
import followImage3 from "../assets/images/follow-image3.jpg";
import followImage4 from "../assets/images/follow-image4.jpg";

export default function Follow () {
    return (
        <div className="container p-5">
            <div className="row">
                <p className=" p-4 text-title-follow text-center text-dark fs-2">
                    Follow ☁️
                </p>
                <div className="col-3">
                    <a href="https://instagram.com/">
                        <img src={ followImage1 } alt="gambar" className="img-fluid" />
                    </a>
                </div>
                <div className="col-3">
                    <a href="https://instagram.com/">
                        <img src={ followImage2 } alt="gambar" className="img-fluid" />
                    </a>
                </div>
                <div className="col-3">
                    <a href="https://instagram.com/">
                        <img src={ followImage3 } alt="gambar" className="img-fluid" />
                    </a>
                </div>
                <div className="col-3">
                    <a href="https://instagram.com/">
                        <img src={ followImage4 } alt="gambar" className="img-fluid" />
                    </a>
                </div>
            </div>
        </div>
    )
}