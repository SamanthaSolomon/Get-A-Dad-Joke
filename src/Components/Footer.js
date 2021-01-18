import React from "react"
import { Link } from "react-router-dom" 

const Footer = () => {
    return(
        <div>
            <Link to="/About">
                <h3>About link in the footer</h3>
            </Link>
        </div>
    )
}

export default Footer