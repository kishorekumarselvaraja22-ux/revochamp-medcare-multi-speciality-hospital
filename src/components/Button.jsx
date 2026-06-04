import React from 'react'
import PropTypes from 'prop-types'

export function Button({ children, variant = 'primary', href, style, className, ...props }) {
  if (href) {
    return (
      <a href={href} className={`btn btn-${variant} ${className || ''}`} style={style} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={`btn btn-${variant} ${className || ''}`} style={style} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outlined']),
  href: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}