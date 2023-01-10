import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../../styles/Slideshow.css'

function Slideshow({ pictures }) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0)

  const handlePreviousSlide = () => {
    setCurrentPictureIndex(
      (currentPictureIndex - 1 + pictures.length) % pictures.length
    )
  }

  const handleNextSlide = () => {
    setCurrentPictureIndex((currentPictureIndex + 1) % pictures.length)
  }

  return (
    <div className="housing_slideshow">
      <img
        src={pictures[currentPictureIndex]}
        alt="slideshow"
        className="picture"
      />
      {pictures.length > 1 ? (
        <>
          <p className="picture_number">{`${currentPictureIndex + 1}/${
            pictures.length
          }`}</p>
          <button
            type="button"
            onClick={handlePreviousSlide}
            className="previous_button"
          >
            <i className="fa-solid fa-chevron-left chevron" />
          </button>
          <button
            type="button"
            onClick={handleNextSlide}
            className="next_button"
          >
            <i className="fa-solid fa-chevron-right chevron" />
          </button>
        </>
      ) : null}
    </div>
  )
}

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Slideshow
