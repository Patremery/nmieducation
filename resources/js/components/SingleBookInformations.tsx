import React, { useState } from "react";
import { Book } from "../types/interfaces";
import DownloadGuideModal from "./DownloadGuideModal";

const SingleBookInformations = ({ book }: { book: Book }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    console.log("book: ", book);
    const limitWords = (text: string, wordLimit: number) => {
        const words = text.split(" ");
        if (words.length <= wordLimit) {
            return text;
        }
        return words.slice(0, wordLimit).join(" ") + "...";
    };
    return (
        <>
            <div
                className="row"
                style={{ padding: "100px", backgroundColor: "#F7F7F7" }}
            >
                <div className="col-md-9 d-flex gap-4">
                    <div style={{ flexShrink: 0 }}>
                        {book.cover && (
                            <img
                                src={book.cover}
                                alt={book.title}
                                className="img-fluid img-responsive"
                                style={{
                                    width: 300,
                                    objectFit: "contain",
                                    //aspectRatio: "3/4",
                                }}
                            />
                        )}
                    </div>

                    <div className="">
                        <h4 className="mb-4" style={{ fontWeight: 700 }}>
                            {book.title}
                        </h4>

                        {book.author && (
                            <>
                                <h5 style={{ fontSize: 16, fontWeight: 600 }}>
                                    Auteur(s) :
                                </h5>
                                <p>{book.author}</p>
                            </>
                        )}

                        {book.releaseDate && (
                            <p>
                                <strong>Parution :</strong> {book.releaseDate}
                            </p>
                        )}

                        {book.isbn && (
                            <p>
                                <strong>ISBN :</strong> {book.isbn}
                            </p>
                        )}

                        <h5>
                            <strong>Description :</strong>
                        </h5>
                        <p>{limitWords(book.description, 100)}</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div
                        className="card shadow py-3"
                        style={{ height: "500px", overflowY: "auto" }}
                    >
                        <div className="card-body">
                            <div className="text-center">
                                <strong>Prix public TTC</strong>
                                <p
                                    className=""
                                    style={{
                                        fontWeight: 700,
                                        fontSize: 30,
                                        color: "orangered",
                                    }}
                                >
                                    {book.price ? (
                                        <>
                                            {book.price.toLocaleString()}{" "}
                                            <span>XAF</span>
                                        </>
                                    ) : (
                                        <span>Gratuit</span>
                                    )}
                                </p>
                            </div>
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
                            <p className="text-center mt-3">
                                <strong>
                                    <u>Fiche technique</u>
                                </strong>
                            </p>
                            <ul className="text-start w-100 p-0">
                                <li
                                    style={{
                                        listStyle: "none",
                                        fontSize: "14px",
                                    }}
                                    className="d-flex gap-2"
                                >
                                    <strong>Catégorie:</strong>
                                    <span>{book.category}</span>
                                </li>
                                {book.theme && (
                                    <li
                                        className="d-flex gap-2"
                                        style={{
                                            listStyle: "none",
                                            fontSize: "14px",
                                        }}
                                    >
                                        <strong>Thème:</strong>
                                        <span>{book.theme}</span>
                                    </li>
                                )}
                                {book.audience && (
                                    <li
                                        className="d-flex gap-2"
                                        style={{
                                            listStyle: "none",
                                            fontSize: "14px",
                                        }}
                                    >
                                        <strong>Public:</strong>
                                        <span>{book.audience}</span>
                                    </li>
                                )}
                                {book.language && (
                                    <li
                                        className="d-flex gap-2"
                                        style={{
                                            listStyle: "none",
                                            fontSize: "14px",
                                        }}
                                    >
                                        <strong>Langue:</strong>
                                        <span>{book.language}</span>
                                    </li>
                                )}
                                {/* {book.support && (
                                    <li
                                        className="d-flex gap-2"
                                        style={{
                                            listStyle: "none",
                                            fontSize: "14px",
                                        }}
                                    >
                                        <strong>Support:</strong>
                                        <span>{book.support}</span>
                                    </li>
                                )} */}
                                {book.releaseDate && (
                                    <li
                                        className="d-flex gap-2"
                                        style={{
                                            listStyle: "none",
                                            fontSize: "14px",
                                        }}
                                    >
                                        <strong>Date de parution:</strong>
                                        <span>{book.releaseDate}</span>
                                    </li>
                                )}
                                {book.pages && (
                                    <li
                                        className="d-flex gap-2"
                                        style={{
                                            listStyle: "none",
                                            fontSize: "14px",
                                        }}
                                    >
                                        <strong>Pages:</strong>
                                        <span>{book.pages}</span>
                                    </li>
                                )}
                            </ul>

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

                            <div className="text-center mt-4">
                                {book.category === "guides" ||
                                book.category === "catalog" ? (
                                    <a
                                        href="#"
                                        className="btn btn-warning w-100 py-2"
                                        onClick={handleOpenModal}
                                    >
                                        Télécharger
                                        <span className="px-2 fa fa-download"></span>
                                    </a>
                                ) : (
                                    <div className="dropdown w-100">
                                        <button
                                            className="btn btn-warning w-100 py-2 dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            data-bs-placement="bottom"
                                            aria-expanded="false"
                                            style={{
                                                backgroundColor: "orangered",
                                                color: "white",
                                                fontSize: 14,
                                                borderRadius: "1",
                                            }}
                                        >
                                            Obtenir le livre en ligne
                                        </button>
                                        <ul
                                            className="dropdown-menu text-center"
                                            style={{
                                                //width: "50%",
                                                margin: "0 auto",
                                            }}
                                        >
                                            {book.amazon_url && (
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href={book.amazon_url}
                                                    >
                                                        Amazon
                                                    </a>
                                                </li>
                                            )}
                                            {book.adinkra_url && (
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href={book.adinkra_url}
                                                    >
                                                        Adinkra
                                                    </a>
                                                </li>
                                            )}
                                            {book.youscribe_url && (
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href={
                                                            book.youscribe_url
                                                        }
                                                    >
                                                        Youscribe
                                                    </a>
                                                </li>
                                            )}
                                            {book.lq_url && (
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href={book.lq_url}
                                                    >
                                                        Les Librairies du
                                                        quartier
                                                    </a>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <DownloadGuideModal
                title={book.title}
                showModal={showModal}
                handleCloseModal={handleCloseModal}
            />
        </>
    );
};

export default SingleBookInformations;
