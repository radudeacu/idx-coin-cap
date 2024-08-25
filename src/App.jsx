import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './components/Coins';
import Coinitem from './components/Coinitem';
import Navbar from './components/Navbar';
import { Routes, Route} from 'react-router-dom';
import Coin from './pages/Coin';
import Exchanges from './pages/Exchanges';
import Contact from './pages/Contact';


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
      <Routes>
        <Route path='/' element={<Coins coins={coins}/>} />
        <Route path='/coin' element={<Coin />}>
        <Route path=':coinId' element={<Coin />} />
        </Route>
        <Route path='/exchanges' element={<Exchanges />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
