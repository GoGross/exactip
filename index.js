const request = require ( 'request' );

exports.info = function ( key ) {

	let api_key = process.env.key || key, // signup for free at exactip.gogross.com
	    url      = 'https://api.gogross.com/ip/?key=' + api_key;
	
	request ( { url : url }, function ( error, response, body ) {
		
		if ( error ) {
			
			throw error
			
		} else {
			
			return body
			
		}
		
	} );
	
};
