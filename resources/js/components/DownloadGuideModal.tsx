import React from "react";
import { useForm } from "@inertiajs/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface DownloadGuideModalProps {
    showModal: boolean;
    handleCloseModal: () => void;
    title: string;
    bookId: number;
}

const DownloadGuideModal: React.FC<DownloadGuideModalProps> = ({
    showModal,
    handleCloseModal,
    title,
    bookId,
}) => {
    const { data, setData, post, processing, errors } = useForm({
        username: "",
        email: "",
        phone: "",
        bookId: bookId,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/download-guide", {
            data: {
                name: data.username,
                email: data.email,
                phone: data.phone,
                bookId: bookId,
            },
        });
        handleCloseModal();
    };

    return (
        <>
            {showModal && (
                <>
                    <div
                        className="modal fade show"
                        style={{ display: "block" }}
                        tabIndex={-1}
                        role="dialog"
                    >
                        <div
                            className="modal-dialog modal-dialog-centered"
                            role="document"
                        >
                            <div className="modal-content px-3">
                                <div className="modal-header">
                                    <div className="d-flex flex-column text-center">
                                        <h5 className="modal-title font-weight-600 text-primary">
                                            Télécharger
                                            <br />
                                            {title}
                                        </h5>
                                        <i className="text-muted">
                                            Veuillez remplir le formulaire
                                            ci-dessous pour télécharger le
                                            guide.
                                        </i>
                                    </div>
                                    <button
                                        type="button"
                                        className="close border-0 btn btn-outline-warning btn-sm"
                                        onClick={handleCloseModal}
                                        style={{
                                            position: "absolute",
                                            right: "1rem",
                                            top: "1rem",
                                        }}
                                    >
                                        <span className="badge">
                                            <i className="fas fa-times"></i>
                                        </span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group mb-3">
                                            <label
                                                htmlFor="name"
                                                className="py-2 font-weight-600 text-muted"
                                                style={{
                                                    fontSize: "14px",
                                                }}
                                            >
                                                Noms et Prénoms
                                                <span className="text-danger px-1">
                                                    *
                                                </span>
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="fas fa-user"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    value={data.username}
                                                    onChange={(e) =>
                                                        setData(
                                                            "username",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                    style={{
                                                        borderRadius: "1px",
                                                        backgroundColor:
                                                            "#f8f9fa",
                                                    }}
                                                />
                                                {errors.username && (
                                                    <div className="text-danger">
                                                        {errors.username}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label
                                                htmlFor="email"
                                                className="py-2 font-weight-600 text-muted"
                                                style={{
                                                    fontSize: "14px",
                                                }}
                                            >
                                                Email
                                                <span className="text-danger px-1">
                                                    *
                                                </span>
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="fas fa-envelope"></i>
                                                </span>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    value={data.email}
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                    style={{
                                                        borderRadius: "1px",
                                                        backgroundColor:
                                                            "#f8f9fa",
                                                    }}
                                                />
                                                {errors.email && (
                                                    <div className="text-danger">
                                                        {errors.email}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label
                                                htmlFor="phone"
                                                className="py-2 font-weight-600 text-muted"
                                                style={{
                                                    fontSize: "14px",
                                                }}
                                            >
                                                Numéro de téléphone
                                            </label>
                                            <div className="input-group">
                                                <PhoneInput
                                                    country={"fr"} // Default country
                                                    value={data.phone}
                                                    onChange={(phone) =>
                                                        setData("phone", phone)
                                                    }
                                                    inputStyle={{
                                                        borderRadius: "1px",
                                                        backgroundColor:
                                                            "#f8f9fa",
                                                        width: "100%",
                                                    }}
                                                />
                                                {errors.phone && (
                                                    <div className="text-danger">
                                                        {errors.phone}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="modal-footer border-0">
                                            <button
                                                type="button"
                                                className="btn btn-secondary border-0"
                                                style={{
                                                    borderRadius: "1px",
                                                }}
                                                onClick={handleCloseModal}
                                            >
                                                Annuler
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                style={{
                                                    borderRadius: "1px",
                                                }}
                                                disabled={processing}
                                            >
                                                {processing
                                                    ? "Veuillez patienter..."
                                                    : "Télécharger"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="modal-backdrop fade show"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                        onClick={handleCloseModal}
                    ></div>
                </>
            )}
        </>
    );
};

export default DownloadGuideModal;
