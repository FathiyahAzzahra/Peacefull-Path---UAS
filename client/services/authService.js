app.service("authService", function($http) {
    this.login = function(data) {
        return $http.post("/api/login", data);
    };

    this.register = function(data) {
        return $http.post("/api/register", data);
    };
});
