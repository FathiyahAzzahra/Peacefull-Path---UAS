angular.module("myApp")
    .controller("authController", function ($scope, authService) {
        // Fungsi untuk registrasi
        $scope.register = function () {
            authService.register($scope.registerData).then(function (response) {
                alert(response.data.message); // Menampilkan notifikasi jika registrasi berhasil
                console.log("Registration successful", response);
            }, function (error) {
                alert(error.response.data.message); // Menampilkan error jika registrasi gagal
                console.log("Registration error", error);
            });
        };

        // Fungsi untuk login
        $scope.login = function () {
            authService.login($scope.loginData).then(function (response) {
                alert(response.data.message); // Menampilkan notifikasi jika login berhasil
                console.log("Login successful", response);
            }, function (error) {
                alert(error.response.data.message); // Menampilkan error jika login gagal
                console.log("Login error", error);
            });
        };
    });
