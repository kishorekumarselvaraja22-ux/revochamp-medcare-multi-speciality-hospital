import React from 'react'
import PropTypes from 'prop-types'

export function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}