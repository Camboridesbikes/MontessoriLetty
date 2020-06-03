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
}
`);

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
        <h3 className='w100' style={{fontSize: `1.2em`, lineHeight: '1.5em'}}>Sections have the tendency to get rutted
          out. Small tree
          down between bottom of trail and bridge crossing. Pretty dry and fast. This trail is now a designated one way
          from the Lee's Train/C$ intersection. The trail ends with some nice berms at the bottom.
          <br /><br />
          So be careful with your carbon frames! Highly advise starting from the Mt. after the jump you will enter the
          trail between two trees (fairly close together). Sadly, a better trail in this same zone (Barney Lake) is
          designated wilderness and is therefore 'unlawful' to ride. Chewed up, lots of braking bumps, but still fun.
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
      <div className='wg pg hg tc white'>
        <h1>Online Mentoring and Coaching</h1>
      </div>
    </div>
  </div>
  <div className="tc pg">
    <div className='phg tp'>
      <p>
        Fast and flowing with big jump options and some pretty crazy gap jumps. The flowiest trails of the mountain!
        Rocks for texture, obstacles for fun and some short fast downhils in this 2. Proper sized jumps, berms, rollers
        and wooden features, so sick! Drop in off a shallow rock slab and then whip through a few tight berms.
        <br/><br/>
        The flowiest trails of the mountain! A super fun freeride trail starting with the Pinkbike drop, an impressive
        12' by 12' drop followed non stop features with lots of speed and perfect flow. There is an optional drop 1/2
        way down. As the valley begins to close, the route transitions to a section of open forest. It is typically
        maintained at a high level due to its popularity and use.
      </p>
      <div className='tc'>
      <button  ><Link to='/Connect'>schedule <br/> consultation</Link></button>
      </div>
     
    </div>

  </div>

  {/* School Leadership Consultation */}
  <div style={{width: `100%`, position: `relative`}}>
    <Img style={{width:`100%`, height: `12em`}} fluid={data.SchoolLeadership.childImageSharp.fluid}
      objectFit={'cover'} objectPosition="50% 25%"></Img>
    <div
      style={{position: `absolute`, top: `0`, left: `0`, height: `100%`, width: `100%`, padding: `auto`, display: `flex`, justifyContent: 'center', alignContent: 'center', backgroundColor: `rgba(0, 0, 0, .2)`}}>
      <div className='wg pg hg tc white'>
        <h1>School Leadership Consultation</h1>
      </div>
    </div>
  </div>
  <div className="tc pg">
    <div className='phg tp'>
      <p>
        Fast and flowing with big jump options and some pretty crazy gap jumps. The flowiest trails of the mountain!
        Rocks for texture, obstacles for fun and some short fast downhils in this 2. Proper sized jumps, berms, rollers
        and wooden features, so sick! Drop in off a shallow rock slab and then whip through a few tight berms.
        <br/><br/>
        The flowiest trails of the mountain! A super fun freeride trail starting with the Pinkbike drop, an impressive
        12' by 12' drop followed non stop features with lots of speed and perfect flow. There is an optional drop 1/2
        way down. As the valley begins to close, the route transitions to a section of open forest. It is typically
        maintained at a high level due to its popularity and use.
      </p>
      <div className='tc'>
      <button  ><Link to='/Connect'>Schedule A Consultation</Link></button>
      </div>
     
    </div>

  </div>

  {/* Professional Development Workshops */}
  <div style={{width: `100%`, position: `relative`}}>
    <Img style={{width:`100%`, height: `12em`}} fluid={data.OnlineMentoringCoaching.childImageSharp.fluid}
      objectFit={'cover'} objectPosition="50% 25%"></Img>
    <div
      style={{position: `absolute`, top: `0`, left: `0`, height: `100%`, width: `100%`, padding: `auto`, display: `flex`, justifyContent: 'center', alignContent: 'center', backgroundColor: `rgba(0, 0, 0, .15)`}}>
      <div className='wg pg hg tc white'>
        <h1>Professional Development Workshops</h1>
      </div>
    </div>
  </div>
  <div className="tc pg">
    <div className='phg tp'>
      <p>
        Fast and flowing with big jump options and some pretty crazy gap jumps. The flowiest trails of the mountain!
        Rocks for texture, obstacles for fun and some short fast downhils in this 2. Proper sized jumps, berms, rollers
        and wooden features, so sick! Drop in off a shallow rock slab and then whip through a few tight berms.
        <br/><br/>
        The flowiest trails of the mountain! A super fun freeride trail starting with the Pinkbike drop, an impressive
        12' by 12' drop followed non stop features with lots of speed and perfect flow. There is an optional drop 1/2
        way down. As the valley begins to close, the route transitions to a section of open forest. It is typically
        maintained at a high level due to its popularity and use.
      </p>
      <div className='tc'>
      <button  ><Link to='/Connect'>Schedule A Consultation</Link></button>
      </div>
     
    </div>

  </div>

  {/* Parent Coaching and Training */}
  <div style={{width: `100%`, position: `relative`}}>
    <Img style={{width:`100%`, height: `12em`}} fluid={data.OnlineMentoringCoaching.childImageSharp.fluid}
      objectFit={'cover'} objectPosition="50% 25%"></Img>
    <div
      style={{position: `absolute`, top: `0`, left: `0`, height: `100%`, width: `100%`, padding: `auto`, display: `flex`, justifyContent: 'center', alignContent: 'center', backgroundColor: `rgba(0, 0, 0, .15)`}}>
      <div className='wg pg hg tc white'>
        <h1>Parent Coaching and Training</h1>
      </div>
    </div>
  </div>
  <div className="tc pg">
    <div className='phg tp'>
      <p>
        Fast and flowing with big jump options and some pretty crazy gap jumps. The flowiest trails of the mountain!
        Rocks for texture, obstacles for fun and some short fast downhils in this 2. Proper sized jumps, berms, rollers
        and wooden features, so sick! Drop in off a shallow rock slab and then whip through a few tight berms.
        <br/><br/>
        The flowiest trails of the mountain! A super fun freeride trail starting with the Pinkbike drop, an impressive
        12' by 12' drop followed non stop features with lots of speed and perfect flow. There is an optional drop 1/2
        way down. As the valley begins to close, the route transitions to a section of open forest. It is typically
        maintained at a high level due to its popularity and use.
      </p>
      <div className='tc'>
      <button  ><Link to='/Connect'>Schedule A Consultation</Link></button>
      </div>
     
    </div>

  </div>
</>
)

}

export default WhatWeDo