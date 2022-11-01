import React, { useState, useEffect } from 'react'
import './consumo.css'
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
<div >
    <h1>api riky</h1>

  
    <input  className='buscador' placeholder='buscar' type="search" name="" id="" />

    <div className='contenedor' >

      <div className='conte'>
        
     
      {personaje.map((persona) => (
        <div className='tarjetas' key={persona.id}>
          <img className='imagenes'  src ={persona.image} alt=""/>
          <h4 className='nombre-personaje' >{persona.name}</h4>
        
        </div>
      ))}
    </div>
    </div>

    </div>
  )
}

export default Consumo
