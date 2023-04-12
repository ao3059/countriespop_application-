test('getCountryPopulation should throw an error if the country name is invalid', async () => {
    const countryName = 'invalid country name';
    await expect(getCountryPopulation(countryName)).rejects.toThrow('Country not found.');
  });