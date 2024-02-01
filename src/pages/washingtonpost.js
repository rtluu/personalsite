import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import WashingtonPostCase from "../cases/WashingtonPost/washingtonpost"

const WashingtonPost = () => (
    <Layout>
        <SEO title="Washington Post | Ryan Luu" />
        <WashingtonPostCase />
    </Layout>
)

export default WashingtonPost