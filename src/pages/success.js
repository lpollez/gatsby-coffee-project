import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BackgroundSection from "../components/globals/BackgroundSection"
import SEO from "../components/seo"
import Title from "../components/globals/Title"

const SuccessPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Merci de nous avoir contacté"
      styleClass="about-background"
    />
    <section className="py-5">
      <div className="row">
        <div className="col-10 col-sm-8 mx-auto text-center">
          <p className="lead text-muted mb-5">
            Merci de nous avoir contacté. Nous allons traiter rapidement votre
            demande et nous reviendrons vers vous.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default SuccessPage
