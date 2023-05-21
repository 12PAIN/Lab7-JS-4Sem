

let generateArray = (length,max) => (
    [...new Array(length)].map(() => Math.round(Math.random() * max))
);

let n = prompt('Введите n:');

n = Number.parseInt(n);

let arr = generateArray(n, 10);

let resultStr = '';

for(let i = 0; i < n; i+=5){
    for(let j = i+4; j >= i; j--){
        if(j < n) resultStr += arr[j] + ' ';
    }
    resultStr += '\n';
}

alert('Результат:\n' + resultStr);