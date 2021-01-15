# Project Overview

## Project Links

- [GitHub Repo](https://github.com/SamanthaSolomon/project2)
- Deployment link

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

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile draft](https://res.cloudinary.com/dcvgmixhx/image/upload/v1610635787/Dad%20Jokes/mobile_draft_khkxuy.png)



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

- ?

## Components 

| Component | Description | Page (Y/N) |
| --- | :---: | --- | 
| App | This will make the initial data pull and include React Router and the all of the other component| N |
| Header | This will render the nav | N |
| Footer | This will render the footer | N |
| Joke | This is where the joke will appear on screen after an action from the Search or Random component | Y |
| Search | This will include a form and button where the user can enter a key word | Y |
| Random | This will include a button that will fetch a random joke | Y |


## Time Estimates

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Setting up component and route structure | H | 1 hr|  |  |
| Building Nav and Footer | H | 1hr| |  |
| Working with API to call Data | H | 3hrs| |  |
| Building Random generator button | H | 4hrs| |  |
| Destructuring random gen data to appear on Joke component | H | 2hrs| |  |
| Building search form and button | H | 4hrs|  |  |
| Destructuring keyword data to appear on Joke component | H | 2hrs| |  |
| Mobile styling | H | 4hrs| |  |
| Tablet and desktop responsive | H | 4hrs| |  |
| Deploy via Netlify | H | 3hrs| |  |
| Total | H | | |  |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
