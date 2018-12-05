const express = require('express');
const router = express.Router();
const http = require('http');
const axios = require('axios');
let searchParams;
let url;

router.get('/', (req, res, next)=> {
	
	searchParams = req.query;
	createURL(searchParams);
	googleRequest(url);

});

const createURL = (searchParams) => {

	let name = searchParams.name;
	let location = searchParams.latitude + ',' + searchParams.longtitude;
	let key = process.env[name +"_APIKEY"];
	let output = process.env[name +"_OUTPUT"];
	let type = process.env[name +"_TYPE"];
	let language = process.env[name +"_LANGUAGE"];
	let numResults = process.env[name +"_NUMRESULTS"];


	url = "https://maps.googleapis.com/maps/api/place/nearbysearch/"+ output + "?" + "location=" + location+ "&rankby=distance" + "&type=" + type + "&language=" + language + "&key=" + key;

	return url;
};


const googleRequest = (url) => {



	axios.get(url)
	  .then(response => {

		resultsArray=response.data.results;

	    console.log(resultsArray);

	  })
	  .catch(error => {
	    console.log(error);
	  });

};



module.exports = {
	router: router,
	createURL: createURL,
	googleRequest: googleRequest

};