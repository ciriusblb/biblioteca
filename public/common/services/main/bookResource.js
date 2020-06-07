(function(){
	"use strict";
	angular.module("common.services")
		.factory("bookResource",bookResource);

	function bookResource($resource){
		return $resource("/api/school/:Carrera");//estructura de url}
	}
}());