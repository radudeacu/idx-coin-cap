import React from 'react'
import Coinitem from './Coinitem'
import './Coins.css'

const Coins = (props) => {
  return (
    <div className="container">
        <div>
            <div className="heading">
                <p>#</p>
                <p className="coin-name">Coin</p>
                <p>Price</p>
                <p>24h Change</p>
                <p className="hide-mobile">Volume</p>
                <p className="hide-mobile">Market Cap</p>
            </div>

            {props.coins.map(coins => {
              return (
                <Coinitem key={coins.id} coins={coins} />
              )
            })}
        </div>
    </div>
  )
}

export default Coins