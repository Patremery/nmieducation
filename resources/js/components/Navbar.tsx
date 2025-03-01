import React, { useState, useEffect } from "react";
import Logo from "../assets/img/logo.png";
import { Link as InertiaLink } from "@inertiajs/react";

const Navbar: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState<{
        [key: string]: boolean;
    }>({
        catalogue: false,
        contact: false,
    });

    // Détecter si l'appareil est mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 992); // lg breakpoint de Bootstrap
        };

        // Vérifier au chargement
        checkIfMobile();

        // Vérifier au redimensionnement
        window.addEventListener("resize", checkIfMobile);

        // Nettoyer l'écouteur d'événement
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    // Gérer l'ouverture/fermeture des menus déroulants
    const toggleDropdown = (dropdownName: string, e: React.MouseEvent) => {
        if (isMobile) {
            e.preventDefault(); // Empêcher la navigation sur mobile lors du clic sur le dropdown
            setOpenDropdowns((prev) => ({
                ...prev,
                [dropdownName]: !prev[dropdownName],
            }));
        }
    };

    // Gérer l'ouverture/fermeture du menu mobile
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        document.body.style.overflow = !isMenuOpen ? "hidden" : "";
    };

    // Fermer le menu mobile lors de la navigation
    const handleNavigation = () => {
        if (isMobile && isMenuOpen) {
            setIsMenuOpen(false);
            document.body.style.overflow = "";
        }
    };

    return (
        <>
            {isMobile && isMenuOpen && (
                <div className="mobile-menu-overlay" onClick={toggleMenu}></div>
            )}

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container flex-column">
                    <div className="d-flex justify-content-between align-items-center w-100 py-5">
                        <button
                            className="navbar-toggler border-0"
                            type="button"
                            onClick={toggleMenu}
                            style={{ width: "42px", visibility: "visible" }}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <InertiaLink
                            className="navbar-brand text-center position-absolute start-50 translate-middle-x"
                            href="/"
                        >
                            <img
                                src={Logo}
                                alt="NMI Education"
                                width="100"
                                style={{ filter: "brightness(0) invert(1)" }}
                            />
                        </InertiaLink>

                        <div
                            className="d-lg-none"
                            style={{ width: "42px", visibility: "hidden" }}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </div>
                    </div>

                    <div
                        className={`mobile-menu ${
                            isMenuOpen ? "open" : ""
                        } d-lg-none`}
                    >
                        <div className="mobile-menu-header">
                            <button
                                className="btn-close text-white"
                                onClick={toggleMenu}
                                aria-label="Fermer le menu"
                            ></button>
                            <div className="text-center py-3">
                                <img
                                    src={Logo}
                                    alt="NMI Education"
                                    width="80"
                                    style={{
                                        filter: "brightness(0) invert(1)",
                                    }}
                                />
                            </div>
                        </div>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <InertiaLink
                                    className="nav-link"
                                    href="/"
                                    onClick={handleNavigation}
                                >
                                    Accueil
                                </InertiaLink>
                            </li>
                            <li className="nav-item">
                                <InertiaLink
                                    className="nav-link"
                                    href="/about"
                                    onClick={handleNavigation}
                                >
                                    À propos de nous
                                </InertiaLink>
                            </li>
                            <li
                                className={`nav-item dropdown ${
                                    openDropdowns.catalogue ? "show" : ""
                                }`}
                            >
                                <InertiaLink
                                    className={`nav-link dropdown-toggle ${
                                        openDropdowns.catalogue ? "show" : ""
                                    }`}
                                    href="/catalogue"
                                    id="catalogueDropdown"
                                    onClick={(e) =>
                                        toggleDropdown("catalogue", e)
                                    }
                                    role="button"
                                    aria-expanded={openDropdowns.catalogue}
                                >
                                    Notre catalogue
                                </InertiaLink>
                                <ul
                                    className={`dropdown-menu ${
                                        openDropdowns.catalogue ? "show" : ""
                                    }`}
                                    style={{ borderRadius: 0 }}
                                    aria-labelledby="catalogueDropdown"
                                >
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/catalogue"
                                            onClick={handleNavigation}
                                        >
                                            Tout le catalogue
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/catalogue/category/school"
                                            onClick={handleNavigation}
                                        >
                                            Manuels Scolaires
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/catalogue/category/literature"
                                            onClick={handleNavigation}
                                        >
                                            Littérature Générale
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/catalogue/category/kids"
                                            onClick={handleNavigation}
                                        >
                                            Littérature pour enfants
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/catalogue/category/guides"
                                            onClick={handleNavigation}
                                        >
                                            Guides Pédagogiques
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/catalogue/category/catalog"
                                            onClick={handleNavigation}
                                        >
                                            Catalogues
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/authors"
                                            onClick={handleNavigation}
                                        >
                                            Auteurs
                                        </InertiaLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <InertiaLink
                                    className="nav-link"
                                    href="/blog"
                                    onClick={handleNavigation}
                                >
                                    Actualité
                                </InertiaLink>
                            </li>
                            <li
                                className={`nav-item dropdown ${
                                    openDropdowns.contact ? "show" : ""
                                }`}
                            >
                                <InertiaLink
                                    className={`nav-link dropdown-toggle ${
                                        openDropdowns.contact ? "show" : ""
                                    }`}
                                    href="/contact"
                                    id="contactDropdown"
                                    onClick={(e) =>
                                        toggleDropdown("contact", e)
                                    }
                                    role="button"
                                    aria-expanded={openDropdowns.contact}
                                >
                                    Nous contacter
                                </InertiaLink>
                                <ul
                                    className={`dropdown-menu ${
                                        openDropdowns.contact ? "show" : ""
                                    }`}
                                    style={{ borderRadius: 0 }}
                                    aria-labelledby="contactDropdown"
                                >
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/contact"
                                            onClick={handleNavigation}
                                        >
                                            Nous Contacter
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/submit-your-manuscrit"
                                            onClick={handleNavigation}
                                        >
                                            Envoyer un Manuscrit
                                        </InertiaLink>
                                    </li>

                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/become-distributor"
                                            onClick={handleNavigation}
                                        >
                                            Devenir distributeur
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/join-us"
                                            onClick={handleNavigation}
                                        >
                                            Candidature Spontanée
                                        </InertiaLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* Menu desktop */}
                    <div
                        className="collapse navbar-collapse d-none d-lg-block py-1"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav mx-auto gap-2">
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
                            <li className="nav-item dropdown">
                                <InertiaLink
                                    className="nav-link dropdown-toggle"
                                    href="/catalogue"
                                    id="catalogueDropdownDesktop"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                >
                                    Notre catalogue
                                </InertiaLink>
                                <ul
                                    className="dropdown-menu"
                                    style={{ borderRadius: 0 }}
                                    aria-labelledby="catalogueDropdownDesktop"
                                >
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/catalogue"
                                        >
                                            Tout le catalogue
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/catalogue/category/school"
                                        >
                                            Manuels Scolaires
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/catalogue/category/literature"
                                        >
                                            Littérature Générale
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/catalogue/category/kids"
                                        >
                                            Littérature pour enfants
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/catalogue/category/guides"
                                        >
                                            Guides Pédagogiques
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/catalogue/category/catalog"
                                        >
                                            Catalogues
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/authors"
                                        >
                                            Auteurs
                                        </InertiaLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <InertiaLink className="nav-link" href="/blog">
                                    Actualité
                                </InertiaLink>
                            </li>
                            <li className="nav-item dropdown">
                                <InertiaLink
                                    className="nav-link dropdown-toggle"
                                    href="/contact"
                                    id="contactDropdownDesktop"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                >
                                    Nous contacter
                                </InertiaLink>
                                <ul
                                    className="dropdown-menu"
                                    style={{ borderRadius: 0 }}
                                    aria-labelledby="contactDropdownDesktop"
                                >
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/contact"
                                        >
                                            Nous Contacter
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/submit-your-manuscrit"
                                        >
                                            Envoyer un Manuscrit
                                        </InertiaLink>
                                    </li>

                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/become-distributor"
                                        >
                                            Devenir distributeur
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            className="dropdown-item"
                                            href="/join-us"
                                        >
                                            Candidature Spontanée
                                        </InertiaLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <style>
                {`
                /* Overlay pour le menu mobile */
                .mobile-menu-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 1040;
                }
                
                /* Menu mobile style tiroir */
                .mobile-menu {
                    position: fixed;
                    top: 0;
                    left: -280px;
                    width: 280px;
                    height: 100vh;
                    background-color: var(--bs-primary);
                    z-index: 1050;
                    overflow-y: auto;
                    transition: left 0.3s ease;
                    padding: 0;
                    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
                }
                
                .mobile-menu.open {
                    left: 0;
                }
                
                .mobile-menu-header {
                    display: flex;
                    flex-direction: column;
                    padding: 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .mobile-menu .btn-close {
                    align-self: flex-end;
                    opacity: 0.8;
                }
                
                .mobile-menu .navbar-nav {
                    padding: 1rem 0;
                }
                
                .mobile-menu .nav-link {
                    padding: 0.75rem 1.5rem;
                    color: white;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .mobile-menu .dropdown-menu.show {
                    display: block;
                    position: static;
                    float: none;
                    width: 100%;
                    margin-top: 0;
                    background-color: rgba(0, 0, 0, 0.2);
                    border: none;
                    box-shadow: none;
                    padding: 0;
                }
                
                .mobile-menu .dropdown-item {
                    color: rgba(255, 255, 255, 0.8) !important;
                    padding: 0.75rem 2.5rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                
                .mobile-menu .dropdown-item:hover {
                    background-color: rgba(255, 255, 255, 0.1);
                    color: white !important;
                }
                
                .mobile-menu .nav-link.dropdown-toggle.show:after {
                    transform: rotate(180deg);
                    transition: transform 0.2s ease;
                }
                
                .mobile-menu .nav-link.dropdown-toggle:after {
                    transition: transform 0.2s ease;
                    float: right;
                    margin-top: 8px;
                }
                `}
            </style>
        </>
    );
};

export default Navbar;
