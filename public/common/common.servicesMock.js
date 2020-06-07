(function(){
	"use strict";

	var app= angular.module("common.servicesMock",["ngMockE2E"]);
	app.run( function($httpBackend) {

		$httpBackend.whenGET(/views/).passThrough();

		var carreras=[
	        {
	          carrera:'ADMINISTRACION Y NEGOCIOS INTERNACIONALES',
	          ruta:'ADMINISTRACION_Y_NEGOCIOS_INTERNACIONALES',
	          class:'skyble'
	        },
	        {
	          carrera:'CONTABILIDAD Y FINANZAS',
	          ruta:'CONTABILIDAD_Y_FINANZAS',
	          class:'skygreen'
	        },
	        {
	          carrera:'DERECHO Y CIENCIAS POLITICAS',
	          ruta:'DERECHO_Y_CIENCIAS_POLITICAS',
	          class:'skybrown'
	        },
	        {
	          carrera:'ECOTURISMO',
	          ruta:'ECOTURISMO',
	          class:'skyred'
	        },
	        {
	          carrera:'EDUCACION ESPECIALIDAD: MATEMATICAS Y COMPUTACION',
	          ruta:'EDUCACION_ESPECIALIDAD:_MATEMATICAS_Y_COMPUTACION',
	          class:'skyorange'

	        },
	        {
	          carrera:'EDUCACION INICIAL Y ESPECIAL',
	          ruta:'EDUCACION_INICIAL_Y_ESPECIAL',
	          class:'skyaqua'
	        },
	        {
	          carrera:'EDUCACION PRIMARIA E INFORMATICA',
	          ruta:'EDUCACION_PRIMARIA_E_INFORMATICA',
	          class:'skypink'
	      	},
	        {
	          carrera:'ENFERMERIA',
	          ruta:'ENFERMERIA',
	          class:'skyblue'
	      	},
	        {
	          carrera:'INGENIERIA AGROINDUSTRIAL',
	          ruta:'INGENIERIA_AGROINDUSTRIAL',
	          class:'skyaquagreen'
	      	},
	        {
	          carrera:'INGENIERIA DE SISTEMAS E INFORMATICA',
	          ruta:'INGENIERIA_DE_SISTEMAS_E_INFORMATICA',
	          class:'skypurple'
	      	},
	        {
	          carrera:'INGENIERIA FORESTAL Y MEDIO AMBIENTE',
	          ruta:'INGENIERIA_FORESTAL_Y_MEDIO_AMBIENTE',
	          class:'skyble'
	      	},
	        {
	          carrera:'MEDICINA VETERINARIA Y ZOOTECNIA',
	          ruta:'MEDICINA_VETERINARIA_Y_ZOOTECNIA',
	          class:'skygreen'
	      	}
	    ];
		
		var schoolUrl="/api/school";
		$httpBackend.whenGET(schoolUrl).respond(carreras);

		var editingRegExp= new RegExp(schoolUrl + "/[a-zA-Z]",'');
		 $httpBackend.whenGET(editingRegExp).respond(function(method,url,data){
		 	var carrerasItem={carrera:""};
		 	var parameters= url.split('/');
		 	var length= parameters.length;
		 	var carrerasItemId=parameters[length-1];
		 	carrerasItemId=carrerasItemId.replace(/_/g," ");
		 	console.log("carrera ",carrerasItemId);

		 	if(carrerasItemId){
		 		for (var i = 0; i < carreras.length; i++) {
		 			if(carreras[i].carrera==carrerasItemId){
		 				carrerasItem=carreras[i];
		 				break;
		 			}
		 		}
		 	}
		 	return [200,carrerasItem,{}];
		 });
	  });
	
}());