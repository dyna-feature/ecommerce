import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import logo from "../../logo.svg";

function Wishlist() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12">
          <Sidebar />
        </div>
        <div className="col-md-9 col-12">
          <div className="row">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td >
                      <Link to="/"><img src={logo} alt="product-detail" className="crd-img-top img-thumbnail" width="25%" />
                      </Link>
                      <Link to="/categories" className="text-decoration-none"><span className="align-top ">Django</span>
                      </Link>
                    </td>
                    <td>Rp. 400,000</td>
                    <td><button className="btn btn-danger">Remove</button></td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td >
                      <Link to="/"><img src={logo} alt="product-detail" className="crd-img-top img-thumbnail" width="25%" />
                      </Link>
                      <Link to="/categories" className="text-decoration-none"><span className="align-top ">Php</span>
                      </Link>
                    </td>
                    <td>Rp. 400,000</td>
                    <td><button className="btn btn-danger">Remove</button></td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td >
                      <Link to="/"><img src={logo} alt="product-detail" className="crd-img-top img-thumbnail" width="25%" />
                      </Link>
                      <Link to="/categories" className="text-decoration-none"><span className="align-top ">Laravel</span>
                      </Link>
                    </td>
                    <td>Rp. 400,000</td>
                    <td><button className="btn btn-danger">Remove</button></td>
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
export default Wishlist;
