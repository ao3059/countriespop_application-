const axios = require('axios');

const getCountriesByContinent = async (continentName) => {
  const url = `https://restcountries.com/v3.1/region/${continentName}`;
  try {
    const response = await axios.get(url);
    const countries = response.data;
    return countries;
  } catch (error) {
    console.error('Unable to fetch countries data for the given continent');
    return [];
  }
};

const getCountryByName = (countryName, countries) => {
  const country = countries.find(country => country.name.common === countryName);
  return country || null;
};

module.exports = {
  getCountriesByContinent,
  getCountryByName,
};

