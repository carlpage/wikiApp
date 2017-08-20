var myApp = angular.module('myApp');

myApp.service('WikiService', function($http) {
  console.log('in the service');
  var sv = this;

  sv.wikiGet = function(search) {
    console.log(search);
    return $http({
      method: 'GET',
      url: 'https://en.wikipedia.org/w/api.php?', // edit parameters
      params: {
        format: "json",
        action: "query",
        srsearch: search,
        list: "search",
        explaintext: "",
        srwhat: "text",
        prop: 'revisions',
        rvprop: 'content',
        rvsection: 0,
        rvparse: ''
      }
    }).then(function(response) {
      console.log('in service, wiki data: ', response.data);
      sv.wikiResult = response.data;
      return response.data;
    });
  } // end openMenuGet
});
