const prompt = require('prompt-sync')();

let num1 = prompt("anna luku: ");
let num2 = prompt("anna toinen luku: ");


if (num1 > num2)
{
    console.log(num1);
}

else if (num1 < num2)
{
    console.log(num2);
}

else if (num1 = num2)
{
    console.log("Luvut ovat samat")
}