app.directive('roundDirective', ['$window', function($window){
	return {
		'restrict': 'E',
		templateUrl: '/templates/round.html',
		'link': function(scope, elem, attrs) {

			scope.$watch('total', function(n, o){

				scope.recalculate();
				scope.totalWidth = scope.setWidth(n, 'h2');
				
			});

			scope.$watch('radius', function(n, o){
				
				scope.recalculate();
				scope.radiusWidth = scope.setWidth(n, 'h2');
				
			});

			scope.$watch('rotationTransform', function(n, o){
				
				scope.recalculate();
				
			});

			angular.element($window).bind('resize', function(){
				scope.xCenter = $window.innerWidth/2;
				scope.yCenter = $window.innerHeight/2;
				scope.$apply(function(){
					scope.recalculate();
				});
				scope.$digest();
			});
			
		}
	};
}])

.directive('stringToNumber', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function(value) {
        return '' + value;
      });
      ngModel.$formatters.push(function(value) {
        return parseFloat(value);
      });
    }
  };
});