const geoDB = require('./geoDB');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({limit: '10mb'});

app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

app.get('/', (req, res) => {
  res.status(200).send('Hello World !');
});

app.post('/country', jsonParser, (req, res) => {
  let isoAlpha2 = req.body.result.parameters.isoAlpha2;
  geoDB.getCountryInfo(isoAlpha2).
  then(function (response) {
    let apiAIResponse = {
      speech: `La capitale de ${response.geonames[0].countryName} est ${response.geonames[0].capital}`,
      displayText: `La capitale de ${response.geonames[0].countryName} est ${response.geonames[0].capital}`,
      source: `api.geonames.org`
    }
    res.status(200).json(apiAIResponse);
  })
  .catch(function (error) {
    res.status(500).json(error);
  });
});

app.post('/', jsonParser, (req, res) => {
  let body = req.body;
  res.status(200).send(JSON.stringify(body, null, 2));
});

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});
