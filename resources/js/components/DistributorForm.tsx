import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

const DistributorForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        companyName: "",
        registrationNumber: "",
        creationDate: "",
        address: "",
        city: "",
        phone: "",
        email: "",
        businessType: "",
        legalRep: "",
        repPhone: "",
        idNumber: "",
        idDate: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/become-distributor", {
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
                    <h3 className="mb-3">Demande envoyée avec succès!</h3>
                    <p className="mb-4">
                        Merci de votre intérêt. Nous avons bien reçu votre
                        demande de partenariat et nous vous répondrons dans les
                        plus brefs délais.
                    </p>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleNewMessage}
                    >
                        Envoyer une nouvelle demande
                    </button>
                </div>
            ) : (
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <label htmlFor="companyName" className="form-label">
                            Nom légal de l'entreprise *
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="companyName"
                            value={data.companyName}
                            onChange={(e) =>
                                setData("companyName", e.target.value)
                            }
                            required
                        />
                        {errors.companyName && (
                            <div className="text-danger">
                                {errors.companyName}
                            </div>
                        )}
                    </div>

                    {/* N° registre & Date création */}
                    <div className="col-md-6">
                        <label
                            htmlFor="registrationNumber"
                            className="form-label"
                        >
                            N° registre de commerce *
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="registrationNumber"
                            value={data.registrationNumber}
                            onChange={(e) =>
                                setData("registrationNumber", e.target.value)
                            }
                            required
                        />
                        {errors.registrationNumber && (
                            <div className="text-danger">
                                {errors.registrationNumber}
                            </div>
                        )}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="creationDate" className="form-label">
                            Date de création
                        </label>
                        <input
                            type="date"
                            className="form-control form-control-lg"
                            id="creationDate"
                            value={data.creationDate}
                            onChange={(e) =>
                                setData("creationDate", e.target.value)
                            }
                        />
                        {errors.creationDate && (
                            <div className="text-danger">
                                {errors.creationDate}
                            </div>
                        )}
                    </div>

                    {/* Adresse */}
                    <div className="col-12">
                        <label htmlFor="address" className="form-label">
                            Adresse de l'entreprise *
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="address"
                            value={data.address}
                            onChange={(e) =>
                                setData("address", e.target.value)
                            }
                            required
                        />
                        {errors.address && (
                            <div className="text-danger">{errors.address}</div>
                        )}
                    </div>

                    {/* Ville */}
                    <div className="col-md-6">
                        <label htmlFor="city" className="form-label">
                            Ville / Région *
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="city"
                            value={data.city}
                            onChange={(e) => setData("city", e.target.value)}
                            required
                        />
                        {errors.city && (
                            <div className="text-danger">{errors.city}</div>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">
                            Téléphone de l'entreprise *
                        </label>
                        <input
                            type="tel"
                            className="form-control form-control-lg"
                            id="phone"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            required
                        />
                        {errors.phone && (
                            <div className="text-danger">{errors.phone}</div>
                        )}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">
                            Email de l'entreprise *
                        </label>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            id="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />
                        {errors.email && (
                            <div className="text-danger">{errors.email}</div>
                        )}
                    </div>

                    {/* Type d'affaires */}
                    <div className="col-12">
                        <label htmlFor="businessType" className="form-label">
                            Type d'affaires *
                        </label>
                        <select
                            className="form-select form-select-lg form-control"
                            id="businessType"
                            value={data.businessType}
                            onChange={(e) =>
                                setData("businessType", e.target.value)
                            }
                            required
                        >
                            <option value="">Veuillez sectionner</option>
                            <option value="1">Librairie</option>
                            {/* Add other business types */}
                        </select>
                        {errors.businessType && (
                            <div className="text-danger">
                                {errors.businessType}
                            </div>
                        )}
                    </div>

                    {/* Representative Info */}
                    <div className="col-12">
                        <label htmlFor="legalRep" className="form-label">
                            Nom du represantant légal de l'entreprise *
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="legalRep"
                            value={data.legalRep}
                            onChange={(e) =>
                                setData("legalRep", e.target.value)
                            }
                            required
                        />
                        {errors.legalRep && (
                            <div className="text-danger">
                                {errors.legalRep}
                            </div>
                        )}
                    </div>

                    <div className="col-12">
                        <label htmlFor="repPhone" className="form-label">
                            Téléphone du represantant de l'entreprise *
                        </label>
                        <input
                            type="tel"
                            className="form-control form-control-lg"
                            id="repPhone"
                            value={data.repPhone}
                            onChange={(e) =>
                                setData("repPhone", e.target.value)
                            }
                            required
                        />
                        {errors.repPhone && (
                            <div className="text-danger">
                                {errors.repPhone}
                            </div>
                        )}
                    </div>

                    {/* ID Info */}
                    <div className="col-md-6">
                        <label htmlFor="idNumber" className="form-label">
                            N° pièce d'identité du represantant de l'entreprise
                            *
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="idNumber"
                            value={data.idNumber}
                            onChange={(e) =>
                                setData("idNumber", e.target.value)
                            }
                            required
                        />
                        {errors.idNumber && (
                            <div className="text-danger">
                                {errors.idNumber}
                            </div>
                        )}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="idDate" className="form-label">
                            Date de délivrance *
                        </label>
                        <input
                            type="date"
                            className="form-control form-control-lg"
                            id="idDate"
                            value={data.idDate}
                            onChange={(e) => setData("idDate", e.target.value)}
                            required
                        />
                        {errors.idDate && (
                            <div className="text-danger">{errors.idDate}</div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 text-center mt-4">
                        <button
                            type="submit"
                            className="btn btn-primary btn-lg px-5 call-to-action"
                            disabled={processing}
                        >
                            {processing ? (
                                <>
                                    <span
                                        className="spinner-border spinner-border-sm me-2"
                                        role="status"
                                        aria-hidden="true"
                                    ></span>
                                    Envoi en cours...
                                </>
                            ) : (
                                "Envoyer le formulaire"
                            )}
                        </button>
                    </div>
                </form>
            )}
        </>
    );
};

export default DistributorForm;
