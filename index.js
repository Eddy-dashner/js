const main = document.createElement("div");
main.id="main";

const test = document.createElement("h3")
test.id="test";
innerHtml="today we learned"
const hash = document.createElement("p");
hash.id="hash"

const pkid = document.createElement("p")
pkid.id="pkid";

const java = document.createElement("h1");
java.id="java";

const link = document.createElement("a");
link.id="link";
link.href="./abouthtml"

const image =document.createElement("img");
image.img="image";


main.appendChild(main);
main.appendChild(test);
main.appendChild(hash);

//---------------------dates------------
const today="dates";
let p = document.getElementById("test");
let p1=new Date ("2000-7-10")
let day=p1.getDay();
p.innerHTML=day;
let month= p1.getMonth()+1;
p.innerHTML=month;



let website = window.location.href;
p.innerHTML =website
let protocol= window.location.protocol;
p.innerHTML=protocol;
let pathname = window.location.pathname;
p.innerHTML=pathname;

let back= document.getElementById("back");
let history=window.history.length;
back.innerHTML = history;

let alert ;
p.innerHTML= alert;
window.confirm("dashner weee");

window.location.href="https://www.instagram.com";
window.location.replace="hhtps://www.twitter.com";

const div=document.ceateElementById("a");
div.href=("www.google.com");








