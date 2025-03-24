// components/FeaturedBook.jsx
import { Link } from "@inertiajs/react";
import SLIDEIMG from "../assets/img/mockup.jpg";

const FeaturedBooks = () => {
    return (
        <div
            className="position-relative"
            style={{
                backgroundImage: `url(${SLIDEIMG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginLeft: "calc(-50vw + 50%)",
                marginRight: "calc(-50vw + 50%)",

                width: "100vw",
                position: "relative",
                padding: "60px",
            }}
        >
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-5">
                        <div className="card bg-white p-4 shadow">
                            <h5 className="text-muted">David Engbwang</h5>
                            <h2 className="mb-3 font-weight-600">
                                Le prix de la bêtise
                            </h2>
                            <p className="mb-4">
                                Le Prix de la Bêtise retrace l’itinéraire de
                                Bidjabo, haut fonctionnaire à la retraite qui,
                                durant toute sa carrière administrative, aura
                                incarné le prototype du mauvais agent public. La
                                retraite survenue, il se retrouve dans un état
                                de dénuement total...
                            </p>
                            <Link
                                href="/book/le-prix-de-la-betise"
                                className="text-primary"
                            >
                                En savoir plus →
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-7 d-flex justify-content-center align-items-center"></div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBooks;
