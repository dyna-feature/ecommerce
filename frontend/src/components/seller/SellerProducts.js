import { Link } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import logo from "../../logo.svg";

function SellerProducts() {
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12">
                    <SellerSidebar />
                </div>
                <div className="col-md-9 col-12">
                    <div className="row">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <td colSpan="5">
                                            <Link to="/seller/add-products" className="btn btn-primary"> <i className="fa fa-plus-circle"></i> Add Product</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>No</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Product Title</td>
                                        <td>500</td>
                                        <td>Published</td>
                                        <td>
                                            <a href="#" className="btn btn-primary">
                                                View
                                            </a>
                                            <a href="#" className="btn btn-info ms-1">
                                                Edit
                                            </a>
                                            <a href="#" className="btn btn-danger ms-1 ">
                                                Delete
                                            </a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SellerProducts;
