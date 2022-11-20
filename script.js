





function calcImc(){
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let imc = peso/(altura*altura);
    let text = document.getElementById('imcResult');
    
    if (imc < 18.5){
        let imcHTML = '<p> Seu imc é: '+ imc.toFixed(2) + '</p><p>Sua classificação é abaixo do peso normal </p>';   
        text.innerHTML = imcHTML;    
    }
    else if(imc >= 18.5 && imc < 25 ){
        let imcHTML = '<p> Seu imc é: '+ imc.toFixed(2) + '</p><p>Sua classificação é peso normal </p>';
        text.innerHTML = imcHTML;    
    }

    else if(imc >= 25 && imc < 30 ){
        let imcHTML = '<p> Seu imc é: '+ imc.toFixed(2) + '</p><p>Sua classificação é excesso de peso </p>';
        text.innerHTML = imcHTML;
    }
    
    else if(imc >=30 && imc < 35 ){
        let imcHTML = '<p> Seu imc é: '+ imc.toFixed(2) + '</p><p>Sua classificação é obesidade classe 1 </p>';
        text.innerHTML = imcHTML;    
    }
    
    else if(imc >= 35 && imc < 40 ){
        let imcHTML = '<p> Seu imc é: '+ imc.toFixed(2) + '</p><p>Sua classificação é obesidade classe 2 </p>';
        text.innerHTML = imcHTML;
    }
    else if(imc >40){
        let imcHTML = '<p> Seu imc é: '+ imc.toFixed(2) + '</p><p>Sua classificação é obesidade classe 3 </p>';    
        text.innerHTML = imcHTML;
    }
    
    
    
};


