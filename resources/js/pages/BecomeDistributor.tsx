import React from "react";
import InnerPageLayout from "../layouts/InnerPageLayout";
import { BannerProps } from "../types/interfaces";
import DistributorForm from "../components/DistributorForm";

const BecomeDistributor = () => {
    const description =
        "Devenez distributeur agréé des manuels scolaires et ouvrages de littérature édités par NMI Education";

    const banner: BannerProps = {
        description: description,
        className: "display-7 font-weight-600 p-5",
        textAlign: "center",
    };

    const content = {
        introduction:
            "Vous êtes libraire, distributeur ou revendeur ? Proposez les manuels scolaires et ouvrages de littérature jeunesse et de littérature générale de qualité supérieure à vos clients.Remplissez intégralement le formulaire ci-dessous pour enregistrer votre entreprise dans le réseau des partenaires de NMI Education et bénéficier d'offres adaptées et de nos conseils dans les conditions privilégiées.",
    };

    return (
        <InnerPageLayout banner={banner}>
            <div className="container p-2">
                <div className="row px-5 mt-5">
                    <div className="col-md-12 text-center ">
                        <h2 className="font-weight-600">
                            Rejoignez notre réseau de distribution
                        </h2>
                        <div>{content.introduction}</div>
                    </div>
                </div>

                <div className="row px-5 my-5">
                    <div className="col-sm-12">
                        <DistributorForm />
                    </div>
                </div>
            </div>
        </InnerPageLayout>
    );
};

export default BecomeDistributor;
