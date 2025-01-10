import React from "react";
import BookCover from "../assets/img/cover.png";

const GeneralLiterature: React.FC = () => {
    return (
        <div className="literature-section">
            <h2>Littérature générale</h2>
            <div className="row mt-4">
                <div className="col-md-2">
                    <div className="card">
                        <img
                            src={BookCover}
                            className="card-img-top"
                            alt="Livre"
                        />
                        <div className="card-body p-2">
                            <h6 className="mb-0">A special Birthday Wish</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <img
                            src={BookCover}
                            className="card-img-top"
                            alt="Livre"
                        />
                        <div className="card-body p-2">
                            <h6 className="mb-0">A special Birthday Wish</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <img
                            src={BookCover}
                            className="card-img-top"
                            alt="Livre"
                        />
                        <div className="card-body p-2">
                            <h6 className="mb-0">A special Birthday Wish</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <img
                            src={BookCover}
                            className="card-img-top"
                            alt="Livre"
                        />
                        <div className="card-body p-2">
                            <h6 className="mb-0">A special Birthday Wish</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <img
                            src={BookCover}
                            className="card-img-top"
                            alt="Livre"
                        />
                        <div className="card-body p-2">
                            <h6 className="mb-0">A special Birthday Wish</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <img
                            src={BookCover}
                            className="card-img-top"
                            alt="Livre"
                        />
                        <div className="card-body p-2">
                            <h6 className="mb-0">A special Birthday Wish</h6>
                        </div>
                    </div>
                </div>
                {/* Ajoutez d'autres livres ici */}
            </div>
            <div className="text-end mt-3">
                <a href="#" className="text-primary">
                    Plus d'ouvrages jeunesse →
                </a>
            </div>
        </div>
    );
};

export default GeneralLiterature;
