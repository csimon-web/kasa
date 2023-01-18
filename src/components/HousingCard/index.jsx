import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../../styles/HousingCard.css'

function HousingCard({ housing }) {
  return (
    <Link to={`/logement/${housing.id}`} className="housing_card">
      <img
        src={housing.cover}
        alt={housing.title}
        className="housing_card__picture"
      />
      <div className="housing_card__title">{housing.title}</div>
    </Link>
  )
}

HousingCard.propTypes = {
  housing: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
}

export default HousingCard
