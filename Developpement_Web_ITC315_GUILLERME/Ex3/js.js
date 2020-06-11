function testFonctionnalites() {
	/*test si la géolocalisation est disponible sur le navigateur*/ 
	document.querySelector("#geoloc").innerHTML = Modernizr.geolocation ? "pris en charge" : "non pris encharge";
	/*test si l'utilisateur possède un écran tactile*/
	document.querySelector("#touch").innerHTML = Modernizr.touch ? "pris en charge" : "non pris encharge" ;
	/*test si les images SVG sont prit en charge*/
	document.querySelector("#svg").innerHTML = Modernizr.svg ? "pris en charge" : "non pris en charge";
	/*test si les animations,Canvas sont activé sur le navigateur*/
	document.querySelector("#canvas").innerHTML = Modernizr.canvas ? "pris en charge" : "non pris encharge";
}
window.onload = testFonctionnalites;

