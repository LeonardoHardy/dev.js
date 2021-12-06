
const result = document.getElementById('result');

function imc (){
const nome = document.getElementById('nome').value;
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const resultado = document.getElementById('resultado');

if (nome !== '' && altura !== '' && peso !== ''){

    const valorimc = (peso/ (altura * altura)).toFixed(1);
    let classifi = '';

if(valorimc < 18.5){
    classifi = 'abaixo do peso.';
}else if(valorimc < 25){
    classifi = 'com peso ideal';
}else if (valorimc < 30){
    classifi = ' está acima do peso.';
}else if(valorimc <35){
    classifi = ' está com obesidade grau um';
}else if(valorimc <40){
    classifi = 'está com obesidade grau dois';
}else{
    classifi = 'com obesidade grau três';
}    
result.textContent = `${nome} seu Imc é ${valorimc} e você está ${classifi}`;

}else {
   result.textContent = 'preencha todos os campos !'; 
}
}

resultado.addEventListener('click', imc);