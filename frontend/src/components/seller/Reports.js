import { Link } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import logo from "../../logo.svg";

function Reports() {
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12">
                    <SellerSidebar />
                </div>
                <div className="col-md-9 col-12">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title text-center">Daily Reports</h3>
                                    <h3 className="text-center ">
                                        <span className="btn btn-secondary">View</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title text-center">Monthly Reports</h3>
                                    <h3 className="text-center ">
                                        <span className="btn btn-secondary">View</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title text-center">Yearly Reports</h3>
                                    <h3 className="text-center ">
                                        <span className="btn btn-secondary">View</span>
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
export default Reports;
