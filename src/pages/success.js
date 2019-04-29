import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import BackgroundSection from "../components/globals/BackgroundSection"
import SEO from "../components/seo"

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quibusdam quia ab cupiditate adipisci atque accusantium ipsa saepe
            nemo delectus.
          </p>
          <Link to="/">
            <button className="btn btn-yellow">Retour</button>
          </Link>
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
