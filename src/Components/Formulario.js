import React, { useState } from 'react'

const Formulario = () => {
  const [nombre, guardarNombre] = useState('')
  const [cantidad, guardarCantidad] = useState(0)

  return (
    <form>
      <h2>Agrega tus castos aqui</h2>

      <div className="campo">
        <label>Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value="nombre"
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
          onChange={e => guardarCantidad(parseInt(e.target.value))}
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
