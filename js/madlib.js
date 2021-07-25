var choice = prompt ("Which madlib would you like to play: Night Run or Desert?")
if (choice == "Night Run")
{
    var noun1 = prompt ("Enter a noun:");
    var noun2 = prompt ("Enter another noun:");
    var verb1 = prompt ("Enter a verb (past tense):");
    var verb2 = prompt ("Enter another verb (past tense):");
    var adj1 = prompt ("Enter an adjective:");
    var adj2 = prompt ("Enter another adjective:");
    
    function showstory()
    {
        document.getElementById("title1").className=" ";    
        document.getElementById("story1").className=" ";    
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
}
else if (choice == "Desert")
{
    var desnoun1 = prompt ("Enter a noun (singular):");
    var desnoun2 = prompt ("Enter another noun (singular):");
    var desverb1 = prompt ("Enter a verb (present tense singular):");
    var desverb2 = prompt ("Enter another verb (present tense singular):");
    var desadj1 = prompt ("Enter an adjective:");
    var desadj2 = prompt ("Enter another adjective:");

    function showstory()
    {
        document.getElementById("title2").className=" ";    
        document.getElementById("story2").className=" ";    
        document.getElementById("desnoun1").innerHTML=desnoun1;
        document.getElementById("desnoun1b").innerHTML=desnoun1;
        document.getElementById("desnoun2").innerHTML=desnoun2;
        document.getElementById("desnoun2b").innerHTML=desnoun2;
        document.getElementById("desnoun2c").innerHTML=desnoun2;
        document.getElementById("desverb1").innerHTML=desverb1;
        document.getElementById("desverb2").innerHTML=desverb2;
        document.getElementById("desadj1").innerHTML=desadj1;
        document.getElementById("desadj2").innerHTML=desadj2;
    }    

}

else
{
    alert("You didn't enter Night Run or Desert correctly. Titles are case-sensitive. Reload the page and try again.")
} 
/*
var noun1 = prompt ("Enter a noun:");
var noun2 = prompt ("Enter another noun:");
var verb1 = prompt ("Enter a verb (past tense):");
var verb2 = prompt ("Enter another verb (past tense):");
var adj1 = prompt ("Enter an adjective:");
var adj2 = prompt ("Enter another adjective:");

function showstory()
{
document.getElementById("story1").className=" ";    
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
}*/