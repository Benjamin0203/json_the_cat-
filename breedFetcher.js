
const fetchbreedNameDescription = (breedName, callback) => {
  const request = require("request");
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(url, (error,response,body) => {
    if (error) {
      callback(`Oops, we run into a problem: ${error}`, null);
      // return;
    }
    const data = JSON.parse(body);
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback("Please check the breed name.", null);
    }
  });
};

module.exports = { fetchbreedNameDescription };