test('getCountryPopulation should return the population of the specified country', async () => {
    const countryName = 'Nigeria';
    const population = await getCountryPopulation(countryName);
    expect(population).toBeGreaterThan(0);
  });