app.controller('RoundCtrl', ['$scope', '$window', function($scope, $window) {

	$scope.radius = 300;
	$scope.xCenter = $window.innerWidth/2;
	$scope.yCenter = $window.innerHeight/2;

	$scope.totalWidth;
	$scope.radiusWidth;

	$scope.total = 10;
    $scope.low = 10;
    $scope.high = 20;
    $scope.rotation = -.25;
    $scope.rotationTransform = ($scope.rotation + .25) * 100;

    $scope.rotation2Number = function(){
    	return $scope.rotation + .25;
    };

	$scope.rangeRandomInclusive = function(a, b){
		var low = Math.min(a, b),
			high = Math.max(a, b);
		return low + Math.ceil(Math.random() * (high - low));
	};

	$scope.pointsOnACircle = function(increments, dim, outer){
		var i,
			points = [];

		for(i = 0; i < increments; i++){
			var radian = i * 2 * Math.PI / increments + ($scope.rotation * 2 * Math.PI);

			console.log( (outer || 0) + parseInt($scope.radius) );
			points.push({
				'left': ($scope.xCenter + Math.cos(radian) * (parseInt($scope.radius) + (outer || 0)) - (dim.w/2)) + 'px',
				'top': ($scope.yCenter + Math.sin(radian) * (parseInt($scope.radius) + (outer || 0)) - (dim.h/2)) + 'px',
				'width': dim.w + 'px',
				'height': dim.h + 'px'
			});
		}

		return points;
	};
    $scope.range = $scope.rangeRandomInclusive($scope.low, $scope.high);

	$scope.recalculate = function(){
		$scope.rotation = $scope.rotationTransform/100 - .25;
		$scope.points = $scope.pointsOnACircle( $scope.total, {w:6, h:6} );
	    $scope.outerPoints = $scope.pointsOnACircle($scope.total, {w:12, h:12}, 13);
	};

	$scope.setWidth = function (value, elem) {
        var tmp = document.createElement(elem),
        	theWidth;
        tmp.style.visibility = 'hidden';
        tmp.style.whiteSpace = 'pre';
        tmp.style.display = 'inline';
        tmp.innerHTML = value;

        document.body.appendChild(tmp);
        theWidth = tmp.getBoundingClientRect().width;
        document.body.removeChild(tmp);

        return {'width': theWidth + 'px'};
	};

}]);