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
        <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-12">
                <label htmlFor="companyName" className="form-label">
                    Nom légal de l'entreprise *
                </label>
                <input
                    type="text"
                    className="form-control form-control-lg"
                    id="companyName"
                    required
                />
            </div>

            {/* N° registre & Date création */}
            <div className="col-md-6">
                <label htmlFor="registrationNumber" className="form-label">
                    N° registre de commerce *
                </label>
                <input
                    type="text"
                    className="form-control form-control-lg"
                    id="registrationNumber"
                    required
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="creationDate" className="form-label">
                    Date de création
                </label>
                <input
                    type="date"
                    className="form-control form-control-lg"
                    id="creationDate"
                />
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
                    required
                />
            </div>

            {/* Ville & Pays */}
            <div className="col-md-6">
                <label htmlFor="city" className="form-label">
                    Ville / Région *
                </label>
                <input
                    type="text"
                    className="form-control form-control-lg"
                    id="city"
                    required
                />
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
                    required
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                    Email de l'entreprise *
                </label>
                <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    required
                />
            </div>

            {/* Type d'affaires */}
            <div className="col-12">
                <label htmlFor="businessType" className="form-label">
                    Type d'affaires *
                </label>
                <select
                    className="form-select form-select-lg form-control"
                    id="businessType"
                    required
                >
                    <option value="">Veuillez sectionner</option>
                    <option value="1">Librairie</option>
                    {/* Add other business types */}
                </select>
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
                    required
                />
            </div>

            <div className="col-12">
                <label htmlFor="repPhone" className="form-label">
                    Téléphone du represantant de l'entreprise *
                </label>
                <input
                    type="tel"
                    className="form-control form-control-lg"
                    id="repPhone"
                    required
                />
            </div>

            {/* ID Info */}
            <div className="col-md-6">
                <label htmlFor="idNumber" className="form-label">
                    N° pièce d'identité du represantant de l'entreprise *
                </label>
                <input
                    type="text"
                    className="form-control form-control-lg"
                    id="idNumber"
                    required
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="idDate" className="form-label">
                    Date de délivrance *
                </label>
                <input
                    type="date"
                    className="form-control form-control-lg"
                    id="idDate"
                    required
                />
            </div>

            {/* Submit Button */}
            <div className="col-12 text-center mt-4">
                <button
                    type="submit"
                    className="btn btn-primary btn-lg px-5 call-to-action"
                >
                    Envoyer le formulaire
                </button>
            </div>
        </form>
    );
};

export default DistributorForm;
