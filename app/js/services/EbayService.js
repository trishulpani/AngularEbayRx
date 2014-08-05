/* Media Service */

app.factory('EbayService',['$resource','$http',	function($resource, $http) {

	
	return {
								
		findProductFromPartnerSite : function( term ) {

			var url = "http://svcs.ebay.com/services/search/FindingService/v1";
		    url += "?OPERATION-NAME=findItemsByKeywords";
		    url += "&SERVICE-VERSION=1.0.0";
		    url += "&SECURITY-APPNAME=<Ebay App ID>";
		    url += "&GLOBAL-ID=EBAY-US";
		    url += "&RESPONSE-DATA-FORMAT=JSON";
		    url += "&callback=JSON_CALLBACK";
		    url += "&REST-PAYLOAD";
		    url += "&keywords="+ escape(term);
		    url += "&paginationInput.entriesPerPage=10";
			
		    
		    var promise = $http.jsonp(url);
		    
		    return promise;
			
		}
								
	};
} ]);
