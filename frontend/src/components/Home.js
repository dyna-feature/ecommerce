import { Link } from "react-router-dom";
import logo from "../logo.svg";
import SingleProduct from "./SingleProduct";

function Home() {
    const products = [
        {
            'title': 'Django',
            'price': 900,
        },
        {
            'title': 'JS',
            'price': 200,
        },
        {
            'title': 'PHP',
            'price': 111,
        }
    ]
    return (
        <main>
            <div className="container mt-3">
                <div className="row mb-4">
                    <h4 className="fw-bold">
                        Latest Product{" "}
                        <Link to="/products" className="btn btn-dark float-end">
                            View All Products
                            <i className="fa-solid fa-arrow-right-from-bracket ms-2"></i>
                        </Link>
                    </h4>
                    {
                        products.map((product) => <SingleProduct product={product} />)

                    }


                </div>

                {/* Popular Cateories */}
                <div className="row mb-4">
                    <h4 className="fw-bold">
                        Popular Categories{" "}
                        <a href="#" className="btn btn-dark float-end">
                            View All Categories
                            <i className="fa-solid fa-arrow-right-from-bracket ms-2"></i>
                        </a>
                    </h4>

                    {/* begin Categoires Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="crd-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">Category Title</h4>
                            </div>
                            <div className="card-footer">Product Downloaded: </div>
                        </div>
                    </div>
                    {/* end categories box */}
                    {/* begin Categoires Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="crd-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">Category Title</h4>
                            </div>
                            <div className="card-footer">Product Downloaded: </div>
                        </div>
                    </div>
                    {/* end categories box */}
                    {/* begin Categoires Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="crd-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">Category Title</h4>
                            </div>
                            <div className="card-footer">Product Downloaded: </div>
                        </div>
                    </div>
                    {/* end categories box */}
                    {/* begin Categoires Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="crd-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">Category Title</h4>
                            </div>
                            <div className="card-footer">Product Downloaded: </div>
                        </div>
                    </div>
                    {/* end categories box */}
                </div>
                {/* End Popular categories */}

                {/* Popular Projects */}
                <div className="row mb-4">
                    <h4 className="fw-bold">
                        Popular Projects{" "}
                        <a href="#" className="btn btn-dark float-end">
                            View All Projects
                            <i className="fa-solid fa-arrow-right-from-bracket ms-2"></i>
                        </a>
                    </h4>

                    {/* begin Popular Projects Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="crd-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">Product Title</h4>
                                <h5 className="card-title">Price: Rp 5000</h5>
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
                    {/* end popular box */}
                    {/* begin Popular Projects Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="crd-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">Product Title</h4>
                                <h5 className="card-title">Price: Rp 5000</h5>
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
                    {/* end popular box */}
                    {/* begin Popular Projects Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="crd-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">Product Title</h4>
                                <h5 className="card-title">Price: Rp 5000</h5>
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
                    {/* end popular box */}
                    {/* begin Popular Projects Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="crd-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">Product Title</h4>
                                <h5 className="card-title">Price: Rp 5000</h5>
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
                    {/* end popular box */}
                </div>
                {/* End Popular Projects */}

                {/* Popular Sellers */}
                <div className="row mb-4">
                    <h4 className="fw-bold">
                        Popular Sellers{" "}
                        <a href="#" className="btn btn-dark float-end">
                            View All Sellers
                            <i className="fa-solid fa-arrow-right-from-bracket ms-2"></i>
                        </a>
                    </h4>

                    {/* begin Popular Sellers Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="crd-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">Seller Name</h4>
                            </div>
                            <div className="card-footer">
                                Categories : <a href="#">Python</a> <a href="#">Django</a>
                            </div>
                        </div>
                    </div>
                    {/* end popular box */}
                    {/* begin Popular Sellers Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="crd-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">Seller Name</h4>
                            </div>
                            <div className="card-footer">
                                Categories : <a href="#">Python</a> <a href="#">Django</a>
                            </div>
                        </div>
                    </div>
                    {/* end popular box */}
                    {/* begin Popular Sellers Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="crd-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">Seller Name</h4>
                            </div>
                            <div className="card-footer">
                                Categories : <a href="#">Python</a> <a href="#">Django</a>
                            </div>
                        </div>
                    </div>
                    {/* end popular box */}
                    {/* begin Popular Sellers Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="crd-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">Seller Name</h4>
                            </div>
                            <div className="card-footer">
                                Categories : <a href="#">Python</a> <a href="#">Django</a>
                            </div>
                        </div>
                    </div>
                    {/* end popular box */}
                </div>
                {/* end popular seller */}
            </div>

            {/* start review&rating */}
            <div
                id="carouselExampleCaptions"
                className="carousel slide border my-4 bg-dark text-white p-5"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <cite title="Source Title"> Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <cite title="Source Title"> Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <cite title="Source Title"> Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* end review&rating */}
        </main>
    )
}

export default Home;