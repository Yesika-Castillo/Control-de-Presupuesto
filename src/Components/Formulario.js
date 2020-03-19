import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Shortid from 'shortid'
import Error from './Error'
import Gasto from './Gasto'

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
  const [nombre, guardarNombre] = useState('')
  const [cantidad, guardarCantidad] = useState(0)
  const [error, guardarError] = useState(false)

  //cuando el iusuario agrega un gasto
  const agregarGasto = e => {
    // e.preventDafault()
    e.preventDefault()

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

    //pasar el gasto al componente principal
    guardarGasto(gasto)
    guardarCrearGasto(true)

    //resetearel form
    guardarNombre('')
    guardarCantidad([0])
  }

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>
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
        <label>Cantidad del Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
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
Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario
