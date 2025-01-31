import { Link } from "react-router-dom";
import logo from "../logo.svg";
import SingleProduct from "./SingleProduct";
import { useEffect, useState } from "react";
function AllProducts() {
    // const products = [
    //     {
    //         'title': 'Django',
    //         'price': 900,
    //     },
    //     {
    //         'title': 'JS',
    //         'price': 200,
    //     },
    //     {
    //         'title': 'PHP',
    //         'price': 111,
    //     }
    // ]
    // console.log(products)

    const baseUrl = 'http://127.0.0.1:8000/api'
    const [products, setProducts] = useState([])
    // totalResults ini buat ngambil total page yang ada di variable count yang di generate oleh drf
    const [totalResults, setTotalResults] = useState(0)
    // const [baseurl, setBaseurl] = useState(baseUrl + '/products/')


    useEffect(() => {
        fetchData(baseUrl + '/products');
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                //results atau count ini ngambil dari nama variabel yang di tampilkan drf
                setProducts(data.results)
                setTotalResults(data.count)
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function changeUrl(baseurl) {
        fetchData(baseurl)
    }

    // membuat link untuk pagination, nanti dipanggil di bawah di halaman return variable links nya
    var links = [];
    for (let i = 1; i <= totalResults; i++) {
        links.push(<li class="page-item"><Link class="page-link" onClick={() => changeUrl(baseUrl + `/products/?page=${i}`)} to={`/products/?page=${i}`}>{i}</Link></li>)
    }

    return (
        <div className="container mt-4">
            {/* Popular Cateories */}
            < div className="row mb-4" >
                <h4 className="fw-bold">
                    All Products
                </h4>
                {
                    products.map((product) => <SingleProduct product={product} />)
                }


            </ div >
            {/* End Popular categories */}
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>

                    {links}
                </ul>
            </nav>
        </div>
    )

}
export default AllProducts;
