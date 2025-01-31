import { Link } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import logo from "../../logo.svg";

function Customers() {
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
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td >Fajar</td>
                    <td>fajar@gmail.com</td>
                    <td>088667998</td>
                    <td>
                      <span className="btn btn-primary">Orders</span>
                      <span className="btn btn-danger ms-1">Remove from List</span>
                    </td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td >Priyo</td>
                    <td>fajar@gmail.com</td>
                    <td>088667998</td>
                    <td>
                      <span className="btn btn-primary">Orders</span>
                      <span className="btn btn-danger ms-1">Remove from List</span>
                    </td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td >Kaka</td>
                    <td>fajar@gmail.com</td>
                    <td>088667998</td>
                    <td>
                      <span className="btn btn-primary">Orders</span>
                      <span className="btn btn-danger ms-1">Remove from List</span>
                    </td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td >Adek</td>
                    <td>fajar@gmail.com</td>
                    <td>088667998</td>
                    <td>
                      <span className="btn btn-primary">Orders</span>
                      <span className="btn btn-danger ms-1">Remove from List</span>
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
export default Customers;
