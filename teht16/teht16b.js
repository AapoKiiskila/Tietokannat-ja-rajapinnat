const prompt = require('prompt-sync')();

let reverse = "";
let word = prompt("Anna sana: ");


for (let x = word.length - 1; x >= 0; x--)
{
    reverse = reverse + word[x];
}


if (word == reverse)
{
    console.log("Palindrome!")
}

else
{
    console.log("Not a palindrome")
}