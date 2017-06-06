contadorPoisson=0;
$(document).on('click','#btnAdicionarPoisson', function(){
    $("#inputPoisson"+contadorPoisson).html('');
    contadorPoisson++;
    $("#primeiroEventoPoisson").html('1º');
   
    $("#adicionarPoisson").append('<div class="form-group">'+
                                '<div class="col-md-6">'+
                                '</div>'+
                                '<div class="col-md-4 col-md-offset-2" >'+     
                                    '<div class="input-group">'+ 
                                        '<span class="input-group-addon"><b id="primeiroEventoPoisson"></b><b>'+(contadorPoisson+1)+'ª(x)</b></span>'+
                                        '<input id="variavelPoisson'+(contadorPoisson)+'" type="number" class="form-control" name="variavelPoisson'+(contadorPoisson+1)+'" placeholder="'+(contadorPoisson+1)+'ª Variavel Aleatoria(x)">'+
                                    '<div class="input-group-btn" id="inputPoisson'+contadorPoisson+'">'+
                                        '<button class="btn btn-default" type="button" id="btnAdicionarPoisson"><i class="glyphicon glyphicon-plus-sign"></i></button>'+
                                   '</div>'+
                                '</div>'+
                            '</div>');
                                                   
});
function poisson(tamanhoAmostra,variavelPoisson){
    var e=2.71828,resultado=0,segundo="",acumulador=0;

    var vetorPoisson=[];
    var vetorPoissonFatorial=[];
    var vetorPoissonResultado=[];
    if(contadorPoisson==0){
        resultado = fatorialPoisson(variavelPoisson);
        resultado = (tamanhoAmostra**(variavelPoisson)*1/(e**(tamanhoAmostra)))/(resultado);
        resultado = resultado*100;
               document.getElementById("resultadoPoisson").innerHTML = '<div class="col-md-4">'+
                                                                            '<h2>Sucesso:'+resultado.toFixed(2)+'%</h2>'+
                                                                            '</div>'+
                                                                            '<div class="col-md-4">'+
                                                                            '</div>'+
                                                                            '<div class="col-md-4"><h2>Fracasso:'+
                                                                            (100-resultado).toFixed(2)+
                                                                            '%</h2></div>';
                                                                                                         
                    
    }
    else{
        for(var i=0;i<=contadorPoisson;i++){
            vetorPoisson.push(document.getElementById('variavelPoisson'+i).value);
            vetorPoissonFatorial.push(fatorialPoisson(vetorPoisson[i]));
            vetorPoissonResultado.push((tamanhoAmostra**(vetorPoisson[i])*1/(e**(tamanhoAmostra)))/(vetorPoissonFatorial[i]));
            acumulador += vetorPoissonResultado[i]; 
        }
        alert(vetorPoissonResultado);
        alert(acumulador);
        for(i=0;i<=contadorPoisson;i++){

            segundo+=   '<div class="row-fluid">'+
                        '<div class="col-md-4">'+
                            '<h2>Sucesso: '+(vetorPoissonResultado[i]*100).toFixed(2)+'%</h2>'+
                            '</div>'+
                            '<div class="col-md-4">'+
                            '</div>'+
                            '<div class="col-md-4"><h2>Fracasso: '+
                            (100-(vetorPoissonResultado[i]*100)).toFixed(2)+
                            '%</h2></div>'+
                            '</div>';
        }
        document.getElementById("resultadoPoisson").innerHTML = segundo + '<legend>Resultado</legend>'+
                                                                            '<div class="row-fluid">'+
                                                                                '<div class="col-md-4">'+
                                                                                '<h2>Sucesso: '+(acumulador*100).toFixed(2)+'%</h2>'+
                                                                                '</div>'+
                                                                                '<div class="col-md-4">'+
                                                                                '</div>'+
                                                                                '<div class="col-md-4"><h2>Fracasso: '+
                                                                                (100-(acumulador*100)).toFixed(2)+
                                                                                '%</h2></div>'+
                                                                            '</div>';
    }
}
function fatorialPoisson(variavelPoisson){
    var somatorio=variavelPoisson;
    if(variavelPoisson == 0){
        return 1;
    }
    else{
        for(var i=variavelPoisson-1;i>0;i--){
        somatorio*=i
        
        }
    return somatorio;
    }
    
    
}
