
var noun1 = prompt ("Enter a noun:");
var noun2 = prompt ("Enter another noun:");
var verb1 = prompt ("Enter a verb (past tense):");
var verb2 = prompt ("Enter another verb (past tense):");
var adj1 = prompt ("Enter an adjective:");
var adj2 = prompt ("Enter another adjective:");

function showstory()
{
document.getElementById("story").className=" ";    
document.getElementById("noun1").innerHTML=noun1;
document.getElementById("noun1b").innerHTML=noun1;
document.getElementById("noun1c").innerHTML=noun1;
document.getElementById("noun1d").innerHTML=noun1;
document.getElementById("noun1e").innerHTML=noun1;
document.getElementById("noun2").innerHTML=noun2;
document.getElementById("verb1").innerHTML=verb1;
document.getElementById("verb2").innerHTML=verb2;
document.getElementById("adj1").innerHTML=adj1;
document.getElementById("adj2").innerHTML=adj2;
}