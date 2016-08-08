
angular.module('mean.auth').service("FacebookAuth", ['$resource', function($resource) {
    'use strict';
    return $resource('/auth/facebook');
}]);
angular.module('mean.auth').service("TwitterAuth", ['$resource', function($resource) {
    'use strict';
    return $resource('/auth/twitter');
}]);
angular.module('mean.auth').service("GoogleAuth", ['$resource', function($resource) {
    'use strict';
    return $resource('/auth/google');
}]);
angular.module('mean.auth').service("SignOut", ['$resource', function($resource) {
    'use strict';
    return $resource('/signout');
}]);
angular.module('mean.auth').service("LogIn", ['$resource', function($resource) {
    'use strict';
    return $resource('/users/session');
}]);
angular.module('mean.auth').service("SignUp", ['$resource', function($resource) {
    'use strict';
    return $resource('/users');
}]);