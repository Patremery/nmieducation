import React from "react";
import Logo from "../assets/img/logo.png";
import QRCode from "../assets/img/qrcode.webp";

const Footer: React.FC = () => {
    return (
        <>
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
                            <p>
                                Nomayos, Entrée route Ngoumou <br />
                                Tel: 00237 654 000 200
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h5 className="mb-3">Suivez notre actualité</h5>
                            <div className="social-icons gap-2">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                            <small>
                                <i>@nmieducationsarl</i>
                            </small>
                            <div className="mb-3 mt-2">
                                <br />
                                <img
                                    src={QRCode}
                                    alt="QR Code"
                                    width="150"
                                    className="qr-code"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h5>A propos de nous</h5>
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
                            <br />
                            <h5>Notre Actualité</h5>
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
                            <h5>Manuels Scolaires</h5>
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
                            <br />
                            <h5>Littérature </h5>
                            <ul>
                                <li>
                                    <a href="#">Sous système Anglophone</a>
                                </li>
                                <li>
                                    <a href="#">Sous système Francophone</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div
                className="row copyright-section"
                style={{
                    backgroundColor: "rgb(5 93 153)",
                    padding: "20px",
                }}
            >
                <div className="col-6 text-start">
                    <small className="text-white">
                        nmieducation.com © 2025
                    </small>
                </div>
                <div className="col-6 text-center d-flex gap-2 justify-content-end">
                    <small>
                        <a href="#" className="text-white text-decoration-none">
                            Nous Contacter
                        </a>
                    </small>
                    <small>
                        <a href="#" className="text-white text-decoration-none">
                            Politique de Confidentialité
                        </a>
                    </small>
                    <small>
                        <a href="#" className="text-white text-decoration-none">
                            Mentions légales
                        </a>
                    </small>
                </div>
            </div>
        </>
    );
};

export default Footer;
