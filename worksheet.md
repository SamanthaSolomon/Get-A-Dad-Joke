# Project Overview

## Project Links

- [GitHub Repo](https://github.com/SamanthaSolomon/project2)
- [Deployment link](https://getadadjoke.netlify.app/)

## Project Description

A dad joke generator that produces a dad joke at random or baised on a search term

## API

 - [I Can Haz Dad Joke API](https://icanhazdadjoke.com/api#search-for-dad-jokes)

Data fetched baised on search term
```
$ curl -H "Accept: application/json" "https://icanhazdadjoke.com/search?term=hipster"
{
  "current_page": 1,
  "limit": 20,
  "next_page": 1,
  "previous_page": 1,
  "results": [
    {
      "id": "GlGBIY0wAAd",
      "joke": "How much does a hipster weigh? An instagram."
    },
    {
      "id": "xc21Lmbxcib",
      "joke": "How did the hipster burn the roof of his mouth? He ate the pizza before it was cool."
    }
  ],
  "search_term": "hipster",
  "status": 200,
  "total_jokes": 2,
  "total_pages": 1
}
```

Data fetched randomly
```
$ curl -H "Accept: application/json" https://icanhazdadjoke.com/
{
  "id": "R7UfaahVfFd",
  "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
  "status": 200
}
```


## Wireframes

[Architecture](https://res.cloudinary.com/dcvgmixhx/image/upload/v1610735366/Dad%20Jokes%20-%20Wireframes/Architecture_tbscc5.png)

Mobile
- [On Load](https://res.cloudinary.com/dcvgmixhx/image/upload/v1610733581/Dad%20Jokes%20-%20Wireframes/Mobile-On-Load_uceshe.png)
- [Search Term](https://res.cloudinary.com/dcvgmixhx/image/upload/v1610733581/Dad%20Jokes%20-%20Wireframes/Mobile-Search-Term_qo0giu.png)
- [Random](https://res.cloudinary.com/dcvgmixhx/image/upload/v1610733581/Dad%20Jokes%20-%20Wireframes/Mobile-Random-Joke_ue9kp7.png)

Tablet
- [On Load](https://res.cloudinary.com/dcvgmixhx/image/upload/v1610733581/Dad%20Jokes%20-%20Wireframes/Tablet-On-Load_fvqmq0.png)
- [Search Term](https://res.cloudinary.com/dcvgmixhx/image/upload/v1610733581/Dad%20Jokes%20-%20Wireframes/Tablet-Search-Term_mqd82e.png)
- [Random](https://res.cloudinary.com/dcvgmixhx/image/upload/v1610733581/Dad%20Jokes%20-%20Wireframes/Random_jm2zou.png)

Desktop
- [On Load](https://res.cloudinary.com/dcvgmixhx/image/upload/v1610733581/Dad%20Jokes%20-%20Wireframes/Desktop-On-Load_nirswe.png)
- [Search Term](https://res.cloudinary.com/dcvgmixhx/image/upload/v1610733581/Dad%20Jokes%20-%20Wireframes/Destop-Search-Term_azf7ou.png)
- [Random](https://res.cloudinary.com/dcvgmixhx/image/upload/v1610733581/Dad%20Jokes%20-%20Wireframes/Random_jm2zou.png)

### MVP/PostMVP 

#### MVP 
- Fetch data from I Can Has Dad Jokes API
- Render data on page through handle events 
- Allow user to interact with the data through a keyword search function
- Allow user to generate a random joke through onClick handle
- Route to About page, random gen component and keyword search component
- Mobile tablet and desktop responsive
- Deployed via Netlify
 - Basic css styling

#### PostMVP

- bootstrap carosel to hold searched jokes, instead of listing
- Joke of the day generated on load with current date

## Components 

| Component | Description | Page (Y/N) |
| --- | :---: | --- | 
| App | This will make the initial data pull and include React Router and the all of the other component| N |
| Header | This will render the header | N |
| Footer | This will render the footer | N |
| Main | This will render the welcome message | N |
| About| Summary of the app | Y |
| Joke | This is where the joke will appear on screen after an action from the Search or Random component | Y |
| Search | This will include a form and button where the user can enter a key word | Y |
| Random | This will include a button that will fetch a random joke | Y |


## Time Estimates

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Setting up component and route structure | H | 1 hr| 1 hr | 2 |
| Building Footer & Header | H | 1hr| 1hr | 1.5 |
| Working with API to call Data | H | 3hrs| 2hrs | 3 |
| Building Random generator button | H | 4hrs| 1hr | 2 |
| Destructuring random gen data to appear on Joke component | H | 2hrs| 2 hr | 3 |
| Building search form and button | H | 4hrs| 2 hr | 2 |
| Destructuring keyword data to appear on Joke component | H | 2hrs| 5hr | 6 |
| Mobile styling | H | 4hrs| 4hrs | 4.5 |
| Tablet and desktop responsive | H | 4hrs| 4hrs | 4 |
| Deploy via Netlify | H | 3hrs| 0.5 | 0.5 |
| Total | H | 34 | | 28.5 |

## Additional Libraries
 N/A

## Code Snippet

Did the following without assistance only following documentation:

Mapped data fetched from search form accurately, renamed props as jokes for clarity

```
{props.searchJoke.results.map((jokes) => {
    return ( 
      <li className="joke__searched--li" key={jokes.id}>{jokes.joke}</li> )
  }
}
```
Set state and fetched data from two endpoints.
```
//Searched Joke
  const [searchJoke, setSearchJoke] = React.useState(null)

  const getSearched = async (searchterm) => {
    const response = await fetch(`https://icanhazdadjoke.com/search?page=1&limit=5&term=${searchterm}`,{
        headers: {Accept: "application/json"}
    })
    const data = await response.json()
    setSearchJoke(data)
  }


  //Random Joke
  const [randomJoke, setRandomJoke]=React.useState(null)

  const getRandom= async () => {  
    const response = await fetch(`https://icanhazdadjoke.com`, {
      headers: {Accept: "application/json"}
    })
    const data = await response.json()
    setRandomJoke(data);
  }
```

Used BEM and CSS variables to improve clarity and efficiency of styling
```
.form{
  text-align: center;
}

.form__searchbar{
  font-family: var(--para-font);
  color: var(--para-color);
  font-size: 1.5rem;
  line-height: 2rem;
  width: 85%;
  padding: 3%;
  border-radius: 4px;
  border: 2px solid var(--primary-color);
  cursor: pointer;
}
```
