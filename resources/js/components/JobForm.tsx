import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const JobForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "",
        bookTitle: "",
        genre: "",
        manuscript: null as File | null,
        summary: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/join-us", {
            onSuccess: () => {
                setIsSuccess(true);
                reset();
            },
        });
    };

    const handleNewMessage = () => {
        setIsSuccess(false);
    };

    return (
        <div className="card">
            <div className="card-body">
                {isSuccess ? (
                    <div className="text-center py-5">
                        <div className="mb-4">
                            <i
                                className="fas fa-check-circle text-success"
                                style={{ fontSize: "4rem" }}
                            ></i>
                        </div>
                        <h3 className="mb-3">
                            Candidature spontanée envoyé avec succès!
                        </h3>
                        <p className="mb-4">
                            Merci de nous avoir contacté. Nous avons bien reçu
                            votre candidature et nous vous répondrons dans les
                            plus brefs délais.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Noms et Prénoms *"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            {errors.name && (
                                <div className="text-danger">{errors.name}</div>
                            )}
                        </div>

                        <div className="col-md-6">
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Adresse Email *"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            {errors.email && (
                                <div className="text-danger">
                                    {errors.email}
                                </div>
                            )}
                        </div>

                        <div className="col-12">
                            <input
                                type="tel"
                                className="form-control form-control-lg"
                                placeholder="Numéro de téléphone *"
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                            />
                        </div>

                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Adresse *"
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Ville / Région *"
                                value={data.city}
                                onChange={(e) =>
                                    setData("city", e.target.value)
                                }
                            />
                        </div>

                        <div className="col-md-6">
                            <select
                                className="form-select form-select-lg form-control"
                                value={data.country}
                                onChange={(e) =>
                                    setData("country", e.target.value)
                                }
                            >
                                <option value="">Pays *</option>
                                <option value="cm">Cameroun</option>
                            </select>
                        </div>

                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Niveau d'étude *"
                                value={data.genre}
                                onChange={(e) =>
                                    setData("genre", e.target.value)
                                }
                            />
                        </div>

                        <div className="col-12">
                            <label htmlFor="cv">CV</label>
                            <div className="input-group">
                                <input
                                    type="file"
                                    className="form-control form-control-lg"
                                    onChange={(e) =>
                                        setData(
                                            "manuscript",
                                            e.target.files?.[0] || null
                                        )
                                    }
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            <button
                                type="submit"
                                className="btn btn-primary call-to-action btn-lg px-5"
                                disabled={processing}
                            >
                                Envoyer ma candidature
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default JobForm;
