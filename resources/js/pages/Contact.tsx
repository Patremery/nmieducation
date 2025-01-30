import React from "react";
import InnerPageLayout from "../layouts/InnerPageLayout";
import { BannerProps } from "../types/interfaces";
import BannerImage from "../assets/img/nmi-office.jpg";
import ContactForm from "../components/ContactForm";
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
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
        className: "p-5 display-7 font-weight-600",
    };

    const content = {
        introduction:
            "Vous souhaitez nous soumettre un manuscrit, devenir distributeur de nos ouvrages, rejoindre notre équipe ou simplement en savoir plus sur NMI Education ?",
        small: "Nous sommes à votre écoute. Contactez-nous dès maintenant pour échanger avec nos équipes et découvrir comment nous pouvons vous accompagner dans votre parcours",
    };

    return (
        <InnerPageLayout banner={banner}>
            <div className="container p-2">
                <div className="row px-5 mt-5">
                    <div className="col-md-12 text-center ">
                        <h2 className="font-weight-600">Nous contacter</h2>
                        <div className="lead text-primary">
                            {content.introduction}
                        </div>
                        <small>{content.small}</small>
                    </div>
                </div>
                <div className="row px-5 mb-5">
                    <div className="col-md-4 p-3">
                        <div
                            className="card h-100 shadow-sm border-0 p-2"
                            style={{ backgroundColor: "#f8f9fa" }}
                        >
                            <div className="card-body">
                                <h5
                                    className="card-title font-weight-600"
                                    style={{ fontSize: "16px" }}
                                >
                                    Vous avez un talent prononcé pour
                                    l'écriture?
                                </h5>
                                <p className="card-text">
                                    Soumettez-nous votre projet littéraire, NMI
                                    Education vous garantit un accompagnement
                                    ultra-personnalisé pour la réalisation de
                                    votre projet
                                </p>
                                <a
                                    href="/submit-your-manuscrit"
                                    className="btn  btn-lg w-100 card-button btn-primary"
                                >
                                    Soumettre un manuscrit
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3">
                        <div
                            className="card h-100 shadow-sm border-0 p-2"
                            style={{ backgroundColor: "#f8f9fa" }}
                        >
                            <div className="card-body">
                                <h5
                                    className="card-title font-weight-600"
                                    style={{ fontSize: "18px" }}
                                >
                                    Vous êtes distributeur littéraire et
                                    souhaitez enrichir votre catalogue?
                                </h5>
                                <p className="card-text">
                                    Rejoignez notre réseau de distribution et
                                    bénéficier de nos offres adaptées sur tous
                                    les titres que compte notre vaste catalogue
                                    de livres.
                                </p>
                                <a
                                    href="/become-distributor"
                                    className="btn btn-primary card-button btn-lg w-100"
                                >
                                    Demander nos offres
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3">
                        <div
                            className="card h-100 shadow-sm border-0 p-2"
                            style={{ backgroundColor: "#f8f9fa" }}
                        >
                            <div className="card-body">
                                <h5
                                    className="card-title font-weight-600"
                                    style={{ fontSize: "18px" }}
                                >
                                    Vous êtes passionnés par le monde de
                                    l'édition?
                                </h5>
                                <p className="card-text">
                                    Rejoignez notre équipe, NMI Education est
                                    une entreprise dynamique et innovante qui
                                    recrute en permanence des talents pour
                                    enrichir son équipe.
                                </p>
                                <a
                                    href="/join-us"
                                    className="btn btn-primary btn-lg w-100 card-button"
                                >
                                    Candidature spontanée
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bg-light mx-5 p-5">
                    <div className="col-md-12 text-center">
                        <h3 className="font-weight-600">
                            Vous avez une question ?
                        </h3>
                        <p
                            className="text-primary font-weight-600"
                            style={{ fontSize: "14px" }}
                        >
                            Contactez-nous directement via ce formulaire.
                        </p>
                        <p className="">
                            Toujours à l'écoute, l'équipe de NMI s'engage à vous
                            répondre <br /> dans les meilleurs délais
                        </p>
                    </div>
                </div>
                <div className="row px-5 my-5">
                    <div className="col-sm-6">
                        <ContactForm />
                        <div className="mt-5">
                            <h4 className="font-weight-600">Contact</h4>
                            <p className="mb-0">{contacts.address}</p>
                            <strong className="mb-0">{contacts.phone}</strong>
                            <strong className="mb-0">
                                {contacts.postalCode}
                            </strong>
                            <strong className="mb-0">{contacts.email}</strong>
                        </div>
                        <div className="mt-2">
                            <div className="d-flex gap-3">
                                <a
                                    href={contacts.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary"
                                >
                                    <FaFacebook size={24} />
                                </a>
                                <a
                                    href={contacts.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary"
                                >
                                    <FaYoutube size={24} />
                                </a>
                                <a
                                    href={contacts.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary"
                                >
                                    <FaTwitter size={24} />
                                </a>
                                <a
                                    href={contacts.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-sm-6"
                        style={{ position: "relative", height: "600px" }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.948123201123!2d11.5162493157572!3d3.866197997070048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7b5c5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sNMI%20Education!5e0!3m2!1sfr!2scm!4v1633020000000!5m2!1sfr!2scm"
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                position: "absolute",
                                top: 0,
                                left: 0,
                            }}
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
