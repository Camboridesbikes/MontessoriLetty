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
const Connect = () => {
  const data = useStaticQuery(graphql`
query{
Background: file(relativePath: {eq:
"stock-photo-hands-holding-seedling-in-eggshells-montessori-education-csr-social-responsibility-eco-green-740429215.jpg"}){
...sharpImage
}
}
`);

return(
  <>
    <SEO title="Connect with us" />
    <div className='tc' style={{width: `100%`, position: `relative`}}>
    <Img style={{width:`100%`, height: `90%`}} fluid={data.Background.childImageSharp.fluid} objectFit={'cover'} objectPosition="50% 50%"></Img>
      <div className='tc pg' style={{position: `absolute`, backgroundColor: `#00000070`, textAlign: `center`, top: `0`, left: `19.1%`, height: `80%`, width: `61.8%`}}>
        <div style={{padding: `5%`, color: `white`}}>
          <h3>Connect With Us</h3>
          
          <button >Submit</button>
        </div>
      </div>
    </div>
  </>
)}

export default Connect