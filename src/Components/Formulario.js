import React, { useState } from 'react'
import Error from './Error'
import Shortid from 'shortid'

const Formulario = ({ agregarNuevoGasto }) => {
  const [nombre, guardarNombre] = useState('')
  const [cantidad, guardarCantidad] = useState(0)
  const [error, guardarError] = useState(false)

  //cuando el iusuario agrega un gasto
  const agregarGasto = e => {
    e.preventDafault()

    //validad
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
      guardarError(true)
      return
    }
    guardarError(false)

    //contruir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: Shortid.generate()
    }
    console.logo(gasto)

    //pasar el gasto al componente principal
    agregarNuevoGasto(gasto)

    //resetearel form
    guardarNombre('')
    guardarCantidad([0])
  }

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus castos aqui</h2>
      {error ? (
        <Error mesnsaje="ambos campos son obligatorios o presupuesto incorrecto" />
      ) : null}

      <div className="campo">
        <label>Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 100.000"
          value={cantidad}
          onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
        onChange={e => guardarNombre(e.target.value)}
      />
    </form>
  )
}

export default Formulario
