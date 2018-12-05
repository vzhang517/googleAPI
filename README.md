# apiChallenge

Node.js application that returns locations using the Google places API

## Install

- When you navigate into the folder in your command line 

```sh
$ npm install 
```

## How to Use

- start by running the server in your command line
```sh
$ node server.js
```
or if you have nodemon

```sh
$ nodemon server.js
```
- Go to your browser and navigate to http://localhost:3000/customers
- Then enter your parameters after the url specifing the latitude, longtitude, and customer name ex `http://localhost:3000/customers?latitude=-33.8670522&longtitude=151.1957362&name=happycreditunion`
- All of the results should display in your command prompt


## Testing

- Navigate to test folder and run in comammand line:

```sh
$ npm test customersTest.js
```

This is a test to see if a url is coming back from the createURL function as expected