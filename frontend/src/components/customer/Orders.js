import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import logo from "../../logo.svg";

function Orders() {
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
                    <th>Status</th>
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
                    <td><span className="text-success"><i className="fa fa-check-circle"></i> Completed</span></td>
                    <td><button className="btn btn-primary">Download</button></td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td >
                      <Link to="/"><img src={logo} alt="product-detail" className="crd-img-top img-thumbnail" width="25%" />
                      </Link>
                      <Link to="/categories" className="text-decoration-none"><span className="align-top ">Javascript</span>
                      </Link>
                    </td>
                    <td>Rp. 500,000</td>
                    <td><span className="text-success"><i className="fa fa-check-circle"></i> Completed</span></td>
                    <td><button className="btn btn-primary">Download</button></td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td >
                      <Link to="/"><img src={logo} alt="product-detail" className="crd-img-top img-thumbnail" width="25%" />
                      </Link>
                      <Link to="/categories" className="text-decoration-none"><span className="align-top ">Javascript</span>
                      </Link>
                    </td>
                    <td>Rp. 500,000</td>
                    <td><span className="text-secondary"><i className="fa fa-spin fa-spinner"></i> Processing</span></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td >
                      <Link to="/"><img src={logo} alt="product-detail" className="crd-img-top img-thumbnail" width="25%" />
                      </Link>
                      <Link to="/categories" className="text-decoration-none"><span className="align-top ">Python</span>
                      </Link>
                    </td>
                    <td>Rp. 500,000</td>
                    <td><span className="text-danger"><i className="fa fa-times-circle"></i> Cancelled</span></td>
                    <td></td>
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
export default Orders;
