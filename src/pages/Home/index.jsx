import Banner from '../../components/Banner'
import HousingsList from '../../components/HousingsList'

function Home() {
  return (
    <main>
      <Banner
        tagline="Chez vous, partout et ailleurs"
        imageClass="landscape-home-page"
      />
      <HousingsList />
    </main>
  )
}

export default Home
