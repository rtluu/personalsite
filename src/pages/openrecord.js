import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import OpenRecordCase from "../cases/OpenRecord/openrecord"

const OpenRecord = () => (
    <Layout>
        <SEO title="OpenRecord | Ryan Luu" />
        <OpenRecordCase />
    </Layout>
)

export default OpenRecord