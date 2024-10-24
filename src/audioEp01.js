function audioEp01() { 
     const button = document.getElementById("audioEp01"); 
    if (button.innerHTML === "Reproduzir"){ 
        button.innerHTML = "Pausar";
        ep01.play()
    } else { 
        button.innerHTML = "Reproduzir";
        ep01.pause()
    }
}

function audioEp02() { 
     const button = document.getElementById("audioEp02"); 
    if (button.innerHTML === "Reproduzir"){ 
        button.innerHTML = "Pausar";
        ep02.play()
    } else { 
        button.innerHTML = "Reproduzir";
        ep02.pause()
    } 
    
}

function audioEp03() { 
     const button = document.getElementById("audioEp03"); 
    if (button.innerHTML === "Reproduzir"){ 
        button.innerHTML = "Pausar";
        ep03.play()
    } else { 
        button.innerHTML = "Reproduzir";
        ep03.pause()
    } 
    
}

function audioEp04() { 
     const button = document.getElementById("audioEp04"); 
    if (button.innerHTML === "Reproduzir"){ 
        button.innerHTML = "Pausar";
        ep04.play()
    } else { 
        button.innerHTML = "Reproduzir"; 
        ep04.pause()
    } 
    
}
