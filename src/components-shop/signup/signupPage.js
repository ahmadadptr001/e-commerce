import "../../assets/scss/auth.css"
import pencilGif from "../../assets/icons/pencil.gif";
import maleGif from "../../assets/icons/male.gif";
import femaleGif from "../../assets/icons/female.gif";

export default function Signup() {
    return (
        <>
            <div className="container-fluid p-5">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="card col-12 col-md-6 col-lg-4 rounded-3 p-3 card-auth">
                        <div className="card-header bg-transparent mt-0 pt-0 text-center">
                            <h2 className="card-title text-center m-0 p-0 text-semi-warning">Authentication</h2>
                            <img src={ pencilGif } alt="auth" className="img-fluid m-0 p-0 signup-pencil" />
                        </div>
                        <div className="card-body text-center">

                            <form action="e-commerce/#/shop-more">
                                <div className="form-floating mb-3">
                                    <input type="text" name="username" id="username" className="form-control" placeholder="Create Username" />
                                    <label htmlFor="username">Create Username</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" name="password" id="password" className="form-control" placeholder="Create Password" />
                                    <label htmlFor="password">Create Password</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" placeholder="Confirm Password" />
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                </div>

                                <div className="d-flex gap-4 align-items-center justify-content-center mb-3">
                                    <label class="gender-option" id="male-option">
                                        <input type="radio" name="gender" value="male" />
                                        <img src={ maleGif } alt="Male Icon" />
                                    </label>

                                    <label class="gender-option" id="female-option">
                                        <input type="radio" name="gender" value="female" />
                                        <img src={ femaleGif } alt="Female Icon" />
                                    </label>
                                </div>
                            </form>

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