var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = new Array(12);

for (let i = 0; i < 12; i++)
{
    x[i] = new Array(12);
}

var total = 0;

var tipo = lines.shift();

for (let i = 0; i < 12; i++)
{
    for (let j = 0; j < 12; j++)
    {
        x[i][j] = parseFloat(lines.shift());
    }
}

var aux = 1;
for (let j = 11; j > 0; j--)
{
    for (let i = aux; i < 12; i++)
    {
        total += x[j][i]; 
    }
    aux++;
}


if (tipo == "S")
{
    console.log(`${total.toFixed(1)}`);
}
else if (tipo == "M")
{
    let result = (total/66.0);
    console.log(`${result.toFixed(1)}`);
}