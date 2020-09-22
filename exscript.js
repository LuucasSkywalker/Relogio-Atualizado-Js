function carregar(){
    let msg = document.querySelector('div#mensagem');
    let img = document.getElementById('img');
    let photo = document.getElementById('foto');
    
    let dateToday = document.getElementById('datadehoje');
    let dateNow = new Date();
    let date = dateNow.getDay();
    
    let timetoday = new Date();
    let time = timetoday.getHours();
    
    let minutesToday = new Date();
    let minutes = minutesToday.getMinutes();
    
    
    setInterval (function(){
    
        let secondsToday = new Date();
        let seconds = secondsToday.getSeconds();
    },1000)
    
    
    if (time > 7 && time <= 12){
         img.src = 'dia.png'
         msg.style.color= 'wheat'
         photo.style.background = 'wheat'
         document.body.style.background = 'wheat'
         msg.innerHTML = `<strong>BOM DIA</strong>, agora são ${time}:${minutes} hrs!`
    
     } else if (time >=13 && time <= 18 ){
         img.src = 'tarde.png'
         msg.style.color= 'orange'
         photo.style.background = 'orange'
         document.body.style.background = 'orange'
         msg.innerHTML = `<strong>BOA TARDE</strong>, agora são ${time}:${minutes} hrs!`
    
     } else if (time > 18 && time < 23){
         img.src = 'noite.png'
         msg.style.color= 'cornflowerblue'
         photo.style.background = 'cornflowerblue'
         document.body.style.background = 'cornflowerblue'
         msg.innerHTML = `<strong>BOA NOITE</strong>, agora são ${time}:${minutes} hrs!`
    
     } else {
         img.src = 'madrugada.png'
         msg.style.color = 'cadetblue'
         photo.style.background = 'cadetblue'
         document.body.style.background= 'cadetblue'
         msg.innerHTML = `<strong>BOA MADRUGADA</strong>, agora são ${time}:${minutes} hrs!`
    
     }
    
       switch (date){
            case 0:
              dateToday.innerHTML = ` <strong>Domingo</strong>` 
            break;
            case 1:
              dateToday.innerHTML = `<strong>Segunda-feira</strong>` 
            break;      
            case 2:
              dateToday.innerHTML = '<strong>Terça-feira</strong>'
            break;  
            case 3:
              dateToday.innerHTML = '<strong>Quarta-feira</strong>'
            break;
            case 4:
              dateToday.innerHTML = '<strong>Quinta-feira</strong>' 
            break;
            case 5:
              dateToday.innerHTML = '<strong>Sexta-feira</strong>'  
            break;
            case 6:
              dateToday.innerHTML = '<strong>Sabado</strong>'  
            default:
            break;        
       }   
    
    }
    
    