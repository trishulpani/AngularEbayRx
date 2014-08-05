/* Main Controller 
 * 
 * Controller class for landing page.
 * 
 * */

app.controller('AppController',['$scope','ProductService', 'EbayService', 'rx',
                                 function($scope, ProductService, EbayService, rx){
   
	//$scope.msg = "Hello world";
	
	
	
	$scope.products = ProductService.productList();
	
	/*EbayService.findProductFromPartnerSite().then(
		
		function( response ){
			
			
			$scope.partnersiteItems = [];
			
			var items = response.data.findItemsByKeywordsResponse[0].searchResult[0].item;
			
			angular.forEach( items, function(item){
				
				$scope.partnersiteItems.push(
						
				{
					title : item.title[0],
					condition : item.condition[0].conditionDisplayName[0],
					country : item.country[0],
					//imgURL : item.galleryPlusPictureURL[0],
					viewItemURL : item.viewItemURL[0]
					
					
				}
				
				);
				
				
			});
			
			$scope.isLoading = false;
			
		}	
	
	
			
			
			
	);*/
	
	
	/**
	 * Using RxJS
	 */
	
	function searchEbay( term ){
		
		return  rx.Observable.fromPromise( EbayService.findProductFromPartnerSite( term ) ).map(
			   
				function ( response ) {
			      return response;	
				}
			);
		
		
		
	}
	
	
	 $scope.$createObservableFunction('click')
     .map(function () { 
    	 
    	 $scope.isLoading = true;
    	 $scope.partnersiteItems = [];
    	 return $scope.search; 
    	 
     })
     .flatMapLatest(searchEbay)
     .subscribe(function(response) {
        
    		$scope.partnersiteItems = [];
			
			var items = response.data.findItemsByKeywordsResponse[0].searchResult[0].item;
			
			angular.forEach( items, function(item){
				
				$scope.partnersiteItems.push(
						
				{
					title : item.title[0] == undefined ? '' : item.title[0],
					condition : item.condition == undefined ? '' : item.condition[0].conditionDisplayName[0],
					country : item.country[0] == undefined ? '' :  item.country[0],
					imgURL : item.galleryURL == undefined ? '' : item.galleryURL[0],
					viewItemURL : item.viewItemURL == undefined ? '' :  item.viewItemURL[0]
					
				}
				
				);
				
				
			});
			
			$scope.isLoading = false;
    	 
     });
	
   
	
   
    
}]);
