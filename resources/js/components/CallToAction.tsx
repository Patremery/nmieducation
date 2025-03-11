import { Link } from "@inertiajs/react";
interface CallToActionProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}
const CallToAction = ({
    title,
    description,
    buttonText,
    buttonLink,
}: CallToActionProps) => {
    return (
        <div
            className="ebook-section mt-5"
            style={{
                backgroundColor: "rgb(224 224 224)",
                marginLeft: "calc(-50vw + 50%)",
                marginRight: "calc(-50vw + 50%)",
                width: "100vw",
                position: "relative",
                padding: "60px",
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2 text-center align-self-center">
                        <h2 className="h3 font-weight-600">{title}</h2>
                        <p className="mb-4 fs-5">{description}</p>
                        <Link
                            href={buttonLink}
                            className="btn btn-lg btn-primary call-to-action"
                        >
                            {buttonText}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
