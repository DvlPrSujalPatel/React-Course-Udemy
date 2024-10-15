// hooks/useCurrencyInfo.js
import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
    const [currencyInfo, setCurrencyInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
                if (!response.ok) throw new Error("Failed to fetch currency data");
                const data = await response.json();
                setCurrencyInfo(data.rates);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCurrencyData();
    }, [baseCurrency]);

    return { currencyInfo, loading, error };
}

export default useCurrencyInfo;
