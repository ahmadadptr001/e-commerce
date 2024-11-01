import Navigation from "./navigation";
import HeroSection from "./HeroSection";
import { useEffect, useState } from "react";

export default function Electronics () {
    const url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);

    const getDataProducts = async () => {
        const response = await fetch(url);
        const dataProducts = await response.json();
        setProducts(dataProducts);
    }

    useEffect( () => {
        getDataProducts();
    })

    const [searchTerm, setSearchTerm] = useState('')

    const handleInputChange = (term) => {
        setSearchTerm(term)
    }
    return (
        <>
            <Navigation onSearchChange={handleInputChange} />
            <HeroSection category={"electronics"} />
            <div className="container">
                <div className="row">
                    { products
                        .filter( (product) => product.category === "electronics")
                        .map( (product) => {
                            return (
                                <div className="col-lg-3 col-12 col-sm-6">
                                    <BasicBodyCard
                                        urlImage={product.image}
                                        title={product.title}
                                        description={product.description}
                                        category={product.category}
                                        price={product.price} />
                                </div>
                            )
                        })}
                </div>
            </div>
        </>
    )
}

function BasicBodyCard(props) {
    return (
        <div className="card text-center border-0 m-2">
            <div className="card-header bg-transparent">
                <img src={ props.urlImage } alt="product" className="card-img img-fluid"  style={{width : "100px"}}/>
            </div>
            <div className="card-body">
                <h6 className="card-title">{ props.title }</h6>
                <button className="btn btn-warning rounded-pill p-1 px-2 m-2 text-white" style={ {fontSize : ".5rem"} }>{ props.category }</button>
                <p className="card-text" style={{fontSize : ".6rem"}}>
                    { props.description }
                </p>
                <button className="btn btn-primary py-2 px-4"> ${props.price}</button>
            </div>
        </div>
    )
}