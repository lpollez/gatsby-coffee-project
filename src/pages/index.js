import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BackgroundSection from "../components/globals/BackgroundSection"
import Info from "../components/home/Info"
import Menu from "../components/home/Menu"
import Contact from "../components/home/Contact"
import Products from "../components/home/Products"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Accueil" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Coffee Store"
      subtitle="Exemple de site marchand"
    />
    <Info />
    <Menu items={data.menu} />
    <Products />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`

export default IndexPage
