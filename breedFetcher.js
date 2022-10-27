const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Please specify breed name!");
}

const breed = args[0];

const request = require("request");
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error,response,body) => {
  if (error) {
    console.log("Error: ", error);
    return;
  }
  const data = JSON.parse(body);
  // console.log(data.description);
  console.log(data[0].description);
});