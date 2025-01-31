import { Link } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import logo from "../../logo.svg";

function VendorProfile() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12">
          <SellerSidebar />
        </div>
        <div className="col-md-9 col-12">
          <div className="row">
            <div className="card">
              <h3 className="card-header">Update Profile</h3>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label for="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstname" />
                  </div>
                  <div className="mb-3">
                    <label for="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastname" />
                  </div>
                  <div className="mb-3">
                    <label for="username" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="username" />
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="mb-3">
                    <label for="profile_image" className="form-label">Profile Image</label>
                    <input type="file" className="form-control" id="email" />
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
export default VendorProfile;
