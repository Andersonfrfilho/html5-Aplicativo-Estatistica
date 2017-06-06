contador=0;
$(document).on('click','#btnAdicionarBinomial', function(){
    $("#inputBinomial"+contador).html('');
    contador++;
    $("#primeiroEvento").html('1º');
   
    $("#adicionar").append('<div class="form-group">'+
                                '<div class="col-md-4">'+
                                '</div>'+
                                '<div class="col-md-4">'+
                                    '<div class="input-group">'+ 
                                    '<span class="input-group-addon"><b>'+(contador+1)+'º(k)</b></span>'+
                                    '<input id="eventoBinomial'+(contador)+'" type="number" class="form-control" name="eventoBinomial" placeholder="'+(contador+1)+'º Evento">'+
                                    '<div class="input-group-btn" id="inputBinomial'+contador+'">'+
                                        '<button class="btn btn-default" type="button" id="btnAdicionarBinomial"><i class="glyphicon glyphicon-plus-sign"></i></button>'+   
                                    '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-2">'+
                                '</div>'+
                                '<div class="col-md-2">'+
                                '</div>'+
                                '</div>');
                                                   
});
function distribuicaoBinomial(tamanhoAmostra,eventoBinomial,sucessoBinomial,fracassoBinomial){
    var total=0,resultado=0,somatorio=0,auxiliar,primeiro="",segundo="",terceiro="";
    var vetorEventoBinomial=[];
    var vetorAuxiliar=[];

    if(contador==0){
        eventoBinomial = parseInt(document.getElementById('eventoBinomial0').value);
        total = fatorial(tamanhoAmostra,eventoBinomial,total);
        resultado = parseFloat(total * sucessoBinomial**(eventoBinomial) * fracassoBinomial**(tamanhoAmostra-eventoBinomial));
        resultado = resultado * 100;
        $("#resultadoDistribuicaoBinominal").html('<fieldset>'+
                                                    '<legend class="text-center">Resultado</legend>'+
                                                        '<div class="col-md-4"></div>'+
                                                        '<div class="col-md-4">'+
                                                            '<b><h2>Resultado:'+resultado.toFixed(2)+'%</h2></b>'+
                                                        '</div>'+
                                                        '<div class="col-md-4"></div>'+
                                                '</fieldset>');
    }
    else{
        for(i=0;i<=contador;i++){
            vetorEventoBinomial.push(document.getElementById('eventoBinomial'+i).value);
            vetorAuxiliar[i] = vetorEventoBinomial[i];
            vetorEventoBinomial[i] = fatorial(tamanhoAmostra,vetorEventoBinomial[i]);
            vetorEventoBinomial[i] = vetorEventoBinomial[i] * sucessoBinomial**(vetorAuxiliar[i])*fracassoBinomial**(tamanhoAmostra-vetorAuxiliar[i]);
            somatorio+=vetorEventoBinomial[i];
        }
        primeiro = '<fieldset>'+
                    '<legend class="text-center">Resultado</legend>';
        for(i=0;i<vetorEventoBinomial.length;i++){
            segundo += '<div class="row">'+
                            '<div class="col-md-4"><h3>Evento '+vetorAuxiliar[i]+':</h3></div>'+
                            '<div class="col-md-4">'+
                                '<b><h3>'+(vetorEventoBinomial[i]*100).toFixed(2)+'%</h3></b>'+
                            '</div>'+
                            '<div class="col-md-4"></div>'+
                        '</div>';
        }
        terceiro =   '<div class="row">'+
                            '<div class="col-md-4"></div>'+
                            '<div class="col-md-4">'+
                                '<b><h2>Resultado:'+(somatorio*100).toFixed(2)+'%</h2></b>'+
                            '</div>'+
                            '<div class="col-md-4"></div>'+
                        '</div>'+
                    '</fieldset>';
        $("#resultadoDistribuicaoBinominal").html(primeiro + segundo + terceiro);
                            
    }
    
}
function fatorial(n,k){
    var subtracao=n-k;
    if((n!=0)&&(k!=0)){
        if(k==n){
            return 1;
        }
        else if(k==1){
            return n;
        }else{
            for(var i=n-1;i>0;i--){
                n *= i;
            }
            for(var i=k-1;i>0;i--){
                k *= i;
            }
            for(var i=subtracao-1;i>0;i--){
                subtracao *= i;
            }
            return (n/(k*(subtracao)));
        }   
    }else{
        return 1;
    }
}