
// dis be for the exporting

var homeContent = `<h1>HOME</h1>`;

var aboutContent = `<h1>ABOUT</h1> 
<button oneclick="dynamicListeners()">PRESS</button><a href="#">ABOUT Button</a>`;

var productsContent = `<h1>PRODUCTS</h1>`;
var contactContent = `<h1>CONTACT</h1>`;

export var myName = "todd";


// page name being pulled from app.js
export function modelPageName(pgName){
    // console.log("pgName");

    // $("#app").html(eval(pgName));
    if(pgName == "homeContent") {
        $("nav a").removeClass("blue-text").addClass("white-text");
        $("nav span").removeClass("blue-text").addClass("white-text");

} else{
    $("nav a").removeClass("white-text").addClass("blue-text");
    $("nav span").removeClass("white-text").addClass("blue-text");
}
try{
    eval(pgName);
    $("#app").html(eval(pgName));
} catch (e){
    console.log("hello", e);
}
}