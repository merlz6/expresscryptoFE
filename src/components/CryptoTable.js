import Table from 'react-bootstrap/Table';

function CryptoTable(props) {

  const loaded = () => {
    return(
      props.cryptoList.map((crypto, index)=> {
        return (
          <tr>
          <td>{index + 1}</td>
          <td>{crypto.name}</td>
          <td>{crypto.quote.USD.price.toLocaleString('us-US', { style: 'currency', currency: 'USD', maximumFractionDigits:0 })}</td>
          <td>{crypto.quote.USD.percent_change_24h.toFixed(2)}%</td>
          <td>{crypto.quote.USD.percent_change_7d.toFixed(2)}%</td>
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
      <h1> Loading</h1>
    )
  }


  return (
    <div>
    <Table responsive="sm">
      <thead>
      <tr>
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
      {props.cryptoList ? loaded() : loading()}
      </tbody>
    </Table>


    </div>
  );
}

export default CryptoTable;
