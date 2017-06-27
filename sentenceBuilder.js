const FCG = require('./frenchCountryGrammar');

module.exports = {
  getSentence
}

const SENTENCE = {
  'population': population,
  'superficie': superficie,
  'capitale': capitale
}

function getSentence (sentenceType, options) {
  let answer = SENTENCE[sentenceType](options);
  if (answer)
    return answer;
  else
    return defaultAnswer();
}

function capitale (options) {
  if (! options.isoAlpha2 || ! options.capitale) return;
  let pays = FCG.getAll(options.isoAlpha2);
  if (! pays) return;
  let answers = [
    `${pays.article}${pays.name} a pour capital ${options.capitale}.`,
    `La capitale ${pays.de.toLowerCase()}${pays.name} est ${options.capitale}.`,
    `${options.capitale} est la capitale ${pays.de.toLowerCase()}${pays.name}.`
  ];
  return getRandomElem(answers);
}

function superficie (options) {
  if (! options.isoAlpha2 || ! options.area) return;
  let pays = FCG.getAll(options.isoAlpha2);
  if (! pays) return;
  let answers = [
    `${pays.article}${pays.name} fait ${options.area} km².`,
    `${pays.article}${pays.name} mesure ${options.area} km².`,
    `La superficie de ${pays.article.toLowerCase()}${pays.name} est de ${options.area} km².`,
    `${pays.article}${pays.name} a une superficie de ${options.area} km².`
  ];
  return getRandomElem(answers);
}

function population (options) {
  if (! options.isoAlpha2 || ! options.pop) return;
  let pays = FCG.getAll(options.isoAlpha2);
  if (! pays) return;
  let answers = [
    `Il y a ${options.pop} habitants ${pays.en.toLowerCase()}${pays.name}.`,
    `${pays.article}${pays.name} a une population de ${options.pop} habitants.`
  ];
  return getRandomElem(answers);
}

function defaultAnswer () {
  let answers = [
    `Euh... Je ne sais pas de quoi on parle...`,
    `Pas sûr d'avoir tout bien compris !`,
    `Hein ?!? Je ne comprends pas`
  ];
  return getRandomElem(answers);
}

function getRandomElem (tableau) {
  let index = Math.floor(Math.random()*tableau.length);
  if (index == tableau.length) index--;
  return tableau[index];
}
