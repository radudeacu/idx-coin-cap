import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Exchanges.css';

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/exchanges')
      .then((response) => setExchanges(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="exchanges-container">
      <div className="heading">
                <p className="exchange-name">Exchange</p>
                <p>Volume</p>
                <p>Country of Origin</p>
            </div>

      {exchanges.map(exchange => (
        <div className="exchange-row" key={exchange.id}>
          <h3>{exchange.name}</h3>
          <p>{exchange.trade_volume_24h_btc.toLocaleString()}</p>
          <p>{exchange.country}</p>
        </div>
      ))}
    </div>
  );
};

export default Exchanges;