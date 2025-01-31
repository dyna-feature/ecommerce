import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import logo from "../../logo.svg";

function AddressList() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12">
          <Sidebar />
        </div>
        <div className="col-md-9 col-12">
          <div className="row">
            <div className="col-12">
              <Link to="/customer/add-addresses" className="btn btn-outline-success mb-4 float-end">
                <i className="fa fa-plus-circle"> </i> Add Address
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-4 mb-4 ">
              <div className="card">
                <div className="card-body">
                  <h6>
                    <i className="fa fa-check-circle text-success mb-2"></i>
                    <br />
                    Jl. Jend. Ibnu Sutowo No.1, Tlk. Tering, Kec. Batam Kota,
                    Kota Batam, Kepulauan Riau 29400
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4 ">
              <div className="card">
                <div className="card-body">
                  <h6>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm mb-2"
                    >
                      Make Default
                    </button>
                    <br />
                    Jl. Jend. Ibnu Sutowo No.1, Tlk. Tering, Kec. Batam Kota,
                    Kota Batam, Kepulauan Riau 29400
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4 ">
              <div className="card">
                <div className="card-body">
                  <h6>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm mb-2"
                    >
                      Make Default
                    </button>
                    <br />
                    Jl. Jend. Ibnu Sutowo No.1, Tlk. Tering, Kec. Batam Kota,
                    Kota Batam, Kepulauan Riau 29400
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4 ">
              <div className="card">
                <div className="card-body">
                  <h6>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm mb-2"
                    >
                      Make Default
                    </button>
                    <br />
                    Jl. Jend. Ibnu Sutowo No.1, Tlk. Tering, Kec. Batam Kota,
                    Kota Batam, Kepulauan Riau 29400
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4 ">
              <div className="card">
                <div className="card-body">
                  <h6>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm mb-2"
                    >
                      Make Default
                    </button>
                    <br />
                    Jl. Jend. Ibnu Sutowo No.1, Tlk. Tering, Kec. Batam Kota,
                    Kota Batam, Kepulauan Riau 29400
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4 ">
              <div className="card">
                <div className="card-body">
                  <h6>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm mb-2"
                    >
                      Make Default
                    </button>
                    <br />
                    Jl. Jend. Ibnu Sutowo No.1, Tlk. Tering, Kec. Batam Kota,
                    Kota Batam, Kepulauan Riau 29400
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AddressList;
