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
                backgroundColor: "rgb(224 224 224)",
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
                        <img
                            src={BookImage}
                            width="50%"
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-sm-6">
                        <p className="mt-3 text-start">
                            Les ouvrages édités par NMI Education sont
                            disponibles en lecture et en téléchargement au
                            format numérique sur les plateformes dédiées
                        </p>
                        <div className="platform-logos d-flex flex-column flex-md-row align-items-center align-items-md-start gap-4 mt-4">
                            <a
                                href="https://www.adinkra-jeunesse.com/books.php"
                                target="_blank"
                                className="mb-3 mb-md-0 text-center"
                            >
                                <img
                                    src={Adinkra}
                                    className="img-fluid img-responsive pt-2"
                                    style={{
                                        width: "100px",
                                        height: "auto",
                                        objectFit: "contain",
                                        objectPosition: "center",
                                    }}
                                    alt="Adinkra"
                                />
                            </a>
                            <a
                                href="https://www.youscribe.com/nmi_education/"
                                target="_blank"
                                className="mb-3 mb-md-0 text-center"
                            >
                                <img
                                    src={Youscribe}
                                    className="img-fluid img-responsive"
                                    style={{
                                        width: "100px",
                                        height: "auto",
                                        objectFit: "contain",
                                        objectPosition: "center",
                                    }}
                                    alt="Youscribe"
                                />
                            </a>
                            <a
                                href="https://kdp.amazon.com/en_US/bookshelf?ref_=kdp_kdp_TAC_TN_bs"
                                target="_blank"
                                className="mb-3 mb-md-0 text-center"
                            >
                                <img
                                    src={Amazon}
                                    style={{
                                        width: "100px",
                                        height: "auto",
                                        objectFit: "contain",
                                        objectPosition: "center",
                                    }}
                                    className="img-fluid img-responsive"
                                    alt="Amazon Kindle"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 767.98px) {
                    .ebook-section {
                        padding: 30px 15px !important;
                    }
                    
                    .platform-logos {
                        margin-top: 2rem;
                    }
                    
                    .platform-logos a {
                        margin-bottom: 1.5rem;
                    }
                    
                    .platform-logos img {
                        width: 120px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default EbookSection;
