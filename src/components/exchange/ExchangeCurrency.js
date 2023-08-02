const requestURL = "https://api.exchangerate.host/latest";

const refreshExchangeRates = () => {
  // Retrieve the data from localStorage
  const savedData = JSON.parse(localStorage.getItem("data") || null);
  const currentTimestamp = new Date().getTime();
  if (savedData && currentTimestamp - savedData.timestamp < 3600000) {
    // less than one hour
    console.log("Using saved data:", savedData.data);
  } else {
    fetch(requestURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Save the response and the current timestamp in localStorage
        const timestamp = new Date().getTime();
        localStorage.setItem("data", JSON.stringify({ data, timestamp }));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
};

export default refreshExchangeRates;
