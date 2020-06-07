(function(){
	"use strict";
	angular.module("booksApp")
		.controller("BookCtrl",BookCtrl);

		function BookCtrl(bookResource,$state,$interval){
		var me=this;
		bookResource.query(function(data){

			me.carreras=data;
		});
		me.mover= function(ruta){
			me.view=1;
			me.promise=$interval(function(){
				$state.go('carrera', {Carrera:ruta});
				$interval.cancel(me.promise);
         	},1000);
         	
		}
	}
}());