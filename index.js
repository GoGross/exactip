"use strict";

const request = require ( 'request' );

/**
 * @class ExactIP
 * @hideconstructor
 * @classdesc Get ip info for a specified IP address or requesting server IP address
 * @fileOverview This is base file for credit card management
 * @version 1.0.0
 * @module exactIP
 * @param {string} EXACTIP_KEY - environment key
 * @param {string} IP - specific ip address to query if no abitrary
 * @returns {Promise} ExactIP Object
 *
 */

module.exports = class ExactIP {
	
	/**
	 * @constructor
	 * @hideconstructor
	 * @param {string} EXACTIP_KEY - environment key
	 * @param {string} IP - specific ip address to query if no abitrary
	 */
	constructor ( EXACTIP_KEY, IP ) {
		
		this.IP          = IP;
		this.EXACTIP_KEY = EXACTIP_KEY || process.env.EXACTIP_KEY;
		this.baseURL     = "https://api.gogross.com/ip/";
		
	}
	
	/**
	 * Get IP info
	 * @example <caption>Example usage on invocation.</caption>
	 * let card = new CreditCard ( {
	*	    objectId: "guFmMzEn4q"
	* } );
	 * return await card.get (); // don't capture promises in cloud
	 *
	 *
	 * @requires {EXACTIP_KEY}  process.env.EXACTIP_KEY for
	 * @returns {Object} `{
	 * "ip": "105.4.7.150",
	 * "location": {
	 *  "city": "Johannesburg",
	 *  "region": "Gauteng",
	 *  "country": "ZA"
     *   "lon": -26.2309,
     *   "lat": 28.0583,
     *   "postal": "2001"
     *   }
     *       . . .
	 * }`
	 *
	 */
	async info () {
		
		return new Promise ( async ( resolve, reject ) => {
			
			if ( !this.EXACTIP_KEY ) {
				
				reject ( "Error, missing API KEY environment variable" )
				
			} else {
				
				let api_key = this.EXACTIP_KEY, // signup for free at exactip.gogross.com
				    url;
				
				if ( this.IP ) {
					
					url = this.baseURL + '?key=' + api_key + '&ip=' + this.IP;
				} else {
					url = this.baseURL + '?key=' + api_key;
				}
				
				return request ( { url : url }, function ( error, response, body ) {
					
					if ( error ) {
						
						reject ( error )
						
					} else {
						
						body = JSON.parse ( body );
						
						if ( body.hasOwnProperty ( "error" ) ) {
							
							reject ( body )
							
						} else {
							
							resolve ( body )
							
						}
						
					}
					
				} );
				
			}
			
		} )
		
	}
	
};
