import React, { useState } from "react";
import { Author, BookLanguage, Collection } from "../types/interfaces";
import { router } from "@inertiajs/react";

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

    const baseUrl = `/catalogue/category/${categoryCode}`;

    const updateUrlWithParams = (paramName: string, paramValue: string) => {
        // Créer un objet URLSearchParams avec les paramètres actuels
        const searchParams = new URLSearchParams(window.location.search);

        // Ajouter ou mettre à jour le paramètre
        searchParams.set(paramName, paramValue);

        // Naviguer vers l'URL avec les paramètres mis à jour
        router.get(`${baseUrl}?${searchParams.toString()}`);
    };

    const handleAuthorSelect = (authorSlug: string) => {
        setSelectedAuthor(authorSlug);
        updateUrlWithParams("author_slug", authorSlug);
    };

    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
        updateUrlWithParams("lang", language);
    };

    const handleClassroomSelect = (classroom: string) => {
        setSelectedClassroom(classroom);
        updateUrlWithParams("classroom", classroom);
    };

    const handleThemeSelect = (theme: string) => {
        setSelectedTheme(theme);
        updateUrlWithParams("theme", theme);
    };

    const handleCollectionSelect = (collection: string) => {
        setSelectedCollection(collection);
        updateUrlWithParams("collection", collection);
    };

    const handleSubjectSelect = (subject: string) => {
        setSelectedSubject(subject);
        updateUrlWithParams("subject", subject);
    };

    return (
        <div className="filters mb-5">
            <div className="row">
                {["literature", "kids"].includes(categoryCode) && (
                    <div className="col-md-3 mb-2">
                        <select
                            className="form-select"
                            style={{
                                backgroundColor: "#f0f0f0",
                                padding: "10px 20px",
                            }}
                            onChange={(e) => handleAuthorSelect(e.target.value)}
                        >
                            <option>
                                {selectedAuthor ?? "Trier par auteurs"}{" "}
                            </option>
                            {authors.map((author) => (
                                <option key={author.id} value={author.slug}>
                                    {author.name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                {categoryCode === "school" && (
                    <div className="col-md-3 mb-2">
                        <select
                            className="form-select"
                            style={{
                                backgroundColor: "#f0f0f0",
                                padding: "10px 20px",
                            }}
                            onChange={(e) =>
                                handleCollectionSelect(e.target.value)
                            }
                        >
                            <option>Trier par Collection</option>
                            {collections.map((collection) => (
                                <option
                                    key={collection.id}
                                    value={collection.slug}
                                >
                                    {collection.name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                <div className="col-md-3 mb-2">
                    <select
                        className="form-select"
                        style={{
                            backgroundColor: "#f0f0f0",
                            padding: "10px 20px",
                        }}
                        onChange={(e) => handleLanguageSelect(e.target.value)}
                    >
                        <option>
                            {selectedLanguage ?? "Trier par Langue"}
                        </option>
                        {languages.map((language) => (
                            <option key={language.id} value={language.id}>
                                {language.name}
                            </option>
                        ))}
                    </select>
                </div>
                {["catalog", "school", "guides"].includes(categoryCode) && (
                    <div className="col-md-3 mb-2">
                        <select
                            className="form-select"
                            style={{
                                backgroundColor: "#f0f0f0",
                                padding: "10px 20px",
                            }}
                            onChange={(e) =>
                                handleClassroomSelect(e.target.value)
                            }
                        >
                            <option>Trier par Classes</option>
                            {classrooms.map((classroom) => (
                                <option key={classroom} value={classroom}>
                                    {classroom}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {(categoryCode === "literature" || categoryCode === "kids") && (
                    <div className="col-md-3 mb-2">
                        <select
                            className="form-select"
                            style={{
                                backgroundColor: "#f0f0f0",
                                padding: "10px 20px",
                            }}
                            onChange={(e) => handleThemeSelect(e.target.value)}
                        >
                            <option>Trier par Genre</option>
                            {themes.map((theme) => (
                                <option key={theme} value={theme}>
                                    {theme}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                {(categoryCode === "school" || categoryCode === "guides") && (
                    <div className="col-md-3 mb-2">
                        <select
                            className="form-select"
                            style={{
                                backgroundColor: "#f0f0f0",
                                padding: "10px 20px",
                            }}
                            onChange={(e) =>
                                handleSubjectSelect(e.target.value)
                            }
                        >
                            <option>Trier par Matière</option>
                            {subjects.map((subject) => (
                                <option key={subject} value={subject}>
                                    {subject}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Filters;
