import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../../styles/Accordion.css'

function Accordion(props) {
  const [showDescription, setShowDescription] = useState(false)

  const toggleDescription = () => {
    setShowDescription(!showDescription)
  }

  const { title, description } = props
  return (
    <div>
      <button
        type="button"
        onClick={toggleDescription}
        onKeyDown={toggleDescription}
        className={`accordion_title ${showDescription ? 'active' : ''}`}
      >
        {title}
        <i className={`fas fa-chevron-${showDescription ? 'up' : 'down'}`} />
      </button>
      {showDescription && (
        <div className="accordion_description">{description}</div>
      )}
    </div>
  )
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

Accordion.defaultProps = {
  description: 'Description par défaut',
}

export default Accordion
