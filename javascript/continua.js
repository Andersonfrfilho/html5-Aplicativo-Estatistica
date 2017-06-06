function continuaPasso1(nomePesquisa,numElementos,nomeElementos,nomeFrequencia){
    var primeiro="",segundo="",terceiro="";
    primeiro = '<fieldset>'+
                  '<legend>'+nomePesquisa+'</legend>'+   
                  '<div class="form-group row">';   
                            
    for(var i=0;i<numElementos;i++){
       segundo =  segundo +
                    '<div class="col-xs-1">'+
                      '<label for="ex2">classe nº'+(i+1)+'</label>'+
                    '</div>'+
                    '<div class="col-xs-2">'+
                      '<label for="limiteInferior'+i+'">Lim. Inferior <span class="glyphicon glyphicon-log-out"></span></label>'+
                      '<input class="form-control" id="limiteInferior'+i+'" type="number">'+
                    '</div>'+
                    '<div class="col-xs-1">'+
                      '<label for="ex2">até<br><b>|---</b></label>'+
                    '</div>'+
                    '<div class="col-xs-2">'+
                      '<label for="limitePosterior'+i+'"><span class="glyphicon glyphicon-log-in"></span> Lim. Posterior</label>'+
                      '<input class="form-control" id="limitePosterior'+i+'" type="number">'+
                    '</div>'+
                    '<div class="col-xs-2 col-xs-offset-4">'+
                      '<label for="frequencia'+i+'"><span class="glyphicon glyphicon-collapse-down"></span>Frequencia</label>'+
                      '<input class="form-control" id="frequencia'+i+'" type="number">'+
                    '</div>';
    }
    terceiro =      '</div>'+  
                        '</fieldset>'+
                            '<button type="button" class="btn btn-default" id="btnPasso2">Prosseguir</button>';
    document.getElementById('passo2Inicio').innerHTML = primeiro+segundo+terceiro; 
}
function continuaPasso2(nomePesquisa,numElementos,nomeElementos,nomeFrequencia){
    var primeiro,segundo="",terceiro,somatorio=0,somatorioMedia=0,cores,media=0,moda=0,modaSimples=0,mediana,mediana2,auxiliar=0,auxiliar2,classeModa,classeMediana,variancia=0,cor=0;
    var classeModaAnterior,classeModaPosterior,delta1,delta2,classe,classe2,classeModaInferior,classeMedianaInferior,amplitude,classeMediana,classeMedianaAnterior,frequenciaMediana;
    var teste;
    var vetorLimiteInferior = [];
    var vetorLimitePosterior = [];
    var vetorMediaLimites =[];
    var vetorFrequencia = [];
    var vetorAcumulado = [];
    var vetorMediaPonderada =[];
    var vetorVariancia=[]
    var vetorLimestesJuntos=[];
    var vetorGrafico1 =[];
    var vetorGrafico2 =[];
    var cores = 'rgba('+(cores = Math.floor((Math.random() * 255) + 1))+','+(cores = Math.floor((Math.random() * 255) + 1))+', '+(cores = Math.floor((Math.random() * 10) + 1))+',0.7)';
    //recolher dados
    for(var i=0;i<numElementos;i++){
        vetorLimiteInferior.push(parseInt(document.getElementById('limiteInferior'+i).value));
        vetorLimitePosterior.push(parseInt(document.getElementById('limitePosterior'+i).value));
        vetorMediaLimites.push((vetorLimiteInferior[i]+vetorLimitePosterior[i])/2);
        vetorFrequencia.push(parseInt(document.getElementById('frequencia'+i).value));
        somatorio = vetorFrequencia[i]+somatorio;
        vetorLimestesJuntos.push('<b>'+vetorLimiteInferior[i]+" |-- "+ vetorLimitePosterior[i]+'</b>');
        if(i>0){
            vetorAcumulado.push(vetorFrequencia[i]+vetorAcumulado[i-1]);
        }
        else{
            vetorAcumulado.push(vetorFrequencia[i]);
        }
    }
    amplitude = vetorLimitePosterior[0] - vetorLimiteInferior[0]; 
    //media
    for(i=0;i<numElementos;i++){
        vetorMediaPonderada.push(vetorMediaLimites[i]*vetorFrequencia[i]);
        media = vetorMediaPonderada[i]+media;
    }
    media = media/somatorio;
    //==========moda============
    for(i=0;i<numElementos;i++){
        if(i==0){
            moda = vetorFrequencia[i];
            delta1 = moda;
            delta2 = moda - vetorFrequencia[i+1];
            classeModaInferior = vetorLimiteInferior[i];
            classe =i;
            
        }
        else if(moda<vetorFrequencia[i]){
            moda = vetorFrequencia[i];
            delta1 = moda - vetorFrequencia[i-1];
            delta2 = moda - vetorFrequencia[i+1];
            classeModaInferior = vetorLimiteInferior[i];
            classe = i; 
                if(moda == vetorFrequencia[numElementos-1]){
                    moda = vetorFrequencia[i];
                    delta2=moda;
                    delta1 = moda - vetorFrequencia[i-1];
                    classeModaInferior = vetorLimiteInferior[i];
                    classe = i;            
                }
            
        }
    }
    moda = classeModaInferior + ((delta1)/((delta1)+(delta2)))*amplitude;
    
    //==========mediana============
    classeMediana = somatorio/2;
    classeMedianaInferior = vetorLimiteInferior[0];
    classeMedianaAnterior = 0;
    frequenciaMediana = vetorFrequencia[0];
    for(i=0;i<numElementos;i++){
        if(i==0){
            classeMedianaInferior = vetorLimiteInferior[0];
            classeMedianaAnterior = 0;
            frequenciaMediana = vetorFrequencia[0];
            classe2 = i; 
        }
        if((i>0)&&(classeMediana>vetorAcumulado[i-1])&&(classeMediana<vetorAcumulado[i+1])){
            classeMedianaInferior = vetorLimiteInferior[i];
            classeMedianaAnterior = vetorFrequencia[i-1];
            frequenciaMediana = vetorFrequencia[i];
            classe2 = i;
        }
    }
    for(i=0;i<numElementos;i++){
        vetorVariancia.push(parseFloat((((vetorMediaLimites[i]-media)**2))*vetorFrequencia[i]));
        variancia = vetorVariancia[i]+variancia;
    }
    variancia = variancia/somatorio;
    mediana = classeMedianaInferior+(((classeMediana - classeMedianaAnterior)/frequenciaMediana)*amplitude);
    primeiro = '<fieldset>'+
                    '<table class="table table-striped">'+
                        '<legend>'+nomePesquisa+'</legend>'+
                '<thead>'+
                '<tr>'+
                  '<th scope="col"><b>Classes</b></th>'+
                  '<th scope="col"><b>Limites</b>(xi)</th>'+
                  '<th scope="col"><b>Frequencia(fi)</b></th>'+
                  '<th scope="col"><b>Frequencia Relativa<br>(%)</b>(fi)</th>'+
                  '<th scope="col"><b>Frequenia Acumulada</b></th>'+
                  '<th scope="col"><b>Frequenia Acumulada<br>Relativa(%)</b></th>'+
                  '<th scope="col"><b>Media Ponderada(x&#773;)</b></th>'+
                  '<th scope="col"><b>Desvio Medio<br>(xi-x&#773;)</b></th>'+
                  '<th scope="col"><b>Variancia<br>(xi-x&#773;)²</b></th>'+
                  '<th scope="col"><b>Desvio Padrão(&#x03ED;)</b></th>'+
                '</tr>'+
              '</thead>'+
              '<tbody>';
              
    for(i=0;i<numElementos;i++){
        segundo = segundo + '<tr>'+
                                '<td>'+(i+1)+'ª</td>'+
                                '<td>'+vetorLimiteInferior[i]+' |-- '+vetorLimitePosterior[i]+'</td>'+
                                '<td>'+vetorFrequencia[i]+'</td>'+
                                '<td>'+((vetorFrequencia[i]/somatorio)*100).toFixed(2)+'%</td>'+
                                '<td>'+vetorAcumulado[i]+'</td>'+
                                '<td>'+((vetorAcumulado[i]/somatorio)*100).toFixed(2)+'%</td>'+
                                '<td>'+vetorMediaPonderada[i]+'</td>'+
                                '<td>'+ (vetorMediaLimites[i] - media).toFixed(2) +'</td>'+
                                '<td>'+ (vetorVariancia[i]).toFixed(2)+'</td>'+
                                '<td>---</td>'+
                            '</tr>';
                
    }
    terceiro = '<tr>'+
                                '<td><b>Total</b></td>'+
                                '<td><b>---</b></td>'+
                                '<td><b>'+somatorio+'</b></td>'+
                                '<td><b>100%</b></td>'+
                                '<td><b>'+somatorio+'</b></td>'+
                                '<td><b>100%</b></td>'+
                                '<td><b>'+(media).toFixed(2)+'</b></td>'+
                                '<td><b>---</b></td>'+
                                '<td><b>'+(variancia).toFixed(2)+'</b></td>'+
                                '<td><b>'+(Math.sqrt(variancia)).toFixed(2)+'</b></td>'+
                            '</tr>'+
                '</tbody>'+
                '<tfoot>'+
                '</tfoot>'+	
            '</table>'+
        '</fieldset>';
        document.getElementById('tabela').innerHTML = primeiro + segundo + terceiro;
        primeiro = '<fieldset>'+
                '<legend><h2>Medidas Centrais</h2></legend>'+
                '<div class="col-md-3">'+
                    '<h2>Media:'+(media).toFixed(2)+'</h2>'+
                '</div>'+
                '<div class="col-md-3">'+
                    '<h2>Moda:'+(classe+1)+'ª classe, '+(moda).toFixed(2)+'</h2>'+
                '</div>'+
                '<div class="col-md-6">'+
                '<h2>Mediana:'+(classe2+1)+'ª classe,'+(mediana).toFixed(2)+'</h2>'+
                '</div>'+
                '</fieldset>';
        document.getElementById('medias').innerHTML = primeiro;
        document.getElementById('espacoGrafico').innerHTML = '<div id="grafico2" style="width: 900px; height: 500px;">'+
                                                             '</div>';
                                                            
       //============================começa o grafico=================================\\
        
        document.getElementById('espacoGrafico').innerHTML = '<div id="graficoHistograma"></div>';
        var chart = new Highcharts.Chart({
chart: {
        renderTo:'graficoHistograma',
        defaultSeriesType:'column',
        borderWidth:0,
        backgroundColor:'#eee',
        borderWidth:1,
        borderColor:'#ccc',
        plotBackgroundColor:'#fff',
        plotBorderWidth:1,
        plotBorderColor:'#ccc'
    },
    credits:{enabled:false},
    exporting:{enabled:false},
    //======================================Nome Pesquisa=================================\\
    title:{text:nomePesquisa},
    legend:{
        //enabled:false
    },
    tooltip:{
        borderWidth:1,
        formatter:function() {
            return '<b>Limites:</b><br/> '+ this.x +'<br/>'+
            '<b>Frequencias:</b> '+ this.y;
        }
    },
    plotOptions:{
        column:{
            shadow:false,
            borderWidth:.5,
            borderColor:'#666',
            pointPadding:0,
            groupPadding:0,
            color: 'rgba(204,204,204,.85)'
        },
        spline:{
            shadow:false,
            marker:{
                radius:1
            }
        },
        areaspline:{
            color:'rgb(69, 114, 167)',
            fillColor:'rgba(69, 114, 167,.25)',
            shadow:false,
            marker:{
                radius:1
            }
        }
    },
    xAxis:{
          //===================================================\\
         //===================Limites Juntos====================\\
        //=======================================================\\
        categories: vetorLimestesJuntos,
        labels:{
            rotation:0,
            y:40,
            style: {
                fontSize:'8px',
                fontWeight:'big',
                color:'#000'
            },
        },
        lineWidth:0,
        lineColor:'#999',
        tickLength:70,
        tickColor:'#ccc',
    },
    yAxis:{
        title:{text:''},
        //maxPadding:0,
        gridLineColor:'#e9e9e9',
        tickWidth:1,
        tickLength:3,
        tickColor:'#ccc',
        lineColor:'#ccc',
        tickInterval:1,
        //endOnTick:false,
    },
    series: [{
          //===================================================\\
         //===================Nome dos Elementos================\\
        //=======================================================\\
        name:nomeElementos,
        //================================Valores da frequencia===========================\\
        data: vetorFrequencia,
        color: cores
    },{
        //===============================VAores da Frequencia============================\\
        name:'Curve',
        type:'spline',
        visible:false,
        data: vetorFrequencia,
        //color: 'rgba(204,204,255,.85)'
    },{
        name:'Filled Curve',
        type:'areaspline',
        visible:false,
        //=================================Valores Frequencia============================\\
        data: vetorFrequencia,
        //color: 'rgba(204,204,255,.85)'
    }]
});

        //=============================Fim do grafico
      document.getElementById('btnAtualizar').innerHTML = '<button type="button" id="reiniciar" class="btn btn-default"><span class="glyphicon glyphicon-refresh"></span> Reiniciar</button><br>';       
}