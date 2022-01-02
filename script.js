function carregar(){
var agora = new Date();
var horas = agora.getHours();
var minutos = agora.getMinutes();

var tmsg = window.document.getElementById('msg');
var timg = window.document.getElementById('img');

if (horas >= 5 && horas < 12){
    tmsg.innerHTML = `Agora são ${horas} Horas da manhã e ${minutos} minutos`
    timg.src = 'images/manha1.png'
    window.document.body.style.backgroundColor = '#f6cc84'
   
    
}else if (horas >= 12  && horas < 18){
    tmsg.innerHTML = `Agora são ${horas} Horas da tarde e ${minutos} minutos`
    timg.src = 'images/tarde.png'
    window.document.body.style.backgroundColor = '#ffd568'
}
else{
    timg.src = 'images/tarde.png'
}
}