import React, { useState } from 'react';

const ExchangeRate = () => {
    const currencies = [
        {
            id: 1,
            exchange: 'Indian Rupee (INR)',
            buy_amount: '0.0255',
            sale_amount: '0.028',
            central_bank: '0.0265',
        },
        {
            id: 2,
            exchange: 'US Dollar (USD)',
            buy_amount: '1.0',
            sale_amount: '1.069',
            central_bank: '1.05',
        },
        {
            id: 3,
            exchange: 'Euro (EUR)',
            buy_amount: '1.12',
            sale_amount: '1.158',
            central_bank: '1.14',
        },
    ];

    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
    };

    return (
        <div>
            <div className='flex mb-2 items-center justify-between'>
                <h2 className='text-2xl font-semibold'>Currency Exchange Rate</h2>
            </div>
            <div className='flex mb-2 items-center justify-start'>
                <label className='pr-3'>Select Currency:</label>
                <select
                    value={selectedCurrency.exchange}
                    onChange={(e) => {
                        const selected = currencies.find(
                            (currency) => currency.exchange === e.target.value
                        );
                        setSelectedCurrency(selected);
                    }}
                >
                    {currencies.map((currency) => (
                        <option key={currency.id} value={currency.exchange}>
                            {currency.exchange}
                        </option>
                    ))}
                </select>
            </div>
            <table className='w-full table-fixed border-separate border-spacing-y-2'>
                <thead>
                    <tr className='text-left'>
                        <th>Valyuta</th>
                        <th>Alış</th>
                        <th>Satış</th>
                        <th>Mərkəzi Bank</th>
                    </tr>
                </thead>
                <tbody className='text-left'>
                    <tr className='text-left pt-10' key={selectedCurrency.id}>
                        <td>{selectedCurrency.exchange}</td>
                        <td>{selectedCurrency.sale_amount}</td>
                        <td>{selectedCurrency.buy_amount}</td>
                        <td>{selectedCurrency.central_bank}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ExchangeRate;
