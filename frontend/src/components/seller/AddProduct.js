import { Link } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import logo from "../../logo.svg";

function AddProduct() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12">
          <SellerSidebar />
        </div>
        <div className="col-md-9 col-12">
          <div className="row">
            <div className="card">
              <h3 className="card-header">Add Product</h3>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label for="category" className="form-label">Category</label>
                    <select name="category" id="category" className="form-control">
                      <option value="php">PHP</option>
                      <option value="python">Python</option>
                      <option value="javascript">Javascript</option>
                      <option value="laravel">Laravel</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label for="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" />
                  </div>
                  <div className="mb-3">
                    <label for="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" />
                  </div>
                  <div className="mb-3">
                    <label for="description" className="form-label">Description</label>
                    <textarea type="text" rows="8" className="form-control" id="description" />
                  </div>
                  <div className="mb-3">
                    <label for="product_image" className="form-label">Products Image</label>
                    <input type="file" className="form-control" id="product_img" />
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
export default AddProduct;
