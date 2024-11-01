import Navbar from "../navbar"

export default function ContactMain() {
    return (
        <>
            <Navbar contact="active" />

            <div className="container p-5 container-contact">
                <div className="row p-5">
                    <div className="card col-12 col-lg-4 col-sm-6 offset-sm-0 border-0 offset-lg-1">
                        <div className="card-header border-0 bg-transparent">
                            <div className="card-title p-2">
                                <h1>Contact</h1>
                            </div>
                            <div className="card-body p-2">
                                <p>
                                    Hello there! Thank you so much for wanting to contact me :-)
                                    Please have a read of my Frequently Asked Questions before sending through an email.
                                    <br /><br />
                                    Take care,
                                    <hr />
                                    Ahmad
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-12 col-lg-5 col-sm-6 border-0">
                        <div className="card-header border-0 bg-transparent p-2">
                            <ul className="d-flex gap-2 fs-3 justify-content-start p-0">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="bx bxl-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <i className="bx bxl-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <i className="bx bxl-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body p-2">
                            <form method="post">
                                <p>Name (required) </p>
                                <div className="d-flex gap-3">
                                    <div>
                                        <label htmlFor="first_name">First Name</label>
                                        <input className="w-100" type="text" name="first_name" id="first_name"required focus/>
                                    </div>
                                    <div>
                                        <label htmlFor="last_name">Last Name</label>
                                        <input className="w-100" type="text" name="last_name" id="last_name"/>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <label htmlFor="email">Email (required)</label>
                                    <div className="mt-2">
                                        <input className="w-100" type="email" name="email" id="email" required/>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <label htmlFor="message">Message (required)</label>
                                    <div className="mt-2">
                                        <textarea className="w-100" name="message" id="message" cols="30" rows="5"></textarea>
                                    </div>
                                </div>
                                <button className="btn btn-primary py-2 px-4 mt-2">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}