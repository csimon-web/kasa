import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import Accordion from '../../components/Accordion'
import housingsData from '../../data/housingsData.json'
import '../../styles/Housing.css'

function Housing() {
  const { id } = useParams()
  const [housing, setHousing] = useState({})
  const navigate = useNavigate()
  const ratingValue = parseInt(housing.rating, 10)
  const range = [1, 2, 3, 4, 5]

  useEffect(() => {
    const housing = housingsData.find((housing) => housing.id === id)
    if (!housing) {
      navigate('/404')
    }
    setHousing(housing)
  }, [id])

  return (
    <main>
      {housing.pictures && <Slideshow pictures={housing.pictures} />}
      <div className="housing_header">
        <div className="housing_header__first_part">
          <h1 className="housing_title">{housing.title}</h1>
          <p className="housing_location">{housing.location}</p>
          {housing.tags && (
            <div className="housing_tags">
              {housing.tags.map((tag, index) => (
                <div
                  className={`housing_tag ${
                    tag.length >= 15 ? 'housing_tag--large' : ''
                  }`}
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${tag}-${index}`}
                >
                  <span className="housing_tag_name">{tag}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="housing_header__second_part">
          {housing.rating && (
            <div className="rating">
              {range.map((rangeElem, index) => {
                return ratingValue >= rangeElem ? (
                  <i
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${rangeElem}-${index}`}
                    className="fa-solid fa-star rating__star rating__star--colored"
                  />
                ) : (
                  <i
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${rangeElem}-${index}`}
                    className="fa-solid fa-star rating__star"
                  />
                )
              })}
            </div>
          )}
          {housing.host && (
            <div className="host">
              <div className="host__name">{housing.host.name}</div>
              <div className="host__picture">
                <img src={housing.host.picture} alt={housing.host.name} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="housing_details">
        <div className="housing_details__first_part">
          <Accordion title="Description" description={housing.description} />
        </div>
        <div className="housing_details__second_part">
          {housing.equipments && (
            <Accordion
              title="Equipements"
              description={React.createElement(
                'ul',
                { className: 'housing_details__second_part__equipments' },
                housing.equipments.map((equipment, index) =>
                  React.createElement(
                    'li',
                    // eslint-disable-next-line react/no-array-index-key
                    { key: `${equipment}-${index}` },
                    equipment
                  )
                )
              )}
            />
          )}
        </div>
      </div>
    </main>
  )
}

export default Housing
