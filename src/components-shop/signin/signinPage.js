import "../../assets/scss/auth.css"
import houseGif from "../../assets/icons/house.gif";
import { useState } from "react";

export default function Signin() {
    const [typeInput, setTypeInput] = useState(false);

    function handleType() {
        setTypeInput(!typeInput)
    }

    return (
        <>
            <div className="container-fluid p-5">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="card col-12 col-md-6 col-lg-4 rounded-3 p-3 card-auth">
                        <div className="card-header bg-transparent mt-0 pt-0 text-center">
                            <h2 className="card-title text-center m-0 p-0 text-semi-warning">Authentication</h2>
                            <img src={ houseGif } alt="auth" className="img-fluid m-0 p-0 signin-house" />
                        </div>
                        <div className="card-body text-center">

                            <form action="e-commerce/#/shop-more">
                                <div className="form-floating mb-3">
                                    <input type="text" name="username" id="username" className="form-control" placeholder="Username" required autoFocus/>
                                    <label htmlFor="username">Username</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type={typeInput ? "text" : "password"} name="password" id="password" className="form-control" placeholder="Password" required/>
                                    <label htmlFor="password">Password</label>
                                </div>

                                <div className="form-check mb-3 text-start align-items-center" style={{fontSize : ".65rem"}}>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="showPassword"
                                        name="showPassword"
                                        // checked={typeInput}
                                        onChange={handleType}/>
                                    <label htmlFor="showPassword" className="form-check-label">Show Password</label>
                                </div>
                            </form>

                            <div className="text-center already-account p-3">
                                Don't have an account? <a href="/e-commerce/#/shop-more/signup" className="text-primary">Sign up now.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}