import React, { useState } from 'react'
import InputRange from '../UI/InputRange';

const LoanCalculator = () => {
    const [valueAmount, setValueAmount] = useState(300);
    const [valueTerm, setValueTerm] = useState(3);
    const [valuePercentage, setValuePercentage] = useState(12);
    const [totalAmount, setTotalAmount] = useState('12.00');

    const data = {
        'credit_amount': setValueAmount,
        'credit_term': setValueTerm,
        'credit_percentage': setValuePercentage
    }
    const handleValue = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        data[name](value);
        if (name === 'credit_amount') {
            handleTotalAmount(value, valueTerm, valuePercentage)
        }
        else if (name === 'credit_term') {
            handleTotalAmount(valueAmount, value, valuePercentage)
        }
        else {
            handleTotalAmount(valueAmount, valueTerm, value)
        }
    }
    console.log(valueAmount);
    console.log(valueTerm);
    console.log(valuePercentage);
    const handleTotalAmount = (amount, term, percentage) => {
        const value = (((amount * (percentage / 10)).toFixed(2) + amount) / term).toFixed(2);
        console.log(value);
        setTotalAmount(value)
    }
    return (
        <div className='w-full bg-cardBg-300 py-10 px-12 rounded-3xl'>
            <h2 className='text-2xl font-semibold '>Loan calculator</h2>
            <form className='py-6'>
                <div className=''>
                    <label className='text-grayText text-1.5xs mb-1.5 font-medium' htmlFor="credit_amount">Loan Amount</label>
                    <h3>{valueAmount}</h3>
                    <InputRange
                        value={valueAmount}
                        handleValue={handleValue}
                        min='300'
                        max='30000'
                        name="credit_amount"
                    />
                </div>
                <div className='flex w-3/5'>
                    <div className='w-1/2'>
                        <label className='text-[#888] text-1.5xs mb-1.5 font-medium' htmlFor="credit_duration">Loan Period</label>
                        <h3>{valueTerm}</h3>
                        <InputRange
                            className='w-1/2'
                            value={valueTerm}
                            handleValue={handleValue}
                            min='3'
                            max='48'
                            name="credit_term"
                        />
                    </div>
                    <div className='w-1/2'>
                        <label className='text-[#888] text-1.5xs mb-1.5 font-medium' htmlFor="percentage">Intrest Rate</label>
                        <h3>{valuePercentage}</h3>
                        <InputRange
                            value={valuePercentage}
                            handleValue={handleValue}
                            min='12'
                            max='18'
                            name="credit_percentage"
                        />
                    </div>
                </div>
            </form>
            <div className="flex">
                <p>Monthly payment:</p>
                <h3>{totalAmount}</h3>
            </div>
        </div>
    )
}

export default LoanCalculator