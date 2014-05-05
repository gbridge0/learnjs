angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, PetService) {
  
  // "Pets" is a service returning mock data (services.js)
  // $scope.pets = PetService.all();

  var petsRef = new Firebase('https://ionicpet.firebaseio.com/pets');
  petsRef.on('value', function(snapshot) {
      $scope.pets = snapshot.val();
  });

})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  //$scope.pet = PetService.get($stateParams.petId);

    var petRef = new Firebase('https://ionicpet.firebaseio.com/pets/' + $stateParams.petId);
  	petRef.on('value', function(snapshot) {
      $scope.pet = snapshot.val();
  });
});
