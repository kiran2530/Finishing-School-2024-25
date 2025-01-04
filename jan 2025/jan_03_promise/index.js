const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "Kiran", age: 25 };
      const isSuccess = false;

      if (isSuccess) {
        resolve(data);
      } else {
        reject("Error: Unable to fetch data.");
      }
    }, 2000);
  });
};

console.log("Fetching data...");

fetchData()
  .then((result) => {
    console.log("Data fetched successfully:", result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Operation completed.");
  });
