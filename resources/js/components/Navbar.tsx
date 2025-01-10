import React from "react";
import Logo from "../assets/img/logo.png";

const Navbar: React.FC = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#0066cc" }}
        >
            <div className="container flex-column">
                <a className="navbar-brand text-center mb-3" href="#">
                    <img
                        src={Logo}
                        alt="NMI Education"
                        width="100"
                        style={{ filter: "brightness(0) invert(1)" }}
                    />
                </a>
                <button
                    className="navbar-toggler mx-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Accueil
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                À propos de nous
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Notre métier
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Notre catalogue
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Actualité
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Nous contacter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
