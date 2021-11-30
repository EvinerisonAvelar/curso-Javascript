function carregar (){
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var agora = new Date
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    //var hora = 7
    //var minutos = 2
    
   

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if(hora > 0 && hora <= 12 && minutos == 1){
      msg.innerHTML = `<strong>Agora são ${hora} horas e ${minutos} minuto, Bom dia Vida S2</strong>`
      img.src = 'manha.png'
      document.body.style.background = '#c38a35'
      
    }else if(hora > 0 && hora <= 12 && minutos > 1){
        msg.innerHTML = `<strong>Agora são ${hora} horas e ${minutos} minutos, Bom dia Vida S2</strong>`
        img.src = 'manha.png'
        document.body.style.background = '#c38a35' 
        
    }else if( hora >= 12 && minutos > 0 && hora < 18 && minutos == 1 ){
        msg.innerHTML = `<strong>Agora são ${hora} horas e ${minutos} minuto, Boa Tarde Vida S2</strong>`
        img.src = 'tarde.png'
        document.body.style.background = '#49392b'


    }else if ( hora >= 12 && minutos > 0 && hora < 18 && minutos > 1 ){
        msg.innerHTML = `<strong>Agora são ${hora} horas e ${minutos} minutos, Boa Tarde Vida S2</strong>`
        img.src = 'tarde.png'
        document.body.style.background = '#49392b'  
    
    }else if ( hora >= 18 && minutos > 0 && minutos == 1  ){
        msg.innerHTML = `<strong>Agora são ${hora} horas e ${minutos} minuto, Boa Noite Vida S2</strong>`
    img.src = 'noite.png'
    document.body.style.background = '#17292d'
    
    }else{msg.innerHTML = `<strong>Agora são ${hora} horas e ${minutos} minutos, Boa Noite Vida S2</strong>`
    img.src = 'noite.png'
    document.body.style.background = '#17292d'

        
    
    
    }

    
    

    












}
