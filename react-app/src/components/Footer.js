import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="github-img">
                <a href="https://github.com/vmeduri1/thread"><img className="github-logo"
                    src='https://res.cloudinary.com/dn2tap8j5/image/upload/v1623115028/second_degree/GitHub-Mark_jbchms.png'>
                </img>
                </a>
            </div>
            <div className="linked-in-img">
                    <a href="https://www.linkedin.com/in/vishaalmeduri/"><img className="linked-in-logo"
                        src="https://res.cloudinary.com/dn2tap8j5/image/upload/v1623115422/second_degree/linked-in-logo_nwi266.png">
                    </img>
                    </a>
            </div>
            <div className="wording">
                <h1>Thread © Vishaal Meduri</h1>
            </div>
        </div>
    )
}

export default Footer
