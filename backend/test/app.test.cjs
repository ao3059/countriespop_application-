const chai = require('chai');
const expect = chai.expect;
const { getCountriesByContinent, getCountryByName } = require('../src/countries');

describe('getCountriesByContinent', function() {
    it('should return an array of countries for a valid continent', async function() {
        const continent = 'Africa';
        const countries = await getCountriesByContinent(continent);
        expect(countries).to.be.an('array');
        expect(countries).to.have.length.greaterThan(0);
    });

    it('should return an empty array for an invalid continent', async function() {
        const continent = 'InvalidContinent';
        const countries = await getCountriesByContinent(continent);
        expect(countries).to.be.an('array').that.is.empty;
    });
});

describe('getCountryByName', function() {
    it('should return a country object for a valid country name', async function() {
        const countries = await getCountriesByContinent('Europe');
        const countryName = 'Germany';
        const country = getCountryByName(countryName, countries);
        expect(country).to.be.an('object');
        expect(country.name.common).to.equal('Germany');
    });

    it('should return null for an invalid country name', async function() {
        const countries = await getCountriesByContinent('Europe');
        const countryName = 'InvalidCountry';
        const country = getCountryByName(countryName, countries);
        expect(country).to.be.null;
    });
});
