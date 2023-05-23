
function page(){

    let body = document.getElementById('bodyMain');

    let text = document.createElement('p');
    text.innerText = 'Машина:';

    body.appendChild(text);

    let form = document.createElement('form');

    let input = document.createElement('input');

    input.id = 'inputValue';
    input.type = 'text';
    input.placeholder = 'Введите цвет';

    let input1 = document.createElement('input');

    input1.id = 'inputValue1';
    input1.type = 'text';
    input1.placeholder = 'Введите марку';

    let input2 = document.createElement('input');

    input2.id = 'inputValue2';
    input2.type = 'text';
    input2.placeholder = 'Введите модель';

    let submit = document.createElement('input');
    submit.type = 'button';
    submit.value = 'Ввести';
    submit.addEventListener('click', caller, false);

    form.appendChild(input);
    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(submit);

    body.appendChild(form);

}

function caller(){

    class Car{
        constructor(color, brend, model){
            this.color = color;
            this.brend = brend;
            this.model = model;
        }
    } 

    let newCar = new Car(
        document.getElementById('inputValue').value,
        document.getElementById('inputValue1').value,
        document.getElementById('inputValue2').value
    );


    let {color, brend, model} = newCar;

    alert("Машина " + brend + " " + model + " цвета " + color);
}

page();