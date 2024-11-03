import { useState } from "react"

export default function Navigation( { onSearchChange }) {

    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchInput(value);
        onSearchChange(value);
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container d-flex align-items-center">
                <a href="/e-commerce" className="navbar-brand text-danger fs-4">Ahmad Adptr</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target=".nav-shop">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse nav-shop">
                    <ul className="navbar-nav me-auto align-items-center gap-3">
                        <li className="nav-item dropdown mt-2 mt-lg-0 justify-content-center ms-4">
                            <button className="m-auto gap-2 d-flex align-items-center btn btn-secondary dropdown-toggle justify-content-center"
                                        data-bs-toggle="dropdown" style={{fontSize : ".9rem"}}>
                                <i className="bx bx-category m-0 p-0" style={{fontSize : "1rem"}}></i>
                                <p className="m-0">
                                    Category
                                </p>
                            </button>
                            <ul className="dropdown-menu text-center">
                                <li>
                                    <a className="dropdown-item" href="/e-commerce/shop-more">All Category</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/e-commerce/shop-more/electronics">Electronics</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/e-commerce/shop-more/jewelery">Jewelery</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/e-commerce/shop-more/men's">Men's Clothing</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/e-commerce/shop-more/women's">Women's Clothing</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <p className="m-0 fw-semibold text-success text-decoration-underline" style={{fontFamily : "cursive", fontSize : ".8rem"}}>
                                Shop at the lowest prices!
                            </p>
                        </li>
                    </ul>
                    <div>
                        <ul className="gap-2 d-flex align-items-center justify-content-center mt-4 mt-lg-0 p-0">
                            <li className="nav-item">
                                <form action="/e-commerce/shop-more/searching" className="d-flex align-items-center justify-content-center gap-2">
                                    <input
                                        type="search"
                                        value={searchInput}
                                        onChange={handleInputChange}
                                        className="px-3 rounded-pill py-1 fw-semibold border text-secondary"
                                        placeholder="Search product"/>
                                    <button className="btn btn-success py-0 px-2">
                                        <i className="bx bx-search m-0 p-0"></i>
                                    </button>
                                </form>
                            </li>
                            <li className="nav-item">
                                <a href="#">
                                    <i className="bx bxs-user"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#">
                                    <i className="bx bxs-cart"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}