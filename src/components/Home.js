import '../App.css';
import Navi from './Navi'
import CryptoTable from './CryptoTable'
import Jumbo from './Jumbo'
import {useState, useEffect, history} from 'react'




function Home(props) {

  return (
    <div className="App">

    <Navi />
    <Jumbo />
    <CryptoTable watchlist={props.watchlist} cryptoList={props.cryptoList} addToList={props.addToList}/>

    </div>
  );
}

export default Home;
