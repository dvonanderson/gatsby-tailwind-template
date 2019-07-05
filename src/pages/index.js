import React from "react"
import { Stage, Layer, Text } from 'react-konva';


import Layout from "../components/layout"
import DsaLogo from "../components/dsaLogo"
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <h1 className="text-center">Code of the South Gatsby React Template</h1>
      <div className="w-1/5 m-auto">
        <DsaLogo />
      </div>
  </Layout>
)

export default IndexPage
