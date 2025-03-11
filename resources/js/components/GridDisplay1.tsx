import { Team } from "../types/interfaces";
import ItemsCarousel from "./PageItemsGrid";
import EditionImg from "../assets/img/edition.jpg";
import ImpressionImg from "../assets/img/impression.jpg";
import LogistiqueImg from "../assets/img/logistique.png";
import DistributionImg from "../assets/img/banner.jpg";

interface GridDisplay1Props {
    title: string;
    subtitle: string;
    description: string;
    team?: Team[];
}
const items = [
    {
        id: 1,
        image: EditionImg,
        title: "L'édition",
        description:
            "Notre processus éditorial garantit la protection des droits d'auteurs et la qualité de l'ouvrage.",
    },
    {
        id: 2,
        image: ImpressionImg,
        title: "l'impression",
        description:
            "Nous utilisons des technologies de pointe pour garantir une impression de qualité exceptionnelle.",
    },
    {
        id: 3,
        image: LogistiqueImg,
        title: "La logistique",
        description:
            "Nous assurons la distribution rapide et fiable de nos ouvrages dans tout le Cameroun",
    },
    {
        id: 4,
        image: DistributionImg,
        title: "Le marketing",
        description:
            "Nous nous engageons à promouvoir nos livres de manière efficace et innovante pour atteindre le plus grand nombre de lecteurs possible.",
    },
];
const GridDisplay1 = ({ title, description, subtitle }: GridDisplay1Props) => {
    return (
        <div className="bg-light p-4 p-md-5">
            <div className="container p-3 px-md-4">
                <div className="row text-center">
                    <div className="col-sm-8 offset-sm-2">
                        <h2 className=" h2 font-weight-600">{title}</h2>
                        <h6
                            className="mb-2 text-primary font-weight-600align-items-center"
                            style={{ fontSize: 30 }}
                        >
                            {subtitle}
                        </h6>
                    </div>
                    <p className="mb-4 fs-5">{description}</p>
                </div>

                <div className="row py-3 py-md-4">
                    <div className="col-12">
                        {items.length > 0 && <ItemsCarousel items={items} />}

                        {/* <TeamCarousel members={team} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridDisplay1;
