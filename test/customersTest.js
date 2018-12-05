const dotenv = require('dotenv');
dotenv.config({path: '../.env'});
const assert = require('chai').assert;
const customers = require('../api/routes/customers');

describe('customers', function(){


	it ('mock parameters should generate same url as expected', function() {
		const expectedURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&rankby=distance&type=bank&language=Spanish&key=AIzaSyAYaNzyQoSDKW0FIUxhEgUEsmPic9XqtPU"

		let testQuery = { latitude: '-33.8670522', longtitude: '151.1957362', name: 'happycreditunion' };

		let testURL = customers.createURL(testQuery);

		console.log(testURL);

		assert.equal(testURL, expectedURL);

	})
});


		// let testQuery = { latitude: '-33.8670522', longtitude: '151.1957362', name: 'happycreditunion' };

		// let testURL = customers.createURL(testQuery);

		// console.log(testURL);