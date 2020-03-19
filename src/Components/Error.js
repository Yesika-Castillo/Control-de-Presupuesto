import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ mensaje }) => (
  <p clasename="alert alert-danger error">{mensaje}</p>
)
Error.propTypes = {
  mensaje: PropTypes.string.isRequired
}

export default Error
