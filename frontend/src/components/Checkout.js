import { Link } from "react-router-dom";
import logo from "../logo.svg";
import SingleProduct from "./SingleProduct";

function Chekout() {
    return (

        <section className="container mt-4">
            <div className="row">
                <h3>All items (4)</h3>
                <div className="col-8">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td >
                                        <Link to="/"><img src={logo} alt="product-detail" className="crd-img-top img-thumbnail" width="25%" /></Link> <Link to="/categories" className="text-decoration-none"><span className="align-top ">Django</span></Link>
                                    </td>
                                    <td>Rp. 400,000</td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td >
                                        <Link to="/"><img src={logo} alt="product-detail" className="crd-img-top img-thumbnail" width="25%" /></Link> <Link to="/categories" className="text-decoration-none"><span className="align-top ">Django</span></Link>
                                    </td>
                                    <td>Rp. 400,000</td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td >
                                        <Link to="/"><img src={logo} alt="product-detail" className="crd-img-top img-thumbnail" width="25%" /></Link> <Link to="/categories" className="text-decoration-none"><span className="align-top ">Django</span></Link>
                                    </td>
                                    <td>Rp. 400,000</td>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td >
                                        <Link to="/"><img src={logo} alt="product-detail" className="crd-img-top img-thumbnail" width="25%" /></Link> <Link to="/categories" className="text-decoration-none"><span className="align-top ">Django</span></Link>
                                    </td>
                                    <td>Rp. 400,000</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="text-end"><strong>Total</strong></td>
                                    <td><strong>Rp. 1.600.000</strong></td>
                                </tr>
                                <tr>
                                    <td colSpan="3" className="text-end">
                                        <button className="btn btn-success btn-sm"> Continue Shopping </button>
                                        <button className="btn btn-secondary ms-2 btn-sm me-md-5"> Proceed To Payment </button>
                                    </td>

                                </tr>
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>

        </section>

    )

}
export default Chekout;