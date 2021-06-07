import {useState, useEffect} from 'react'

function SingleCrypto(props){

  const [metaData, setMetaData] = useState(null)

  let id = props.match.params.id
  let showCrypto = props.cryptolist.filter(item => item.id == props.match.params.id)
  console.log('this is props', props)
  console.log(showCrypto)

  function getMeta(){
    fetch('http://localhost:3000/crypto/meta/' + id)
    .then((res)=> res.json())
    .then((data)=> setMetaData(data))
  }

  useEffect(()=> {
    getMeta()
  })

const loaded = () => {
  return (
    <h1>{showCrypto[0].name}</h1>
  )
}
const loading =()=> {
  return (
    <h1>Loading....</h1>
  )
}

  return(
    <>
    {showCrypto.length > 0 ? loaded(): loading()}
    </>
  )
}


export default SingleCrypto;
