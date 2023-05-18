
function page(){

    let body = document.getElementById('bodyMain');

    let text = document.createElement('p');
    text.innerText = 'Введите 1 точку квадрата:';

    body.appendChild(text);

    let form = document.createElement('form');

    //////
    let input01 = document.createElement('input');

    input01.id = 'squarePoint01';
    input01.type = 'text';
    input01.placeholder = 'Введите число';

    let input02 = document.createElement('input');

    input02.id = 'squarePoint02';
    input02.type = 'text';
    input02.placeholder = 'Введите число';
    //////




    //////
    let text1 = document.createElement('p');
    text1.innerText = 'Введите 2 точку квадрата:';
    //////



    //////
    let input11 = document.createElement('input');

    input11.id = 'squarePoint11';
    input11.type = 'text';
    input11.placeholder = 'Введите число';

    let input12 = document.createElement('input');

    input12.id = 'squarePoint12';
    input12.type = 'text';
    input12.placeholder = 'Введите число';
    //////



    //////
    let text2 = document.createElement('p');
    text2.innerText = 'Введите точку на проверку:';
    //////



    //////
    let input21 = document.createElement('input');

    input21.id = 'checkPoint1';
    input21.type = 'text';
    input21.placeholder = 'Введите число';

    let input22 = document.createElement('input');

    input22.id = 'checkPoint2';
    input22.type = 'text';
    input22.placeholder = 'Введите число';
    //////

    let submit = document.createElement('input');
    submit.type = 'button';
    submit.value = 'Ввести';
    submit.addEventListener('click', checkPoint, false);

    form.appendChild(input01);
    form.appendChild(input02);
    form.appendChild(text1);
    form.appendChild(input11);
    form.appendChild(input12);
    form.appendChild(text2);
    form.appendChild(input21);
    form.appendChild(input22);
    form.appendChild(submit);

    body.appendChild(form);

}

function checkPoint(){
    
    
    let check = (() =>{

        let point1 = [document.getElementById('squarePoint01').value, document.getElementById('squarePoint02').value];
        let point2 = [document.getElementById('squarePoint11').value, document.getElementById('squarePoint12').value];
        let checkPoint = [document.getElementById('checkPoint1').value, document.getElementById('checkPoint2').value];

        if(checkPoint[0] > (point1[0] > point2[0] ? point1[0] : point2[0])) return 0;
        if(checkPoint[0] < (point1[0] < point2[0] ? point1[0] : point2[0])) return 0;

        if(checkPoint[1] > (point1[1] > point2[1] ? point1[1] : point2[1])) return 0;
        if(checkPoint[1] < (point1[1] < point2[1] ? point1[1] : point2[1])) return 0;

        return 1;

    })();

    if(check == 0) alert('Не входит');
    if(check != 0) alert('Входит');
}


page();