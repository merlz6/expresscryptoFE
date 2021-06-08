import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import { Link, History } from 'react-router-dom'
import '../App.css';
import Navi from './Navi'

function Watchlist (props){

const [watched, setWatched] = useState([])
const [cryptos, setCryptos] = useState(props.watchlist)


const filter = () => {
  let watcher = []
  for(var arr in props.cryptolist){
     for(var filter in cryptos){
         if(props.cryptolist[arr].symbol == cryptos[filter]){
            watcher.push(props.cryptolist[arr]);
           }
     }
  }
  console.log(watcher)
  setWatched(watcher)
}

const deleter = (event, symbol) => {
  event.preventDefault()

  props.deleteFromWatchlist(crypto.symbol)
}


  const loaded = () => {
    return(
      watched.map((crypto, index)=> {
        let imageString = 'https://s2.coinmarketcap.com/static/img/coins/32x32/' +crypto.id + '.png'
        return (
          <tr key={index}>
          <td className="favoriteStarHolder" onClick={(()=> {props.deleteFromWatchlist(crypto.symbol)} )}><img src="https://img.icons8.com/windows/20/000000/delete-forever.png"/></td>
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
      <h1>Loading....</h1>
    )
  }

useEffect(()=> {
  filter()
  {cryptos ? loaded(): loading()}
},[cryptos])

return (
  <>
  <Navi />
  <h1>Watchlist</h1>
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
      {cryptos ? loaded(): loading()}
    </tbody>
  </Table>

  </>
)
}

export default Watchlist;
