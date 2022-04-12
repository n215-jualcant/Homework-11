
// dis be for the exporting

var homeContent = `<h1>HOME</h1>`;

var aboutContent = `<h1>ABOUT</h1> 
<button oneclick="dynamicListeners()">PRESS</button><a href="#">ABOUT Button</a>`;

var productsContent = `<h1>PRODUCTS</h1>`;
var contactContent = `<h1>CONTACT</h1>`;

export var myName = "todd";


// page name being pulled from app.js
export function modelPageName(pgName){
    console.log("pgName");

    $("#app").html(eval(pgName));
}