const https = require('https');

class Service {
    async makeRequest(url) {
        return new Promise((resolve, reject) => {
            https.get(url, (response) => {
                response.on('data', (data) => resolve(JSON.parse(data)));
                response.on('error', reject);
            });
        });
    }

    async getPlanets(url) {
        const { name, diameter, climate } = await this.makeRequest(url);

        return {
            name,
            diameter,
            climate,
        };
    }
}

module.exports = Service;
