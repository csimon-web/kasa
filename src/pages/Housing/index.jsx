import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import housingsData from '../../data/housingsData.json'

function Housing() {
  const { id } = useParams()
  const [housing, setHousing] = useState({})

  useEffect(() => {
    const housing = housingsData.find((housing) => housing.id === id)
    setHousing(housing)
  }, [id])

  return (
    <main>
      <h1>{housing.title}</h1>
      <p>{housing.location}</p>
    </main>
  )
}

export default Housing
