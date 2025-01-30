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
        <InnerPageLayout banner={banner}>
            <div className="container p-5">
                <div className="row">
                    {/* Left Column - Form */}
                    <div className="col-lg-12">
                        <h2 className="mb-4 text-center font-weight-600">
                            Vous avez un talent pour l'écriture ?
                        </h2>
                        <p className="lead mb-4">
                            Soumettez nous votre projet littéraire et toute
                            l'expertise de la maison d'édition NMI Education
                            vous garantie un accompagnement ultra-personnalisé.
                        </p>
                        <p className="mb-5">
                            Envoyez nous votre manuscrit en remplissant
                            intégralement le formulaire ci-dessous. Notre
                            service manuscrit étudiera votre texte et vous
                            donnera une réponse pour une possible publication
                            sous une quinzaine de jours.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-7">
                            <ManuscritForm />
                        </div>
                        <div className="col-lg-5">
                            <h2 className="h3 mb-4 font-weight-600">
                                NMI Education vous garantit une confidentialité
                                totale et la protection de votre oeuvre.
                            </h2>
                            <div className="card bg-primary text-white">
                                <div className="card-body">
                                    <div className="process-steps">
                                        <h4 className="mb-4 text-center">
                                            Notre processus éditorial
                                        </h4>
                                        <div className="ps-4">
                                            <p className="mb-2">
                                                Étape 1 → Service manuscrit
                                            </p>
                                            <p className="mb-2">
                                                Étape 2 → Contrat de publication
                                            </p>
                                            <p className="mb-2">
                                                Étape 3 → Fabrication et mise en
                                                page
                                            </p>
                                            <p className="mb-2">
                                                Étape 4 → Création de la
                                                maquette
                                            </p>
                                            <p className="mb-2">
                                                Étape 5 → Impression
                                            </p>
                                            <p className="mb-2">
                                                Étape 6 → Distribution
                                            </p>
                                            <p className="mb-2">
                                                Étape 7 → Promotion et
                                                communication
                                            </p>
                                            <p className="mb-2">
                                                Étape 8 → Naissance de nouveaux
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
        </InnerPageLayout>
    );
};

export default ManuscriptSubmission;
