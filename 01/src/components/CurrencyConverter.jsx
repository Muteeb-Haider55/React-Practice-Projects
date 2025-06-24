

import { InputBox } from "../subcomponents";
import useCurrencyinfo from "../hooks/useCurrencyinfo";
import { useState } from "react";

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("pkr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyinfo = useCurrencyinfo(from);
    const options = Object.keys(currencyinfo);

    const swap = () => {
        // Safe swapping with temp variables to avoid async issues
        const tempFrom = from;
        const tempTo = to;
        const tempAmount = amount;
        const tempConverted = convertedAmount;

        setFrom(tempTo);
        setTo(tempFrom);
        setAmount(tempConverted);
        setConvertedAmount(tempAmount);
    };

    const convert = () => {
        setConvertedAmount(amount * currencyinfo[to]);
    };

    return (
        <div
            className=" w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundColor:"black"
            }}
        >
            <h1 className="mt-24 text-center text-white flex text-3xl font-serif flex-wrap">Currency Converter</h1>
            <div className="w-full">
                
                <div className="my-0 w-full max-w-md mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-sm bg-white/30 shadow-lg">
                
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        {/* From Input Box */}
                        <div className="w-full mb-4">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>

                        {/* Swap Button */}
                        <div className="relative w-full h-10 my-4 flex justify-center items-center">
                            <button
                                type="button"
                                className="border-2 border-white rounded-md bg-blue-600 text-white px-4 py-1 shadow-md hover:bg-blue-700 transition duration-300"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>

                        {/* To Input Box */}
                        <div className="w-full mt-4 mb-6">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>

                        {/* Convert Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CurrencyConverter;
