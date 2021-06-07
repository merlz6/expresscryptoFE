

function Watchlist (props){
  let cryptos = props.watchlist

  const loaded = () => {
return(
      cryptos.map((item)=> {
        return (
          <h1>{item}</h1>
        )
      })
)

  }
  const loading =()=> {
    return (
      <h1>Loading....</h1>
    )
  }



return (
  <>
  <h1>Watch</h1>
  {cryptos ? loaded(): loading()}
  </>
)
}

export default Watchlist;
