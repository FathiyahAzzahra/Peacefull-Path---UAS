angular.module("myApp")
    .service("authService", function ($http) {
        const apiUrl = "/api";

        // Fungsi untuk registrasi
        this.register = function (data) {
            return $http.post(`${apiUrl}/register`, data)
                .then(function (response) {
                    return response.data;  // Mengembalikan response data
                })
                .catch(function (error) {
                    throw error;  // Menangani error
                });
        };

        // Fungsi untuk login
        this.login = function (data) {
            return $http.post(`${apiUrl}/login`, data)
                .then(function (response) {
                    return response.data;  // Mengembalikan response data
                })
                .catch(function (error) {
                    throw error;  // Menangani error
                });
        };
    });
