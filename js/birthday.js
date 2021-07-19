var username = prompt ("Enter your name: ");
var age = prompt ("Enter your age: ");

if (age >= 50)
{
    alert ("Happy Birthday " + username + "! You are " + age + ". You're getting old!");
}
else if (age < 50)
{
    alert ("Happy Birthday " + username + "! You are " + age + ". You're still young!");
}
else
{
    alert ("Happy Birthday " + username + "! You are " + age + ". You didn't enter a number when I asked for your age!");
}