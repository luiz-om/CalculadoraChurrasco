const QTD_CARNE_ADULTO = 0.4;
const QTD_CARNE_CRIANCA = 0.2;
const QTD_BEBIDA_ADULTO = 5; //latas
let qtdCarneAdulto = document.querySelector("#qtdCarneAdulto");
let qtdCarneCriancas = document.querySelector("#qtdCarneCriancas");
let radioGramas = document.querySelector(".unidade");
const calcular = () => {
  //1 ler n de adultos
  let adultos = document.querySelector("#adultos").value;
  //2 ler n de criancas
  let criancas = document.querySelector("#criancas").value;
  //3 calcular qtd carne p/adultos
  qtdCarneAdulto.innerHTML = (+adultos * QTD_CARNE_ADULTO).toFixed(2);
  //4 calcular qtd carne para criancas
  qtdCarneCriancas.innerHTML = (+criancas * 0.2).toFixed(2);
  //5 calcular qtd de bebidas p/adultos
  let qtdCerveja = QTD_BEBIDA_ADULTO * +adultos
  //mostrar resultado
  //alert(radioGramas.checked)
  document.getElementById("resultado").innerHTML = `

<ul>
<li>Quantidade de carne para adultos: ${qtdCarneAdulto.textContent} kg</li>
<li>Quantidade de carne para criancas: ${qtdCarneCriancas.textContent} kg</li>
<li>Quantidade de cerveja para adultos: ${qtdCerveja} latas de 350ml</li>
</ul>

`
};
