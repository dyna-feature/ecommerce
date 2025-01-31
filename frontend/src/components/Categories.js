import { Link } from "react-router-dom";
import logo from "../logo.svg";

function Categories() {
    return (
        <section className="container mt-4">
            {/* Popular Cateories */}
            <div className="row mb-4 ">
                <h4 className="fw-bold">
                    All Categories
                </h4>

                {/* begin Categoires Box */}
                <div className="col-12 col-md-3 mb-4">
                    <div className="card">
                        <img src={logo} className="crd-img-top" />
                        <div className="card-body">
                            <h4 className="card-title"><Link to="/category/python/1">Python</Link></h4>
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

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}
export default Categories;
