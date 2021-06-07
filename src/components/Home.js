import '../App.css';
import Navi from './Navi'
import CryptoTable from './CryptoTable'
import Jumbo from './Jumbo'
import {useState, useEffect, history} from 'react'




function Home() {


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

    <Navi />
    <Jumbo />
    <CryptoTable cryptoList={cryptoList.data} addToList={addToList}/>

    </div>
  );
}

export default Home;
