import React from "react";
import ManuscritForm from "../components/ManuscritForm";
import InnerPageLayout from "../layouts/InnerPageLayout";
import { BannerProps } from "../types/interfaces";
import JobForm from "../components/JobForm";

const JoinUs = () => {
    const description =
        "Vous rêvez d'une carrière dans le secteur de l'édition ? Postulez chez NMI Education";
    const banner: BannerProps = {
        description: description,
        textAlign: "center",
        className: "lead font-weight-600 p-5 display-7",
    };
    return (
        <InnerPageLayout title="Rejoignez-nous" banner={banner}>
            <div className="container" style={{ padding: "50px 20px" }}>
                <div className="row">
                    {/* Left Column - Form */}
                    <div className="col-lg-10 mx-auto">
                        <h2 className="mb-4 font-weight-700 position-relative d-inline-block text-center">
                            Vous êtes passionné(e) par le monde de l'édition ?
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
                            Rejoignez notre équipe dynamique et expérimentée.
                            NMI est toujours à la recherche de nouveaux talents.
                            Faites-nous parvenir votre candidature spontanée en
                            remplissant intégralement le formulaire ci-dessous.
                        </p>
                        <p className="mb-5">
                            Votre candidature sera étudiée avec attention par
                            les équipes RH et une réponse vous sera adressée
                            dans les brefs délais.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <JobForm />
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <h2 className="h3 mb-4 font-weight-600">
                                En rejoignant l'équipe de NMI Education, vous
                                aurez l'opportunité de participer au rayonnement
                                de la culture et de l'éducation.
                            </h2>
                            <div className="card bg-primary text-white">
                                <div className="card-body">
                                    <div className="process-steps">
                                        <h4 className="mb-4 text-center">
                                            Notre processus de recrutement
                                        </h4>
                                        <div className="ps-4">
                                            <p className="mb-2 text-white">
                                                Étape 1 → Service des ressources
                                                humaines
                                            </p>
                                            <p className="mb-2 text-white">
                                                Étape 2 → Test d'aptitude
                                                professionnel
                                            </p>
                                            <p className="mb-2 text-white">
                                                Étape 3 → Entretien avec le
                                                candidat
                                            </p>
                                            <p className="mb-2 text-white">
                                                Étape 4 → Engagement pré-emploi
                                            </p>
                                            <p className="mb-2 text-white">
                                                Étape 5 → Contrat de travail
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

export default JoinUs;
