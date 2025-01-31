import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import logo from "../../logo.svg";

function Dashboard() {
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12">
                    <Sidebar />
                </div>
                <div className="col-md-9 col-12">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title text-center">Total Orders</h3>
                                    <h3 className="text-center ">
                                        <Link to="#" className="text-decoration-none">
                                            555
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title text-center">Total Wishlist</h3>
                                    <h3 className="text-center ">
                                        <Link to="#" className="text-decoration-none">
                                            555
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title text-center">Total Adresses</h3>
                                    <h3 className="text-center ">
                                        <Link to="#" className="text-decoration-none">
                                            555
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Dashboard;
