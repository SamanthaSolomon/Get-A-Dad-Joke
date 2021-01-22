import React from "react"
import {Link} from "react-router-dom"

const SearchForm = (props) => {
    
    const [formData, setFormData] = React.useState({
        searchterm: "",
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.jokeSearch(formData.searchterm)
        // props.history.push("/joke")
        setFormData({searchterm: ""})
        

    }

    return(
            <form className="form" onSubmit={handleSubmit}>
                <input
                className="form__searchbar" 
                type="text" 
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm}/>
                <br></br>
                <input
                    className="form__searchbutton" 
                    type="submit" 
                    value="Search Joke"/>
            </form>
    )
}

export default SearchForm