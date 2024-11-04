import { useEffect, useState } from "react";

export default function MainContent( {handleBadgeCount, setTitleImageProduct }) {
    const url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);

    const getDataProducts = async () => {
        const response = await fetch(url);
        const dataProducts = await response.json();
        setProducts(dataProducts);
    }

    useEffect( () => {
        getDataProducts();
    }, [])


    const gabunganHandle = ( data ) => {
        handleBadgeCount()
        // setTitleImageProduct( {title : data.title, image : data.image, price : data.price} )
        setTitleImageProduct((prevProducts) => {
            const existingProduct = prevProducts.find((item) => item.title === data.title);
    
            if (existingProduct) {
                return prevProducts.map((item) =>
                    item.title === data.title
                        ? { ...item, totalProduct: item.totalProduct + 1 } // Menambahkan totalProduct
                        : item
                );
            } else {
                return [...prevProducts, { title: data.title, image: data.image, price: data.price, totalProduct: 1 }]; // Tambahkan produk baru
            }
        });
    }

    return(
        <div className="container">
            <div className="row">
                { products.map( (product) => {
                    return (
                        <div className="col-lg-3 col-12 col-sm-6">
                            <BasicBodyCard
                                urlImage={product.image}
                                title={product.title}
                                description={product.description}
                                category={product.category}
                                price={product.price}
                                gabunganHandle={gabunganHandle}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


function BasicBodyCard({ gabunganHandle, ...props}) {
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
                <button className="btn btn-primary py-2 px-4" onClick={() => gabunganHandle({"title" : props.title, "image" : props.urlImage, "price" : props.price})}> ${props.price}</button>
            </div>
        </div>
    )
}