import React from "react"
import { Link } from "react-router-dom"
import fatherImg from "../pngkey.com-father-png-2129977.png"

const Header = () => {
    return(
        <div>
            <Link to="/">
                <div className="header">
                    <img className="header__img"src={fatherImg} alt="father img"/>
                    <h1 className="header__h1">Get A Dad Joke!</h1>
                </div>
                
            </Link>  
        </div>
    )
}

export default Header