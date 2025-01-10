import React from "react";

const Filters: React.FC = () => {
    return (
        <div className="filters mb-5">
            <h2 className="text-center mb-5">
                <span className="text-primary" style={{ fontWeight: 600 }}>
                    Catalogue
                </span>
            </h2>
            <div className="row">
                <div className="col-md-3 mb-2">
                    <select
                        className="form-select"
                        style={{
                            backgroundColor: "#f0f0f0",
                            padding: "10px 20px",
                        }}
                    >
                        <option>Trier par titres</option>
                    </select>
                </div>
                <div className="col-md-3 mb-2">
                    <select
                        className="form-select"
                        style={{
                            backgroundColor: "#f0f0f0",
                            padding: "10px 20px",
                        }}
                    >
                        <option>Trier par titres</option>
                    </select>
                </div>
                <div className="col-md-3 mb-2">
                    <select
                        className="form-select"
                        style={{
                            backgroundColor: "#f0f0f0",
                            padding: "10px 20px",
                        }}
                    >
                        <option>Trier par titres</option>
                    </select>
                </div>
                <div className="col-md-3 mb-2">
                    <select
                        className="form-select"
                        style={{
                            backgroundColor: "#f0f0f0",
                            padding: "10px 20px",
                        }}
                    >
                        <option>Trier par titres</option>
                    </select>
                </div>
                {/* Ajoutez d'autres filtres ici */}
            </div>
        </div>
    );
};

export default Filters;
