import Table from 'react-bootstrap/Table';

function CryptoTable(props) {

  const loaded = () => {

    return(
      props.cryptoList.map((crypto, index)=> {
        let imageString = 'https://s2.coinmarketcap.com/static/img/coins/32x32/' +crypto.id + '.png'
        return (
          <tr>
          <td className="favoriteStarHolder"><img src="https://img.icons8.com/metro/20/000000/star.png"/></td>
          <td>{index + 1}</td>
          <td><div className="coinNameHolder"><img className="coinIcon" src={imageString} /><span className="cryptoNameSpan">{crypto.name}</span> <span className="cryptoSymbolSpan">{crypto.symbol}</span></div></td>
          <td>{crypto.quote.USD.price.toLocaleString('us-US', { style: 'currency', currency: 'USD', maximumFractionDigits:2 })}</td>

          {crypto.quote.USD.percent_change_24h > 0 ? <td className="green"><img src="https://img.icons8.com/android/20/178000/sort-up.png"/>{crypto.quote.USD.percent_change_24h.toFixed(2)}%</td> : <td className="red"><img src="https://img.icons8.com/android/20/ff0000/sort-down.png"/>{Math.abs(crypto.quote.USD.percent_change_24h.toFixed(2))}%</td> }

          {crypto.quote.USD.percent_change_7d > 0 ? <td className="green"><img src="https://img.icons8.com/android/20/178000/sort-up.png"/>{crypto.quote.USD.percent_change_7d.toFixed(2)}%</td> : <td className="red"><img src="https://img.icons8.com/android/20/ff0000/sort-down.png"/>{Math.abs(crypto.quote.USD.percent_change_7d.toFixed(2))}%</td>}

          <td>{crypto.quote.USD.market_cap.toLocaleString('us-US', { style: 'currency', currency: 'USD', maximumFractionDigits:0 })}</td>
          <td>{crypto.quote.USD.volume_24h.toLocaleString('us-US', { style: 'currency', currency: 'USD', maximumFractionDigits:0 })}</td>
          <td>{crypto.circulating_supply.toLocaleString()} { " " + crypto.symbol}</td>
          </tr>
        )
      })
    )
  }

  const loading =()=> {
    return (
      <h1> Loading</h1>
    )
  }


  return (
    <div>
    <Table responsive striped hover>
      <thead>
      <tr>
      <th></th>
      <th>#</th>
      <th>Name</th>
      <th>Price</th>
      <th>24h %</th>
      <th>7d %</th>
      <th>Market Cap</th>
      <th>Volume(24hr)</th>
      <th>Circulating Supply</th>
      </tr>
      </thead>
      <tbody>
      {props.cryptoList ? loaded() : loading()}
      </tbody>
    </Table>


    </div>
  );
}

export default CryptoTable;
