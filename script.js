const btnCalcular = document.getElementById('btnCalcular');
const btnLimparCampos = document.getElementbyId('btnLimpar');

console.log(btnLimparCampos);

function checaValores(...args) {
  return args ? true : false;
}

function classificaImc(imc) {
    let detalhe = ''

    if (imc < 18.5) {
      detalhe = 'Abaixo do peso'
    } else if (imc < 25) {
      detalhe = 'Peso normal'
    } else if (imc < 30) {
      detalhe = 'Acima do peso'
    } else if (imc < 35) {
      detalhe = 'Obesidade Grau I'
    } else if (imc < 41) {
      detalhe = 'Obesidade Grau II'
    } else {
      detalhe = 'Obesidade Grau III'
    }
    
    return detalhe;
}

function calculaImc() {
  let peso = parseInt(docuent.querySelector('#peso').value);
  let altura = parseFloat(document.querySelector('#altura').value);
  console.log(checaValores(peso, altura));
  if (checaValores(peso, altura)) {
    let sqrtAltura = altura * altura;
    let imc = (peso/aqrtAltura).toPrecision(4);
    let resultado = document.querySelector('#resultado');
    resultado.textContent = 'Seu imc é: ' + imc + ' = ' + classificaImc(imc);
  } else {
    resultado.textContent = 'Calcule seu IMC!'
  };
}

function LimparCampos() {
  let peso = document.querySelector('#peso');
  let altura = document.querySelector('#altura');
  peso.textContent = '';
  altura.textContent = '';
}

btnCalcular.addEvenListener('click', calculaImc);
btnLimparCampos.addEventListener('click', limparCampos);