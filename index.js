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

app.post('/geonames/', jsonParser, (req, res) => {
  let queryAction = req.body.result.action;
  let isoAlpha2 = req.body.result.parameters.isoAlpha2;
  if (!isoAlpha2) {
    res.status(200).json({
      speech: 'Je ne sais pas de quel pays tu parles...',
      displayText: 'Je ne sais pas de quel pays tu parles...',
    });
  }
  geoDB.getCountryInfo(isoAlpha2).
  then(function (response) {

    let apiAIResponse = {
      speech: `Je connais ${response.geonames[0].countryName} mais je n'ai pas compris ce que tu voulais...`,
      displayText: `Je connais ${response.geonames[0].countryName} mais je n'ai pas compris ce que tu voulais...`,
      source: `api.geonames.org`
    }

    if (queryAction == 'getCapital') {
      apiAIResponse.speech = `La capitale de ${response.geonames[0].countryName} est ${response.geonames[0].capital}`;
      apiAIResponse.displayText = apiAIResponse.speech;
    }

    if (queryAction == 'getSize') {
      apiAIResponse.speech = `${response.geonames[0].countryName} fait ${response.geonames[0].areaInSqKm} km²`;
      apiAIResponse.displayText = apiAIResponse.speech;
    }

    if (queryAction == 'getPopulation') {
      apiAIResponse.speech = `Il y a ${response.geonames[0].population} habitants en ${response.geonames[0].countryName}`;
      apiAIResponse.displayText = apiAIResponse.speech;
    }

    res.status(200).json(apiAIResponse);
  })
  .catch(function (error) {
    res.status(500).json(error);
  });
});

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});
