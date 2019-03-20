import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import Footer from "./footer"
import './layout.css'
import 'typeface-open-sans'

const SiteWrapper = styled.div`
 ${tw`font-sans mx-auto container max-w-container leading-normal`};
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <SiteWrapper css={tw`text-grey-darker leading-normal`}>
          <main>{children}</main>
          <Footer/>
        </SiteWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
