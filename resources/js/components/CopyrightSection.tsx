import React from "react";

const CopyrightSection = () => {
    return (
        <div
            className="row copyright-section"
            style={{
                backgroundColor: "rgb(0 36 74)",
                padding: "20px",
            }}
        >
            <div className="col-6 text-start">
                <small className="text-white">
                    nmieducation.com © {new Date().getFullYear()}
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
    );
};

export default CopyrightSection;
