function contaropcoes(){
    let af1check = document.getElementById("af1");
    let af2check = document.getElementById("af2");
    let af3check = document.getElementById("af3");
    let af4check = document.getElementById("af4");
    let af5check = document.getElementById("af5");
    let af6check = document.getElementById("af6");
    let af7check = document.getElementById("af7");
    let af8check = document.getElementById("af8");
    let af9check = document.getElementById("a9");
    let af10check = document.getElementById("af10");
    let gabarito = document.getElementById('gabarito');
  
    let contador = 10;
    if(af1.checked == false){
        contador = contador -1;
    }
    if(af2.checked == false){
        contador = contador -1;
    }
    if(af3.checked == false){
        contador = contador -1;
    }
    if(af6.checked == false){
        contador= contador-1;
    }
    if(af7.checked == false){
        contador=contador-1;
    }
    if(af8.checked == false){
        contador=contador-1;
    }
    if(af9.checked == false){
        contador=contador-1;
    }
    if(af10.checked == false){
        contador=contador-1;
    }
    valor = contador*10;
    gabarito.innerHTML = "Você acertou "+valor+"% das perguntas";
}

