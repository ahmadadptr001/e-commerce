export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg p-3 shadow-sm`}>
            <div className="container">
                <a href="/" className="navbar-brand align-items-center d-flex text-danger fs-4 fw-normal">Ahmad Adptr</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav d-flex me-auto align-items-center">
                        <li className="nav-item">
                            <a href="/a_year_in_indonesia" className={`nav-link ${props.a_year}`}>
                                A year in Indonesia
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/shop" className={`nav-link ${props.shopMain}`}>
                                Shop
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className={`nav-link ${props.about}`}>
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className={`nav-link ${props.contact}`}>
                                Contact
                            </a>
                        </li>
                        <li className="nav-item dropdown d-lg-flex align-items-center text-center">
                            <button className="btn dropdown-toggle"
                            data-bs-toggle="dropdown"
                            data-bs-target="menu-dropdown"> more... </button>
                            <ul className="dropdown-menu text-center m-auto mt-2 mt-lg-0">
                            <li><a class="dropdown-item" href="/shop-more">Shop More</a></li>
                            <li><a class="dropdown-item" href="/anime">Search Anime</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="sosmed-link d-flex justify-content-center">
                        <ul className="d-flex align-items-center gap-2 justify-content-center mt-4 mt-lg-0 p-0">
                            <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="bx bxl-youtube"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="bx bxl-instagram"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="bx bxl-github"></i>
                                    </a>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}