import Header from '../components/Header'
import Banner from '../components/Banner'
import HousingsList from '../components/HousingsList'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <HousingsList />
      </main>
      <Footer />
    </>
  )
}

export default Home
