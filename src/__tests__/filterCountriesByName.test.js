test('filterCountriesByName should return an array of countries whose names match the specified search term', () => {
    const searchTerm = 'united';
    const countries = [    { name: 'United States' },    { name: 'United Kingdom' },    { name: 'Canada' }  ];
    const filteredCountries = filterCountriesByName(countries, searchTerm);
    expect(filteredCountries).toEqual(expect.arrayContaining([
      expect.objectContaining({
        name: expect.stringMatching(/united/i)
      })
    ]));
  });