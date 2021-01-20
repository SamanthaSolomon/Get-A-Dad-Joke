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
        setFormData({searchterm: ""})

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm}/>
                <input type="submit" value="Get A Joke"/>
            </form>
        </div>
    )
}

export default SearchForm