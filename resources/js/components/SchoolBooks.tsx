import React from "react";
import BookCover from "../assets/img/cover.png";

const SchoolBooks: React.FC = () => {
    return (
        <div className="catalogue-section">
            <h2>Manuels Scolaires</h2>
            <div className="row mt-4">
                <div className="col-md-2">
                    <div className="card">
                        <img
                            src={BookCover}
                            className="card-img-top"
                            alt="Manuel"
                        />
                        <div className="card-body p-2">
                            <h6 className="mb-0">Deutsch 3e</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <img
                            src={BookCover}
                            className="card-img-top"
                            alt="Manuel"
                        />
                        <div className="card-body p-2">
                            <h6 className="mb-0">Deutsch 3e</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <img
                            src={BookCover}
                            className="card-img-top"
                            alt="Manuel"
                        />
                        <div className="card-body p-2">
                            <h6 className="mb-0">Deutsch 3e</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <img
                            src={BookCover}
                            className="card-img-top"
                            alt="Manuel"
                        />
                        <div className="card-body p-2">
                            <h6 className="mb-0">Deutsch 3e</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <img
                            src={BookCover}
                            className="card-img-top"
                            alt="Manuel"
                        />
                        <div className="card-body p-2">
                            <h6 className="mb-0">Deutsch 3e</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <img
                            src={BookCover}
                            className="card-img-top"
                            alt="Manuel"
                        />
                        <div className="card-body p-2">
                            <h6 className="mb-0">Deutsch 3e</h6>
                        </div>
                    </div>
                </div>
                {/* Ajoutez d'autres manuels ici */}
            </div>
            <div className="text-end mt-3">
                <a href="#" className="text-primary">
                    Plus de Manuels Scolaires →
                </a>
            </div>
        </div>
    );
};

export default SchoolBooks;
