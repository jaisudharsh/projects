import React from 'react'

const CurrencyRow = React.memo(({changeCurrency, selectedCurrency, amount, changeAmount}) => {
  return (
    <div>
        <input type="number" value={amount} onChange={(e)=>changeAmount(e)}/>
        <select value={selectedCurrency} onChange={(e)=>changeCurrency(e)}>
            <option value="AZN">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
        </select>
    </div>
  )
})

export default CurrencyRow