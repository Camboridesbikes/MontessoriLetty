import React from "react"
import { Link } from "gatsby"

import './footer.css'

const Footer = () => {
return(
<footer>
    <div className="footer">
        <div className="col-25">
            <h4 style={{}}>Applied Montessori</h4>
            <Link style={{ color: `white`}}>Who We Are</Link>
            <Link style={{ color: `white`}}>What We Do</Link>
            <Link style={{ color: `white`}}>Explore</Link>
            <Link style={{ color: `white`}}>Connect</Link>
        </div>
        <div className="col-25">
            <h4>Contact Us</h4>
            <p style={{margin: `0`}}>email@yours.com</p>
            <p style={{margin: `0`}}>(123) 456-7890</p>
        </div>
        <div className="col-50 newsletter">
            <h4>Sign Up For Newsletter</h4>
            <form style={{display: `block`}} name="newsletter" method="POST" data-netlify-true="true"
                netlify-honeypot="bot-field">
                <p style={{display: `none`}}>
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <div style={{width: "50%"}}> <label htmlFor="name">Name: <input type="text" name='name' /></label><br />
                    <label htmlFor="email">Email: <input type="email" name='email' /></label><br />
                    <label htmlFor="why"> Why : <input type="text" name='why' /></label><br />
                </div>
                <div style={{width: "50%"}}>
                    <button className="button" style={{marginLeft: `4em`}} type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</footer>
);
}

export default Footer;