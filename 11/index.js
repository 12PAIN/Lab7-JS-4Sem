

function generateMatrix(length, max){

    let generateArray = (length,max) => (
        [...new Array(length)].map(() => Math.round(Math.random() * max))
    );
    
    let matrix = [];

    for(let i = 0; i < length; i++) matrix.push(generateArray(length, max));

    return matrix;

}

let n = prompt('Введите n:');

n = Number.parseInt(n);

const max = 10;

let arr = generateMatrix(n, max);

console.log(arr);

// Главная диагональ, максимальный эл-т.
let indexMain = (()=>{

    let maxElem = -10*max;
    let index = -1;

    let diagonal = [];
    for(let i = 0; i < n; i++){
        diagonal.push(arr[i][i]);
    }

    maxElem = Math.max(...diagonal);
    index = diagonal.indexOf(maxElem);

    return index;

})();

// Побочная диагональ, максимальный эл-т.
let indexAdditional = (()=>{

    let maxElem = -10*max;
    let index = -1;

    let diagonal = [];
    for(let i = 0; i < n; i++){
        diagonal.push(arr[i][n - i - 1]);
    }

    maxElem = Math.max(...diagonal);
    index = diagonal.indexOf(maxElem);

    return index;

})();

// Замена на главной
for(let i = 0; i < n; i++){
    if(i != indexMain) arr[i][i] = 0;
    else continue;
}

// Замена на побочной
for(let i = 0; i < n; i++){
    if(i != indexAdditional) arr[i][n - i - 1] = 0;
    else continue;
}

let resultStr = '';

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        resultStr += arr[i][j] + ' ';
    }
    resultStr += '\n';
}

alert('Результат:\n' + resultStr);