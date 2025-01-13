import React from "react";
import Logo from "../assets/img/logo.png";
import { Link as InertiaLink } from "@inertiajs/react";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
                            <InertiaLink className="nav-link" href="/">
                                Accueil
                            </InertiaLink>
                        </li>
                        <li className="nav-item">
                            <InertiaLink className="nav-link" href="/about">
                                À propos de nous
                            </InertiaLink>
                        </li>
                        <li className="nav-item">
                            <InertiaLink className="nav-link" href="/catalogue">
                                Notre catalogue
                            </InertiaLink>
                        </li>
                        <li className="nav-item">
                            <InertiaLink className="nav-link" href="/about">
                                Notre métier
                            </InertiaLink>
                        </li>
                        <li className="nav-item">
                            <InertiaLink className="nav-link" href="/home">
                                Actualité
                            </InertiaLink>
                        </li>
                        <li className="nav-item">
                            <InertiaLink className="nav-link" href="/contact">
                                Nous contacter
                            </InertiaLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
