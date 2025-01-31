import logo from "../logo.svg";
import SingleProduct from "./SingleProduct";
function CategoryProducts() {
    return (
        <div className="container mt-4">
            {/* Popular Cateories */}
            < div className="row mb-4" >
                <h4 className="fw-bold">
                    Python Projects
                </h4>

                <SingleProduct title="Django project 1" />
                <SingleProduct title="Django project 2" />
                <SingleProduct title="Django project 3" />
                <SingleProduct title="Django project 4" />
            </ div >
            {/* End Popular categories */}
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )

}
export default CategoryProducts;
