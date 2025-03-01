import React from "react";
import Logo from "../assets/img/logo.png";
import QRCode from "../assets/img/qr.png";
import CopyrightSection from "./CopyrightSection";
import { Link } from "@inertiajs/react";

const Footer: React.FC = () => {
    return (
        <>
            <footer className="bg-primary text-white py-4 py-md-5">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-12 col-sm-6 col-lg-3 text-center text-sm-start">
                            <Link href={`/`} className="d-inline-block">
                                <img
                                    src={Logo}
                                    alt="NMI Education"
                                    width="120"
                                    style={{
                                        filter: "brightness(0) invert(1)",
                                    }}
                                    className="mb-3"
                                />
                            </Link>
                            <p className="text-white mb-3">
                                Nomayos, Entrée route Ngoumou <br />
                                Tel: 00237 654 000 200
                            </p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 text-center text-sm-start">
                            <h5 className="mb-3">Suivez notre actualité</h5>
                            <div className="social-icons d-flex flex-wrap gap-2 mb-3 justify-content-center justify-content-sm-start">
                                <a
                                    href="https://facebook.com/nmieducationsarl"
                                    className="social-icon"
                                    aria-label="Facebook"
                                    target="_blank"
                                >
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/nmi-education-sarl"
                                    className="social-icon"
                                    aria-label="LinkedIn"
                                >
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a
                                    href="https://www.youtube.com/@nmieducation5180"
                                    className="social-icon"
                                    aria-label="YouTube"
                                >
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a
                                    href="https://twitter.com/nmieducationcam"
                                    className="social-icon"
                                    aria-label="Twitter"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a
                                    href="https://wa.me/237682000200"
                                    className="social-icon"
                                    aria-label="WhatsApp"
                                >
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                            <small>
                                <i>@nmieducationsarl</i>
                            </small>
                            <div className="d-none d-sm-block mb-3 mt-2 text-center text-sm-start">
                                <img
                                    src={QRCode}
                                    alt="QR Code"
                                    width="120"
                                    className="qr-code"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 text-center text-sm-start">
                            <h5 className="mb-3">A propos de nous</h5>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-2">
                                    <Link
                                        href="/about"
                                        className="text-white text-decoration-none"
                                    >
                                        A Propos
                                    </Link>
                                </li>
                                {/* <li className="mb-2">
                                    <Link
                                        href="/our-work"
                                        className="text-white text-decoration-none"
                                    >
                                        Notre Métier
                                    </Link>
                                </li> */}
                                <li className="mb-2">
                                    <Link
                                        href="/catalogue"
                                        className="text-white text-decoration-none"
                                    >
                                        Notre Catalogue
                                    </Link>
                                </li>
                            </ul>
                            {/* <h5 className="mb-3">Notre Actualité</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link
                                        href="#"
                                        className="text-white text-decoration-none"
                                    >
                                        Notre histoire
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="#"
                                        className="text-white text-decoration-none"
                                    >
                                        Présentation
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="#"
                                        className="text-white text-decoration-none"
                                    >
                                        Nos services
                                    </Link>
                                </li>
                            </ul> */}
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 text-center text-sm-start">
                            <h5 className="mb-3">Notre catalogue</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link
                                        href="/catalogue/category/school"
                                        className="text-white text-decoration-none"
                                    >
                                        Manuels Scolaires
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="/catalogue/category/literature"
                                        className="text-white text-decoration-none"
                                    >
                                        Littérature Générale
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="/catalogue/category/kids"
                                        className="text-white text-decoration-none"
                                    >
                                        Littérature pour enfants
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="/catalogue/category/guides"
                                        className="text-white text-decoration-none"
                                    >
                                        Guides Pédagogiques
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="/catalogue/category/catalog"
                                        className="text-white text-decoration-none"
                                    >
                                        Télécharger nos catalogues
                                    </Link>
                                </li>
                                {/* <li className="mb-2">
                                    <Link
                                        href="/authors"
                                        className="text-white text-decoration-none"
                                    >
                                        Auteurs
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <CopyrightSection />
        </>
    );
};

export default Footer;
