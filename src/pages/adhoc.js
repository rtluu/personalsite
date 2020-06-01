import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import AdHocCase from "../cases/AdHoc/adhoc"

const AdHoc = () => (
    <Layout>
        <SEO title="AdHoc | Ryan Luu" />
        <AdHocCase />
    </Layout>
)

export default AdHoc