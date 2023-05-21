
function page(){

    let body = document.getElementById('bodyMain');

    let text = document.createElement('p');
    text.innerText = 'Удалить повторны слова:';

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

    let words = value.split(' ');

    let resultLowerCase = [];
    let result = [];

    for(let i = 0; i < words.length; i++){
        
        if(resultLowerCase.includes(words[i].toLowerCase())) continue;

        result.push(words[i]);
        resultLowerCase.push(words[i].toLowerCase());
    }

    let resultStr = (()=>{
        let tmpResult = '';
        for(let word of result){
            tmpResult += word + ' ';
        }
        return tmpResult;
    })();

    alert(resultStr);

}

page();