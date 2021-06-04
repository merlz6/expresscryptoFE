import logo from './logo.svg';
import './App.css';
import Navi from './components/Navi'
import CryptoTable from './components/CryptoTable'
import {useState, useEffect} from 'react'
function App() {

const [cryptoList, setCryptoList] =useState([])

const indexGetRequest = () => {
  fetch('http://localhost:3000/crypto')
  .then((res)=> res.json())
  .then((data)=> setCryptoList(data))
}

useEffect(()=> {
  indexGetRequest()
},[])


// const loaded = () => {
//   return(
//     cryptoList.data.map((crypto)=> {
//       return (
//         <li>{crypto.name}</li>
//       )
//     })
//   )
// }
//
// const loading =()=> {
//   return (
//     <h1> Loading</h1>
//   )
// }


  return (
    <div className="App">
    <Navi />
    <CryptoTable cryptoList={cryptoList.data} />
  
    </div>
  );
}

export default App;
