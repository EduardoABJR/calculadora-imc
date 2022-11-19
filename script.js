





function calcImc(){
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let imc = peso/(altura*altura);
    let text = document.getElementById('imcResult');
    let imcHTML = '<p> Seu imc é: </p>'+ imc.toFixed(2);
    text.innerHTML = imcHTML;
    console.log(imc);
};


