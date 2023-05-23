
function page(){

    let body = document.getElementById('bodyMain');

    let text = document.createElement('p');
    text.innerText = 'Добавить n дней к дате:';

    body.appendChild(text);

    let form = document.createElement('form');

    let input = document.createElement('input');

    input.id = 'inputValue';
    input.type = 'text';
    input.placeholder = 'Введите n';

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

    value = Number.parseInt(value);

    let date = new Date();
    date.setDate(date.getDate() + value);
    alert(date);
}

page();