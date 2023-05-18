
function page(){

    let body = document.getElementById('bodyMain');

    let text = document.createElement('p');
    text.innerText = 'Получить значение последовательности:';

    body.appendChild(text);

    let form = document.createElement('form');
    form.onsubmit = сaller;

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

function сaller(){
    let value = document.getElementById('inputValue').value;

    alert(calculate(value));
}

function calculate(x){

    if(x == 0 || x == 1) return 1;

    return calculate(x-1) + calculate(x-2);

}

page();