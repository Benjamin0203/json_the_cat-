const {fetchbreedNameDescription} = require("./breedFetcher");
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Please specify breed name!");
}

const breedName = args[0];

fetchbreedNameDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log(desc);
  }
});

