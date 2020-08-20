import React from "react"
import {useStaticQuery, graphql } from "gatsby"

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

const WhoWeAre = () => {
const data = useStaticQuery(graphql`
query{
ourMission: file(relativePath: {eq:
"stock-photo-planting-young-tree-by-kid-hand-on-back-soil-as-care-and-save-wold-concept-302422220.jpg"}){
...sharpImage
}
allFile(filter: {sourceInstanceName: {eq: "content"}, name: {eq: "whoWeAre"}}) {
edges {
node {
childMarkdownRemark {
frontmatter {
splashTitle
splashText
whoText
links
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
  <SEO title="Who we are" />
  <div style={{width: `100%`, position: `relative`}}>
    <Img style={{width:`100%`, height: `20em`}} fluid={data.ourMission.childImageSharp.fluid} objectFit={'cover'}
      objectPosition="50% 55%"></Img>
    <div
      style={{position: `absolute`, top: `0`, left: `0`, height: `100%`, width: `100%`, padding: `auto`, display: `flex`, justifyContent: 'center', alignContent: 'center', backgroundColor: `rgba(0, 0, 0, .3)`}}>
      <div className='wg pg hg tc white'>
        <h1>{content.splashTitle}</h1>
        <h3 style={{fontSize: `1.2em`, lineHeight: '1.5em'}}>
          {content.splashText}
        </h3>
      </div>
    </div>
  </div>
  <div className="tc pg">
    <h1 style={{padding: '.5em'}}>Who We Are</h1>
    <div className='phg tp'>
      <p>{content.whoText}</p>
    </div>
    
   

  </div>
  <hr className="wg mha"/>
  <div className="tc pg">
    <h2 style={{padding: '.5em'}}>Collaborations & Other Projects</h2>
    <div className='phg tp'>
      <p>{content.links}</p>
    </div>

  </div>
</>
)
}

export default WhoWeAre