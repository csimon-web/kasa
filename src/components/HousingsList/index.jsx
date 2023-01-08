import housingsData from '../../data/housingsData.json'
import HousingCard from '../HousingCard'
import '../../styles/HousingsList.css'

function Housingslist() {
  return (
    <section className="housings_section">
      {housingsData.map((housing) => (
        <HousingCard housing={housing} key={housing.id} />
      ))}
    </section>
  )
}

export default Housingslist
