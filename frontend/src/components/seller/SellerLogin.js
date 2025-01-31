import { Link } from "react-router-dom";
import logo from "../../logo.svg";


function SellerLogin() {
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-md-8 col-12 offset-2">
                    <div className="card">
                        <h3 className="card-header">Seller Login</h3>
                        <div className="card-body">
                            <form>

                                <div className="mb-3">
                                    <label for="username" className="form-label">User Name</label>
                                    <input type="text" className="form-control" id="username" />
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    )

}
export default SellerLogin;