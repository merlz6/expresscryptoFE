import '../App.css';
import Navi from './Navi'
import CryptoTable from './CryptoTable'
import Jumbo from './Jumbo'
import {useState, useEffect, history} from 'react'




function Home(props) {


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






  return (
    <div className="App">

    <Navi />
    <Jumbo />
    <CryptoTable watchlist={watchlist} cryptoList={props.cryptoList} addToList={props.addToList}/>

    </div>
  );
}

export default Home;
