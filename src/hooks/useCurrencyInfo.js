import { useEffect, useState, useRef } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  const hasPageBeenRendered = useRef(false);

  useEffect(() => {
    if (!hasPageBeenRendered.current) {
      hasPageBeenRendered.current = true;
      return;
    }

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.9.14/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((error) => {
        console.error(error);
      });
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
