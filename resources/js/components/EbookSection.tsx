import React from "react";

const EbookSection: React.FC = () => {
    return (
        <div className="ebook-section">
            <div className="container">
                <h3>
                    Nos manuels scolaires et nos œuvres littéraires sont
                    également disponible en un clic !
                </h3>
                <p className="mt-3">
                    Les ouvrages édités par NMI Education sont disponibles en
                    lecture et en téléchargement au format numérique sur les
                    plateformes dédiées
                </p>
                <div className="platform-logos">
                    <img src="/api/placeholder/120x40" alt="Platform 1" />
                    <img src="/api/placeholder/120x40" alt="Platform 2" />
                    <img src="/api/placeholder/120x40" alt="Platform 3" />
                </div>
            </div>
        </div>
    );
};

export default EbookSection;
