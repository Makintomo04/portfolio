import React from "react"
import ContactContent from "../components/ContactContent"
import Head from "../components/Head"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Cursor from "../components/Cursor"
function contact({ data }) {
  return (
    <div>
      <SEO title="contact" description={data.site.siteMetadata.description} />
      <Head title="Contact" />
      <Cursor />
      <ContactContent />
    </div>
  )
}

export default contact
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
