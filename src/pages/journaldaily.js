import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import JournalDailyBlog from "../blog/01JournalDaily/journaldaily"

const JournalDaily = () => (
    <Layout>
        <SEO title="Journal Daily | Ryan Luu" />
        <JournalDailyBlog />
    </Layout>
)

export default JournalDaily