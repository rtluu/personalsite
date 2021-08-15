import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import WorkRemoteBlog from "../blog/02WorkRemote/workremote"

const WorkRemote = () => (
    <Layout>
        <SEO title="Work Remote | Ryan Luu" />
        <WorkRemoteBlog />
    </Layout>
)

export default WorkRemote