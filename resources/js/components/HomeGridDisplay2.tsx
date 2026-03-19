import React from "react";
import DOMPurify from "dompurify";

interface HomeGridDisplay2Props {
    title: string;
    subtitle: string;
    description: string;
    videoUrl: string;
}

const HomeGridDisplay2 = ({
    title,
    subtitle,
    description,
    videoUrl,
}: HomeGridDisplay2Props) => {
    return (
        <div className="bg-light p-md-5">
            <div className="container p-3 px-md-4">
                <div className="row text-center">
                    <div className="col-sm-8 offset-sm-2">
                        <h2 className=" h2 font-weight-600">{title}</h2>
                        <h6
                            className="mb-2 text-primary font-weight-600align-items-center"
                            style={{ fontSize: 30 }}
                        >
                            {subtitle}
                        </h6>
                    </div>
                </div>

                <div className="row py-3 py-md-4">
                    <div className="col-6">
                        <iframe
                            src={videoUrl}
                            className="w-100"
                            style={{ aspectRatio: "16/9" }}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="col-6">
                        <div
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeGridDisplay2;
