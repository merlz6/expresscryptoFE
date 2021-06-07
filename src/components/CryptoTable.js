import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
function CryptoTable(props) {

  const loaded = () => {

    return(
      props.cryptoList.map((crypto, index)=> {
        let imageString = 'https://s2.coinmarketcap.com/static/img/coins/32x32/' +crypto.id + '.png'
        return (
          <tr key={index}>
          <td className="favoriteStarHolder" onClick={(()=> props.addToList(crypto.symbol) )}><img src="https://img.icons8.com/metro/20/000000/star.png"/></td>
          <td>{index + 1}</td>
          <td><div className="coinNameHolder"><img className="coinIcon" src={imageString} /><span className="cryptoNameSpan"><Link to={`/cryptos/${crypto.id}`}>{crypto.name}</Link></span> <span className="cryptoSymbolSpan">{crypto.symbol}</span></div></td>
          <td>{crypto.quote.USD.price.toLocaleString('us-US', { style: 'currency', currency: 'USD', maximumFractionDigits:2 })}</td>
          <td className={crypto.quote.USD.percent_change_24h > 0 ? 'green' : 'red'}>
          <img src={crypto.quote.USD.percent_change_24h > 0 ? 'https://img.icons8.com/android/20/178000/sort-up.png' : 'https://img.icons8.com/android/20/ff0000/sort-down.png'}/>  {crypto.quote.USD.percent_change_24h.toFixed(2)}
          </td>
          <td className={crypto.quote.USD.percent_change_7d > 0 ? 'green' : 'red'}>
          <img src={crypto.quote.USD.percent_change_7d > 0 ? 'https://img.icons8.com/android/20/178000/sort-up.png' : 'https://img.icons8.com/android/20/ff0000/sort-down.png'}/>  {crypto.quote.USD.percent_change_7d.toFixed(2)}
          </td>

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
      <tr><td>Loading..</td></tr>
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
