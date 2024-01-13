import React from 'react'
import LoanCalculator from './LoanCalculator'
import ExchangeSec from './ExchangeSec'
const Calculator = () => {
  return (
    <section className='mt-[80px] mb-[80px] container mx-auto px-8 flex justify-between gap-12'>
        <ExchangeSec></ExchangeSec>    
        <LoanCalculator></LoanCalculator>
    </section>
  )
}

export default Calculator;