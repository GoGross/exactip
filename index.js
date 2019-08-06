const request = require ( 'request' );

module.exports = function ( key ) {
	
	return new Promise( async (resolve, reject ) => {
		
		let api_key = process.env.key || key, // signup for free at exactip.gogross.com
		    url      = 'https://api.gogross.com/ip/?key=' + api_key;
		
		return request ( { url : url }, function ( error, response, body ) {
			
			if ( error ) {
				
				reject( error  )
				
			} else {
				
				body = JSON.parse( body );
				
				if( body.hasOwnProperty( "error")){
					
					reject( body  )
					
				}else {
					
					resolve( body )
					
				}
				
			}
			
		} );
		
	})
	
};
