import React, { useEffect, useState } from 'react'
import CurrencyRow from './CurrencyRow'

const Conversion = () => {
  const [fromCurrency, setFromCurrency] = useState('EUR')
  const [toCurrency, setToCurrency] = useState('AZN')
  const [amountFrom, setAmountFrom] = useState(1)
  const [amountTo, setAmountTo] = useState(1.87)
  const [exchangeRate, setExchangeRate] = useState(1)

  useEffect(() => {
    const fetchHandler = async() => {
      try {
        const response = await fetch(`https://api.exchangerate.host/latest?base=${fromCurrency}&symbols=${toCurrency}`)
        const data = await response.json()  
        setExchangeRate(data.rates[toCurrency])
        setAmountTo((amountFrom * data.rates[toCurrency]).toFixed(2));
      } catch(error) {
        console.error(error);
      }
    }
    fetchHandler();
    console.log('useEffect');
  }, [fromCurrency, toCurrency]);

  const fromAmountHandler = (e) => {
    let value = e.target.value;
    if (value === '') {
      setAmountFrom('');
      setAmountTo('');
    } else {
      value = +value;
      setAmountFrom(value);
      setAmountTo(+((value * exchangeRate).toFixed(2)));
    }
  };
  const toAmountHandler = (e) => {
    let value = e.target.value;
    if (value === '') {
      setAmountFrom('');
      setAmountTo('');
    } else {
      value = +value;
      setAmountTo(value);
      setAmountFrom(+((value / exchangeRate).toFixed(2)));
    }
  };

  const fromCurrencyHandler = (e) => {
    const newFromCurrency = e.target.value;
    setFromCurrency(newFromCurrency);
  }
  const toCurrencyHandler = (e) => {
    const newToCurrency = e.target.value;
    setToCurrency(newToCurrency);
  };
  return (
    <div>
      <div className='flex mb-2 items-center'>
        <h2 className='text-2xl font-semibold'>Conversion</h2>
      </div>
      <div className='flex'>
        <form>
          <CurrencyRow selectedCurrency={fromCurrency} changeCurrency={fromCurrencyHandler} amount={amountFrom} changeAmount={fromAmountHandler} />
          =
          <CurrencyRow selectedCurrency={toCurrency} changeCurrency={toCurrencyHandler} amount={amountTo} changeAmount={toAmountHandler} />
        </form>
      </div>
    </div>
  )
}

export default Conversion