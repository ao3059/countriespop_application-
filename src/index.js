const axios = require('axios');
const readline = require('readline');
const { getCountriesByContinent, getCountryByName } = require('./countries');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display a welcome message to the user
console.log('Welcome to my countries app\n');

// Create a user input for selecting between two options
rl.question('Select an option (1 or 2):\n1. Select by continent\n2. Select by country\n', async (option) => {
  if (option === '1') {
    // Prompt the user for a continent
    rl.question('Enter a continent: ', async (continent) => {
      const countries = await getCountriesByContinent(continent);

      // Display a list of countries to the user
      console.log(`Countries in ${continent}:`);
      countries.forEach((country, index) => {
        console.log(`${index + 1}. ${country.name.common}`);
      });

      // Prompt the user for a country
      rl.question('Enter a country number: ', async (countryNumber) => {
        const selectedCountry = countries[countryNumber - 1];

        // Display the selected country's information to the user
        console.log(`You selected ${selectedCountry.name.common}:`);
        console.log(`Population: ${selectedCountry.population}`);

        rl.close();
      });
    });
  } else if (option === '2') {
    // Prompt the user for a country
    rl.question('Enter a country name: ', async (countryName) => {
      const countries = await getCountriesByContinent('');
      const selectedCountry = getCountryByName(countryName, countries);

      if (selectedCountry) {
        // Display the selected country's information to the user
        console.log(`You selected ${selectedCountry.name.common}:`);
        console.log(`Population: ${selectedCountry.population}`);
      } else {
        console.error('Country not found.');
      }

      rl.close();
    });
  } else {
    console.log('Invalid option selected');
    rl.close();
  }
});


