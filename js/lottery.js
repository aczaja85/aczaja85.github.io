var num = prompt("How many lotto picks would you like?");
num = parseInt(num);

//check that user entered a real number between 1-7
while (isNaN(num) || num >=8 || num < 1)
{
    var num = prompt("Please renter the number of lotto picks you would like. It must be a real number less than 8:")
    num = parseInt(num);
}

var lotto = [];
var lottoPicks ="";

//fills lotto array with random numbers
for (var i = 0; i < num; i++)
{
    lotto[i] = Math.ceil(Math.random() * 99);
}

//loop to display numbers
for (var i = 0; i < num; i++)
{
    if (i == num - 1)
    {
        lottoPicks += lotto[i];
    }
    else
    {
        lottoPicks += lotto[i] + "-";
    }
}
document.getElementById("picks").innerText = lottoPicks;

// Event listener attached to button that generate new lotto picks
document.getElementById("newpicks").addEventListener("click",function generatepicks()
{
    var lotto = [];
    var lottoPicks ="";
    //fills lotto array with random numbers
    for (var i = 0; i < num; i++)
    {
        lotto[i] = Math.ceil(Math.random() * 99);
    }
    //loop to display numbers
    for (var i = 0; i < num; i++)
    {
        if (i == num - 1)
        {
            lottoPicks += lotto[i];
        }
        else
        {
            lottoPicks += lotto[i] + "-";
        }
    }
    document.getElementById("picks").innerText = lottoPicks;
});
