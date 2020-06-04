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
        <div style={{padding: ``, color: `white`}}>
          <h3>Connect With Us</h3>
          <form name="contact" method="POST" data-netlify-true="true"  netlify-honeypot="bot-field">
            <p style={{display: `none`}}>
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
             </p>
            <p>
              <label htmlFor="name">Name: <input type="text" name='name'/></label>
            </p> 
            <p>
              <label htmlFor="email">Email: <input type="email" name='email'/></label>
            </p> 
            <h4>What Is Your Role?</h4> 
            <div style={{display: `flex`, justifyContent: `space-around`, flexWrap: `wrap`}}>
              <p><label htmlFor="admin"> <input type="checkbox" name="admin" id=""/> Administrator </label></p>
              <p><label htmlFor="educator"> <input type="checkbox" name="educator" id=""/> Educator </label></p>
              <p><label htmlFor="parent"> <input type="checkbox" name="parent" id=""/> Parent </label></p>
            </div>
            <h4>What Are You Contacting Us About</h4> 
            <div style={{display: `flex`, justifyContent: `space-around`, flexWrap: `wrap`}}>
              <p><label htmlFor="mentoring"> <input type="checkbox" name="mentoring" id=""/> Mentoring/Coaching </label></p>
              <p><label htmlFor="leadership"> <input type="checkbox" name="leadership" id=""/> School Leadership </label></p>
              <p><label htmlFor="profDev"> <input type="checkbox" name="profDev" id=""/> Professional Development </label></p>
              <p><label htmlFor="parentCoaching"> <input type="checkbox" name="parentCoaching" id=""/> Parent Coaching </label></p>
              <p><label htmlFor="schoolPackage"> <input type="checkbox" name="schoolPackage" id=""/> School Package </label></p>
            </div>
            <div style={{textAlign: 'left'}}> 
              <p >
                <label htmlFor="more"><h4>Tell us more:</h4> </label>
              </p> 
              <textarea name='more' rows="4" cols="60"/></div>
            <button type="submit">Submit</button>
          </form>          
          
        </div>
      </div>
    </div>
  </>
)}

export default Connect