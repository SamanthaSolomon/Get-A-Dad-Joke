import React from "react"


function APITest() {


  const getJoke= async () => {  
    const response = await fetch(`https://icanhazdadjoke.com`, {
      headers: {Accept: "application/json"}
    })
    const data = await response.json()
    console.log('data-', data)
  }

  getJoke()

  return (
    <div>
      <h1>API Test</h1>
    </div>
  );
}

export default APITest

