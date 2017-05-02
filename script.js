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
  //  });

    $scope.removeItem = function(newItem){
      var index = $scope.shoppingList.indexOf(newItem);
    $scope.shoppingList.splice(index,1);
    }
    // $scope.total = function(allTotal){
    //   var total = 0;
    //   angular.forEach($scope.shoppingList.items, function(item){
    //     total += item.qty * item.cost;
  });
    //    return total ;








  // #scope.singers =[
  //  {name: 'Michael jackson', genre: 'pop', age: 'rip'},
  //  {name: 'Beyonce', genre: 'RNB', age: 33},
  //  {name:'Michael buble',genre: 'jazz', age:34}]"
  //    <input type="text" ng-model="person">
