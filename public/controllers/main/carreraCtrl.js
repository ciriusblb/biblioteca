(function(){
	"use strict";
	angular.module("booksApp")
		.controller("CarreraCtrl",CarreraCtrl);

		//min-safe array
		function CarreraCtrl(newsItem){
		var me=this;
		
		me.newsItem = newsItem;
		 me.comentarios=[{
	        coment:'hola'
	      },
	      {
	        coment:'hola'
	      },
	      {
	        coment:'hola'
	      }
	      ];
		me.showModal=function(libro){
			me.libro=libro;
		}
		me.responder=function(answer){
			var coment={coment:answer};
			me.comentarios.unshift(coment);
		}

	}
}());