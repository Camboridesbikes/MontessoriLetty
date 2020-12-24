import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import SEO from "../components/seo"


import Img from "gatsby-image/withIEPolyfill"
import "../styles/pages/index/index.css"

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

  {/* */}
  {/**
  * ***FIRST BLOCK***
  * TODO: darken background when mobile-size
  */}
  <BackgroundImage className="splash" style={{width: `100%`, backgroundSize: 'cover'}} fluid={data.splash.childImageSharp.fluid}
    objectPosition="50% 35%">
    <div className="inner" >
      <div >
        <h1>Welcome to Applied Montessori</h1>
        <h3>
          {content.splashText}
        </h3>
        <button className="button">
          <Link  to='/Connect'>Connect with us</Link></button>
      </div>
    </div>
  </BackgroundImage>

  {/* NewsLetter Banner */}
  <div style={{ width: `100%`,position: `relative`,}}>
    <div style={{background: `#A7E084`,height: `.5rem`, textAlign: `center`, padding: `.25em`}}>
      {/* <p style={{margin: `0`}}>Sign up for the NewsLetter</p> */}
    </div>
  </div>

  {/* Who We are block */}
  <BackgroundImage className="whoWeAre" fluid={data.whoWeAre.childImageSharp.fluid}>
    <div className="inner">
      <div style={{padding: `5%`, color: `white`}}>
        <h1>Who We Are</h1>
        <h3 style={{fontSize: '1.5em', lineHeight: `1.5em`, maxWidth: '1000px'}}>{content.whoText}</h3>
        <button className="button">
          <Link  to='/WhoWeAre'>Learn More</Link></button>
      </div>
    </div>
  </BackgroundImage>
  {/* <div style={{width: `100%`, position: `relative`}}>
    <Img style={{width:`100%`, height: `32em`}} fluid={data.whoWeAre.childImageSharp.fluid} objectFit={'cover'}
      objectPosition="50% 45%"></Img>
    <div
      style={{position: `absolute`, backgroundColor: `#00000075`, textAlign: `center`, top: `0`, left: `10%`, height: `90%`, width: `80%`, padding: `auto`}}>
      <div style={{padding: `5%`, color: `white`}}>
        <h3>Who We Are</h3>
        <p style={{fontSize: '1.5em', lineHeight: `1.5em`, maxWidth: '1000px'}}>{content.whoText}</p>
        <button>
          <Link to='/WhoWeAre'>Learn More</Link></button>
      </div>
    </div>
  </div> */}

  {/* block of cards */}
  {/**
  * TODO: change the conatining div into a cardBlck clas and manipulate in sass
  */}
  <div className="">
    <div className="CardDeck"
      style={{display: `flex`, flexWrap: `wrap`, justifyContent: `center`, textAlign: `center`}}>

      <BackgroundImage className="picCard" fluid={data.card1.childImageSharp.fluid}>
        <Link to="/WhatWeDo#whatWeDo_1">
        <div>
          <h1 className='title'>Online Mentoring and Coaching</h1>
        </div>
        </Link>
      </BackgroundImage>

      <BackgroundImage className="picCard" fluid={data.card2.childImageSharp.fluid}>
        <Link to="/WhatWeDo#whatWeDo_2">
        <div>
          <h1 className='title'>School Leadership Consultation</h1>
        </div>
        </Link>
      </BackgroundImage>

      <BackgroundImage className="picCard" fluid={data.card3.childImageSharp.fluid}>
        <Link to="/WhatWeDo#whatWeDo_3">
        <div>
          <h1 className='title'>Professional Development Workshops</h1>
        </div>
        </Link>
      </BackgroundImage>

      <BackgroundImage className="picCard" fluid={data.card4.childImageSharp.fluid}>
        <Link to="/WhatWeDo#whatWeDo_4">
        <div>
          <h1 className='title'>Parent Coaching and Training</h1>
        </div>
        </Link>
      </BackgroundImage>


    </div>
  </div>
</>
);

}

export default IndexPage