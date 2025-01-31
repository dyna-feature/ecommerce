import { Link } from "react-router-dom";
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Python Market Place
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/categories">
                                Categories
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/checkout">
                                <i className="fa-solid fa-cart-plus"></i>My Cart (4)
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/checkout">
                                <i className="fa-solid fa-cart-plus"></i>New Orders (4)
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                My Account
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/customer/register">Register</Link></li>
                                <li><Link className="dropdown-item" to="/customer/login">Login</Link></li>
                                <li><Link className="dropdown-item" to="/customer/dashboard">Dashboard</Link></li>
                                <li><Link className="dropdown-item" to="/customer/logout">Logout</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Seller Panel
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/seller/seller-register">Register</Link></li>
                                <li><Link className="dropdown-item" to="/seller/seller-login">Login</Link></li>
                                <li><Link className="dropdown-item" to="/seller/seller-dashboard">Dashboard</Link></li>
                                <li><Link className="dropdown-item" to="/seller/seller-logout">Logout</Link></li>
                            </ul>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;