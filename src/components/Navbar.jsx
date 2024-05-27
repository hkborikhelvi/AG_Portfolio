import React from "react";
import "../App.css"
import "./Navbar.css"
// import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="nav navbar navbar-expand-lg">
                <div className="container">
                    <div>
                        <a className="navbar-brand" href="/"> </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item">
                                <a href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a href="#price">Price</a>
                            </li>
                            <li className="nav-item">
                                <a href="#aboutUs">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a href="#benefits">Benefits</a>
                            </li>
                            <li className="nav-item">
                                <a href="#reviews">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contactUs">Contact Us</a>
                            </li>
                        </ul>
                        <div>
                            <button className="btn fw-bolder">Login</button>
                            <button className="btn   btn-dark pt-2 pb-2 pe-4 ps-4">Get Started</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar