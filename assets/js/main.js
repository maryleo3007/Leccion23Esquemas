window.addEventListener('load',function(){
  var resultado = document.getElementById("resultado");
  createHtml(resultado);

});

function createHtml(parent){

  var divRosado = document.createElement('div');
  divRosado.setAttribute("id","rosado");
  var divMorado = document.createElement('div');
  divMorado.setAttribute("id","morado");
  var divAmarillo = document.createElement('div');
  divAmarillo.setAttribute("id","amarillo");

  parent.appendChild(divRosado);
  divRosado.appendChild(divMorado);
  divMorado.appendChild(divAmarillo);

  var divAzul = document.createElement('div');
  divAzul.setAttribute("id","azul");
  var divVerde = document.createElement('div');
  divVerde.setAttribute("id","verde");
  var divNegro= document.createElement('div');
  divNegro.setAttribute("id","negro");

  parent.appendChild(divAzul);
  divAzul.appendChild(divVerde);
  divVerde.appendChild(divNegro);

}
