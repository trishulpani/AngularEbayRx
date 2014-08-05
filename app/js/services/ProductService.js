/* Media Service */

app.factory('ProductService',['$resource',	function($resource) {

	
	return {
								
		productList : function() {

					result = [ { "id" : 0, "name" : "Motorola MotoE"},
							   { "id" : 1, "name" : "Motorola MotoG" },
							   { "id" : 2, "name" : "Samsung Galaxy" },
							   { "id" : 3, "name" : "Apple iPhone" },
								
						];

					return result;
			
		}
								
	};
} ]);
