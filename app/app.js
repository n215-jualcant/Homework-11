import * as MODEL from "../model/model.js";





// var homeContent = `<h1>HOME</h1>`;
// var aboutContent = `<h1>ABOUT</h1>`;
// var productsContent = `<h1>PRODUCTS</h1>`;
// var contactContent = `<h1>CONTACT</h1>`;

function route(){
    let hashTag = window.location.hash; 
    let pageName = hashTag.replace("#","");
    console.log(pageName);
    let pageContent = pageName + "Content";

    if (pageName == ""){
        pageContent = "homeContent";
    }

    MODEL.modelPageName(pageContent);
}
function dynamiclistners(){
    console.log("dynamic");
}


function initlisteners(){
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function (){
initlisteners();
});