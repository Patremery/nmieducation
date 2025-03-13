import React, { useState, useEffect } from "react";
import { Author, BookLanguage, Collection } from "../types/interfaces";
import { router, usePage } from "@inertiajs/react";

interface FiltersProps {
    authors: Author[];
    categoryCode: string;
    languages: BookLanguage[];
    classrooms: string[];
    themes: string[];
    collections: Collection[];
    subjects: string[];
}

const Filters: React.FC<FiltersProps> = ({
    authors,
    categoryCode,
    languages,
    classrooms,
    themes,
    collections,
    subjects,
}) => {
    const { url } = usePage();
    const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(
        null
    );
    const [selectedClassroom, setSelectedClassroom] = useState<string | null>(
        null
    );
    const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
    const [selectedCollection, setSelectedCollection] = useState<string | null>(
        null
    );
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
    const [isFilterExpanded, setIsFilterExpanded] = useState(false);

    const baseUrl = `/catalogue/category/${categoryCode}`;

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const authorSlug = urlParams.get("author_slug");
        const lang = urlParams.get("lang");
        const classroom = urlParams.get("classroom");
        const theme = urlParams.get("theme");
        const collection = urlParams.get("collection");
        const subject = urlParams.get("subject");

        setSelectedAuthor(authorSlug);
        setSelectedLanguage(lang);
        setSelectedClassroom(classroom);
        setSelectedTheme(theme);
        setSelectedCollection(collection);
        setSelectedSubject(subject);
    }, [url]);

    const handleAuthorSelect = (slug: string) => {
        if (slug === "") {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.delete("author_slug");
            router.get(
                `${baseUrl}${
                    searchParams.toString() ? `?${searchParams.toString()}` : ""
                }`
            );
        } else {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set("author_slug", slug);
            router.get(`${baseUrl}?${searchParams.toString()}`);
        }
    };

    const handleLanguageSelect = (language: string) => {
        if (language === "") {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.delete("lang");
            router.get(
                `${baseUrl}${
                    searchParams.toString() ? `?${searchParams.toString()}` : ""
                }`
            );
        } else {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set("lang", language);
            router.get(`${baseUrl}?${searchParams.toString()}`);
        }
    };

    const handleClassroomSelect = (classroom: string) => {
        if (classroom === "") {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.delete("classroom");
            router.get(
                `${baseUrl}${
                    searchParams.toString() ? `?${searchParams.toString()}` : ""
                }`
            );
        } else {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set("classroom", classroom);
            router.get(`${baseUrl}?${searchParams.toString()}`);
        }
    };

    const handleThemeSelect = (theme: string) => {
        if (theme === "") {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.delete("theme");
            router.get(
                `${baseUrl}${
                    searchParams.toString() ? `?${searchParams.toString()}` : ""
                }`
            );
        } else {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set("theme", theme);
            router.get(`${baseUrl}?${searchParams.toString()}`);
        }
    };

    const handleCollectionSelect = (collection: string) => {
        if (collection === "") {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.delete("collection");
            router.get(
                `${baseUrl}${
                    searchParams.toString() ? `?${searchParams.toString()}` : ""
                }`
            );
        } else {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set("collection", collection);
            router.get(`${baseUrl}?${searchParams.toString()}`);
        }
    };

    const handleSubjectSelect = (subject: string) => {
        if (subject === "") {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.delete("subject");
            router.get(
                `${baseUrl}${
                    searchParams.toString() ? `?${searchParams.toString()}` : ""
                }`
            );
        } else {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set("subject", subject);
            router.get(`${baseUrl}?${searchParams.toString()}`);
        }
    };

    const hasActiveFilters =
        selectedAuthor ||
        selectedLanguage ||
        selectedClassroom ||
        selectedTheme ||
        selectedCollection ||
        selectedSubject;

    const toggleFilters = () => {
        setIsFilterExpanded(!isFilterExpanded);
    };

    const clearAllFilters = () => {
        router.get(baseUrl);
    };

    return (
        <div className="filters-container mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex gap-2">
                    {hasActiveFilters && (
                        <button
                            className="btn btn-outline-secondary btn-sm d-flex align-items-center"
                            onClick={clearAllFilters}
                        >
                            <i className="fas fa-times-circle me-1"></i> Effacer
                            tout
                        </button>
                    )}
                    <button
                        className="btn btn-primary btn-sm d-md-none"
                        onClick={toggleFilters}
                    >
                        {isFilterExpanded ? (
                            <>
                                <i className="fas fa-chevron-up me-1"></i>{" "}
                                Masquer
                            </>
                        ) : (
                            <>
                                <i className="fas fa-filter me-1"></i> Filtrer
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Affichage des filtres actifs sur mobile */}
            {hasActiveFilters && (
                <div className="active-filters d-md-none mb-3">
                    <div className="d-flex flex-wrap gap-2">
                        {selectedAuthor && (
                            <span className="badge bg-primary d-flex align-items-center">
                                {authors.find((a) => a.slug === selectedAuthor)
                                    ?.name || selectedAuthor}
                                <button
                                    className="btn-close btn-close-white ms-2"
                                    style={{ fontSize: "0.5rem" }}
                                    onClick={() => handleAuthorSelect("")}
                                    aria-label="Supprimer le filtre"
                                ></button>
                            </span>
                        )}
                        {selectedLanguage && (
                            <span className="badge bg-primary d-flex align-items-center">
                                {languages.find(
                                    (l) => l.id.toString() === selectedLanguage
                                )?.name || selectedLanguage}
                                <button
                                    className="btn-close btn-close-white ms-2"
                                    style={{ fontSize: "0.5rem" }}
                                    onClick={() => handleLanguageSelect("")}
                                    aria-label="Supprimer le filtre"
                                ></button>
                            </span>
                        )}
                        {selectedClassroom && (
                            <span className="badge bg-primary d-flex align-items-center">
                                {selectedClassroom}
                                <button
                                    className="btn-close btn-close-white ms-2"
                                    style={{ fontSize: "0.5rem" }}
                                    onClick={() => handleClassroomSelect("")}
                                    aria-label="Supprimer le filtre"
                                ></button>
                            </span>
                        )}
                        {selectedTheme && (
                            <span className="badge bg-primary d-flex align-items-center">
                                {selectedTheme}
                                <button
                                    className="btn-close btn-close-white ms-2"
                                    style={{ fontSize: "0.5rem" }}
                                    onClick={() => handleThemeSelect("")}
                                    aria-label="Supprimer le filtre"
                                ></button>
                            </span>
                        )}
                        {selectedCollection && (
                            <span className="badge bg-primary d-flex align-items-center">
                                {collections.find(
                                    (c) => c.slug === selectedCollection
                                )?.name || selectedCollection}
                                <button
                                    className="btn-close btn-close-white ms-2"
                                    style={{ fontSize: "0.5rem" }}
                                    onClick={() => handleCollectionSelect("")}
                                    aria-label="Supprimer le filtre"
                                ></button>
                            </span>
                        )}
                        {selectedSubject && (
                            <span className="badge bg-primary d-flex align-items-center">
                                {selectedSubject}
                                <button
                                    className="btn-close btn-close-white ms-2"
                                    style={{ fontSize: "0.5rem" }}
                                    onClick={() => handleSubjectSelect("")}
                                    aria-label="Supprimer le filtre"
                                ></button>
                            </span>
                        )}
                    </div>
                </div>
            )}

            <div
                className={`filters-content ${
                    isFilterExpanded ? "d-block" : "d-none d-md-block"
                }`}
            >
                <div className="row g-3">
                    {["literature", "kids", "school"].includes(
                        categoryCode
                    ) && (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filter-group">
                                <div className="position-relative">
                                    <select
                                        className="form-select"
                                        style={{
                                            backgroundColor: "#f0f0f0",
                                            padding: "10px 20px",
                                        }}
                                        onChange={(e) =>
                                            handleAuthorSelect(e.target.value)
                                        }
                                        value={selectedAuthor || ""}
                                    >
                                        <option value="">
                                            Tous les auteurs
                                        </option>
                                        {authors.map((author) => (
                                            <option
                                                key={author.id}
                                                value={author.slug}
                                            >
                                                {author.name}
                                            </option>
                                        ))}
                                    </select>

                                    {selectedAuthor && (
                                        <div className="selected-filter mt-2 d-none d-md-flex align-items-center">
                                            <span className="badge bg-primary me-2">
                                                {authors.find(
                                                    (a) =>
                                                        a.slug ===
                                                        selectedAuthor
                                                )?.name || selectedAuthor}
                                            </span>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary border-0"
                                                onClick={() =>
                                                    handleAuthorSelect("")
                                                }
                                                aria-label="Supprimer le filtre"
                                            >
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {categoryCode === "school" && (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filter-group">
                                <div className="position-relative">
                                    <select
                                        className="form-select"
                                        style={{
                                            backgroundColor: "#f0f0f0",
                                            padding: "10px 20px",
                                        }}
                                        onChange={(e) =>
                                            handleCollectionSelect(
                                                e.target.value
                                            )
                                        }
                                        value={selectedCollection || ""}
                                    >
                                        <option value="">
                                            Toutes les collections
                                        </option>
                                        {collections.map((collection) => (
                                            <option
                                                key={collection.id}
                                                value={collection.slug}
                                            >
                                                {collection.name}
                                            </option>
                                        ))}
                                    </select>

                                    {selectedCollection && (
                                        <div className="selected-filter mt-2 d-none d-md-flex align-items-center">
                                            <span className="badge bg-primary me-2">
                                                {collections.find(
                                                    (c) =>
                                                        c.slug ===
                                                        selectedCollection
                                                )?.name || selectedCollection}
                                            </span>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary border-0"
                                                onClick={() =>
                                                    handleCollectionSelect("")
                                                }
                                                aria-label="Supprimer le filtre"
                                            >
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="filter-group">
                            <div className="position-relative">
                                <select
                                    className="form-select"
                                    style={{
                                        backgroundColor: "#f0f0f0",
                                        padding: "10px 20px",
                                    }}
                                    onChange={(e) =>
                                        handleLanguageSelect(e.target.value)
                                    }
                                    value={selectedLanguage || ""}
                                >
                                    <option value="">Toutes les langues</option>
                                    {languages.map((language) => (
                                        <option
                                            key={language.id}
                                            value={language.id}
                                        >
                                            {language.name}
                                        </option>
                                    ))}
                                </select>

                                {selectedLanguage && (
                                    <div className="selected-filter mt-2 d-none d-md-flex align-items-center">
                                        <span className="badge bg-primary me-2">
                                            {languages.find(
                                                (l) =>
                                                    l.id.toString() ===
                                                    selectedLanguage
                                            )?.name || selectedLanguage}
                                        </span>
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-outline-secondary border-0"
                                            onClick={() =>
                                                handleLanguageSelect("")
                                            }
                                            aria-label="Supprimer le filtre"
                                        >
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {["catalog", "school", "guides"].includes(categoryCode) && (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filter-group">
                                <div className="position-relative">
                                    <select
                                        className="form-select"
                                        style={{
                                            backgroundColor: "#f0f0f0",
                                            padding: "10px 20px",
                                        }}
                                        onChange={(e) =>
                                            handleClassroomSelect(
                                                e.target.value
                                            )
                                        }
                                        value={selectedClassroom || ""}
                                    >
                                        <option value="">
                                            Toutes les classes
                                        </option>
                                        {classrooms.map((classroom) => (
                                            <option
                                                key={classroom}
                                                value={classroom}
                                            >
                                                {classroom}
                                            </option>
                                        ))}
                                    </select>

                                    {selectedClassroom && (
                                        <div className="selected-filter mt-2 d-none d-md-flex align-items-center">
                                            <span className="badge bg-primary me-2">
                                                {selectedClassroom}
                                            </span>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary border-0"
                                                onClick={() =>
                                                    handleClassroomSelect("")
                                                }
                                                aria-label="Supprimer le filtre"
                                            >
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {(categoryCode === "literature" ||
                        categoryCode === "kids") && (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filter-group">
                                <div className="position-relative">
                                    <select
                                        className="form-select"
                                        style={{
                                            backgroundColor: "#f0f0f0",
                                            padding: "10px 20px",
                                        }}
                                        onChange={(e) =>
                                            handleThemeSelect(e.target.value)
                                        }
                                        value={selectedTheme || ""}
                                    >
                                        <option value="">
                                            Tous les genres
                                        </option>
                                        {themes.map((theme) => (
                                            <option key={theme} value={theme}>
                                                {theme}
                                            </option>
                                        ))}
                                    </select>

                                    {selectedTheme && (
                                        <div className="selected-filter mt-2 d-none d-md-flex align-items-center">
                                            <span className="badge bg-primary me-2">
                                                {selectedTheme}
                                            </span>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary border-0"
                                                onClick={() =>
                                                    handleThemeSelect("")
                                                }
                                                aria-label="Supprimer le filtre"
                                            >
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {(categoryCode === "school" ||
                        categoryCode === "guides") && (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filter-group">
                                <div className="position-relative">
                                    <select
                                        className="form-select"
                                        style={{
                                            backgroundColor: "#f0f0f0",
                                            padding: "10px 20px",
                                        }}
                                        onChange={(e) =>
                                            handleSubjectSelect(e.target.value)
                                        }
                                        value={selectedSubject || ""}
                                    >
                                        <option value="">
                                            Toutes les matières
                                        </option>
                                        {subjects.map((subject) => (
                                            <option
                                                key={subject}
                                                value={subject}
                                            >
                                                {subject}
                                            </option>
                                        ))}
                                    </select>

                                    {selectedSubject && (
                                        <div className="selected-filter mt-2 d-none d-md-flex align-items-center">
                                            <span className="badge bg-primary me-2">
                                                {selectedSubject}
                                            </span>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary border-0"
                                                onClick={() =>
                                                    handleSubjectSelect("")
                                                }
                                                aria-label="Supprimer le filtre"
                                            >
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Filters;
