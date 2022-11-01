import React, { useState, useEffect } from 'react'

const Consumo = () => {
  const [personaje, setPersonaje] = useState([])

  const personajepersona = async () => {
    let response = await fetch('https://rickandmortyapi.com/api/character', {})

    let data = await response.json()
    setPersonaje(data.results)
  }
  useEffect(() => {
    personajepersona()
  }, [])

  return (
    <div>
      {personaje.map((persona) => (
        <div key={persona.id}>
         
          <h1>{persona.name}</h1>
          <img src ={persona.image} alt=""/>


        </div>
      ))}
    </div>
  )
}

export default Consumo
