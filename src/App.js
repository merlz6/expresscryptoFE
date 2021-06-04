import logo from './logo.svg';
import './App.css';
import Navi from './components/Navi'
import CryptoTable from './components/CryptoTable'
import Jumbo from './components/Jumbo'
import {useState, useEffect, history} from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function App() {


const [cryptoList, setCryptoList] = useState([])
const [user, setUser] = useState('')
const formInitialState = {
  username:'',
  password:''
}
const [userForm, setUserForm] = useState(formInitialState)

const indexGetRequest = () => {
  fetch('http://localhost:3000/crypto')
  .then((res)=> res.json())
  .then((data)=> setCryptoList(data))
}




const handleChange = (event) => {
		setUserForm({ ...userForm, [event.target.name]: event.target.value });
	}

useEffect(()=> {
  indexGetRequest()
},[])





  return (
    <div className="App">
    <Navi />
    <Jumbo />
    <CryptoTable cryptoList={cryptoList.data} />

    </div>
  );
}

export default App;
