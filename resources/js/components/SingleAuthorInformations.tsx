import { Author, Book } from "../types/interfaces";
import DEFAULT_PROFILE_IMG from "../assets/img/default.png";

interface SingleAuthorInformationsProps {
    author: Author;
    books: Book[];
}

const SingleAuthorInformations = ({
    author,
    books,
}: SingleAuthorInformationsProps) => {
    return (
        <div
            className="row py-3 py-md-4 py-lg-5 px-2 px-md-3 px-lg-4 "
            style={{ backgroundColor: "#F7F7F7" }}
        >
            <div className="col-12 col-md-4">
                <img
                    src={author.photo ?? DEFAULT_PROFILE_IMG}
                    alt={author.name}
                    className="img-fluid img-responsive"
                    style={{ width: 200 }}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = DEFAULT_PROFILE_IMG;
                    }}
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
