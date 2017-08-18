 var app = angular.module('ourModule', []);

 app.controller('ourController', function($scope) {

  $scope.shoppingList = [
    { name: 'bananas', cost:3.54},
    {name:'oranges', cost:2.75},
    {name:'peaches',cost:2.65},
    {name:'blue berry pie', cost:6.55},
    {name:'lettuce',cost:2.34},
    {name: 'zucchini', cost: 3.76}

  ];

   $scope.addItem = function(newItem){
     console.log(newItem);
     $scope.shoppingList.push(newItem);

     };
     console.log($scope.shoppingList);
  

    $scope.removeItem = function(newItem){
      var index = $scope.shoppingList.indexOf(newItem);
    $scope.shoppingList.splice(index,1);
    }
  });
