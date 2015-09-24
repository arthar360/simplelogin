angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function () {

      var userData = {
        username: $scope.data.username,
        password: $scope.data.password
      };

      LoginService.sqlsignin(userData, function (res) {
          var alertPopup = $ionicPopup.alert({
            title: 'return data',
            template: res.data
          });
          $state.go('tab.dash');
        }, function () {
          var alertPopup = $ionicPopup.alert({
            title: 'WARNING',
            template: '<strong>Error:</strong> Can\'t sign in! - contact IT (No Internet)'
          });
        }
      )
    }
});
