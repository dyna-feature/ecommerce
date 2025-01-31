import { Link } from "react-router-dom";
import logo from "../logo.svg";
import SingleProduct from "./SingleProduct";

function ProductDetail() {
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">
                    <div className="row mb-4">

                        <div id="ProductDetailIndicator" className="carousel carousel-dark slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#ProductDetailIndicator" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#ProductDetailIndicator" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#ProductDetailIndicator" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>

                            <div className="carousel-inner">

                                <div className=" carousel-item active ">
                                    <img src={logo} alt="product-detail" className="crd-img-top img-thumbnail  mb-5" />
                                </div>


                                <div className="carousel-item ">
                                    <img src={logo} alt="product-detail" className="crd-img-top img-thumbnail  mb-5" />
                                </div>
                                <div className="carousel-item ">
                                    <img src={logo} alt="product-detail" className="crd-img-top img-thumbnail mb-5" />
                                </div>
                            </div>
                            <button className="carousel-control-prev " type="button" data-bs-target="#ProductDetailIndicator" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#ProductDetailIndicator" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <h3>Product name</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="card-title">Rp :9000</div>
                    <p className="mt-3">
                        <Link target="__blank" className="btn btn-info btn-sm text-decoration-none">
                            <i className="fa-solid fa-desktop"></i> Demo
                        </Link>
                        <button title="Add to Cart" className="btn btn-success btn-sm ms-1">
                            <i className="fa-solid fa-cart-plus"></i> Add To Cart
                        </button>
                        <button title="Buy Now" className="btn btn-primary btn-sm ms-1">
                            <i className="fa-solid fa-bag-shopping"></i> Buy Now
                        </button>
                        <button title="Add to Whistlist" className="btn btn-danger btn-sm ms-1">
                            <i className="fa fa-heart"></i> Add To Whistlist
                        </button>
                    </p>
                    <hr />
                    <p className="mt-3">
                        Tags :
                        <Link to="/" className="badge text-bg-secondary text-decoration-none ms-1">python</Link>
                        <Link to="/" className="badge text-bg-secondary text-decoration-none ms-1">django</Link>
                        <Link to="/" className="badge text-bg-secondary text-decoration-none ms-1">script</Link>
                    </p>
                </div>
            </div>
            {/* begin related product */}
            <div className="row mb-4">
                <h4 className="fw-bold">
                    Related Product
                </h4>
                <div id="relatedProductIndicator" className="carousel carousel-dark slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#relatedProductIndicator" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#relatedProductIndicator" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#relatedProductIndicator" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner">

                        <div className=" carousel-item active">
                            <div className="row mb-5">
                                <SingleProduct title="Python Hacking" />
                                <SingleProduct title="Python Hacking" />
                                <SingleProduct title="Python Hacking" />
                                <SingleProduct title="Python Hacking" />
                            </div>
                        </div>


                        <div className="carousel-item">
                            <div className="row mb-5">
                                <SingleProduct title="Python Hacking" />
                                <SingleProduct title="Python Hacking" />
                                <SingleProduct title="Python Hacking" />
                                <SingleProduct title="Python Hacking" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row mb-5">
                                <SingleProduct title="Python Hacking" />
                                <SingleProduct title="Python Hacking" />
                                <SingleProduct title="Python Hacking" />
                                <SingleProduct title="Python Hacking" />
                            </div>
                        </div>
                    </div>
                    {/* <button className="carousel-control-prev " type="button" data-bs-target="#relatedProductIndicator" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#relatedProductIndicator" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
            </div>
            {/* end related product */}
        </section>

    )

}
export default ProductDetail;