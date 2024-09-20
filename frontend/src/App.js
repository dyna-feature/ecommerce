import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <a className="navbar-brand" href="#">
            Python Market Place
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div className="container mt-3">
          <div className="row">
            <h4 className="">
              Latest Product{" "}
              <a href="#" className="btn btn-dark float-end">
                View All Products
                <i className="fa-solid fa-arrow-right-from-bracket ms-2"></i>
              </a>
            </h4>
            {/* begin latest Product Box */}
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
            {/* end latest product box */}
            {/* begin latest Product Box */}
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
            {/* end latest product box */}
            {/* begin latest Product Box */}
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
            {/* end latest product box */}
            {/* begin latest Product Box */}
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
            {/* end latest product box */}
            {/* begin latest Product Box */}
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
            {/* end latest product box */}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
