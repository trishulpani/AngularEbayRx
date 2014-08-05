AngularEbayRx
=============

A sample app to show how Angular can be used to connect to Ebay Finder API and use RxJS Angular plugin to fetch and display results

Remember to replace the Ebay App ID in the following section of EbayService.js

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


Now, go to the root of the unzipped folder and you can use Node HTTP server to run the app. Like:

npm install http-server -g

and then do:
http-server --cors

to enable CORS support. 
