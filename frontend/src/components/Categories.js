import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { useEffect, useState } from "react";

function Categories() {


    const baseUrl = 'http://127.0.0.1:8000/api'
    const [categories, setCategories] = useState([])
    // totalResults ini buat ngambil total page yang ada di variable count yang di generate oleh drf
    const [totalResults, setTotalResults] = useState(0)
    // const [baseurl, setBaseurl] = useState(baseUrl + '/products/')

    useEffect(() => {
        fetchData(baseUrl + '/categories');
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                //results atau count ini ngambil dari nama variabel yang di tampilkan drf
                setCategories(data.results)
                setTotalResults(data.count)
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function changeUrl(baseurl) {
        fetchData(baseurl)
    }

    // membuat link untuk pagination, nanti dipanggil di bawah di halaman return variable links nya
    var links = [];
    var limit = 1
    var totalLinks = totalResults / limit
    for (let i = 1; i <= totalLinks; i++) {
        links.push(<li class="page-item"><Link class="page-link" onClick={() => changeUrl(baseUrl + `/categories/?page=${i}`)} to={`/categories/?page=${i}`}>{i}</Link></li>)
    }


    return (
        <section className="container mt-4">
            {/* Popular Cateories */}
            <div className="row mb-4 ">
                <h4 className="fw-bold">
                    All Categories
                </h4>
                {
                    categories.map((category) =>
                        // {/* begin Categoires Box */ }
                        <div div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img src={logo} className="crd-img-top" alt={category.title} />
                                <div className="card-body">
                                    <h4 className="card-title"><Link to={`/category/${category.title}/${category.id}`}>{category.title}</Link></h4>
                                </div>
                                <div className="card-footer">Product Downloaded: </div>
                            </div>


                        </div>
                    )
                    // {/* end categories box */}
                }




            </div>
            {/* End Popular categories */}

            < nav aria-label="Page navigation example" >
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {links}
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </section >
    )
}
export default Categories;
