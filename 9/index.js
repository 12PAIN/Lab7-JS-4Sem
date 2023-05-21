
let arr = [];

for(let i = 0; i < 10; i++){
    arr.push(prompt('Введите число ' + i+1 + ':'));
}

arr = arr.reverse()

let resultStr = '';

for(let number of arr){
    resultStr += number + ' ';
}

alert(resultStr);