const config = require('./config');
const http = require('http');

getCountryInfo('FR');

function getCountryInfo (isoAlpha2) {
  makeGeoNamesRequest(`/countryInfoJSON?country=${isoAlpha2}`)
  .then(function (response) {
    console.dir(response);
  })
  .catch(function (error) {
    console.dir(error);
  });
}

function makeGeoNamesRequest (url) {
  return new Promise( (resolve, reject) => {
    console.log(`${url}&lang=fr&username=${config.geoNamesUser}`);
    http.get(
      {
        // host: 'api.geonames.org',
        host: 'fr.wikipedia.org',
        // path: `${url}&lang=fr&username=${config.geoNamesUser}`
        path: `/wiki/Bataillon`
      }, (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];

      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
                          `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
                          `Expected application/json but received ${contentType}`);
      }
      if (error) {
        console.error(error.message);
        // consume response data to free up memory
        res.resume();
        reject(error);
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          console.log(rawData);
          const parsedData = JSON.parse(rawData);
          // console.log(parsedData);
          resolve(parsedData);
        } catch (e) {
          console.error(e.message);
          reject(e);
        }
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
      reject(e);
    });
  });
}

/*const countriesISO3 = countries.reduce((tmpISO3, country) => {
  tmpISO3[country.isoAlpha3] = country;
  return tmpISO3;
}, {});*/
