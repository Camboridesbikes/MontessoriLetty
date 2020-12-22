import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
<header style={{
      background: `#fff `,
    }}>
  <div style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem  1.0875rem  0 1.0875rem`,
        textAlign: `center`,
      }}>
    <h2 style={{ marginBottom: '1em' }}>
      <Link to="/" style={{
            color: `black`,
            textDecoration: `none`,
          }}>
      {siteTitle}
      </Link>
    </h2>
    {/* <hr style={{ marginLeft: `auto`, marginRight: `auto`, width: `61.8%`}}/> */}
    <div style={{ width: `100%`, display: `flex`, justifyContent: `space-evenly`}}>
      <h4>
        <Link to="/" style={{
            color: `black`,
            textDecoration: `none`,
          }}>Home</Link>
      </h4>
      <h4>
        <Link to="/WhoWeAre" style={{
            color: `black`,
            textDecoration: `none`,
          }}>Who We Are</Link>
      </h4>
      <h4>
        <Link to="/WhatWeDo" style={{
            color: `black`,
            textDecoration: `none`,
          }}>What We Do</Link>
      </h4>
      {/* <h4>
        <Link to="/Explore" style={{
            color: `black`,
            textDecoration: `none`,
          }}>Explore</Link>
      </h4> */}
      <h4>
        <Link to="/Connect" style={{
            color: `black`,
            textDecoration: `none`,
          }}>Connect</Link>
      </h4>
    </div>
  </div>
</header>
)

Header.propTypes = {
siteTitle: PropTypes.string,
}

Header.defaultProps = {
siteTitle: ``,
}

export default Header