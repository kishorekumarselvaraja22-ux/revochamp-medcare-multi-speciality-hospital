import React from 'react'
import PropTypes from 'prop-types'

export function Section({ id, className, style, children, padding }) {
  const defaultPadding = padding || '48px 0';
  return (
    <section
      id={id}
      className={`section ${className || ''}`}
      style={{ padding: defaultPadding, ...style }}
    >
      {children}
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  padding: PropTypes.string,
}