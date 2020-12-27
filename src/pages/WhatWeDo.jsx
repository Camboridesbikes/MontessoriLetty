import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import SEO from "../components/seo"
// import Img from "gatsby-image/withIEPolyfill"

import "../styles/pages/WhatWeDo/WhatWeDo.css"

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

const WhatWeDo = () => {
const data = useStaticQuery(graphql`
query{
WhatWeDo: file(relativePath: {eq:
"WhatWeDoSplash.jpg"}){
...sharpImage
}
OnlineMentoringCoaching: file(relativePath: {eq:
"OnlineMentoringCoaching.jpg"}){
...sharpImage
}
SchoolLeadership: file(relativePath: { eq:
"stock-photo-wood-montessori-geometrical-solid-volumes-1115485757.jpg"}){
...sharpImage
}
allFile(filter: {sourceInstanceName: {eq: "content"}, name: {eq: "whatWeDo"}}) {
edges {
node {
childMarkdownRemark {
frontmatter {
whatWeDoText
mentorCoachText
schoolLeadershipText
profDevText
parentCoachText
}
}
}
}
}
}
`);

const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

return(
<>
  <SEO title="What We Do" />
  {/* Splash */}
  <BackgroundImage className="splash" style={{width:`100%`, backgroundSize: 'cover'}}
    fluid={data.WhatWeDo.childImageSharp.fluid}>
    <div
      style={{height: '100%', width: `100%`, padding: `auto`, display: `flex`, justifyContent: 'center', alignContent: 'center', backgroundColor: `rgba(0, 0, 0, .3)`}}>
      <div className='phg pt3 hg tc white'>
        <h1>What We Do</h1>
        <h3 className='w100' style={{fontSize: `1.2em`, lineHeight: '1.5em', textShadow: '0 0 2.5px #000'}}>
          {content.whatWeDoText}
        </h3>
      </div>
    </div>
  </BackgroundImage>

  {/* green divider */}
  <div style={{ width: `100%`,position: `relative`,}}>
    <div style={{background: `#A7E084`,height: `.681rem`, textAlign: `center`, padding: `.25em`}}>
    </div>
  </div>

  {/* Online Mentoring and Coaching */}
  <div className='sbs-container'>
    <BackgroundImage className='sbs-bg' fluid={data.OnlineMentoringCoaching.childImageSharp.fluid}>
      <div id='whatWeDo_1' className='sbs-bg-inner'>
        <h1>Online Mentoring and Coaching</h1>
      </div>
    </BackgroundImage>

    <div className="sbs-inner">
      <p>
        {content.mentorCoachText}
      </p>
    </div>
  </div>


  {/* School Leadership Consultation */}
  <div className="sbs-container">
    <BackgroundImage className='sbs-bg' fluid={data.SchoolLeadership.childImageSharp.fluid}>
      <div id='whatWeDo_2' className='sbs-bg-inner'>
        <h1>School Leadership Consultation</h1>
      </div>
    </BackgroundImage>

    <div className="sbs-inner">
      <p>
        {content.schoolLeadershipText}
      </p>
    </div>
  </div>


  {/* Professional Development Workshops */}
  <div className="sbs-container">
    <BackgroundImage className='sbs-bg' fluid={data.OnlineMentoringCoaching.childImageSharp.fluid}>
      <div id='whatWeDo_3' className='sbs-bg-inner'>
        <h1>Professional Development Workshops</h1>
      </div>
    </BackgroundImage>

    <div className="sbs-inner">
      <p>
        {content.profDevText}
      </p>
    </div>
  </div>


  {/* Parent Coaching and Training */}
  <div className="sbs-container">
    <BackgroundImage className='sbs-bg' fluid={data.OnlineMentoringCoaching.childImageSharp.fluid}>
      <div id='whatWeDo_4' className='sbs-bg-inner'>
        <h1>Parent Coaching and Training</h1>
      </div>
    </BackgroundImage>

    <div className="sbs-inner">
      <p>
        {content.parentCoachText}
      </p>
    </div>
  </div>

  <div className='tc'>
    <br />
    <hr /><br />
    <button className="button-alt">
      <Link to='/Connect'>Schedule A Consultation</Link>
    </button>
  </div>

</>
)

}

export default WhatWeDo