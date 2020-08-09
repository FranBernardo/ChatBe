function enviarA(){
var nomeA = document.getElementById("nomeA").value;
var pessoaA = document.getElementById('A').value;
var resA = document.querySelector('div#resA');
var msgA = document.createElement("p");
msgA.innerHTML=` ${nomeA}:<strong> ${pessoaA}</strong>`
resA.appendChild(msgA)
A.value ='';
if (pessoaA == "socorro"){
    alert('BOMBEIRO!!!')
}

}
function excluirA(){
    var pessoaA= document.querySelector('input#A').value;
    var textA= document.querySelector('div#resA').childNodes;
    document.getElementById("resA").removeChild(textA[0])
        
}
function enviarB(){
    var nomeB = document.getElementById("nomeB").value;
    var pessoaB= document.querySelector('input#B').value;
    var resB = document.querySelector('div#resB');
    var mgsB = document.createElement("p");
    mgsB.innerHTML=`${nomeB}:<strong> ${pessoaB}</strong>`
    resB.appendChild(mgsB)
    B.value=''
    if (pessoaB == "socorro"){
        alert('BOMBEIRO!!!')
    }
    
}

function excluirB(){
    var pessoaB= document.querySelector('input#B').value;
    var textB= document.querySelector('div#resB').childNodes;
    document.getElementById("resB").removeChild(textB[0])
        
}
function inicio(){
    var mostrar =document.getElementById("chat").style.display='block';
}
