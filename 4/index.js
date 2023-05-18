
function page(){

    let body = document.getElementById('bodyMain');

    let text = document.createElement('p');
    text.innerText = 'Введите число:';

    body.appendChild(text);

    let form = document.createElement('form');
    form.onsubmit = caller;

    let input = document.createElement('input');

    input.id = 'inputValue';
    input.type = 'text';
    input.placeholder = 'Введите число';

    let submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Ввести';

    form.appendChild(input);
    form.appendChild(submit);

    body.appendChild(form);

}

function caller(){
    let value = document.getElementById('inputValue').value;

    alert(checkNumber(value));
}

function checkNumber(x){

    let a,b;
    let check = (() =>{
        
        for(let i = 1; i <= Math.ceil(x/2); i++){
            if( isSquare(i) && isSquare(x-i)){
                a = i;
                b = x-i;   
                return true;
            }
        }

        return 0;

    })();

    if(!check) return "Нельзя представить как сумму квадратов двух чисел";

    return "Можно представить как сумму двух квадратов чисел: " + a + " + " + b;
}

function isSquare(x){

    if(x <= 0) return false;

    let value = Math.sqrt(x);

    if (Math.floor(value)*Math.floor(value) != x) return false;

    return true;
}

page();