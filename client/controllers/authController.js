app.controller("authController", function($scope, authService) {
    $scope.loginData = {};
    $scope.registerData = {};

    $scope.login = function() {
        authService.login($scope.loginData).then(function(response) {
            alert("Login successful!");
        }, function(error) {
            alert("Login failed!");
        });
    };

    $scope.register = function() {
        authService.register($scope.registerData).then(function(response) {
            alert("Registration successful!");
        }, function(error) {
            alert("Registration failed!");
        });
    };
});
