/**
* Layout component that queries for data
* with Gatsby's useStaticQuery component
*
* See: https://www.gatsbyjs.org/docs/use-static-query/
*/

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./main.css"

const Layout = ({ children }) => {
const data = useStaticQuery(graphql`
query SiteTitleQuery {
site {
siteMetadata {
title
}
}
}
`)

return (
<>
  <Header siteTitle={data.site.siteMetadata.title} />
  <div style={{
          margin: `0`,
          width: `100%`,
          padding: `0`,
        }}>
    <main>{children}</main>
    <footer>
      <div>
        <div style={{width: `30%`,}}>
          <h4 style={{}}>Applied Montessori</h4>
          <Link style={{ color: `white`}}>Who We Are</Link>
          <Link style={{ color: `white`}}>What We Do</Link>
          <Link style={{ color: `white`}}>Explore</Link>
          <Link style={{ color: `white`}}>Connect</Link>
        </div>
        <div style={{width: `25%`}}>
          <h4>Contact Us</h4>
          <p style={{margin: `0`}}>email@yours.com</p>
          <p style={{margin: `0`}}>(123) 456-7890</p>
        </div>
        <div style={{width: `45%`}}>
          <h4>Sign Up For Newsletter</h4>
          <form style={{display: `block`}} name="newsletter" method="POST" data-netlify-true="true" netlify-honeypot="bot-field">
            <p style={{display: `none`}}>
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <div style={{width: "50%"}}> <label htmlFor="name">Name: <input type="text" name='name' /></label><br />
              <label htmlFor="email">Email: <input type="email" name='email' /></label><br />
              <label htmlFor="why">  Why      :    <input type="text" name='why' /></label><br />
            </div>
            <div style={{width: "50%"}}>
              <button style={{marginLeft: `4em`}} type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  </div>
</>
)
}

Layout.propTypes = {
children: PropTypes.node.isRequired,
}

export default Layout