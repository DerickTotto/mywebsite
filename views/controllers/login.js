//const jsdom = require ( "jsdom" );
//const dom = new jsdom.JSDOM("");
//const $ = require ( 'jquery' )( dom.window );
import jsdom from "jsdom";
const dom = new jsdom.JSDOM("");
import $ from ( 'jquery' )( dom.window );

var email;
var password;

$("#Signin").click(()=>{
    console.log("Intentaste logear");
})