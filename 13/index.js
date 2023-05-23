
let date = new Date();
let september;

if(date.getMonth() < 8){
    september = new Date(date.getFullYear(), 8, 1);
}
else{
    if(date.getMonth() == 8 && date.getDate() == 1) september = date;
    else september = new Date(date.getFullYear()+1, 8, 1);
}

alert(Math.abs(Math.floor((september - date) / (1000*60*60*24))));