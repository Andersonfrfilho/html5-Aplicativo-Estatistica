function funcaoIntervaloConfianca(valorPesquisadoIC,mediaIC,desvioPadraoIC,numeroPesquisaConfianca){
    var resultado1,alfa,resultado2,resultado3;
    alfa = (valorPesquisadoIC/200);
    alfa = alfa.toFixed(4);
    alfa = parseFloat(procurarElementoPesquisa(MultiplicationTable,alfa));
    resultado1 = parseFloat(alfa * ((desvioPadraoIC)/Math.sqrt(numeroPesquisaConfianca)));
    resultado2 = resultado1 + parseFloat(mediaIC);
    resultado3 = parseFloat(mediaIC) - resultado1;
    mediaIC = parseInt(mediaIC);
    document.getElementById("resultadoConfianca").innerHTML =   '<div class="col-xs-1">'+
                                                                '</div>'+  
                                                                '<div class="col-xs-10">'+
                                                                '<h2>Intervalo - Media < Media < Intervalo + Media </h2>'+
                                                                '</div>'+
                                                                '<div class="col-xs-1">'+
                                                                '</div>';
                                                                
    document.getElementById("resultadoConfiancaII").innerHTML = '<div class="col-xs-2">'+
                                                                    '<h2><b>'+resultado3.toFixed(2)+'</b></h2>'+
                                                                '</div>'+
                                                                '<div class="col-xs-2">'+
                                                                    '<h2> < </h2>'+
                                                                '</div>'+
                                                                '<div class="col-xs-4">'+
                                                                    '<h2><b>'+mediaIC.toFixed(2)+'</b></h2>'+
                                                                '</div>'+
                                                                '<div class="col-xs-2">'+
                                                                    '<h2> < </h2>'+
                                                                '</div>'+
                                                                '<div class="col-xs-2">'+
                                                                    '<h2><b>'+resultado2.toFixed(2)+'</b></h2>'+
                                                                '</div>';    
                                                                                                                        
}
function procurarElementoPesquisa(vetor,alfa){
    var resultado;
    for(var i=0;i<4;i++){
        for(var j=0;j<10;j++){
            for(var k=0;k<10;k++){
                if(alfa==vetor[i][j][k]){
                    return i+"."+j+k;
                }
                else if(alfa<vetor[i][j][k]){
                    if(k==0){
                        resultado = i+"."+(parseInt(j)-1)+"9"; 
                    }
                    else{
                        resultado = i+"."+j+(parseInt(k)-1);
                    }
                    return resultado;   
                }
            }
        }
    }
}