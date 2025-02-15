import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div>
        <div className="footerParent">
            <div>
                <h2>Phunk</h2>
                <h2>Your brand <br></br> built better </h2>
            </div>
            <div>
                <p className="head">Company</p>
                <br />
                <br />
                <p>Home</p>
                <p>About us</p>
                <p>Services</p>
                <p>Pricing</p>
                <p>Portfolio</p>
            </div>
            <div>
                <p className="head">Services</p>
                <br />
                <br />
                <p>Web design</p>
                <p>Graphic design</p>
                <p>Software</p>
                <p>Webflow</p>
            </div>
            <div>
                <p className="head">Contact</p>
                <br />
                <br />
                <p>Phunk Creative, Salts Mill, Victoria Rd, Saltaire, Shipley BD18 3LA</p>
                <p>Hello@Phunk</p>
            </div>
        </div>
    </div>
  )
}

export default Footer