import React from "react";
import { Author } from "../types/interfaces";

interface SingleAuthorInformationsProps {
    author: Author;
}

const SingleAuthorInformations = ({
    author,
}: SingleAuthorInformationsProps) => {
    return (
        <div className="row">
            <div className="col-12 col-md-4">
                <img
                    src={author.photo}
                    alt={author.name}
                    className="img-fluid"
                />
            </div>
            <div className="col-12 col-md-8">
                <h1>{author.name}</h1>
                <p>{author.biography}</p>
            </div>
        </div>
    );
};

export default SingleAuthorInformations;
