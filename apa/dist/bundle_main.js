/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponderi__ = __webpack_require__(1);


function MIN(a,b){
  if(a > b) {return b;}
  if(a < b) {return a;}
}	
document.getElementById('firstButton').addEventListener('click',function(){
 	var locatie;
 	var destinatie;
 	 	var el = document.getElementById("locatie");
	     locatie = el.options[el.selectedIndex].value;
        var totalSum = document.getElementById('suma').value;
 		var ed = document.getElementById("destinatie");
	     destinatie = ed.options[ed.selectedIndex].value;
       if(document.getElementById('auto').checked) {
        Dijkstra(__WEBPACK_IMPORTED_MODULE_0__ponderi__["a" /* auto */],locatie,destinatie,totalSum);
       }
       if(document.getElementById('avion').checked) {
        Dijkstra(__WEBPACK_IMPORTED_MODULE_0__ponderi__["b" /* avion */],locatie,destinatie,totalSum);
       }    
 });
 function Dijkstra(gr,loc,dest,totalSum){
 		var suma=parseInt(totalSum);
 		var string="";
 		var drumuri=[];
 		window.drum=[];
       	var ant = [];
		var current = [];
		var index = [];
		var initial = parseInt(loc);
		var final = parseInt(dest);
		var min=99999;
		var n=10,x,h,m,K,i,j,k,l=0,z=0;
		var tabel = new Array(n);
		for( i=0;i<n;i++){
			tabel[i]= new Array(n);
			tabel[i].fill(0);
		}
		for( i=0; i<n; i++){
		 if(i == 0) {
		  ant.push(0);
		 } else {
		  ant.push(99999);
		 }
		 tabel[0][i]=ant[i];
		 current.push(0);
		 index.push(i);
		}
		l=final;
		index.splice(initial, 1);
		index.unshift(initial);
		while(l<n){
			if(l!=initial){
				if(initial>l){
				index.splice(l+1, 1);}
				else{index.splice(l, 1);}
				index.push(l);
				for( i=0;i<n;i++){
				                x=index[i];
				                for( j=0;j<n;j++){
				                    h=index[j];
				                    if(gr[x][h]!=0){
				                        m=current[i]+gr[x][h];
				                        current[j]=MIN(ant[j],m);}
				                    else{current[j]=ant[j];}
				                   }
				                for( k=0;k<n;k++){
				                    ant[k]=current[k];
				                    tabel[i][k]=ant[k];
				                }
				    }
			      drum.push(__WEBPACK_IMPORTED_MODULE_0__ponderi__["c" /* tari */][l]);         
			      i=n-1;
			     for( j=n-1;j>0;j--){
		        		if(tabel[j][i]!=tabel[j-1][i]){
		        			i=index[j];
		        			drum.push(__WEBPACK_IMPORTED_MODULE_0__ponderi__["c" /* tari */][i]);
		        
		        		}
			        }
			  drum.push(__WEBPACK_IMPORTED_MODULE_0__ponderi__["c" /* tari */][initial]);
			 drum.reverse();
			 if(ant[n-1]<=suma&&z==0&&ant[n-1]!=0){
			 	string=(drum.join(" -> ")+" cu costul = "+ant[n-1]);
			 	drumuri.push(string);
			 	break;
			 }
			 if(z==0){l=z;z++;}
			 if(ant[n-1]<=suma&&ant[n-1]!=0){
					string=(drum.join(" -> ")+" cu costul = "+ant[n-1]);
					drumuri.push(string);	
		 		}
			 	
			 
			 for(i=0;i<n;i++){
			 	tabel[i].fill(0);	
			 }
			 index.splice(n-1,1);
			 if(initial>l){
			 	index.splice(l+1,0,l);
			 }
			 else{
			 	index.splice(l,0,l);
			 }
			 drum.splice(0,drum.length);
			 ant.splice(0,ant.length);
			 current.splice(0,current.length);
			 for( i=0; i<n; i++){
				 if(i == 0) {
				  ant.push(0);
				 } else {
				  ant.push(99999);
				 }
				 current.push(0);
			}
		  }
		 l++;
        }
        if(drumuri.length==0){
        	document.getElementById("rez").innerHTML="Punct inaccesibil";
        } 
		else {document.getElementById("rez").innerHTML=drumuri.join("<br>");
		console.log(drumuri.join("<br>"));}
	}





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return avion; });
var tari=["Moldova","Romania","Italia","Germania","Spania","Austria","Grecia","Franta","Cehia","Turcia"];
let  x;
var coord=[];
var graf= new Array(10);
	for(var i=0;i<10;i++){
		graf[i]=new Array(10);
		graf[i].fill(0);

	}
 	fetch("js/graf_auto.txt")
	.then((res) => res.text())
		.then((data) => {
			let lines = data.split('\n');
			for(let i = 0; i < lines.length; i++) {
					x = lines[i].split(' ');
					graf[parseInt(x[0])][parseInt(x[1])]=parseInt(x[2]);
					graf[parseInt(x[1])][parseInt(x[0])]=parseInt(x[2]);
				}
		});
var auto = graf;

var avion = [
	[0, 120, 246, 317, 364, 0, 354, 349, 0, 199],
	[0, 0, 0, 55, 0, 0, 0, 0, 0, 60],
	[0, 0, 20, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 160, 0, 0, 30, 0, 0],
	[0, 0, 120, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 20, 0],
	[0, 0, 70, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 60, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 60, 0, 0, 135, 0, 0],
	[0, 0, 0, 0, 0, 0, 50, 0, 0, 0]
];


/***/ })
/******/ ]);