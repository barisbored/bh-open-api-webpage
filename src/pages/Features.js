import { Component } from "react";
import Layout from "../components/Layout";
import Banner from "../components/Features/Banner";
import FeatureItem from "../components/Features/FeatureItem";
import FEATURES from "../features";

export default class Landing extends Component {
    state = {
        meta: {
            title: "Brawlhalla Open API - Features",
            description: "All features that the system offers you.",
        },
    };
    handleFeatures() {
        return FEATURES.map((featureItemData) => {
            return <FeatureItem {...featureItemData} />;
        });
    }
    render() {
        return (
            <Layout meta={this.state.meta}>
                <div className="container">
                    <Banner />
                    <section className="pd-1-5">
                        <div className="row">{this.handleFeatures()}</div>
                    </section>
                </div>
            </Layout>
        );
    }
}
