import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

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
  <div style={{width: `100%`, position: `relative`}}>
    <Img style={{width:`100%`, height: `23em`}} fluid={data.WhatWeDo.childImageSharp.fluid} objectFit={'cover'}
      objectPosition="50% 50%"></Img>
    <div
      style={{position: `absolute`, top: `0`, left: `0`, height: `100%`, width: `100%`, padding: `auto`, display: `flex`, justifyContent: 'center', alignContent: 'center', backgroundColor: `rgba(0, 0, 0, .3)`}}>
      <div className='phg pt3 hg tc white'>
        <h1>What We Do</h1>
        <h3 className='w100' style={{fontSize: `1.2em`, lineHeight: '1.5em'}}>
          {content.whatWeDoText}
        </h3>
      </div>
    </div>
  </div>
  {/* green divider */}
  <div style={{ width: `100%`,position: `relative`,}}>
    <div style={{background: `#A7E084`,height: `.681rem`, textAlign: `center`, padding: `.25em`}}>
    </div>
  </div>

  {/* Online Mentoring and Coaching */}
  <div style={{width: `100%`, position: `relative`}}>
    <Img style={{width:`100%`, height: `12em`}} fluid={data.OnlineMentoringCoaching.childImageSharp.fluid}
      objectFit={'cover'} objectPosition="50% 25%"></Img>
    <div
      style={{position: `absolute`, top: `0`, left: `0`, height: `100%`, width: `100%`, padding: `auto`, display: `flex`, justifyContent: 'center', alignContent: 'center', backgroundColor: `rgba(0, 0, 0, .15)` }}>
      <div id='whatWeDo_1' className='wg pg hg tc white'>
        <h1>Online Mentoring and Coaching</h1>
      </div>
    </div>
  </div>
  <div className="tc pg">
    <div className='phg tp'>
      <p>
       {content.mentorCoachText}
      </p>

    </div>

  </div>

  {/* School Leadership Consultation */}
  <div style={{width: `100%`, position: `relative`}}>
    <Img style={{width:`100%`, height: `12em`}} fluid={data.SchoolLeadership.childImageSharp.fluid} objectFit={'cover'}
      objectPosition="50% 25%"></Img>
    <div
      style={{position: `absolute`, top: `0`, left: `0`, height: `100%`, width: `100%`, padding: `auto`, display: `flex`, justifyContent: 'center', alignContent: 'center', backgroundColor: `rgba(0, 0, 0, .2)`}}>
      <div id='whatWeDo_1' className='wg pg hg tc white'>
        <h1>School Leadership Consultation</h1>
      </div>
    </div>
  </div>
  <div className="tc pg">
    <div className='phg tp'>
      <p>
        {content.mentorCoachText}
      </p>

    </div>

  </div>

  {/* Professional Development Workshops */}
  <div style={{width: `100%`, position: `relative`}}>
    <Img style={{width:`100%`, height: `12em`}} fluid={data.OnlineMentoringCoaching.childImageSharp.fluid}
      objectFit={'cover'} objectPosition="50% 25%"></Img>
    <div
      style={{position: `absolute`, top: `0`, left: `0`, height: `100%`, width: `100%`, padding: `auto`, display: `flex`, justifyContent: 'center', alignContent: 'center', backgroundColor: `rgba(0, 0, 0, .15)`}}>
      <div id='whatWeDo_1' className='wg pg hg tc white'>
        <h1>Professional Development Workshops</h1>
      </div>
    </div>
  </div>
  <div className="tc pg">
    <div className='phg tp'>
      <p>
        {content.profDevText}
      </p>

    </div>

  </div>

  {/* Parent Coaching and Training */}
  <div style={{width: `100%`, position: `relative`}}>
    <Img style={{width:`100%`, height: `12em`}} fluid={data.OnlineMentoringCoaching.childImageSharp.fluid}
      objectFit={'cover'} objectPosition="50% 25%"></Img>
    <div
      style={{position: `absolute`, top: `0`, left: `0`, height: `100%`, width: `100%`, padding: `auto`, display: `flex`, justifyContent: 'center', alignContent: 'center', backgroundColor: `rgba(0, 0, 0, .15)`}}>
      <div id='whatWeDo_1' className='wg pg hg tc white'>
        <h1>Parent Coaching and Training</h1>
      </div>
    </div>
  </div>
  <div className="tc pg">
    <div className='phg tp'>
      <p>
       {content.parentCoachText}
      </p>
    </div>
    
    <div className='tc'>
      <br/><hr/><br/>
        <button>
          <Link to='/Connect'>Schedule A Consultation</Link></button>
      </div>

  </div>
</>
)

}

export default WhatWeDo