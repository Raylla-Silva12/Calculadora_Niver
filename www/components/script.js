window.onload = function () {
  const qtd_pessoa = document.querySelector('#qtd_pessoa');
  const refri = document.querySelector('#calc');
  const agua = document.querySelector('#calc');
  const bolo = document.querySelector('#calc');
  const doce = document.querySelector('#calc');
  const salgado = document.querySelector('#calc');
  var sim = "ml";

  refri.addEventListener('click', function () {
    let resultado = parseFloat(qtd_pessoa.value) * 600;
    document.querySelector('#resposta1').value = resultado;
  })

  agua.addEventListener('click', function () {
    let resultado = parseFloat(qtd_pessoa.value) * 200;
    document.querySelector('#resposta2').value = resultado;
  })

  bolo.addEventListener('click', function () {
    let resultado = parseFloat(qtd_pessoa.value) * 100;
    document.querySelector('#resposta3').value = resultado;
  })

  doce.addEventListener('click', function () {
    let resultado = parseFloat(qtd_pessoa.value) * 3;
    document.querySelector('#resposta4').value = resultado;
  })

  salgado.addEventListener('click', function () {
    let resultado = parseFloat(qtd_pessoa.value) * 10;
    document.querySelector('#resposta5').value = resultado;
  })
}

