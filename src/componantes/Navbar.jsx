import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar({ cartItem, dark, isDark, favourite }) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm " id='Navbar'>
                <div className="container">
                    < h3 className="navbar-brand text-white" href="#">ononin <span className='Shop'>Shop</span></h3>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="collapsibleNavId">
                        <ul className="navbar-nav mx-auto mt-2 mt-lg-0 gap-2">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" href="#" aria-current="page">Home
                                    <span className="visually-hidden">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="dropdownId"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >Produtes</a>
                                <div
                                    className="dropdown-menu"aria-labelledby="dropdownId">
                                    <Link to="/fake" className="dropdown-item text-dark fw-bold" href="#">Fake Api</Link>
                                    <Link to="/dummy" className="dropdown-item text-dark fw-bold" href="#">Dummy Json Api</Link>
                                </div>
                            </li>
                           
                            <li className="nav-item">
                                <i onClick={isDark} className="fa-regular fa-moon fs-3 m-auto mt-2"></i>
                            </li>
                        </ul>
                        <div className='d-flex gap-3'>
                            <Link to="/favourite">
                                <i className="fa-solid fa-heart"></i> <sub>({favourite.length})</sub>
                            </Link>
                            <div>
                                <Link to="/cart">
                                    <i className="fa-solid fa-cart-shopping"></i> <sub>({cartItem.length})</sub>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>

            

        </div>
    )
}
