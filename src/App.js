import logo from './logo.svg';
import './App.css';
import Navi from './components/Navi'
import CryptoTable from './components/CryptoTable'
import Jumbo from './components/Jumbo'
import {useState, useEffect, history} from 'react'
import { Route, Switch } from 'react-router-dom'
import SingleCrypto from './components/SingleCrypto'
import Home from './components/Home'
import Watchlist from './components/Watchlist'
function App() {


const [cryptoList, setCryptoList] = useState([])
const [user, setUser] = useState('')
const localWatchlist = localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : []
const [watchlist, setWatchlist] = useState(localWatchlist)


const indexGetRequest = () => {
  fetch('http://localhost:3000/crypto')
  .then((res)=> res.json())
  .then((data)=> setCryptoList(data))
}

useEffect(() => {
  localStorage.setItem('watchlist', JSON.stringify(watchlist))
}, [watchlist])

useEffect(()=> {
  indexGetRequest()
},[])



const addToList = (symbol) => {

  if(watchlist.includes(symbol)){
    console.log('already on watch list')
  } else {
    let newArr = watchlist
    newArr.push(symbol)
    setWatchlist(newArr)
  }
  console.log(watchlist)
}


  return (
    <div className="App">
      <Switch>
    <Route exact path="/">
        <Home />
    </Route>
    <Route
        path='/cryptos/:id'
        render={props => <SingleCrypto {...props} cryptolist={cryptoList.data}/>}
    />
    <Route
        path="/watchlist"
        render={props => <Watchlist watchlist={watchlist} />}
    />
</Switch>


    </div>
  );
}

export default App;
