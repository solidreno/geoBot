const config = require('./config');
const http = require('http');

module.exports = {
  getCountryInfo
}

function getCountryInfo (isoAlpha2) {
  return makeGeoNamesRequest(`/countryInfoJSON?country=${isoAlpha2}`);
}

function makeGeoNamesRequest (url) {
  return new Promise( (resolve, reject) => {
    console.log(`${url}&lang=fr&username=${config.geoNamesUser}`);
    http.get(`http://api.geonames.org/${url}&lang=fr&username=${config.geoNamesUser}`,
      (res) => {
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
