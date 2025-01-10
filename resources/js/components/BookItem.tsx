import React from "react";
import BookCover from "../assets/img/cover.png";

const BookItem = () => {
    return (
        <div
            className="card"
            style={{
                background: "transparent",
                border: "1px solid light-grey",
            }}
        >
            <img src={BookCover} className="card-img-top" alt="Livre" />
            <div className="card-body text-center informations">
                <hr
                    style={{
                        border: "none",
                        height: "3px",
                        width: "50%",
                        margin: "auto",
                        background:
                            "linear-gradient(to right, transparent, #d0d0d0 50%, transparent)",
                    }}
                />
                <p className="text-muted">David Enghewing</p>
                <hr
                    style={{
                        border: "none",
                        height: "3px",
                        width: "50%",
                        margin: "auto",
                        background:
                            "linear-gradient(to right, transparent, #d0d0d0 50%, transparent)",
                    }}
                />
                <h5>Le prix de la bêtise</h5>
            </div>
        </div>
    );
};

export default BookItem;
