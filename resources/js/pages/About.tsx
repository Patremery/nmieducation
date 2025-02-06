import React from "react";
import InnerPageLayout from "../layouts/InnerPageLayout";
import HeroSlider from "../components/HeroSlider";
import TeamCarousel from "../components/TeamCarousel";
import Slide1Image from "../assets/img/reading.jpg";
import DeskImage from "../assets/img/nmieducation-desks.jpg";
import { Team } from "../types/interfaces";
import AfricaMapImage from "../assets/img/map.png";

const About = ({ team }: { team: Team[] }) => {
    const slides = [
        {
            id: 1,
            image: Slide1Image,
            title: "Bienvenue chez",
            subtitle: "NMI Education",
            slogan: "L'éditeur futuriste",
        },
        {
            id: 1,
            image: Slide1Image,
            title: "Bienvenue à",
            subtitle: "NMI Education",
        },
    ];

    return (
        <InnerPageLayout displayBanner={false}>
            <div className="container-fluid p-0">
                <HeroSlider slides={slides} />

                {/* Un parcours exceptionnel Section */}
                <div className="container p-5">
                    <div className="row align-items-center">
                        <div className="col-lg-12 text-center">
                            <h2 className="h3 font-weight-600">
                                Un parcours exceptionnel
                            </h2>
                            <p className="text-primary fw-bold">
                                dans l'édition du manuel scolaire
                            </p>
                            <p className="mb-4">
                                En 2002, l'entreprise NMI Education fait ses
                                premiers pas en qualité de représentant et
                                distributeur de la Cambridge University Press.
                                Trois ans plus tard, elle s'engage totalement
                                dans la production éditoriale faisant du manuel
                                scolaire son cheval de bataille. Le porteur
                                d'idée M. NFORGWEI Rogers, grâce à sa formation
                                titanesque et son expérience professionnelle
                                avérées, a fait de NMI Education un empire qui
                                s'érige aujourd'hui comme l'un des leaders
                                incontestables dans le domaine de l'édition au
                                Cameroun. La place de leader occupée par NMI
                                Education découle de sa démarche méthodique et
                                de son approche structurée. Elle va de la
                                planification à l'organisation, en passant par
                                la production et le suivi des projets jusqu'à
                                l'exécution des travaux.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row bg-light" style={{ padding: "100px" }}>
                    <div className="col-lg-6">
                        <div className="ratio ratio-16x9">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/cxu-CefkDB8?si=uN0ncpBS65pSUCHI"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div
                            className="p-2"
                            style={{ borderLeft: "8px solid orange" }}
                        >
                            <h3 className="h4 text-primary font-weight-600">
                                Le partenaire idéal <br /> pour l'éducation de
                                demain !
                            </h3>
                        </div>

                        <div className="p-2">
                            <p className="mb-0">
                                NMI Education édite les manuels scolaires dans
                                toutes les disciplines de l'enseignement, de la
                                maternelle en terminale dans les sous-systèmes
                                anglophone et francophone. Nous éditons
                                également une sélection de livres destinée à la
                                jeunesse et de littérature générale pour
                                éveiller la curiosité et stimuler l'imagination
                                des lecteurs de tous âges.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-primary text-white" style={{ padding: 50 }}>
                    <div className="container px-5">
                        <div className="row px-5">
                            <div
                                className="col-md-5 px-5 d-flex flex-column"
                                style={{
                                    borderRight: "8px solid orange",
                                }}
                            >
                                <p
                                    className="lead mb-0 display-7 font-weight-600"
                                    style={{ color: "orange" }}
                                >
                                    NOTRE
                                </p>
                                <p
                                    className="text-white font-weight-600 mt-0 mb-0"
                                    style={{
                                        fontSize: "4rem",
                                        lineHeight: "1",
                                    }}
                                >
                                    VISION
                                </p>
                                <small className="text-white italic mt-0">
                                    <i>
                                        Créativité, Rigueur, Ouverture d'esprit
                                    </i>
                                </small>
                            </div>
                            <div
                                className="col-md-7"
                                style={{ paddingLeft: 50 }}
                            >
                                <p className="lead text-white d-flex align-items-center h-100 mb-0">
                                    NMI Education ambitionne de se maintenir
                                    comme leader incontestable de l'édition et
                                    de l'impression du manuel scolaire de
                                    qualité et ainsi faire la fierté du Cameroun
                                    et de la sous-région d'Afrique centrale.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nos Missions Section */}
                <div className="container m-5">
                    <div className="row p-5">
                        <div className="col-md-6">
                            <h2 className="mb-4 h5 font-weight-600 text-primary">
                                NOS MISSIONS
                            </h2>
                            <ul className="list-unstyled">
                                <li className="list-item d-flex align-items-center mb-0">
                                    <span
                                        className="text-primary me-2"
                                        style={{ fontSize: "2.5rem" }}
                                    >
                                        •
                                    </span>
                                    Contribuer à offrir une éducation de qualité
                                    aux apprenants
                                </li>
                                <li className="list-item d-flex align-items-center mb-0">
                                    <span
                                        className="text-primary me-2"
                                        style={{ fontSize: "2.5rem" }}
                                    >
                                        •
                                    </span>
                                    Produire des livres de bonne qualité à des
                                    prix accessibles
                                </li>
                                <li className="list-item d-flex align-items-center mb-0">
                                    <span
                                        className="text-primary me-2"
                                        style={{ fontSize: "2.5rem" }}
                                    >
                                        •
                                    </span>
                                    Valoriser et promouvoir la culture locale
                                </li>
                                <li className="list-item d-flex align-items-center">
                                    <span
                                        className="text-primary me-2"
                                        style={{ fontSize: "2.5rem" }}
                                    >
                                        •
                                    </span>
                                    Positionner le Cameroun comme un pays leader
                                    en matière d'édition
                                </li>
                                <li className="list-item d-flex align-items-center">
                                    <span
                                        className="text-primary me-2"
                                        style={{ fontSize: "2.5rem" }}
                                    >
                                        •
                                    </span>
                                    Valoriser et promouvoir l'édition
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <img
                                src={DeskImage}
                                alt="NMI Education"
                                className="img-fluid rounded"
                            />
                        </div>
                    </div>
                </div>

                {/* Le capital humain Section */}
                <div className="bg-light py-5">
                    <div className="container">
                        <h2 className="text-center h3 font-weight-600">
                            Le capital humain
                        </h2>
                        <p className="text-center mb-2 text-primary font-weight-600">
                            le coeur battant de la maison d'édition NMI
                            Education
                        </p>
                        <p className="text-center mb-4">
                            Constitué de jeunes professionnels dynamiques et
                            qualifiés, la maison d'édition NMI Education
                            rassemble des talents aussi divers que passionnés :
                            des auteurs aux idées novatrices, des éditeurs aux
                            regards aiguisés, des graphistes aux univers
                            créatifs, des commerciaux aux réseaux étendus, et
                            bien d'autres encore. Chacun apporte sa pierre à
                            l'édifice, contribuant à donner vie à nos projets
                            éditoriaux et à faire rayonner notre catalogue.
                        </p>
                        <div className="row justify-content-center py-5">
                            <div className="col-12">
                                <TeamCarousel members={team} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="container py-5">
                    <h2 className="h3 font-weight-600">
                        Une forte expérience éditoriale
                    </h2>
                    <p className="text-center mb-4">
                        Le leadership couplé au sens de la responsabilité
                        managériale et professionnelle a valu à NMI Education un
                        espace sur la scène internationale. À ce jour, on compte
                        la présence active de ce mastodonte dans plus de six
                        (06) pays africains parmi lesquels le Cameroun, le
                        Sénégal, le Rwanda, le Gabon, le Tchad et la
                        Guinée-Conakry.
                    </p>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="px-5">
                                {/* Statistics */}
                                <div className="d-flex align-items-center mb-4 ">
                                    <div
                                        className="rounded-circle bg-white text-white d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            border: "8px solid #0057b3",
                                        }}
                                    >
                                        <span className="h4 mb-0 text-primary font-weight-600">
                                            60
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <p
                                            className="mb-0"
                                            style={{ fontSize: "1.3rem" }}
                                        >
                                            Plus de{" "}
                                            <strong>
                                                60% de couverture du marché
                                            </strong>{" "}
                                            <br />
                                            local
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center mb-4">
                                    <div
                                        className="rounded-circle bg-white text-white d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            border: "8px solid #0057b3",
                                        }}
                                    >
                                        <span className="h4 mb-0 text-primary font-weight-600">
                                            54
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <p
                                            className="mb-0"
                                            style={{ fontSize: "1.3rem" }}
                                        >
                                            Plus de{" "}
                                            <strong>
                                                54 livres et manuels scolaires
                                            </strong>{" "}
                                            <br />
                                            agréés
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <div
                                        className="rounded-circle bg-white text-white d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            border: "8px solid #0057b3",
                                        }}
                                    >
                                        <span className="h4 mb-0 text-primary font-weight-600">
                                            150
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <p
                                            className="mb-0"
                                            style={{ fontSize: "1.3rem" }}
                                        >
                                            Plus de <strong>150 auteurs</strong>{" "}
                                            <br />
                                            locaux, en Asie et en Europe
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <div
                                        className="rounded-circle bg-white text-white d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            border: "8px solid #0057b3",
                                        }}
                                    >
                                        <span className="h4 mb-0 text-primary font-weight-600">
                                            10
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <p
                                            className="mb-0"
                                            style={{ fontSize: "1.3rem" }}
                                        >
                                            Plus de{" "}
                                            <strong>
                                                10 partenaires imprimeurs
                                            </strong>{" "}
                                            <br />
                                            locaux et internationaux.
                                        </p>
                                    </div>
                                </div>

                                {/* Repeat for other stats */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img
                                src={AfricaMapImage}
                                alt="Africa Map"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="bg-light py-5 text-center">
                    <div className="container">
                        <h2 className="h3 font-weight-600">Rejoignez-nous</h2>
                        <p className="mb-4">
                            En rejoignant la maison d'édition NMI Education,
                            vous participerez au rayonnement de la culture et de
                            l'éducation. Partagez l'expérience de la lecture,
                            diffusez les connaissances et les savoirs, faites
                            émerger de nouvelles solutions d'apprentissage…
                            Construisez notre futur !
                        </p>
                        <button className="btn btn-primary call-to-action">
                            Nous rejoindre
                        </button>
                    </div>
                </div>
            </div>
        </InnerPageLayout>
    );
};

export default About;
