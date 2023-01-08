import PropTypes from 'prop-types'
import '../../styles/Banner.css'

function Banner(props) {
  const { tagline, imageClass } = props

  return (
    <div className={`banner ${imageClass}`}>
      {tagline && <h1 className="tagline">{tagline}</h1>}
    </div>
  )
}

Banner.defaultProps = {
  tagline: '',
  imageClass: '',
}

Banner.propTypes = {
  tagline: PropTypes.string,
  imageClass: PropTypes.string,
}

export default Banner
