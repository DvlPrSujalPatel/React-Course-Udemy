// App.js
import React, { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox"; // Ensure this path is correct

function App() {
    const [amount, setAmount] = useState(""); // Remove default value
    const [from, setFrom] = useState("INR"); // Default from currency
    const [to, setTo] = useState("USD"); // Default to currency
    const { currencyInfo, loading, error } = useCurrencyInfo(from);
    const [convertedAmount, setConvertedAmount] = useState(""); // Remove default value

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(""); // Clear converted amount on swap
    };

    const convert = (e) => {
        e.preventDefault();
        if (currencyInfo[to]) {
            const amountValue = parseFloat(amount); // Convert amount to float
            setConvertedAmount(amountValue ? (amountValue * currencyInfo[to]).toFixed(2) : ""); // Set converted amount, formatted to 2 decimal places
        } else {
            setConvertedAmount(""); // Reset if currency not found
        }
    };

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <h1 className="text-xl font-bold text-center mb-4">Currency Converter</h1>
                    <form onSubmit={convert}>
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount} // Now an empty string
                                currencyOptions={loading ? [] : Object.keys(currencyInfo)}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                onAmountChange={(amount) => setAmount(amount)}
                                selectedCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mb-1">
                            <InputBox
                                label="To"
                                currencyOptions={loading ? [] : Object.keys(currencyInfo)}
                                amount={convertedAmount} // Display the converted amount here
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectedCurrency={to}
                                amountDisabled
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                        {error && <p className="mt-2 text-red-500 text-center">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
