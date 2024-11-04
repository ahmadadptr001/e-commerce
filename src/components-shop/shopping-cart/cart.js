import cartJumpImage from "../../assets/icons/cart-jump.gif";
import backGif from "../../assets/icons/back.gif";

export default function Cart( { titleImageProduct }) {

    const total = titleImageProduct.reduce((accumulator, item) => {
        return accumulator + (item.price * item.totalProduct);
    }, 0);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    };
    return (
        <div className="container-fluid">
            <nav className="navbar">
                <a href="/e-commerce/#/shop-more" className="navbar-brand mb-5 p-0">
                    <img src={backGif} alt="back-gif" style={{transform : "rotate(180deg)", width : "1.3rem"}} className="mb-4"/>
                </a>
                <img src={cartJumpImage} alt="cart-jumping" className="m-auto"/>
            </nav>
            <div className="" style={{fontFamily: "cursive"}}>
                <h5 className="text-center mb-3 fw-bold">The Cart You Selected</h5>
                <p className="text-center text-muted mb-4">Here is the list of products you selected</p>
            </div>
            <table className="table table-cart table-responsive table-bordered table-hover text-center" style={{fontSize : "65%"}}>
                <thead className="table-dark">
                    <tr>
                        <th className="pe-0">No</th>
                        <th className="ps-0">Product</th>
                        <th>Index</th>
                        <th>Price</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody style={{borderBottom : "1px solid  transparent"}}>
                    {titleImageProduct.map((item, index) => (
                        <tr className="border">
                            <td key={index}className="pe-0">{index + 1}</td>
                            <td className="ps-0"><img src={item.image} alt={item.title} style={{width : "50px"}}/></td>
                            <td>{item.totalProduct}</td>
                            <td>$ {item.price}</td>
                            <td>$ {item.price * item.totalProduct}</td>
                        </tr>
                    ))}
                    <tr>
                        <td className="no-border"></td>
                        <td className="no-border"></td>
                        <td className="no-border"></td>
                        <th className="border-start border-bottom">Total</th>
                        <th className="border-bottom">{formatCurrency(total)}</th>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}
