import React from "react"


function APITest() {

  const [joke, setJoke] = React.useState(null)

  const getJoke= async () => {  
    const response = await fetch(`https://icanhazdadjoke.com`)
    const data = await response.json()
    setJoke(data)
  }

  React.useEffect(() => {getJoke()}, []);

  console.log('get joke -', getJoke)

  return (
    <div>
      <h1>API Test</h1>
    </div>
  );
}

export default APITest

