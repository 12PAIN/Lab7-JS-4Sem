
function page(){

    let body = document.getElementById('bodyMain');

    let text = document.createElement('p');
    text.innerText = 'Введите 2 строки:';

    body.appendChild(text);

    let form = document.createElement('form');

    let input = document.createElement('input');

    input.id = 'inputValue';
    input.type = 'text';
    input.placeholder = 'Введите строку 1';

    let input1 = document.createElement('input');

    input1.id = 'inputValue1';
    input1.type = 'text';
    input1.placeholder = 'Введите строку 2';

    let submit = document.createElement('input');
    submit.type = 'button';
    submit.value = 'Ввести';
    submit.addEventListener('click', caller, false);

    form.appendChild(input);
    form.appendChild(input1);
    form.appendChild(submit);

    body.appendChild(form);

}

function caller(){
    let str1 = document.getElementById('inputValue').value;
    let str2 = document.getElementById('inputValue1').value;

    let char0 = str1.split('')[0];
    
    let check = str2.split('').filter(char => char == char0);

    alert('Символ ' + char0 + ' встречается во второй строке ' + check.length + ' раз!');
    
}

page();