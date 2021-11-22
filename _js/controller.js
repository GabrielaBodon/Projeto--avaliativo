//Verifica preenchimento de campos de formulário

function verificar(){
var nome = document.getElementById('nome').value;
var email = document.getElementById('email').value;
var fone = document.getElementById('celular').value;
var cpf = document.getElementById('cpf').value;
var cep = document.getElementById('cep').value;


//inicio da verificação de preenchimento de formulario

if (!nome || !email || !fone || !cpf || !cep) {
alert("campos não preenchidos, por favor preenchê-los");
} else{
alert("campos preenchidos com sucesso");
}

}
//fim da verificação de preenchimento de caompos de formulario



//Começo da verificação da função mascara no Fone
function maskFone(){
const numeroAtual = document.getElementById('celular').value;
const isCelular = numeroAtual.length === 11;
const isfone = numeroAtual.length === 10;
let = numeroAjustado;
if(isCelular){
const part1 = numeroAtual.slice(0,2);
const part2 = numeroAtual.slice(2,7);
const part3 = numeroAtual.slice(7,11);
numeroAjustado = `(${part1}) ${part2}-${part3}`
} else if(isfone){
const part1 = numeroAtual.slice(0,2);
const part2 = numeroAtual.slice(2,6);
const part3 = numeroAtual.slice(6,10);
numeroAjustado = `(${part1}) ${part2}-${part3}`
}
}

