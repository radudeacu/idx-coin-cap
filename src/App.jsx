import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './components/Coins';
import Coinitem from './components/Coinitem';
import Navbar from './components/Navbar';

function App() {
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10';

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
    }).catch(error => {
      console.log(error)
    })

  }, [])


  return (
    <>
      <Navbar />
      <Coins coins={coins}/>
    </>
  )
}

export default App
