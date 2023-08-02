const requestURL = "https://api.exchangerate.host/latest?base=PLN";

const refreshExchangeRates = async () => {
  // Retrieve the data from localStorage
  const savedData = JSON.parse(localStorage.getItem("data") || null);
  const currentTimestamp = new Date().getTime();
  if (savedData && currentTimestamp - savedData.timestamp < 3600000) {
    // less than one hour
    return savedData.data.rates;
  } else {
    try {
      const data = await (await fetch(requestURL)).json();
      // Save the response and the current timestamp in localStorage
      const timestamp = new Date().getTime();
      localStorage.setItem("data", JSON.stringify({ data, timestamp }));
      return data.rates;
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

export default refreshExchangeRates;
