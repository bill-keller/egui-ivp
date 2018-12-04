'use strict';

// Register `itemList` component, along with its associated controller and template
angular.
  module('itemList').
  component('itemList', {
    templateUrl: 'templates/item-list.template.html',
    controller: ['$http', function ItemListController($http) {
      var self = this;
      self.orderProp = 'ca_description';

      $http.get('http://tec6mvs:9082/catalogManager/items?startItemID=0010').then(function(response) {
      //$http.get('http://tec6mvs:9080/catalog/items?startItemID=0010').then(function(response) {

			self.items = response.data.DFH0XCMNOperationResponse.ca_inquire_request.ca_cat_item;
	
      });
    }]
  });
