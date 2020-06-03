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

const WhoWeAre = () => {
const data = useStaticQuery(graphql`
query{
ourMission: file(relativePath: {eq:
"stock-photo-planting-young-tree-by-kid-hand-on-back-soil-as-care-and-save-wold-concept-302422220.jpg"}){
...sharpImage
}
}
`);
return(
<>
  <SEO title="Who we are" />
  <div style={{width: `100%`, position: `relative`}}>
    <Img style={{width:`100%`, height: `20em`}} fluid={data.ourMission.childImageSharp.fluid} objectFit={'cover'}
      objectPosition="50% 55%"></Img>
    <div
      style={{position: `absolute`, top: `0`, left: `0`, height: `100%`, width: `100%`, padding: `auto`, display: `flex`, justifyContent: 'center', alignContent: 'center', backgroundColor: `rgba(0, 0, 0, .3)`}}>
      <div className='wg pg hg tc white' >
        <h1>Our Mission</h1>
        <h3 style={{fontSize: `1.2em`, lineHeight: '1.5em'}}>Supporting Montessori educators and parents in fostering
          authentic and
          well-functioning prepared environments, in both home and school settings, so that children can flourish and
          thrive.
        </h3>
      </div>
    </div>
  </div>
  <div className="tc pg">
    <h1 style={{padding: '.5em'}}>Who We Are</h1>
    <div className='phg tp'>
      <p>
        At Applied Montessori, our team of experienced consultants collaborates with parents, teachers, and school
        leaders in creating, supporting, organizing, and maintaining authentic Montessori environments in both home and
        school settings for children and youth of all ages. As skilled mentors, we are highly committed to helping the
        adults who we work with to find success and gratification in their work with children, staff, and families. We
        aim to strengthen teacher and administrator performance, enhance student learning opportunities, and advise
        parents on best teaching and learning practices. ​
      </p>
      <p>
        While skilled teachers personalize to meet the needs of their individual students, Applied Montessori works in
        partnership with parents, teachers, and school leadership to develop systems and processes that will support you
        in creating effective learning environments in classrooms and homeschool settings. The outcome of this profound,
        reflective, and practical work is happy and thriving children and families and deep-rooted school communities.
      </p>
      <p>
        Applied Montessori was born from the idea that Montessori teacher training is just the starting point in the
        journey of a Montessori guide. So many teachers enter into the classroom equipped with the knowledge necessary
        to execute lessons, as well as a deep understanding of child development. But there is a piece that is often
        missing, and that can only be gained through experience and/or mentorship: the practical application. </p>
      <p>
        Research shows that many teachers spend less than 5 years in the profession, and many cite the reason for
        leaving as never quite getting a handle on the art and craft of teaching. Inexperienced teachers often struggle
        with how to bridge what was learned in training with what happens in the classroom. Those lessons that were
        presented in training pose additional challenges when presenting to real-life children! While a bit of attention
        is given to the notion of leading, guiding, and managing a full classroom, there isn’t enough time to cover all
        aspects of this in training. Many schools could use an education director or instructional coach to ensure that
        teachers are receiving continuous support, but most schools do not have the budget for such a position. That’s
        where we come in. We operate on an outsourced model where schools can pay a fraction of the cost of a full-time
        education director and get personalized mentoring for teachers and school leaders.
      </p>
      <p>
        Applied Montessori is here for you.
      </p>
    </div>

  </div>
</>
)
}

export default WhoWeAre