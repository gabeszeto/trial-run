import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("http://127.0.0.1:5000/names").then(
      res => res.json()
    ).then (
      data => {
        setData(data)
        console.log(data);
      }
    )
  }, [])

  return (
    <div>

      {(typeof data.names === 'undefined') ? (
        <p>Loading</p>
      ) : (
        data.names.map((name, i) => (
          <p key={i}>{name}</p>
        ))
      )}
      
    </div>
  )
}

export default App