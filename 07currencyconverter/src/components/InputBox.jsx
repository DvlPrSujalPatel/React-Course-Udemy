import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    const id = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>
                <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
                <input 
                    id={id}
                    type="number"
                    className='outline-none w-full bg-transparent py-1.5'
                    placeholder='Amount'
                    disabled={amountDisabled}
                    value={amount}
                    min="0"
                    step="0.01"
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        if (!isNaN(value)) {
                            onAmountChange && onAmountChange(value);
                        }
                    }}
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <label htmlFor={`${id}-currency`} className="text-black/40 mb-2 w-full">Currency Type</label>
                <select 
                    id={`${id}-currency`} 
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    <option value="" disabled>Select currency</option> {/* Placeholder option */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
