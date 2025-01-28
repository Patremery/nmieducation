import React from "react";
import InnerPageLayout from "../layouts/InnerPageLayout";
import { BannerProps } from "../types/interfaces";
import BannerImage from "../assets/img/nmi-office.jpg";

interface ContactProps {
    contacts: {
        address: string;
        phone: string;
        postalCode: string;
        email: string;
        facebook: string;
        youtube: string;
        twitter: string;
        linkedin: string;
    };
}

const Contact: React.FC<ContactProps> = ({ contacts }) => {
    const description = (
        <p>
            <strong>
                Basée à Yaoundé l'équipe d'experts de <em>NMI Education</em> est
                là pour répondre à toutes vos préoccupations.
            </strong>
            <br />
            N'hésitez pas à nous contacter pour plus d'informations.
        </p>
    );
    const banner: BannerProps = {
        description: description,
        backgroundImage: BannerImage,
        textAlign: "left",
    };

    const content = {
        introduction:
            "Vous souhaitez nous soumettre un manuscrit, devenir distributeur de nos ouvrages, rejoindre notre équipe ou simplement en savoir plus sur NMI Education ?",
        small: "Nous sommes à votre écoute. Contactez-nous dès maintenant pour échanger avec nos équipes et découvrir comment nous pouvons vous accompagner dans votre parcours",
    };

    return (
        <InnerPageLayout banner={banner}>
            <div className="container">
                <div className="row px-5">
                    <div className="col-md-12 p-5 text-center ">
                        <h2 className="font-weight-600">Nous contacter</h2>
                        <div className="lead text-primary">
                            {content.introduction}
                        </div>
                        <small>{content.small}</small>
                    </div>
                </div>
                <div className="row p-5">
                    <div
                        className="col-md-4 p-4"
                        style={{
                            backgroundColor: "#f8f9fa",
                        }}
                    >
                        <h5
                            className="font-weight-600"
                            style={{ fontSize: "18px" }}
                        >
                            Vous avez un talent prononcé pour l'écriture?
                        </h5>
                        <p>
                            Soumettez-nous votre projet littéraire, NMI
                            Education vous garantit un accompagnement
                            ultra-personnalisé pour la réalisation de votre
                            projet
                        </p>
                        <button
                            className="btn btn-primary btn-lg w-100"
                            style={{ fontSize: "14px" }}
                        >
                            Soumettre un manuscrit
                        </button>
                    </div>
                    <div
                        className="col-md-4  p-4"
                        style={{ backgroundColor: "#f8f9fa" }}
                    >
                        <h5
                            className="font-weight-600"
                            style={{ fontSize: "18px" }}
                        >
                            Vous êtes distributeur littéraire et souhaitez
                            enrichir votre catalogue ?
                        </h5>
                        <p>
                            Rejoignez notre réseau de distribution et bénéficier
                            de nos offres adaptées sur tous les titres que
                            compte notre vaste catalogue de livres.
                        </p>
                        <button
                            className="btn btn-primary btn-lg w-100"
                            style={{ fontSize: "14px" }}
                        >
                            Demander nos offres
                        </button>
                    </div>
                    <div
                        className="col-md-4 p-4"
                        style={{ backgroundColor: "#f8f9fa" }}
                    >
                        <h5
                            className="font-weight-600"
                            style={{ fontSize: "18px" }}
                        >
                            Vous êtes passionnés par le monde de l'édition ?
                        </h5>
                        <p>
                            Rejoignez notre équipe, NMI Education est une
                            entreprise dynamique et innovante qui recrute en
                            permanence des talents pour enrichir son équipe.
                        </p>
                        <button
                            className="btn btn-primary btn-lg w-100"
                            style={{ fontSize: "14px" }}
                        >
                            Candidature spontanée
                        </button>
                    </div>
                </div>
                <div className="row text-center p-5">
                    <h3>Vous avez une question</h3>
                    <p>Contactez-nous directement via ce formulaire.</p>
                    <p>
                        Toujours à l'écoute, l'équipe de NMI s'engage à vous
                        répondre dans les meilleurs délais
                    </p>
                </div>
                <div className="row p-5">
                    <div className="col-sm-6">
                        <form>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="name"
                                    placeholder="Entrez votre nom"
                                    required
                                />
                            </div>

                            {/* Champ Email */}
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    id="email"
                                    placeholder="Entrez votre email"
                                    required
                                />
                            </div>

                            {/* Champ Téléphone */}
                            <div className="mb-3">
                                <input
                                    type="tel"
                                    className="form-control form-control-lg"
                                    id="phone"
                                    placeholder="Entrez votre numéro de téléphone"
                                    required
                                />
                            </div>

                            {/* Champ Objet */}
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="subject"
                                    placeholder="Objet de votre message"
                                    required
                                />
                            </div>

                            {/* Champ Message */}
                            <div className="mb-3">
                                <textarea
                                    className="form-control form-control-lg"
                                    id="message"
                                    rows={5}
                                    placeholder="Votre message"
                                    required
                                ></textarea>
                            </div>

                            {/* Bouton de Soumission */}
                            <button type="submit" className="btn btn-danger">
                                Envoyer le message
                            </button>
                        </form>
                    </div>
                    <div className="col-sm-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.948123201123!2d11.5162493157572!3d3.866197997070048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7b5c5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sNMI%20Education!5e0!3m2!1sfr!2scm!4v1633020000000!5m2!1sfr!2scm"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </InnerPageLayout>
    );
};

export default Contact;
