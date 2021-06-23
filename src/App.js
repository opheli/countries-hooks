import React, { useState, useEffect, useCallback } from 'react';
import Button from "./components/Button.jsx"
import Card from "./components/Card.jsx"

function App() {
  const [name, setName] = useState('')
  const [capital, setCapital] = useState('')
  const [flag, setFlag] = useState('')
  const [population, setPopulation] = useState('')
  const [region, setRegion] = useState('')


const getCountry = useCallback(async (country) => {
  try {
    const result = await fetch('https://restcountries.eu/rest/v2/name/' + country)
    const countryResult = await result.json()

    setName(countryResult[0].name)
    setCapital(countryResult[0].capital)
    setFlag(countryResult[0].flag)
    setPopulation(countryResult[0].population)
    setRegion(countryResult[0].region)
  } catch (error) {
    console.error(error)
  }
}, [setName, setCapital, setFlag, setPopulation, setRegion])

useEffect(async() => {
  try {
  getCountry('france')
  } catch (error) {
    console.error(error)
  }
}, [])



return <div>
<div className="text-center">
  <h1 className="mt-4">Country selector</h1>
  <Button onClick={() => getCountry('france')}>France</Button >
  <Button onClick={() => getCountry('brazil')}>Brazil</Button>
  <Button onClick={() => getCountry('croatia')}>Croatia</Button>
  <Button onClick={() => getCountry('spain')}>Spain</Button>
  </div>
  <Card
    name={name}
    capital={capital}
    flag={flag}
    population={population}
    region={region}
  />
</div>
}

export default App
