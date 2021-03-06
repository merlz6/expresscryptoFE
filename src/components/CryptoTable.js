import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
function CryptoTable(props) {
console.log(props.cryptoList)


  const loaded = () => {

    return(
      props.cryptoList.map((crypto, index)=> {
        let imageString = 'https://s2.coinmarketcap.com/static/img/coins/32x32/' +crypto.id + '.png'
        return (
          <tr key={index}>
          <td className="favoriteStarHolder" onClick={(()=> props.addToList(crypto.symbol) )}>
{props.watchlist.includes(crypto.symbol) ? <img src="https://img.icons8.com/metro/20/fdc10d/star.png"/> : <img src="https://img.icons8.com/metro/20/000000/star.png"/>}


            </td>
          <td>{index + 1}</td>
          <td><div className="coinNameHolder"><img className="coinIcon" src={imageString} /><span className="cryptoNameSpan"><Link to={`/cryptos/${crypto.id}`}>{crypto.name}</Link></span> <span className="cryptoSymbolSpan">{crypto.symbol}</span></div></td>
          <td>{crypto.quote.USD.price.toLocaleString('us-US', { style: 'currency', currency: 'USD', maximumFractionDigits:2 })}</td>
          <td className={crypto.quote.USD.percent_change_24h > 0 ? 'green rightaligners' : 'red rightaligners'}>
          <img src={crypto.quote.USD.percent_change_24h > 0 ? 'https://img.icons8.com/android/20/178000/sort-up.png' : 'https://img.icons8.com/android/20/ff0000/sort-down.png'}/>  {crypto.quote.USD.percent_change_24h.toFixed(2)}
          </td>
          <td className={crypto.quote.USD.percent_change_7d > 0 ? 'green rightaligners' : 'red rightaligners'}>
          <img src={crypto.quote.USD.percent_change_7d > 0 ? 'https://img.icons8.com/android/20/178000/sort-up.png' : 'https://img.icons8.com/android/20/ff0000/sort-down.png'}/>  {crypto.quote.USD.percent_change_7d.toFixed(2)}
          </td>

          <td className="rightaligners">{crypto.quote.USD.market_cap.toLocaleString('us-US', { style: 'currency', currency: 'USD', maximumFractionDigits:0 })}</td>
          <td className="rightaligners">{crypto.quote.USD.volume_24h.toLocaleString('us-US', { style: 'currency', currency: 'USD', maximumFractionDigits:0 })}</td>
          <td className="rightaligners">{crypto.circulating_supply.toLocaleString()} { " " + crypto.symbol}</td>
          <td > <img src={crypto.quote.USD.percent_change_7d > 0 ? "greenwhitebg.png" : "redwhitebg.png"} />
          </td>
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
      <th className="rightaligners">24h %</th>
      <th className="rightaligners">7d %</th>
      <th className="rightaligners">Market Cap</th>
      <th className="rightaligners">Volume(24hr)</th>
      <th className="rightaligners">Circulating Supply</th>
      <th>Last 7 Days</th>
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
