// source : http://www.francaisfacile.com/exercices/exercice-francais-2/exercice-francais-99193.php
module.exports = {
	getArticle,
	getPrepositionDe,
	getPrepositionEn,
	isPlural
}

function isPlural (isoAlpha2) {
	if (COUNTRIES[isoAlpha2]) {
		return COUNTRIES[isoAlpha2].plural;
	}
	return false;
}

function getPrepositionDe (isoAlpha2) {
	if (COUNTRIES[isoAlpha2]) {
		let pays = COUNTRIES[isoAlpha2];

		// Noms de pays au pluriel
		if (pays.plural) {
			return 'Des ';
		}

		// Pays singulier commençant par une voyelle
		if (VOYELLES.includes(pays.name.substr(0,1).toLowerCase())) {
			return `D'`;
		}

		// Pays singulier masculin commençant par une consonne
		if (! VOYELLES.includes(pays.name.substr(0,1).toLowerCase()) && pays.gender) {
			return `Du `;
		}

		// Pour tous les autres
		return 'De ';
	}
	return '';
}

function getPrepositionEn (isoAlpha2) {
	if (COUNTRIES[isoAlpha2]) {
		let pays = COUNTRIES[isoAlpha2];

		// Noms de pays au pluriel
		if (pays.plural) {
			return 'Aux '
		}

		// Pays masculins commençant par une consonne
		if (! VOYELLES.includes(pays.name.substr(0,1).toLowerCase()) && pays.gender) {
			return 'Au '
		}

		// Pays féminins commençant par une consonne et pays (féminins et masculins) commençant par une voyelle
		return 'En ';
	}
	return '';
}

function getArticle (isoAlpha2) {
	if (COUNTRIES[isoAlpha2]) {
		let pays = COUNTRIES[isoAlpha2];

		if (VOYELLES.includes(pays.name.substr(0,1).toLowerCase())) {
			return `L'`;
		}

		if (pays.plural) {
			return 'Les ';
		}

		if (pays.gender) {
			return 'Le ';
		} else {
			return 'La ';
		}
	}
	return '';
}

const VOYELLES = ['a', 'e', 'i', 'o', 'u', 'y'];

const COUNTRIES = {
	"AF":{
		"name": "Afghanistan",
		"gender": true,
		"plural": false
	},
	"ZA":{
		"name": "Afrique du Sud",
		"gender": false,
		"plural": false
	},
	"AX":{
		"name": "Îles Åland",
		"gender": false,
		"plural": true
	},
	"AL":{
		"name": "Albanie",
		"gender": false,
		"plural": false
	},
	"DZ":{
		"name": "Algérie",
		"gender": false,
		"plural": false
	},
	"DE":{
		"name": "Allemagne",
		"gender": false,
		"plural": false
	},
	"AD":{
		"name": "Andorre",
		"gender": true,
		"plural": false
	},
	"AO":{
		"name": "Angola",
		"gender": true,
		"plural": false
	},
	"AI":{
		"name": "Anguilla",
		"gender": true,
		"plural": false
	},
	"AQ":{
		"name": "Antarctique",
		"gender": true,
		"plural": false
	},
	"AG":{
		"name": "Antigua-et-Barbuda",
		"gender": false,
		"plural": false
	},
	"SA":{
		"name": "Arabie saoudite",
		"gender": false,
		"plural": false
	},
	"AR":{
		"name": "Argentine",
		"gender": false,
		"plural": false
	},
	"AM":{
		"name": "Arménie",
		"gender": false,
		"plural": false
	},
	"AW":{
		"name": "Aruba",
		"gender": true,
		"plural": false
	},
	"AU":{
		"name": "Australie",
		"gender": false,
		"plural": false
	},
	"AT":{
		"name": "Autriche",
		"gender": false,
		"plural": false
	},
	"AZ":{
		"name": "Azerbaïdjan",
		"gender": true,
		"plural": false
	},
	"BS":{
		"name": "Bahamas",
		"gender": true,
		"plural": true
	},
	"BH":{
		"name": "Bahreïn",
		"gender": true,
		"plural": false
	},
	"BD":{
		"name": "Bangladesh",
		"gender": true,
		"plural": false
	},
	"BB":{
		"name": "Barbade",
		"gender": false,
		"plural": false
	},
	"BY":{
		"name": "Biélorussie",
		"gender": false,
		"plural": false
	},
	"BE":{
		"name": "Belgique",
		"gender": false,
		"plural": false
	},
	"BZ":{
		"name": "Belize",
		"gender": false,
		"plural": false
	},
	"BJ":{
		"name": "Bénin",
		"gender": true,
		"plural": false
	},
	"BM":{
		"name": "Bermudes",
		"gender": true,
		"plural": true
	},
	"BT":{
		"name": "Bhoutan",
		"gender": true,
		"plural": false
	},
	"BO":{
		"name": "Bolivie",
		"gender": false,
		"plural": false
	},
	"BQ":{
		"name": "Pays-Bas caribéens",
		"gender": true,
		"plural": true
	},
	"BA":{
		"name": "Bosnie",
		"gender": false,
		"plural": false
	},
	"BW":{
		"name": "Botswana",
		"gender": true,
		"plural": false
	},
	"BV":{
		"name": "Île Bouvet",
		"gender": true,
		"plural": false
	},
	"BR":{
		"name": "Brésil",
		"gender": true,
		"plural": false
	},
	"BN":{
		"name": "Brunei",
		"gender": true,
		"plural": false
	},
	"BG":{
		"name": "Bulgarie",
		"gender": false,
		"plural": false
	},
	"BF":{
		"name": "Burkina Faso",
		"gender": true,
		"plural": false
	},
	"BI":{
		"name": "Burundi",
		"gender": true,
		"plural": false
	},
	"KY":{
		"name": "Caïmans",
		"gender": true,
		"plural": true
	},
	"KH":{
		"name": "Cambodge",
		"gender": true,
		"plural": false
	},
	"CM":{
		"name": "Cameroun",
		"gender": true,
		"plural": false
	},
	"CA":{
		"name": "Canada",
		"gender": true,
		"plural": false
	},
	"CV":{
		"name": "Cap Vert",
		"gender": true,
		"plural": false
	},
	"CF":{
		"name": "République centrafricaine",
		"gender": false,
		"plural": false
	},
	"CL":{
		"name": "Chili",
		"gender": true,
		"plural": false
	},
	"CN":{
		"name": "Chine",
		"gender": false,
		"plural": false
	},
	"CX":{
		"name": "Île Christmas",
		"gender": false,
		"plural": false
	},
	"CY":{
		"name": "Chypre",
		"gender": false,
		"plural": false
	},
	"CC":{
		"name": "Îles Cocos",
		"gender": true,
		"plural": true
	},
	"CO":{
		"name": "Colombie",
		"gender": false,
		"plural": false
	},
	"KM":{
		"name": "Comores",
		"gender": true,
		"plural": true
	},
	"CG":{
		"name": "Congo",
		"gender": true,
		"plural": false
	},
	"CD":{
		"name": "République démocratique du Congo",
		"gender": true,
		"plural": false
	},
	"CK":{
		"name": "Îles Cook",
		"gender": true,
		"plural": true
	},
	"KR":{
		"name": "Corée du Sud",
		"gender": false,
		"plural": false
	},
	"KP":{
		"name": "Corée du Nord",
		"gender": false,
		"plural": false
	},
	"CR":{
		"name": "Costa Rica",
		"gender": true,
		"plural": false
	},
	"CI":{
		"name": "Côte d'Ivoire",
		"gender": false,
		"plural": false
	},
	"HR":{
		"name": "Croatie",
		"gender": false,
		"plural": false
	},
	"CU":{
		"name": "Cuba",
		"gender": true,
		"plural": false
	},
	"CW":{
		"name": "Curaçao",
		"gender": true,
		"plural": false
	},
	"DK":{
		"name": "Danemark",
		"gender": true,
		"plural": false
	},
	"DJ":{
		"name": "Djibouti",
		"gender": true,
		"plural": false
	},
	"DO":{
		"name": "République dominicaine",
		"gender": false,
		"plural": false
	},
	"DM":{
		"name": "Dominique",
		"gender": false,
		"plural": false
	},
	"EG":{
		"name": "Égypte",
		"gender": false,
		"plural": false
	},
	"SV":{
		"name": "Salvador",
		"gender": true,
		"plural": false
	},
	"AE":{
		"name": "Émirats arabes unis",
		"gender": true,
		"plural": true
	},
	"EC":{
		"name": "Équateur",
		"gender": true,
		"plural": false
	},
	"ER":{
		"name": "Érythrée",
		"gender": false,
		"plural": false
	},
	"ES":{
		"name": "Espagne",
		"gender": false,
		"plural": false
	},
	"EE":{
		"name": "Estonie",
		"gender": false,
		"plural": false
	},
	"US":{
		"name": "États-Unis",
		"gender": true,
		"plural": true
	},
	"ET":{
		"name": "Éthiopie",
		"gender": false,
		"plural": false
	},
	"FK":{
		"name": "Malouines",
		"gender": false,
		"plural": true
	},
	"FO":{
		"name": "Îles Féroé",
		"gender": false,
		"plural": true
	},
	"FJ":{
		"name": "Fidji",
		"gender": true,
		"plural": false
	},
	"FI":{
		"name": "Finlande",
		"gender": false,
		"plural": false
	},
	"FR":{
		"name": "France",
		"gender": false,
		"plural": false
	},
	"GA":{
		"name": "Gabon",
		"gender": true,
		"plural": false
	},
	"GM":{
		"name": "Gambie",
		"gender": false,
		"plural": false
	},
	"GE":{
		"name": "Géorgie",
		"gender": false,
		"plural": false
	},
	"GS":{
		"name": "Géorgie du Sud",
		"gender": false,
		"plural": false
	},
	"GH":{
		"name": "Ghana",
		"gender": true,
		"plural": false
	},
	"GI":{
		"name": "Gibraltar",
		"gender": true,
		"plural": false
	},
	"GR":{
		"name": "Grèce",
		"gender": false,
		"plural": false
	},
	"GD":{
		"name": "Grenade",
		"gender": false,
		"plural": false
	},
	"GL":{
		"name": "Groenland",
		"gender": true,
		"plural": false
	},
	"GP":{
		"name": "Guadeloupe",
		"gender": false,
		"plural": false
	},
	"GU":{
		"name": "Guam",
		"gender": true,
		"plural": false
	},
	"GT":{
		"name": "Guatemala",
		"gender": true,
		"plural": false
	},
	"GG":{
		"name": "Guernesey",
		"gender": true,
		"plural": false
	},
	"GN":{
		"name": "Guinée",
		"gender": false,
		"plural": false
	},
	"GW":{
		"name": "Guinée-Bissau",
		"gender": false,
		"plural": false
	},
	"GQ":{
		"name": "Guinée équatoriale",
		"gender": false,
		"plural": false
	},
	"GY":{
		"name": "Guyana",
		"gender": true,
		"plural": false
	},
	"GF":{
		"name": "Guyane",
		"gender": false,
		"plural": false
	},
	"HT":{
		"name": "Haïti",
		"gender": true,
		"plural": false
	},
	"HM":{
		"name": "Îles Heard-et-MacDonald",
		"gender": false,
		"plural": false
	},
	"HN":{
		"name": "Honduras",
		"gender": true,
		"plural": false
	},
	"HK":{
		"name": "Hong Kong",
		"gender": true,
		"plural": false
	},
	"HU":{
		"name": "Hongrie",
		"gender": false,
		"plural": false
	},
	"IM":{
		"name": "Île de Man",
		"gender": false,
		"plural": false
	},
	"UM":{
		"name": "Îles mineures éloignées des États-Unis",
		"gender": false,
		"plural": true
	},
	"VG":{
		"name": "Îles Vierges britanniques",
		"gender": false,
		"plural": true
	},
	"VI":{
		"name": "Îles Vierges des États Unis",
		"gender": false,
		"plural": true
	},
	"IN":{
		"name": "Inde",
		"gender": false,
		"plural": false
	},
	"ID":{
		"name": "Indonésie",
		"gender": false,
		"plural": false
	},
	"IR":{
		"name": "Iran",
		"gender": true,
		"plural": false
	},
	"IQ":{
		"name": "Irak",
		"gender": true,
		"plural": false
	},
	"IE":{
		"name": "Irlande",
		"gender": false,
		"plural": false
	},
	"IS":{
		"name": "Islande",
		"gender": false,
		"plural": false
	},
	"IL":{
		"name": "Israël",
		"gender": true,
		"plural": false
	},
	"IT":{
		"name": "Italie",
		"gender": false,
		"plural": false
	},
	"JM":{
		"name": "Jamaïque",
		"gender": false,
		"plural": false
	},
	"JP":{
		"name": "Japon",
		"gender": true,
		"plural": false
	},
	"JE":{
		"name": "Jersey",
		"gender": false,
		"plural": false
	},
	"JO":{
		"name": "Jordanie",
		"gender": false,
		"plural": false
	},
	"KZ":{
		"name": "Kazakhstan",
		"gender": true,
		"plural": false
	},
	"KE":{
		"name": "Kenya",
		"gender": true,
		"plural": false
	},
	"KG":{
		"name": "Kirghizistan",
		"gender": true,
		"plural": false
	},
	"KI":{
		"name": "Kiribati",
		"gender": true,
		"plural": false
	},
	"KW":{
		"name": "Koweït",
		"gender": true,
		"plural": false
	},
	"LA":{
		"name": "Laos",
		"gender": true,
		"plural": false
	},
	"LS":{
		"name": "Lesotho",
		"gender": true,
		"plural": false
	},
	"LV":{
		"name": "Lettonie",
		"gender": false,
		"plural": false
	},
	"LB":{
		"name": "Liban",
		"gender": true,
		"plural": false
	},
	"LR":{
		"name": "Liberia",
		"gender": true,
		"plural": false
	},
	"LY":{
		"name": "Libye",
		"gender": false,
		"plural": false
	},
	"LI":{
		"name": "Liechtenstein",
		"gender": true,
		"plural": false
	},
	"LT":{
		"name": "Lituanie",
		"gender": false,
		"plural": false
	},
	"LU":{
		"name": "Luxembourg",
		"gender": true,
		"plural": false
	},
	"MO":{
		"name": "Macao",
		"gender": true,
		"plural": false
	},
	"MK":{
		"name": "Macédoine",
		"gender": false,
		"plural": false
	},
	"MG":{
		"name": "Madagascar",
		"gender": true,
		"plural": false
	},
	"MY":{
		"name": "Malaisie",
		"gender": false,
		"plural": false
	},
	"MW":{
		"name": "Malawi",
		"gender": true,
		"plural": false
	},
	"MV":{
		"name": "Maldives",
		"gender": false,
		"plural": true
	},
	"ML":{
		"name": "Mali",
		"gender": true,
		"plural": false
	},
	"MT":{
		"name": "Malte",
		"gender": false,
		"plural": false
	},
	"MP":{
		"name": "Îles Mariannes du Nord",
		"gender": false,
		"plural": true
	},
	"MA":{
		"name": "Maroc",
		"gender": true,
		"plural": false
	},
	"MH":{
		"name": "Îles Marshall",
		"gender": false,
		"plural": true
	},
	"MQ":{
		"name": "Martinique",
		"gender": false,
		"plural": false
	},
	"MU":{
		"name": "Maurice",
		"gender": false,
		"plural": false
	},
	"MR":{
		"name": "Mauritanie",
		"gender": false,
		"plural": false
	},
	"YT":{
		"name": "Mayotte",
		"gender": false,
		"plural": false
	},
	"MX":{
		"name": "Mexique",
		"gender": true,
		"plural": false
	},
	"FM":{
		"name": "Micronésie",
		"gender": false,
		"plural": false
	},
	"MD":{
		"name": "Moldavie",
		"gender": false,
		"plural": false
	},
	"MC":{
		"name": "Monaco",
		"gender": true,
		"plural": false
	},
	"MN":{
		"name": "Mongolie",
		"gender": false,
		"plural": false
	},
	"ME":{
		"name": "Monténégro",
		"gender": true,
		"plural": false
	},
	"MS":{
		"name": "Montserrat",
		"gender": true,
		"plural": false
	},
	"MZ":{
		"name": "Mozambique",
		"gender": true,
		"plural": false
	},
	"MM":{
		"name": "Birmanie",
		"gender": false,
		"plural": false
	},
	"NA":{
		"name": "Namibie",
		"gender": false,
		"plural": false
	},
	"NR":{
		"name": "Nauru",
		"gender": true,
		"plural": false
	},
	"NP":{
		"name": "Népal",
		"gender": true,
		"plural": false
	},
	"NI":{
		"name": "Nicaragua",
		"gender": true,
		"plural": false
	},
	"NE":{
		"name": "Niger",
		"gender": true,
		"plural": false
	},
	"NG":{
		"name": "Nigeria",
		"gender": true,
		"plural": false
	},
	"NU":{
		"name": "Niue",
		"gender": false,
		"plural": false
	},
	"NF":{
		"name": "Île Norfolk",
		"gender": false,
		"plural": false
	},
	"NO":{
		"name": "Norvège",
		"gender": false,
		"plural": false
	},
	"NC":{
		"name": "Nouvelle Calédonie",
		"gender": false,
		"plural": false
	},
	"NZ":{
		"name": "Nouvelle Zélande",
		"gender": false,
		"plural": false
	},
	"IO":{
		"name": "Territoire britannique de l'océan Indien",
		"gender": true,
		"plural": false
	},
	"OM":{
		"name": "Oman",
		"gender": true,
		"plural": false
	},
	"UG":{
		"name": "Ouganda",
		"gender": true,
		"plural": false
	},
	"UZ":{
		"name": "Ouzbékistan",
		"gender": true,
		"plural": false
	},
	"PK":{
		"name": "Pakistan",
		"gender": true,
		"plural": false
	},
	"PW":{
		"name": "Palaos",
		"gender": true,
		"plural": false
	},
	"PS":{
		"name": "Palestine",
		"gender": false,
		"plural": false
	},
	"PA":{
		"name": "Panama",
		"gender": true,
		"plural": false
	},
	"PG":{
		"name": "Nouvelle Guinée",
		"gender": false,
		"plural": false
	},
	"PY":{
		"name": "Paraguay",
		"gender": true,
		"plural": false
	},
	"NL":{
		"name": "Hollande",
		"gender": false,
		"plural": false
	},
	"PE":{
		"name": "Pérou",
		"gender": true,
		"plural": false
	},
	"PH":{
		"name": "Philippines",
		"gender": true,
		"plural": true
	},
	"PN":{
		"name": "Îles Pitcairn",
		"gender": false,
		"plural": true
	},
	"PL":{
		"name": "Pologne",
		"gender": false,
		"plural": false
	},
	"PF":{
		"name": "Polynésie française",
		"gender": false,
		"plural": false
	},
	"PR":{
		"name": "Porto Rico",
		"gender": true,
		"plural": false
	},
	"PT":{
		"name": "Portugal",
		"gender": true,
		"plural": false
	},
	"QA":{
		"name": "Qatar",
		"gender": true,
		"plural": false
	},
	"RE":{
		"name": "La Réunion",
		"gender": false,
		"plural": false
	},
	"RO":{
		"name": "Roumanie",
		"gender": false,
		"plural": false
	},
	"GB":{
		"name": "Angleterre",
		"gender": false,
		"plural": false
	},
	"RU":{
		"name": "Russie",
		"gender": false,
		"plural": false
	},
	"RW":{
		"name": "Rwanda",
		"gender": true,
		"plural": false
	},
	"EH":{
		"name": "République arabe sahraouie démocratique",
		"gender": false,
		"plural": false
	},
	"BL":{
		"name": "Saint-Barthélemy",
		"gender": true,
		"plural": false
	},
	"KN":{
		"name": "Saint-Christophe-et-Niévès",
		"gender": true,
		"plural": false
	},
	"SM":{
		"name": "Saint-Marin",
		"gender": true,
		"plural": false
	},
	"MF":{
		"name": "Saint-Martin",
		"gender": true,
		"plural": false
	},
	"SX":{
		"name": "Saint-Martin",
		"gender": true,
		"plural": false
	},
	"PM":{
		"name": "Saint Pierre et Miquelon",
		"gender": true,
		"plural": false
	},
	"VA":{
		"name": "Vatican",
		"gender": true,
		"plural": false
	},
	"VC":{
		"name": "Saint Vincent et Grenadines",
		"gender": true,
		"plural": false
	},
	"SH":{
		"name": "Sainte-Hélène, Ascension et Tristan da Cunha",
		"gender": true,
		"plural": false
	},
	"LC":{
		"name": "Sainte Lucie",
		"gender": false,
		"plural": false
	},
	"SB":{
		"name": "Salomon",
		"gender": true,
		"plural": false
	},
	"WS":{
		"name": "Samoa",
		"gender": true,
		"plural": true
	},
	"AS":{
		"name": "Samoa américaines",
		"gender": true,
		"plural": true
	},
	"ST":{
		"name": "Sao Tomé et Principe",
		"gender": false,
		"plural": false
	},
	"SN":{
		"name": "Sénégal",
		"gender": true,
		"plural": false
	},
	"RS":{
		"name": "Serbie",
		"gender": false,
		"plural": false
	},
	"SC":{
		"name": "Seychelles",
		"gender": true,
		"plural": true
	},
	"SL":{
		"name": "Sierra Leone",
		"gender": false,
		"plural": false
	},
	"SG":{
		"name": "Singapour",
		"gender": true,
		"plural": false
	},
	"SK":{
		"name": "Slovaquie",
		"gender": false,
		"plural": false
	},
	"SI":{
		"name": "Slovénie",
		"gender": false,
		"plural": false
	},
	"SO":{
		"name": "Somalie",
		"gender": false,
		"plural": false
	},
	"SD":{
		"name": "Soudan",
		"gender": true,
		"plural": false
	},
	"SS":{
		"name": "Soudan du Sud",
		"gender": true,
		"plural": false
	},
	"LK":{
		"name": "Sri Lanka",
		"gender": true,
		"plural": false
	},
	"SE":{
		"name": "Suède",
		"gender": false,
		"plural": false
	},
	"CH":{
		"name": "Suisse",
		"gender": false,
		"plural": false
	},
	"SR":{
		"name": "Suriname",
		"gender": true,
		"plural": false
	},
	"SJ":{
		"name": "Svalbard et ile Jan Mayen",
		"gender": true,
		"plural": false
	},
	"SZ":{
		"name": "Swaziland",
		"gender": true,
		"plural": false
	},
	"SY":{
		"name": "Syrie",
		"gender": false,
		"plural": false
	},
	"TJ":{
		"name": "Tadjikistan",
		"gender": true,
		"plural": false
	},
	"TW":{
		"name": "Taïwan",
		"gender": true,
		"plural": false
	},
	"TZ":{
		"name": "Tanzanie",
		"gender": false,
		"plural": false
	},
	"TD":{
		"name": "Tchad",
		"gender": true,
		"plural": false
	},
	"CZ":{
		"name": "Tchéquie",
		"gender": false,
		"plural": false
	},
	"TF":{
		"name": "Terres australes et antarctiques françaises",
		"gender": false,
		"plural": true
	},
	"TH":{
		"name": "Thaïlande",
		"gender": false,
		"plural": false
	},
	"TL":{
		"name": "Timor oriental",
		"gender": true,
		"plural": false
	},
	"TG":{
		"name": "Togo",
		"gender": true,
		"plural": false
	},
	"TK":{
		"name": "Tokelau",
		"gender": true,
		"plural": false
	},
	"TO":{
		"name": "Tonga",
		"gender": true,
		"plural": false
	},
	"TT":{
		"name": "Trinité et Tobago",
		"gender": true,
		"plural": false
	},
	"TN":{
		"name": "Tunisie",
		"gender": false,
		"plural": false
	},
	"TM":{
		"name": "Turkménistan",
		"gender": true,
		"plural": false
	},
	"TC":{
		"name": "Îles Turks et Caïcos",
		"gender": false,
		"plural": true
	},
	"TR":{
		"name": "Turquie",
		"gender": false,
		"plural": false
	},
	"TV":{
		"name": "Tuvalu",
		"gender": true,
		"plural": false
	},
	"UA":{
		"name": "Ukraine",
		"gender": false,
		"plural": false
	},
	"UY":{
		"name": "Uruguay",
		"gender": true,
		"plural": false
	},
	"VU":{
		"name": "Vanuatu",
		"gender": true,
		"plural": false
	},
	"VE":{
		"name": "Venezuela",
		"gender": true,
		"plural": false
	},
	"VN":{
		"name": "Vietnam",
		"gender": true,
		"plural": false
	},
	"WF":{
		"name": "Wallis et Futuna",
		"gender": true,
		"plural": false
	},
	"YE":{
		"name": "Yémen",
		"gender": true,
		"plural": false
	},
	"ZM":{
		"name": "Zambie",
		"gender": false,
		"plural": false
	},
	"ZW":{
		"name": "Zimbabwe",
		"gender": true,
		"plural": false
	}
};
