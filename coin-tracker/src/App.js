import React, { useEffect, useState } from 'react';

function App(props) {
  
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [count, setCount] = useState(0);

  const changeAmount = (event) => {
    const input = event.target.value;
    setCount((input / coins[selectedIndex].quotes.USD.price).toFixed(5));
  };

  const selectCoin = (event) => {
    setSelectedIndex(event.target.selectedIndex);
    setCount(0);
  }

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading && <strong>Loading...</strong>}
      <select
        style={{
          height: "25px",
          fontSize: "15px",
          width: "95%"
        }}
        onChange={selectCoin}
      >
        {coins.map((coin, index) => {
          return (
            <option key={coin.id}>
              {index+1}. {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          );
        })}
      </select>
      <hr />
      <label>How many coins i can buy with this amount >> </label>
      <input type="number" onChange={changeAmount} style={{textAlign: "right"}}/> $
      <br />
      <label>You can buy </label>
      <input type="number" value={count} readOnly={true} style={{textAlign: "right"}}/>
      <label> {coins.length > 0 && coins[selectedIndex].symbol}</label>
    </div>
  );
}

export default App;