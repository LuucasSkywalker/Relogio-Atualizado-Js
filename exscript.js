function carregar(){
let msg = document.querySelector('div#mensagem');
let img = document.getElementById('img');
let ddhoje = document.getElementById('datadehoje');
let foto = document.getElementById('foto');
let horahoje = new Date();
let hora = horahoje.getHours();
let datahoje = new Date();
let data = datahoje.getDay();
let minutoshoje = new Date();
let minutos = minutoshoje.getMinutes();

if (hora > 7 && hora <= 12){
     img.src = 'dia.png'
     msg.style.color= 'wheat'
     foto.style.background = 'wheat'
     document.body.style.background = 'wheat'
     msg.innerHTML = `<strong>BOM DIA</strong>, agora são ${hora}:${minutos} hrs!`

 } else if (hora >=13 && hora <= 18 ){
     img.src = 'tarde.png'
     msg.style.color= 'orange'
     foto.style.background = 'orange'
     document.body.style.background = 'orange'
     msg.innerHTML = `<strong>BOA TARDE</strong>, agora são ${hora}:${minutos} hrs!`

 } else if (hora > 18 && hora < 23){
     img.src = 'noite.png'
     msg.style.color= 'cornflowerblue'
     foto.style.background = 'cornflowerblue'
     document.body.style.background = 'cornflowerblue'
     msg.innerHTML = `<strong>BOA NOITE</strong>, agora são ${hora}:${minutos} hrs!`

 } else {
     img.src = 'madrugada.png'
     msg.style.color = 'cadetblue'
     foto.style.background = 'cadetblue'
     document.body.style.background= 'cadetblue'
     msg.innerHTML = `<strong>BOA MADRUGADA</strong>, agora são ${hora}:${minutos} hrs!`

 }

   switch (data){
        case 0:
          ddhoje.innerHTML = ` <strong>Domingo</strong>` 
        break;
        case 1:
            ddhoje.innerHTML = `<strong>Segunda-feira</strong>` 
        break;      
        case 2:
            ddhoje.innerHTML = '<strong>Terça-feira</strong>'
        break;  
        case 3:
            ddhoje.innerHTML = '<strong>Quarta-feira</strong>'
        break;
        case 4:
            ddhoje.innerHTML = '<strong>Quinta-feira</strong>' 
        break;
        case 5:
            ddhoje.innerHTML = '<strong>Sexta-feira</strong>'  
        break;
        case 6:
            ddhoje.innerHTML = '<strong>Sabado</strong>'  
        default:
        break;        
   }   

}

