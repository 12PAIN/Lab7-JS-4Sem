
function page(){

    let body = document.getElementById('bodyMain');

    let text = document.createElement('p');
    text.innerText = 'Определить процент символов латинского алфавита:';

    body.appendChild(text);

    let form = document.createElement('form');

    let input = document.createElement('input');

    input.id = 'inputValue';
    input.type = 'text';
    input.placeholder = 'Введите строку';

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

    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 
        'f', 'g', 'h', 'i', 'k',
        'j', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
    ];

    let str = value.split('');

    let count = str.filter(char => alphabet.includes(char));


    let len = str.length;
    let len1 = count.length;

    let checkValue = len1/(len/100);

    alert(Math.floor(checkValue*100)/100 + '% латинских символов'); 
}

page();