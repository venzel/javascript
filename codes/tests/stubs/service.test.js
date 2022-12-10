const sinon = require('sinon');
const { deepStrictEqual } = require('assert');
const Service = require('./Service');

const apiUrl = {
    TATOOINE: 'https://swapi.dev/api/planets/1/',
    ALDERAAN: 'https://swapi.dev/api/planets/2/',
};

const mocks = {
    TATOOINE: require('./mocks/tatooine.json'),
    ALDERAAN: require('./mocks/alderaan.json'),
};

(async () => {
    const service = new Service();

    const stub = sinon.stub(service, service.makeRequest.name);

    stub.withArgs(apiUrl.TATOOINE).resolves(mocks.TATOOINE);
    stub.withArgs(apiUrl.ALDERAAN).resolves(mocks.ALDERAAN);

    // Test 1
    {
        const expected = {
            name: 'Tatooine',
            diameter: '10465',
            climate: 'arid',
        };

        const results = await service.getPlanets(apiUrl.TATOOINE);

        deepStrictEqual(results, expected);
    }

    // Test 2
    {
        const expected = {
            name: 'Alderaan',
            diameter: '12500',
            climate: 'temperate',
        };

        const results = await service.getPlanets(apiUrl.ALDERAAN);

        deepStrictEqual(results, expected);
    }
})();
