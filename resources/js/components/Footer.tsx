import React from "react";
import Logo from "../assets/img/logo.png";
const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img
                            src={Logo}
                            alt="NMI Education"
                            width="120"
                            style={{ filter: "brightness(0) invert(1)" }}
                            className="mb-3"
                        />
                        <p>Nouvelle Maison Internationale d'Edition</p>
                        <p>Tel: 00237 654 000 200</p>
                        <div className="social-icons">
                            <a href="#">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5>Suivez notre actualité</h5>
                        <img
                            src="/api/placeholder/100x100"
                            alt="QR Code"
                            className="qr-code"
                        />
                    </div>
                    <div className="col-md-3">
                        <h5>À PROPOS DE NOUS</h5>
                        <ul>
                            <li>
                                <a href="#">Notre histoire</a>
                            </li>
                            <li>
                                <a href="#">Présentation</a>
                            </li>
                            <li>
                                <a href="#">Nos services</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>MANUELS SCOLAIRES</h5>
                        <ul>
                            <li>
                                <a href="#">Sous système Anglophone</a>
                            </li>
                            <li>
                                <a href="#">Sous système Francophone</a>
                            </li>
                            <li>
                                <a href="#">Guides pédagogiques</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <small>© nmieducation.com © 2024</small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
