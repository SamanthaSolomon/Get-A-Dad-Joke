import React from "react"
import { Link } from "react-router-dom" 

const Footer = () => {
    return(
        <div className="footer">
            <Link to="/About">
                <h3 className="footer__nav">About This Site</h3>
            </Link>
        </div>
    )
}

export default Footer