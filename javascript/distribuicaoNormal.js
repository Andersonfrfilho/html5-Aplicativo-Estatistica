function funcaoDistribuicaoNormalCaso1(valorPesquisado,media,desvioPadrao){
    var resultado=0,primeiro;
    resultado = (valorPesquisado - media)/desvioPadrao;
    if(resultado<0){
      resultado = resultado**2
      resultado = Math.sqrt(resultado);
    }
    resultado = procuraValor(MultiplicationTable,(resultado).toFixed(2));
    primeiro = '<fieldset>'+
                '<legend class="text-center">Resultado</legend>'+
              '<div class="col-md-4"></div>'+
              '<div class="col-md-4">'+
                '<b><h2>Resultado:'+(resultado*100).toFixed(2)+'%</h2></b>'+
              '</div>'+          
              '<div class="col-md-4">'+
              '</div>'+
              '<div class="col-md-4"></div>'+
              '</fieldset>';
    document.getElementById('resultadoDistribuicaoNormal').innerHTML = primeiro;
    document.getElementById('botaoReset').innerHTML = '<div class="row-fluid">'+
                                                        '<div class="align-center">'+
                                                        '<button type="button" class="btn btn-default" id="botaoReset"><i class="glyphicon glyphicon-ok-sign"></i> Reiniciar</button>'+ 
                                                        '</div>'+
                                                      '</div>';    
}
function funcaoDistribuicaoNormalCaso2(valorPesquisado,media,desvioPadrao){
  var resultado=0,primeiro;
  resultado = (valorPesquisado-media)/desvioPadrao;
  if(resultado<0){
      resultado = resultado**2
      resultado = Math.sqrt(resultado);
    }
  resultado = procuraValor(MultiplicationTable,(resultado).toFixed(2));
  resultado = resultado+0.5;
    primeiro = '<fieldset>'+
                '<legend class="text-center">Resultado</legend>'+
              '<div class="col-md-4"></div>'+
              '<div class="col-md-4">'+
                '<b><h2>Resultado:'+(resultado*100).toFixed(2)+'%</h2></b>'+
              '</div>'+          
              '<div class="col-md-4">'+
              '</div>'+
              '<div class="col-md-4"></div>'+
              '</fieldset>';
    document.getElementById('resultadoDistribuicaoNormal').innerHTML = primeiro;
    document.getElementById('botaoReset').innerHTML = '<div class="row-fluid">'+
                                                        '<div class="align-center">'+
                                                        '<button type="button" class="btn btn-default" id="botaoReset"><i class="glyphicon glyphicon-ok-sign"></i> Reiniciar</button>'+ 
                                                        '</div>'+
                                                      '</div>';
}
function funcaoDistribuicaoNormalCaso3(valorPesquisado,media,desvioPadrao){
  var resultado=0,primeiro;
  resultado = (valorPesquisado-media)/desvioPadrao;
  if(resultado<0){
      resultado = resultado**2
      resultado = Math.sqrt(resultado);
    }
  resultado = procuraValor(MultiplicationTable,(resultado).toFixed(2));
  resultado = resultado-0.5;
  if(resultado<0){
    resultado = resultado**2;
    resultado = Math.sqrt(resultado);
  }
    primeiro = '<fieldset>'+
                '<legend class="text-center">Resultado</legend>'+
              '<div class="col-md-4"></div>'+
              '<div class="col-md-4">'+
                '<b><h2>Resultado:'+(resultado*100).toFixed(2)+'%</h2></b>'+
              '</div>'+          
              '<div class="col-md-4">'+
              '</div>'+
              '<div class="col-md-4"></div>'+
              '</fieldset>';
    document.getElementById('resultadoDistribuicaoNormal').innerHTML = primeiro;
    document.getElementById('botaoReset').innerHTML = '<div class="row-fluid">'+
                                                        '<div class="align-center">'+
                                                        '<button type="button" class="btn btn-default" id="botaoReset"><i class="glyphicon glyphicon-ok-sign"></i> Reiniciar</button>'+ 
                                                        '</div>'+
                                                      '</div>';
}
function funcaoDistribuicaoNormalCaso4(valorPesquisado,media,desvioPadrao,valorPesquisado2){
  var resultado=0,primeiro,resultado2;
  resultado = (valorPesquisado-media)/desvioPadrao;
  if(resultado<0){
      resultado = resultado**2
      resultado = Math.sqrt(resultado);
    }
  resultado = procuraValor(MultiplicationTable,(resultado).toFixed(2));
  if(resultado<0){
    resultado = resultado**2;
    resultado = Math.sqrt(resultado);
  }
  resultado2 = (valorPesquisado2-media)/desvioPadrao;
  if(resultado2<0){
      resultado2 = resultado2**2
      resultado2 = Math.sqrt(resultado2);
    }  
  resultado2 = procuraValor(MultiplicationTable,(resultado2).toFixed(2));
  resultado = resultado+resultado2;
    primeiro = '<fieldset>'+
                '<legend class="text-center">Resultado</legend>'+
              '<div class="col-md-4"></div>'+
              '<div class="col-md-4">'+
                '<b><h2>Resultado:'+(resultado*100).toFixed(2)+'%</h2></b>'+
              '</div>'+          
              '<div class="col-md-4">'+
              '</div>'+
              '<div class="col-md-4"></div>'+
              '</fieldset>';
    document.getElementById('resultadoDistribuicaoNormal').innerHTML = primeiro;
    document.getElementById('botaoReset').innerHTML = '<div class="row-fluid">'+
                                                        '<div class="align-center">'+
                                                        '<button type="button" class="btn btn-default" id="botaoReset"><i class="glyphicon glyphicon-ok-sign"></i> Reiniciar</button>'+ 
                                                        '</div>'+
                                                      '</div>';
}
function funcaoDistribuicaoNormalCaso5(valorPesquisado,media,desvioPadrao,valorPesquisado2){
  var resultado=0,primeiro,resultado2;
  resultado = (valorPesquisado-media)/desvioPadrao;
  if(resultado<0){
      resultado = resultado**2
      resultado = Math.sqrt(resultado);
    }
  resultado = procuraValor(MultiplicationTable,(resultado).toFixed(2));
  if(resultado<0){
    resultado = resultado**2;
    resultado = Math.sqrt(resultado);
  }
  resultado2 = (valorPesquisado2-media)/desvioPadrao;
  if(resultado2<0){
      resultado2 = resultado2**2
      resultado2 = Math.sqrt(resultado2);
    }  
  resultado2 = procuraValor(MultiplicationTable,(resultado2).toFixed(2));
  resultado = resultado-resultado2;
  if(resultado<0){
    resultado = resultado**2;
    resultado = Math.sqrt(resultado);
  }
    primeiro = '<fieldset>'+
                '<legend class="text-center">Resultado</legend>'+
              '<div class="col-md-4"></div>'+
              '<div class="col-md-4">'+
                '<b><h2>Resultado:'+(resultado*100).toFixed(2)+'%</h2></b>'+
              '</div>'+          
              '<div class="col-md-4">'+
              '</div>'+
              '<div class="col-md-4"></div>'+
              '</fieldset>';
    document.getElementById('resultadoDistribuicaoNormal').innerHTML = primeiro;
    document.getElementById('botaoReset').innerHTML = '<div class="row-fluid">'+
                                                        '<div class="align-center">'+
                                                        '<button type="button" class="btn btn-default" id="botaoReset"><i class="glyphicon glyphicon-ok-sign"></i> Reiniciar</button>'+ 
                                                        '</div>'+
                                                      '</div>';
}
//===================Pesquisa Valor==================\
function procuraValor(vetor,valor){
  var primeiro,segundo,terceiro,texto;
  texto = valor.toString();
  primeiro = parseInt(texto.substring(0, 1));
  segundo = parseInt(texto.substring(2, 3));
  terceiro = parseInt(texto.substring(3, 4));
  for(var i=0;i<41;i++){
    if(i == primeiro){
      for(var j=0;j<11;j++){
        if(j == segundo){
          for(var k=0;k<11;k++){
            if(k == terceiro){
              return vetor[i][j][k];
            }
          }
        }
      }
    }
  }
}
