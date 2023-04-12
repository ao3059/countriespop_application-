const { getCountriesByContinent } = require('../countries');

test('it should return an array of countries for a valid continent', async () => {
  const countries = await getCountriesByContinent('Asia');
  expect(countries).toEqual(expect.arrayContaining(['Afghanistan', 'China', 'India']));
});

test('it should return an empty array for an invalid continent', async () => {
  const countries = await getCountriesByContinent('Fake Continent');
  expect(countries).toEqual([]);
});
