$(document).ready(function() {
  $('.btn').on('click', function() {
    console.log('im here!');
    $('.col-md-12 p').removeClass('effect-1');
    $('.col-md-12 p').addClass('effect-1v2')
  })
});

var myApp = angular.module('myApp', []);

// angular.module('myApp.filters', []).
//   filter('htmlToPlaintext', function() {
//     return function(text) {
//       return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
//     };
//   }
// );

myApp.controller('wikiController', function(WikiService) {
  console.log('in the controller');

  var vm = this;

  vm.wikiGet = function() {
    var search = vm.search;
    console.log(search);
    WikiService.wikiGet(search).then(function(response) {
      console.log('back in controller with: ', response);
      vm.results = WikiService.wikiResult.query.search;
      console.log(vm.results);
    })
  }; // end wikiGet

  vm.getUrl = function(id) {
    return 'https://en.wikipedia.org/?curid=' + id;
  };

  vm.parse = function(text) {
    var parser = new DOMParser().parseFromString(text);
    // var doc = parser;
    console.log(parser);
    return parser;
  }

}).filter('removeHTMLTags', function () {
    return function (text) {
      return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  }); // end controller
