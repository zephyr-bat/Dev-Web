function initialize() {
/*test si l'API est géré par le navicateur puis stocke le résultat dans une variable*/	
var bSupportsLocal = (('localStorage' in window) && window['localStorage'] !== null); 

/*Indique à l'utilisateur si l'API n'est pas supporté*/
if (!bSupportsLocal) {
document.getElementById('infoform').innerHTML = "<p>Désolé, ce navigateur nesupporte pas l’API Web Storage du W3C.</p>";
return;
}
/*Si le stockage local n'est pas vide on le remplis le formulaire*/
if (window.localStorage.length != 0) {
document.getElementById('firstName').value = window.localStorage.getItem('firstName');/*remplis le champs first name*/
document.getElementById('lastName').value = window.localStorage.getItem('lastName');/*remplis le champs last name*/
document.getElementById('postCode').value = window.localStorage.getItem('postCode');/*remplis le champs post code*/
}

}
/*La fonction va stocker les informations dans le stockage quand le bouton enregistrer est utiliser*/
function storeLocalContent(fName, lName, pCode) {
window.localStorage.setItem('firstName', fName);
window.localStorage.setItem('lastName', lName);
window.localStorage.setItem('postCode', pCode);
}

/*Vide le stockage local de l'utilisateur */
function clearLocalContent(fName, lName, pCode) {
window.localStorage.clear(); 
}
window.onload = initialize;
