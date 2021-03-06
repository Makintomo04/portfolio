import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import icon from "../images/icon.png"
function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            lang
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  lang = site.siteMetadata.lang
  title = site.siteMetadata.title
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      //   title={title}
      //   titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content:
            "web development, gatsby, react, javascripy, graphql, html,css, jamstack, engineer, frontend, frameworks, web technologies, art, 3d, blog",
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `https://www.michaelakintomo.com/static/pesonal_dev_logo2-ddd3789c1af91313b25df2676be31437.png`,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          property: `og:url`,
          content: `https://www.michaelakintomo.com`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
