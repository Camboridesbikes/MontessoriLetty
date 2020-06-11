import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import SEO from "../components/seo"


import Img from "gatsby-image/withIEPolyfill"

export const sharpImage = graphql`
fragment sharpImage on File {
childImageSharp{
fluid {
aspectRatio
base64
sizes
src
srcSet
}
}
}
`


const IndexPage = () => {
const data = useStaticQuery(graphql`
query {
  allFile(filter: {sourceInstanceName: {eq: "content"}, name: {eq: "home"}}) {
    edges {
      node {
        childMarkdownRemark {
          frontmatter {
            whoText
            card1Text
            card2Text
            card3Text
            card4Text
            splashText
          }
        }
      }
    }
  }
splash: file(relativePath: {eq: "splashImage.jpg"}) {
...sharpImage
}
whoWeAre: file(relativePath: {eq: "WhoWeAre.jpg"}) {
...sharpImage
}
card1: file(relativePath: {eq: "checkeredBoard.jpg"}) {
...sharpImage
}
card2: file(relativePath: {eq: "schoolLeadership.jpg"}) {
...sharpImage
}
card3: file(relativePath: {eq: "profDevWorkshops.jpg"}) {
...sharpImage
}
card4: file(relativePath: {eq: "parentCoaching.jpg"}) {
...sharpImage
}

}
`);

const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

return(
<>
  <SEO title="Home" />

  {/* First block */}
  <div style={{width: `100%`, position: `relative`}}>
    <Img style={{width:`100%`, height: `18em`}} fluid={data.splash.childImageSharp.fluid} objectFit={'cover'}
      objectPosition="50% 35%"></Img>
    <div
      style={{position: `absolute`, top: `0`, left: `0`, height: `100%`, width: `100%`, padding: `auto`, display: `flex`, flexDirection: `row-reverse`, backgroundColor: `#00000022`}}>
      <div style={{width: `50%`, color: `white`, textAlign: `center`, padding: `2rem`}}>
        <p style={{fontSize: '1.8em'}}>{content.splashText}</p>
        <button>
          <Link to='/Connect'>Connect with us</Link></button>
      </div>
    </div>
  </div>

  {/* NewsLetter Banner */}
  <div style={{ width: `100%`,position: `relative`,}}>
    <div style={{background: `#A7E084`,height: `2rem`, textAlign: `center`, padding: `.25em`}}>
      <p style={{margin: `0`}}>Sign up for the NewsLetter</p>
    </div>
  </div>

  {/* Who We are block */}
  <div style={{width: `100%`, position: `relative`}}>
    <Img style={{width:`100%`, height: `32em`}} fluid={data.whoWeAre.childImageSharp.fluid} objectFit={'cover'}
      objectPosition="50% 45%"></Img>
    <div
      style={{position: `absolute`, backgroundColor: `#00000075`, textAlign: `center`, top: `0`, left: `10%`, height: `90%`, width: `80%`, padding: `auto`}}>
      <div style={{padding: `5%`, color: `white`}}>
        <h3>Who We Are</h3>
        <p style={{fontSize: '1.5em', lineHeight: `1.5em`}}>{content.whoText}</p>
        <button>
          <Link to='/WhoWeAre'>Learn More</Link></button>
      </div>
    </div>
  </div>

  {/* block of cards */}
  <div className="phg">
    <div className="phg" style={{display: `flex`, flexWrap: `wrap`, justifyContent: `center`, textAlign: `center`}}>

      <div className="picCard ">
        <Img style={{width: `100%`, paddingTop: `100%`}} fluid={data.card1.childImageSharp.fluid} objectFit={'cover'} />
        <Link to="/WhatWeDo">
        <div>
          <h1 className='title'>Online Mentoring and Coaching</h1>
<p>{content.card1Text}</p>
        </div>
        </Link>

      </div>

      <div className="picCard ">
        <Img style={{width: `100%`, paddingTop: `100%`}} fluid={data.card2.childImageSharp.fluid} objectFit={'cover'} />
        <Link to="/WhatWeDo">
        <div>
          <h1 className='title'>School Leadership Consultation</h1>
          <p>{content.card2Text}</p>
        </div>
        </Link>

      </div>

      <div className="picCard ">
        <Img style={{width: `100%`, paddingTop: `100%`}} fluid={data.card3.childImageSharp.fluid} objectFit={'cover'} />
        <Link to="/WhatWeDo">
        <div>
          <h1 className='title'>Professional Development Workshops</h1>
          <p>{content.card3Text}</p>
        </div>
        </Link>
      </div>



      <div className="picCard ">
        <Img style={{width: `100%`, paddingTop: `100%`}} fluid={data.card4.childImageSharp.fluid} objectFit={'cover'} />
        <Link to="/WhatWeDo">
        <div>
          <h1 className='title'>Parent Coaching and Training</h1>
          <p>{content.card4Text}</p>
        </div>
        </Link>

      </div>
    </div>
  </div>
</>
);

}

export default IndexPage