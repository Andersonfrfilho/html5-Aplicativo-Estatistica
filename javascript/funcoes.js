//==============================pagina=========================
$(document).ready(function(){
        pagina = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
        nomeNav = pagina.substring(0,pagina.indexOf("."));
        if(pagina==nomeNav+".html") {
         $("#nav"+nomeNav).addClass("active");
        }
        $("#qualitativa").click(function(){
                $("#passo1").html('<button id="btnPasso1" type="button" class="btn btn-default">Prosseguir</button>');
                $("#tipoTabela").html('');
        });
        $("#quantitativa").click(function(){
            $("#passo1").html('');
            $("#tipoTabela").html('<div class="radio-inline" id="tTabela2">'+
                                    '<label><input type="radio" name="optradio2" value="discreta" id="discreta">Discreta</label>'+
                                    '</div>'+
                                    '<div class="radio-inline">'+
                                    '<label><input type="radio" name="optradio2" value="continua" id="continua">Continua</label>'+
                                    '</div>'+
                                    '</div>');
        });
        //=======================testes da distribuição Normal
        $("#caso1").click(function(){
                $("#segundoValor").html('');
                $("#botaoDN").html('<div class="row-fluid">'+
                      '<button type="button" class="btn btn-default" id="btnDistribuicaoNormal"><i class="glyphicon glyphicon-ok-sign"></i> Resolver</button>'+ 
                '</div>');
        });
        $("#caso2").click(function(){
                $("#segundoValor").html('');
                $("#botaoDN").html('<div class="row-fluid">'+
                      '<button type="button" class="btn btn-default" id="btnDistribuicaoNormal"><i class="glyphicon glyphicon-ok-sign"></i> Resolver</button>'+ 
                '</div>');
        });
        $("#caso3").click(function(){
                $("#segundoValor").html('');
                $("#botaoDN").html('<div class="row-fluid">'+
                      '<button type="button" class="btn btn-default" id="btnDistribuicaoNormal"><i class="glyphicon glyphicon-ok-sign"></i> Resolver</button>'+ 
                '</div>');
        });
        $("#caso4").click(function(){
                $("#segundoValor").html('<div class="col-md-4">'+
                                            '<legend></legend>'+
                                            '<label for="valorPesquisaDistribuicaoNormal"><b>2º Segundo Valor de Pesquisa (n)</b></label>'+
                                            '<div class="input-group">'+
                                            '<span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span>'+
                                            '<input id="valorPesquisaDistribuicaoNormal2" type="number" class="form-control" name="ValordaPesquisa2" placeholder="2º Valor para Pesquisa">'+
                                            '</div>'+
                                        '</div>');
                $("#botaoDN").html('<div class="row-fluid">'+
                      '<button type="button" class="btn btn-default" id="btnDistribuicaoNormal"><i class="glyphicon glyphicon-ok-sign"></i> Resolver</button>'+ 
                '</div>');
        });
        $("#caso5").click(function(){
                $("#segundoValor").html('<div class="col-md-4">'+
                                            '<legend></legend>'+
                                            '<label for="valorPesquisaDistribuicaoNormal"><b>2º Segundo Valor de Pesquisa (n)</b></label>'+
                                            '<div class="input-group">'+
                                            '<span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span>'+
                                            '<input id="valorPesquisaDistribuicaoNormal2" type="number" class="form-control" name="ValordaPesquisa2" placeholder="2º Valor para Pesquisa">'+
                                            '</div>'+
                                        '</div>');
                $("#botaoDN").html('<div class="row-fluid">'+
                      '<button type="button" class="btn btn-default" id="btnDistribuicaoNormal"><i class="glyphicon glyphicon-ok-sign"></i> Resolver</button>'+ 
                '</div>');
        });
        //=================fim DN===========//
});
$(document).on('click','#discreta', function(){
    $("#passo1").html('<button id="btnPasso1" type="button" class="btn btn-default">Prosseguir</button>');
    $("#tipodeDados").html('');
});
$(document).on('click','#continua', function(){
    $("#passo1").html('<button id="btnPasso1" type="button" class="btn btn-default">Prosseguir</button>');
    $("#tipodeDados").html('<label class="checkbox-inline"><input type="checkbox" value="" id="tipodDado">Dados Bruto</label>');
    $(document).on('click','#tipodDado', function(){
        if( $("#tipodDado").is(":checked") == true ){
            $('#numerodeElementos').prop('disabled',true);
            
        }else{
            $('#numerodeElementos').prop('disabled',false);
        }
    });        
});
$(document).on('click','#btnPasso1', function(){
    var primeiro = "";
    $("#passo2").html('<button id="btnPasso2" type="button" class="btn btn-default">ProsseguirII</button>');
});
//================================botao Reiniciar========================\\
$(document).on('click','#reiniciar',function(){
    window.location.href=window.location.href;
});
//$(document).on('click','#passo2', function(){
//    alert("sadasd");
//});

var nomePesquisa,numElementos,nomeElementos,nomeFrequencia,media=0,moda=0,mediana="",auxiliar=0,classe;
var vetorElementos = [];
var vetorFrequencia = [];
var vetorAcumulado = [];
var vetorCores =[];
$(document).on('click','#btnPasso1', function(){
    nomePesquisa = document.getElementById('nomePesquisa').value;
    nomeElementos = document.getElementById('nomeElementos').value;
    nomeFrequencia = document.getElementById('nomeFrequencia').value;
    if($('input:radio[name=tTabela1]:checked').val() == 'qualitativa' ){
        numElementos = document.getElementById('numerodeElementos').value;
        qualitativaPasso1(nomePesquisa,numElementos,nomeElementos,nomeFrequencia);
        $(document).on('click','#btnPasso2',function(){
            qualitativaPasso2(nomePesquisa,numElementos,nomeElementos,nomeFrequencia);
        });
        
    }else{
        if($('input:radio[name=optradio2]:checked').val() == 'discreta'){
            numElementos = document.getElementById('numerodeElementos').value;
              discretaPasso1(nomePesquisa,numElementos,nomeElementos,nomeFrequencia);
              $(document).on('click','#btnPasso2',function(){
                discretaPasso2(nomePesquisa,numElementos,nomeElementos,nomeFrequencia);
              });         
        }else{
            
            if( $("#tipodDado").is(":checked") == true ){
                continuaBrutoPasso1(nomePesquisa,vetorElementos,nomeElementos,nomeFrequencia);
                $(document).on('click','#btnPasso2',function(){
                    var dadosBrutos = document.getElementById('dadosBrutos').value;
                continuaBrutoPasso2(nomePesquisa,dadosBrutos,nomeElementos,nomeFrequencia);
              });
            }else{
                numElementos = document.getElementById('numerodeElementos').value;
                continuaPasso1(nomePesquisa,numElementos,nomeElementos,nomeFrequencia);
                $(document).on('click','#btnPasso2',function(){
                continuaPasso2(nomePesquisa,numElementos,nomeElementos,nomeFrequencia);
              });
            }
             
        }
    }
});
//================intervalo confianca====================
$(document).on('click','#chkAmostra',function(){
    if($("#chkAmostra").is(":checked") == true){
        $('#Amostra').html('<div class="col-md-3 col-md-offset-6">'+
                      '<label for="numeroAmostra"><b>Amostra(N)</b></label>'+
                      '<div class="input-group">'+
                        '<span class="input-group-addon"><b>(N)</b></span>'+
                        '<input id="numeroAmostra" type="number" class="form-control" name="numeroAmostra" placeholder="Numero Amostra (A)">'+
                      '</div>'+
                    '</div>')
    }
   else{
        $('#Amostra').html('');
   }
});
$(document).on('click','#btnIntervaloConfianca', function(){
    var porcentagemConfianca,desvioPadraoConfianca,mediaConfianca;
    porcentagemConfianca = document.getElementById('porcentagemConfianca').value;
    desvioPadraoConfianca = document.getElementById('desvioPadraoConfianca').value;
    mediaConfianca = document.getElementById('mediaConfianca').value;
    numeroPesquisaConfianca = document.getElementById('numeroPesquisaConfianca').value;
    funcaoIntervaloConfianca(porcentagemConfianca,mediaConfianca,desvioPadraoConfianca,numeroPesquisaConfianca);
});
//================Distribuição Normal===================

$(document).on('click','#btnDistribuicaoNormal', function(){
    var valorPesquisadoDN,mediaDN,desvioPadraoDN,valorPesquisadoDN2;
    valorPesquisadoDN = document.getElementById('valorPesquisaDistribuicaoNormal').value;
    mediaDN = document.getElementById('mediaDistribuicaoNormal').value;
    desvioPadraoDN = document.getElementById('desvioPadraoDistribuicaoNormal').value;
      if($('input:radio[name=TCasos]:checked').val() == 'caso1'){
        funcaoDistribuicaoNormalCaso1(valorPesquisadoDN,mediaDN,desvioPadraoDN);
      }
      else if($('input:radio[name=TCasos]:checked').val() == 'caso2'){
        funcaoDistribuicaoNormalCaso2(valorPesquisadoDN,mediaDN,desvioPadraoDN);
      }
      else if($('input:radio[name=TCasos]:checked').val() == 'caso3'){
        funcaoDistribuicaoNormalCaso3(valorPesquisadoDN,mediaDN,desvioPadraoDN);
      }
      else if($('input:radio[name=TCasos]:checked').val() == 'caso4'){
        valorPesquisadoDN2 = document.getElementById('valorPesquisaDistribuicaoNormal2').value;  
        funcaoDistribuicaoNormalCaso4(valorPesquisadoDN,mediaDN,desvioPadraoDN,valorPesquisadoDN2);
      }
      else if($('input:radio[name=TCasos]:checked').val() == 'caso5'){
          valorPesquisadoDN2 = document.getElementById('valorPesquisaDistribuicaoNormal2').value;
        funcaoDistribuicaoNormalCaso5(valorPesquisadoDN,mediaDN,desvioPadraoDN,valorPesquisadoDN2);
      }                
    
});
//=====================Binomial=========================
$(document).on('keyup',"#sucessoBinomial",function(){
    $("#fracassoBinomial").text((100-document.getElementById('sucessoBinomial').value)+"%");
});     
$(document).on('click','#btnDistribuicaoBinomial', function(){
    var tamanhoAmostra,sucesso,fracasso,eventoBinomial;
    var tamanhoAmostra = parseInt(document.getElementById("tamanhoAmostra").value);
    var sucesso = (document.getElementById("sucessoBinomial").value)/100;
    var fracasso = 1-sucesso;
    distribuicaoBinomial(tamanhoAmostra,eventoBinomial,sucesso,fracasso);
});
//======================poisson==========================
$(document).on('click','#btnPoisson', function(){
    var parametroMedio = parseFloat(document.getElementById('parametroMedio').value);
    var variavelPoisson = parseFloat(document.getElementById('variavelPoisson0').value);
    poisson(parametroMedio,variavelPoisson);
});
//==========================Distribuicao Uniforme
$(document).on('click','#btnUniforme', function(){
    var valorA,valorB,numeroPesquisado;
   valorA = parseFloat(document.getElementById("valorA").value);
   valorB = parseFloat(document.getElementById("valorB").value);
   numeroPesquisado= parseInt(document.getElementById('numPesquisado0').value);
    distribuicaoUniforme(valorA,valorB,numeroPesquisado);
});
//=====================correlação=================
$(document).on('click','#btnCorrelacao', function(){
    var numeroDeElementos = parseFloat(document.getElementById('numeroDeElementos').value);
    correlacaoPasso1(numeroDeElementos);
});