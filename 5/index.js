
function page(){

    let body = document.getElementById('bodyMain');

    let text = document.createElement('p');
    text.innerText = 'Проверить email:';

    body.appendChild(text);

    let form = document.createElement('form');

    let input = document.createElement('input');

    input.id = 'inputValue';
    input.type = 'text';
    input.placeholder = 'Введите email';

    let submit = document.createElement('input');
    submit.type = 'button';
    submit.value = 'Ввести';
    submit.addEventListener('click', caller, false);

    form.appendChild(input);
    form.appendChild(submit);

    body.appendChild(form);

}

function caller(){
    let value = document.getElementById('inputValue').value;

    let str = value.split('');
   
    str = str.filter(char => char == '@');
    
    if(str.length > 0) alert("Знак @ есть!")
    else alert('Знака @ нет в строке');
}

page();