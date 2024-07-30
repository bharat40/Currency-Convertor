import { useEffect, useState } from "react";


// custom Hook 
function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`) // fetching data
            .then((res) => res.json()) // converting result to json
            .then((res) => setData(res[currency])) // storing result to data(useState variable)
    }, [currency]);
    console.log(data); // log to check what's inside data(useState variable)
    return data;
}

export default useCurrencyInfo;