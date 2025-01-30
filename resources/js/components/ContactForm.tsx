import React from "react";
import { useForm } from "@inertiajs/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface ContactFormProps {
    //onSubmit: (data: any) => void;
}

const ContactForm: React.FC<ContactFormProps> = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/contact");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm-6 mb-3">
                    <input
                        type="text"
                        className="form-control form-control-lg w-100"
                        id="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        placeholder="Entrez votre nom"
                        required
                    />
                    {errors.name && (
                        <div className="text-danger">{errors.name}</div>
                    )}
                </div>

                <div className="col-sm-6 mb-3">
                    <input
                        type="email"
                        className="form-control form-control-lg w-100"
                        id="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        placeholder="Entrez votre email"
                        required
                    />
                    {errors.email && (
                        <div className="text-danger">{errors.email}</div>
                    )}
                </div>
            </div>

            <div className="mb-3">
                <PhoneInput
                    country={"cm"}
                    value={data.phone}
                    onChange={(phone) => setData("phone", phone)}
                    inputClass="form-control form-control-lg"
                    inputStyle={{
                        border: "none",
                        backgroundColor: "#f8f9fa",
                        width: "100%",
                    }}
                />
                {errors.phone && (
                    <div className="text-danger">{errors.phone}</div>
                )}
            </div>

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    id="subject"
                    value={data.subject}
                    onChange={(e) => setData("subject", e.target.value)}
                    placeholder="Objet de votre message"
                    required
                />
                {errors.subject && (
                    <div className="text-danger">{errors.subject}</div>
                )}
            </div>

            {/* Champ Message */}
            <div className="mb-3">
                <textarea
                    className="form-control form-control-lg"
                    id="message"
                    rows={5}
                    value={data.message}
                    onChange={(e) => setData("message", e.target.value)}
                    placeholder="Entrez votre message"
                    required
                ></textarea>
                {errors.message && (
                    <div className="text-danger">{errors.message}</div>
                )}
            </div>

            <button
                type="submit"
                className="btn btn-danger call-to-action"
                disabled={processing}
            >
                {processing ? "Envoi en cours..." : "Envoyer le message"}
            </button>
        </form>
    );
};

export default ContactForm;
