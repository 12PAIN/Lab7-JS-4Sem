
function page(){

    let body = document.getElementById('bodyMain');

    let text = document.createElement('p');
    text.innerText = 'Получить значение синуса:';

    body.appendChild(text);

    let form = document.createElement('form');
    form.onsubmit = sinCaller;

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

function sinCaller(){
    let value = document.getElementById('inputValue').value;

    alert(Math.sin(value));
}

page();