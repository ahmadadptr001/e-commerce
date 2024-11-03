import authImageGif from "../../assets/icons/auth-touch.gif";
import authImage from "../../assets/images/auth.svg";
import "../../assets/scss/auth.css"

export default function Auth() {
    return (
        <>
            <div className="container-fluid p-5">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="card col-12 col-md-6 col-lg-4 rounded-3 p-3 card-auth">
                        <div className="card-header bg-transparent mt-0 pt-0 text-center">
                            <h2 className="card-title text-center m-0 p-0 text-semi-warning">Authentication</h2>
                            <img src={ authImage } alt="auth" className="img-fluid m-0 p-0" />
                        </div>
                        <div className="card-body text-center">

                            <p className="card-text">Let's shop at Ahmad Store with top-quality and the most affordable products.</p>
                            <img src={authImageGif} alt="auth-gif" />
                            
                            <div className="d-flex align-items-center gap-2 w-100 mt-4">
                                <div className="button-signin w-100">
                                    <a href="/e-commerce/#/shop-more/signup" className="btn btn-primary rounded-pill w-100 py-1">Sign Up</a>
                                </div>
                                <div className="button-signup w-100">
                                    <a href="/e-commerce/#/shop-more/signin" className="btn btn-success rounded-pill w-100 py-1">Sign in</a>
                                </div>
                            </div>

                            <div className="text-center already-account p-3">
                                Already have an account? <a href="/e-commerce/#/shop-more/signin" className="text-primary">Log in to your account.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}