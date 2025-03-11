import { Link } from "@inertiajs/react";
import React from "react";

const CopyrightSection = () => {
    return (
        <div
            className="copyright-section"
            style={{
                backgroundColor: "rgb(0 36 74)",
                padding: "15px 20px",
            }}
        >
            <div className="container">
                <div className="row gy-2 align-items-center">
                    <div className="col-12 col-md-4 text-center">
                        <small className="text-white">
                            nmieducation.com © {new Date().getFullYear()}
                        </small>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="d-flex flex-wrap gap-3 justify-content-center">
                            <small>
                                <Link
                                    href="/contact"
                                    className="text-white text-decoration-none"
                                >
                                    Nous Contacter
                                </Link>
                            </small>
                            <small>
                                <Link
                                    href="/submit-your-manuscrit"
                                    className="text-white text-decoration-none"
                                >
                                    Soumettre un manuscrit
                                </Link>
                            </small>
                            <small>
                                <Link
                                    href="/become-distributor"
                                    className="text-white text-decoration-none"
                                >
                                    Devenir Distributeur
                                </Link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CopyrightSection;
