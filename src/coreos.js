(function() {
  'use strict';

  // formally define non-angular external dependencies
  angular.module('underscore', []).factory('_', function($window) {
    return $window._;
  });

  angular.module('underscore.string', []).factory('s', function($window) {
    return $window.s;
  });

  angular.module('jquery', []).factory('$', function($window) {
    return $window.$;
  });

  angular.module('d3', []).factory('d3', function($window) {
    return $window.d3;
  });

  angular.module('moment', []).factory('moment', function($window) {
    return $window.moment;
  });

  angular.module('coreos.services', [
    'coreos.events',
    'underscore',
    'jquery',
    'underscore.string'
  ]);
  angular.module('coreos.ui', [
    'coreos.events',
    'underscore',
    'jquery',
    'd3',
    'ui.bootstrap',
    'moment'
  ]);
  angular.module('coreos.filters', ['underscore']);
  angular.module('coreos.events', []);
  angular.module('coreos', [
    'coreos.events',
    'coreos.services',
    'coreos.ui',
    'coreos.filters',
    'coreos-templates-html',
    'coreos-templates-svg',

    // other external deps
    'ngRoute',
    'ngAnimate',
  ])
  .config(function($compileProvider) {
    // Allow irc links.
    $compileProvider
      .aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|irc):/);
  });

}());
