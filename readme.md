![FinCharts](https://raw.githubusercontent.com/GoGross/exactip/master/exactip.png)

---
## ExactIP

Identify your visitor using their IP address. ExactIP runs in multiple datacenters around the world to provide a thourough and guaranteed geo service.

## :cloud: Installation

```sh
# Using npm
npm install --save exactip

```

## Getting started

[![FinCharts](https://raw.githubusercontent.com/GoGross/fincharts/master/free-key.jpg)](https://exactip.gogross.com)

Signup for a free account at exactip.gogross.com to obtain a free API Key.

This documentation mainly focuses on developer/technical integration for application consumption. Depending on your subscription plan, you will have access to our feature rich API that will allow you integrate ExactIP in your application using any backend of your choice. Only enterprise plans allow for Push Notifications, Web Socket integration. We advise you to browse through our documentation page to appreciate the power of ExactIP, but if you wish to get started right away, simple follow, `https://api.gogross.com/ip/?key=api_key` after signing up.

## API

ExactIP exposes its data via an Application Programming Interface (API), so developers can interact in a programmatic way with the ExactIP Service. This document is the official reference for that functionality. The current API version is 1.0.0

## Authentication

#### Auth: API Key
All ExactIP API endpoints require an access token generated from your dashboard as an API key.

## Cross-Origin Resource Sharing (CORS) 

ExactIP is CORS enabled and allows Access-Control Headers. This will enable you to use our API via Cross-Origin HTTP Requests in application/json, application/x-www-form-urlencoded, multipart/form-data, text/plain. You don't need to specify any headers to make a CORS request as they are enabled by default.

## :clipboard: Example

### NodeJS
```
curl -X GET \
  -H "Content-Type: application/json" \
  -d '{"ip":8.8.8.8,"EXACTIP_KEY":"get_api_key"}' \
  https://api.gogross.com/ip/?key=get_free_api_key
```


```js
const ExactIP     = require ( 'exactip' );
const exactIp     = new ExactIP ();
const EXACTIP_KEY = process.env.EXACTIP_KEY;  // API Key
const IP          = ""; // optional

exactIp.info ( EXACTIP_KEY, IP )
	.then ( ( info ) => {
		
		console.log ( info );
		
	} )
	.catch ( ( error ) => {
		
		console.trace ( error );
		
	} );

```

Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 3.0 License, and code samples are licensed under the Apache 2.0 License. For details, see our Site Policies. Java is a registered trademark of Oracle and/or its affiliates.





