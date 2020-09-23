function load () {
    let msg = document.querySelector('div#mensagem');
    let img = document.getElementById('img');
    let photo = document.getElementById('foto');
    
    let dateToday = document.getElementById('datadehoje');
    let dateNow = new Date();
    let date = dateNow.getDay();

    

  

    

    setInterval(()=>{
      
      let timeToday = new Date();
      let time = timeToday.getHours();

      let minutesToday = new Date();
      let minutes = minutesToday.getMinutes();

      let secondsToday = new Date();
      let seconds = secondsToday.getSeconds();
     
      msg.innerHTML = `<strong>BOA NOITE</strong>, ${time}:${minutes}:${seconds} hrs!`

    },1000)
     
    let timeIFELSE = new Date();
    let timeIfelse = timeIFELSE.getUTCHours();
     
    if (timeIfelse > 7 && timeIfelse <= 12){
      img.src = 'dia.png'
      msg.style.color= 'wheat'
      photo.style.background = 'wheat'
      document.body.style.background = 'wheat'
 
  } else if (timeIfelse >=13 && timeIfelse <= 18 ){
      img.src = 'tarde.png'
      msg.style.color= 'orange'
      photo.style.background = 'orange'
      document.body.style.background = 'orange'
    
  } else if (timeIfelse > 18 && timeIfelse < 23){
      img.src = 'noite.png'
      msg.style.color= 'cornflowerblue'
      photo.style.background = 'cornflowerblue'
      document.body.style.background = 'cornflowerblue'
     
  } else {
      img.src = 'madrugada.png'
      msg.style.color = 'cadetblue'
      photo.style.background = 'cadetblue'
      document.body.style.background= 'cadetblue'
 
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
    