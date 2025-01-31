import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import logo from "../../logo.svg";

function AddAddress() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12">
          <Sidebar />
        </div>
        <div className="col-md-9 col-12">
          <div className="row">
            <div className="card">
              <h3 className="card-header">Add Address</h3>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label for="new-address" className="form-label">New Address</label>
                    <textarea type="text" className="form-control" id="new_address" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AddAddress;
