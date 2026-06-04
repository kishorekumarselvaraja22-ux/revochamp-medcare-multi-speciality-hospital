import React from 'react'
import PropTypes from 'prop-types'

export function Card({ children, style, className, ...props }) {
  return (
    <div className={`card ${className || ''}`} style={style} {...props}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
}