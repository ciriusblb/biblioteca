(function(){
	"use strict";
	angular.module("booksApp")
		.controller("LoginCtrl",LoginCtrl);
	function LoginCtrl($state){
      var me = this;
      me.login={
      	username:'',
      	password:''
      };
      me.state=0;
      me.sesion=function(){
      	if(me.login.username=='ciro' && me.login.password=='ciro'){
      		 me.state=1;
      		$state.go('home');
      	}
      }
  }
}());