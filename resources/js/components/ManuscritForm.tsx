import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ManuscritForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "",
        bookTitle: "",
        category: "",
        manuscript: null as File | null,
        summary: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/submit-your-manuscrit", {
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
        <>
            {isSuccess ? (
                <div className="text-center py-5">
                    <div className="mb-4">
                        <i
                            className="fas fa-check-circle text-success"
                            style={{ fontSize: "4rem" }}
                        ></i>
                    </div>
                    <h3 className="mb-3">Manuscrit envoyé avec succès!</h3>
                    <p className="mb-4">
                        Merci de nous avoir contacté. Nous avons bien reçu votre
                        manuscrit, nous vous répondrons dans les plus brefs
                        délais.
                    </p>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleNewMessage}
                    >
                        Soumettre un nouveau manuscrit
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Noms et Prénoms *"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
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
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email && (
                            <div className="text-danger">{errors.email}</div>
                        )}
                    </div>

                    <div className="col-12">
                        <PhoneInput
                            country={"cm"}
                            value={data.phone}
                            onChange={(phone) => setData("phone", phone)}
                            inputClass="form-control form-control-lg"
                            inputStyle={{
                                border: "none",
                                backgroundColor: "#e9e7e7",
                                width: "100%",
                            }}
                        />
                        {errors.phone && (
                            <div className="text-danger">{errors.phone}</div>
                        )}
                    </div>

                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Adresse *"
                            value={data.address}
                            onChange={(e) => setData("address", e.target.value)}
                        />
                    </div>

                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Ville / Région *"
                            value={data.city}
                            onChange={(e) => setData("city", e.target.value)}
                        />
                    </div>

                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Titre de l'ouvrage *"
                            value={data.bookTitle}
                            onChange={(e) =>
                                setData("bookTitle", e.target.value)
                            }
                        />
                    </div>

                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Genre de l'ouvrage *"
                            value={data.category}
                            onChange={(e) =>
                                setData("category", e.target.value)
                            }
                        />
                    </div>

                    <div className="col-12">
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
                        <textarea
                            className="form-control form-control-lg"
                            rows={6}
                            placeholder="Résumé de l'ouvrage *"
                            value={data.summary}
                            onChange={(e) => setData("summary", e.target.value)}
                        ></textarea>
                    </div>

                    <div className="col-12">
                        <button
                            type="submit"
                            className="btn btn-primary call-to-action btn-lg px-5"
                            disabled={processing}
                        >
                            Envoyer mon manuscrit
                        </button>
                    </div>
                </form>
            )}
        </>
    );
};

export default ManuscritForm;
