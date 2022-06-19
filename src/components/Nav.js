import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light py-3">
                <div className="container justify-content-between">
                    <Link className="navbar-brand fs-4 fw-bold" to="/">Loca Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Contacts</Link>
                            </li>
                        </ul>
                        <div className="buttons">
                            <Link className="btn btn-outline-primary" to="/"><i className="bi bi-cart"></i> Cart (0)</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;