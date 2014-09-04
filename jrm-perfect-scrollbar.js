'use strict';

/**
 * @ngdoc directive
 * @description
 * # jrmPerfectScrollbar
 */
angular.module('mtbInteractiveApp')
  .directive('jrmPerfectScrollbar', function ( $timeout ) {
    return {
      restrict: 'A',
      scope: {
        includePadding: '@',
        maxScrollbarLength: '@',
        minScrollbarLength: '@',
        scrollXMarginOffset: '@',
        scrollYMarginOffset: '@',
        suppressScrollX: '@',
        suppressScrollY: '@',
        updateOnInit: '@',
        useBothWheelAxes: '@',
        useKeyboard: '@',
        wheelPropagation: '@',
        wheelSpeed: '@',
      },
      link: function postLink(scope, element) {
        var init;
        var updateOnInitTimer;

        init = function() {
          element.perfectScrollbar({
            includePadding: scope.includePadding || false,
            maxScrollbarLength: scope.maxScrollbarLength || null,
            minScrollbarLength: scope.minScrollbarLength || null,
            scrollXMarginOffset: scope.scrollXMarginOffset || 0,
            scrollYMarginOffset: scope.scrollYMarginOffset || 0,
            suppressScrollX: scope.suppressScrollX || false,
            suppressScrollY: scope.suppressScrollY || false,
            useBothWheelAxes: scope.useBothWheelAxes || false,
            useKeyboard: scope.useKeyboard || true,
            wheelPropagation: scope.wheelPropagation || false,
            wheelSpeed: scope.wheelSpeed || 1
          });

          if ( scope.updateOnInit ) {
            updateOnInitTimer = $timeout(function() {
              element.perfectScrollbar('update');
            });
          }
        };

        scope.$on('$destroy', function() {
          $timeout.cancel(updateOnInitTimer);
        });

        return init();
      }
    };
  });