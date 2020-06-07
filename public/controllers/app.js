(function(){
	"use strict";
	var app = angular.module("booksApp",["ui.router","common.services","common.servicesMock"]);

	
	app.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise("/BooksApp/Home/notificaciones");
		
		//definimos las vistas con ui.
		$stateProvider
		   	.state('BooksApp',{
			   	url: '/BooksApp',
			   	templateUrl:'/views/user/login.html',
			   	controller:'LoginCtrl as vm'
		   	})
		    .state('home',{
		    	abstract:true,
		   	 	url: '/BooksApp/Home',
		   	 	templateUrl:'/views/main/home.html',
		   	 	controller:'MainCtrl as vm'
		   	})
		   	.state('home.perfil',{
		   	 	url: '/perfil',
		   	 	templateUrl:'/views/main/home/perfil.html'
		   	})
		   	.state('home.notificaciones',{
		   	 	url: '/notificaciones',
		   	 	templateUrl:'/views/main/home/notificaciones.html'
		   	})
		   	.state('school',{
		   	 	url: '/BooksApp/School',
		   	 	templateUrl:'/views/main/book.html',
		   	 	controller:'BookCtrl as vm'
		   	})
		   	.state('carrera',{
		   	 	url: '/BooksApp/School/:Carrera',
		   	 	templateUrl:'/views/main/book/carreraBook.html',
		   	 	controller:'CarreraCtrl as vm',
		   	 	resolve: {
			 	 	bookResource:"bookResource",
			 	 	newsItem: function(bookResource,$stateParams){
			 	 		var Carrera= $stateParams.Carrera;
			 	 		return bookResource.get({Carrera: Carrera}).$promise;
			 	 	}
			 	}
		   	})

	});


}());