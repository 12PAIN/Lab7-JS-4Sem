
let lang = prompt("Insert your language code!");
let color = prompt("Insert color of text");

function greet(lang, color){

    let greeting = '';

    switch(lang){
        case 'ru': 
            greeting = 'Здравствуйте!';
            break;

        case 'en': 
            greeting = 'Hello!';
            break;

        case 'fr': 
            greeting = 'Bonjour!';
            break;

        case 'de': 
            greeting = 'Guten Tag!';
            break;

        default: 
            color = 'black';
            greeting = 'Error! Wrong language!'
            break;
    }

    document.write(`<p style="color:${color}">${greeting}</p>`);
}

greet(lang, color);