import React from "react"
import { Link } from "gatsby"

import './footer.css'

const Footer = () => {
return(
<footer>
    <div className="footer">
        <div className="col-25">
            <h3 style={{}}>Applied Montessori</h3>
            <Link style={{ color: `white`}}>Who We Are</Link>
            <Link style={{ color: `white`}}>What We Do</Link>
            <Link style={{ color: `white`}}>Explore</Link>
            <Link style={{ color: `white`}}>Connect</Link>
        </div>
        <div className="col-25">
            <h3>Contact Us</h3>
            <p style={{margin: `0`}}>email@yours.com</p>
            <p style={{margin: `0`}}>(123) 456-7890</p>
        </div>
        <div className="col-50 newsletter">
            <h3>Sign Up For Newsletter</h3>
            <form style={{display: `block`}} name="newsletter" method="POST" data-netlify-true="true"
                netlify-honeypot="bot-field">
                <p style={{display: `none`}}>
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <div style={{maxWidth: '500px', display: 'flex'}}> <label htmlFor="name">Name: <input type="text" name='name' /></label>
                    <label htmlFor="email">Email: <input type="email" name='email' /></label>
                    <button style={{marginLeft: `4em`, width: '200px'}} type="submit">Submit</button>
                </div>
                <div style={{width: "50%"}}>
                    
                </div>
            </form>
        </div>
    </div>
</footer>
);
}

export default Footer;