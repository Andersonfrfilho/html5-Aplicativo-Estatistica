function distribuicaoUniforme(valorA,valorB,numeroPesquisado){
    var media,variancia,desvioPadrao,probabilidade,equacao;
    media = (valorA+valorB)/2;
    variancia = ((valorA+valorB)**2/12);
    desvioPadrao = Math.sqrt(variancia);
    probabilidade = 1*numeroPesquisado/(valorA-valorB)*numeroPesquisado;
    if(probabilidade<0){
        probabilidade = Math.sqrt(probabilidade**2);
    }
    equacao = '&#402;(x)=1*?/('+valorA+'-'+valorB+')';
    $('#resultadoUniforme').html('<div class="row-fluid">'+
                                    '<div class="col-md-offset-12">&nbsp'+
                                    '</div>'+    
                                    '</div>'+
    
                '<div class="row-fluid">'+ 
                  '<div class="col-md-3">'+
                    '<legend>Media(<b>x&#773</b>)</legend>'+
                    '<h3><span class="label label-default">'+media.toFixed(2)+'</span></h3>'+
                  '</div>'+  
                  '<div class="col-md-3">'+
                    '<legend>Variancia</legend>'+
                    '<h3><span id="tipoCorrelacao" class="label label-default">'+variancia.toFixed(2)+'</span></h3>'+
                   '</div>'+
                   '<div class="col-md-3">'+ 
                    '<legend>Desvio Padrão(<b>&#1005;</b>)</legend>'+
                    '<h3><span class="label label-default">'+desvioPadrao.toFixed(2)+'</span></h3>'+
                  '</div>'+ 
                '<div class="col-md-3">'+
                  '<legend>Equação(<b>&#402;</b>)</legend>'+
                  '<h3><span class="label label-default">'+equacao+'</span></h3>'+
                '</div>'+ 
              '</div>'+
              '<div class="row-fluid">'+
                '<legend>Resultado</legend>'+
                '<div class="col-md-4 col-md-offset-5">'+
                '<h2><span class="label label-default">'+probabilidade.toFixed(2)+'%</span></h2>'+
                '</div>'+
              '</div>');


}