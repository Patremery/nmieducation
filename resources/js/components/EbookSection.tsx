import React from "react";
import BookImage from "../assets/img/ebook.png";
import Adinkra from "../assets/img/adinkra.png";
import Youscribe from "../assets/img/youscribe.png";
import Amazon from "../assets/img/amazon.png";

const EbookSection: React.FC = () => {
    return (
        <div
            className="ebook-section mt-5"
            style={{
                backgroundColor: "#f7f7f7",
                marginLeft: "calc(-50vw + 50%)",
                marginRight: "calc(-50vw + 50%)",
                width: "100vw",
                position: "relative",
                padding: "60px",
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <h4
                            className="text-center"
                            style={{ fontWeight: "700" }}
                        >
                            Nos manuels scolaires et nos œuvres littéraires sont
                            également disponible en un clic !
                        </h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 text-center">
                        <img src={BookImage} width="50%" alt="" />
                    </div>
                    <div className="col-sm-6">
                        <p className="mt-3 text-start">
                            Les ouvrages édités par NMI Education sont
                            disponibles en lecture et en téléchargement au
                            format numérique sur les plateformes dédiées
                        </p>
                        <div className="platform-logos d-flex justify-content-start gap-4">
                            <img
                                src={Adinkra}
                                style={{
                                    width: "120px",
                                    height: "auto",
                                    objectFit: "contain",
                                    objectPosition: "center",
                                }}
                                alt="Platform 1"
                            />
                            <img
                                src={Youscribe}
                                style={{
                                    width: "120px",
                                    height: "auto",
                                    objectFit: "contain",
                                    objectPosition: "center",
                                }}
                                alt="Platform 2"
                            />
                            <img
                                src={Amazon}
                                style={{
                                    width: "120px",
                                    height: "auto",
                                    objectFit: "contain",
                                    objectPosition: "center",
                                }}
                                alt="Platform 3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EbookSection;
