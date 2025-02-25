import { Link } from "react-router-dom";
import logo from "../logo.svg";
function SingleProduct(props) {
    return (
        <>
            {/* begin latest Product Box */}
            <div className="col-12 col-md-3 mb-4">
                <div className="card">
                    <Link to={`/product/${props.product.title}/${props.product.id}`}><img src={logo} className="crd-img-top" /></Link>
                    <div className="card-body">
                        <h4 className="card-title"><Link to={`/product/${props.product.title}/${props.product.id}`}>{props.product.title}</Link></h4>
                        <h5 className="card-title">Price: Rp {props.product.price}</h5>
                    </div>
                    <div className="card-footer">
                        <button
                            title="Add to Cart"
                            className="btn btn-success btn-sm"
                        >
                            <i className="fa-solid fa-cart-plus"></i>
                        </button>
                        <button
                            title="Add to Whistlist"
                            className="btn btn-danger btn-sm ms-1"
                        >
                            <i className="fa fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
            {/* end latest product box */}
        </>
    )
}
export default SingleProduct;