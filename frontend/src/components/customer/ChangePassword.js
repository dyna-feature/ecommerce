import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import logo from "../../logo.svg";

function ChangePassword() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12">
          <Sidebar />
        </div>
        <div className="col-md-9 col-12">
          <div className="row">
            <div className="card">
              <h3 className="card-header">Change Password</h3>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label for="new-password" className="form-label">New Password</label>
                    <input type="password" className="form-control" id="new_password" />
                  </div>
                  <div className="mb-3">
                    <label for="confirm-password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirm_password" />
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
export default ChangePassword;
