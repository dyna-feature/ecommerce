import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import logo from "../../logo.svg";

function OrderSuccess() {
  return (
    <section className="container mt-4">

      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="card">
            <div className="card-body text-center">
              <p><i class="fa-solid fa-circle-check text-success fa-3x"></i></p>
              <h3 className="text-success">Thanks for the Order</h3>
              <Link to="/" className="btn btn-primary"> Home </Link>
              <Link to="/customer/dashboard" className="btn btn-secondary ms-2"> Dashboard </Link>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
export default OrderSuccess;
