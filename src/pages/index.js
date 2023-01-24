import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>lol</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/taytay.1000x1000x1-354485103"
      />
      <h1>Mangooo</h1>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage