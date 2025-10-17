import React from "react";
import ManuscritForm from "../components/ManuscritForm";
import InnerPageLayout from "../layouts/InnerPageLayout";
import { BannerProps } from "../types/interfaces";

const ManuscriptSubmission = () => {
    const description =
        "Envoyez-nous votre manuscrit et ensemble donnons vie à votre projet littéraire";
    const banner: BannerProps = {
        description: description,
        textAlign: "center",
        className: "lead font-weight-600 p-5 display-7",
    };
    return (
        <InnerPageLayout title="Soumettre un Manuscrit" banner={banner}>
            <div className="manuscript-submission py-5 my-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11 col-xl-10">
                            <div className="intro-section text-center mb-5">
                                <h2 className="mb-4 font-weight-700 position-relative d-inline-block">
                                    Vous avez un talent pour l'écriture ?
                                    <span
                                        className="position-absolute bg-warning"
                                        style={{
                                            height: "4px",
                                            width: "50%",
                                            bottom: "-10px",
                                            left: "25%",
                                        }}
                                    ></span>
                                </h2>
                                <p className="lead mb-4">
                                    Soumettez nous votre projet littéraire et
                                    toute l'expertise de la maison d'édition NMI
                                    Education vous garantie un accompagnement
                                    ultra-personnalisé.
                                </p>
                                <p className="mb-0">
                                    Envoyez nous votre manuscrit en remplissant
                                    intégralement le formulaire ci-dessous.
                                    Notre service manuscrit étudiera votre texte
                                    et vous donnera une réponse pour une
                                    possible publication sous une quinzaine de
                                    jours.
                                </p>
                            </div>

                            <div className="content-section">
                                <div className="row g-4">
                                    <div className="col-lg-7 order-lg-1 order-2">
                                        <div className="form-container bg-light p-4 p-md-5 rounded shadow-sm">
                                            <h3 className="h4 mb-4 text-primary font-weight-600">
                                                Formulaire de soumission
                                            </h3>
                                            <ManuscritForm />
                                        </div>
                                    </div>

                                    <div className="col-lg-5 order-lg-2 order-1 mb-4 mb-lg-0">
                                        <div className="info-container d-flex flex-column h-100">
                                            <div className="confidentiality-card mb-4 bg-white p-4 rounded shadow-sm border-start border-primary border-4">
                                                <h3 className="h4 mb-3 font-weight-600 text-primary">
                                                    Confidentialité garantie
                                                </h3>
                                                <p>
                                                    NMI Education vous garantit
                                                    une confidentialité totale
                                                    et la protection de votre
                                                    oeuvre tout au long du
                                                    processus d'évaluation et de
                                                    publication.
                                                </p>
                                            </div>

                                            <div className="process-card bg-primary text-white rounded shadow overflow-hidden flex-grow-1">
                                                <div className="card-header bg-primary-dark py-3 px-4">
                                                    <h4 className="mb-0 text-center text-white">
                                                        Notre processus
                                                        éditorial
                                                    </h4>
                                                </div>
                                                <div className="card-body p-4">
                                                    <div className="process-steps">
                                                        <div className="step d-flex align-items-center mb-3">
                                                            <div
                                                                className="step-number bg-white text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                                                style={{
                                                                    width: "30px",
                                                                    height: "30px",
                                                                    minWidth:
                                                                        "30px",
                                                                }}
                                                            >
                                                                1
                                                            </div>
                                                            <p className="mb-0 text-white">
                                                                Service
                                                                manuscrit
                                                            </p>
                                                        </div>
                                                        <div className="step d-flex align-items-center mb-3">
                                                            <div
                                                                className="step-number bg-white text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                                                style={{
                                                                    width: "30px",
                                                                    height: "30px",
                                                                    minWidth:
                                                                        "30px",
                                                                }}
                                                            >
                                                                2
                                                            </div>
                                                            <p className="mb-0 text-white">
                                                                Contrat de
                                                                publication
                                                            </p>
                                                        </div>
                                                        <div className="step d-flex align-items-center mb-3">
                                                            <div
                                                                className="step-number bg-white text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                                                style={{
                                                                    width: "30px",
                                                                    height: "30px",
                                                                    minWidth:
                                                                        "30px",
                                                                }}
                                                            >
                                                                3
                                                            </div>
                                                            <p className="mb-0 text-white">
                                                                Fabrication et
                                                                mise en page
                                                            </p>
                                                        </div>
                                                        <div className="step d-flex align-items-center mb-3">
                                                            <div
                                                                className="step-number bg-white text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                                                style={{
                                                                    width: "30px",
                                                                    height: "30px",
                                                                    minWidth:
                                                                        "30px",
                                                                }}
                                                            >
                                                                4
                                                            </div>
                                                            <p className="mb-0 text-white">
                                                                Création de la
                                                                maquette
                                                            </p>
                                                        </div>
                                                        <div className="step d-flex align-items-center mb-3">
                                                            <div
                                                                className="step-number bg-white text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                                                style={{
                                                                    width: "30px",
                                                                    height: "30px",
                                                                    minWidth:
                                                                        "30px",
                                                                }}
                                                            >
                                                                5
                                                            </div>
                                                            <p className="mb-0 text-white">
                                                                Impression
                                                            </p>
                                                        </div>
                                                        <div className="step d-flex align-items-center mb-3">
                                                            <div
                                                                className="step-number bg-white text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                                                style={{
                                                                    width: "30px",
                                                                    height: "30px",
                                                                    minWidth:
                                                                        "30px",
                                                                }}
                                                            >
                                                                6
                                                            </div>
                                                            <p className="mb-0 text-white">
                                                                Distribution
                                                            </p>
                                                        </div>
                                                        <div className="step d-flex align-items-center mb-3">
                                                            <div
                                                                className="step-number bg-white text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                                                style={{
                                                                    width: "30px",
                                                                    height: "30px",
                                                                    minWidth:
                                                                        "30px",
                                                                }}
                                                            >
                                                                7
                                                            </div>
                                                            <p className="mb-0 text-white">
                                                                Promotion et
                                                                communication
                                                            </p>
                                                        </div>
                                                        <div className="step d-flex align-items-center">
                                                            <div
                                                                className="step-number bg-white text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                                                style={{
                                                                    width: "30px",
                                                                    height: "30px",
                                                                    minWidth:
                                                                        "30px",
                                                                }}
                                                            >
                                                                8
                                                            </div>
                                                            <p className="mb-0 text-white">
                                                                Naissance de
                                                                nouveaux
                                                                talent(s)
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .manuscript-submission {
                    background-color: #f8f9fa;
                }
                
                @media (max-width: 991px) {
                    .order-lg-1 {
                        margin-top: 2rem;
                    }
                }
                
                @media (max-width: 767px) {
                    .intro-section h2 {
                        font-size: 1.75rem;
                    }
                    
                    .form-container, .info-container > div {
                        padding: 1.5rem !important;
                    }
                }
            `}</style>
        </InnerPageLayout>
    );
};

export default ManuscriptSubmission;
