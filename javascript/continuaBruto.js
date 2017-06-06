function continuaBrutoPasso1(nomePesquisa,numElementos,nomeElementos,nomeFrequencia){     
    document.getElementById('passo2Inicio').innerHTML = '<form class="form-horizontal">'+
                                                            '<fieldset>'+
                                                            '<legend>Nome Pesquisa</legend>'+
                                                                '<div class="form-group">'+
                                                                '<label class="col-md-2 control-label" for="dadosBrutos">Dados Brutos</label>'+  
                                                                    '<div class="col-md-10">'+
                                                                        '<input id="dadosBrutos" name="dadosBrutos" type="text" placeholder="digite os numeros" class="form-control input-md">'+  
                                                                    '</div>'+
                                                                '</div>'+
                                                            '</fieldset>'+
                                                        '</form>'+
                                                        '<button type="button" class="btn btn-default" id="btnPasso2">Prosseguir</button>';
}
function continuaBrutoPasso2(nomePesquisa,dadosBrutos,nomeElementos,nomeFrequencia){
    var teste=0,i=0,numeroClasses,amplitudeTotal,amplitude,media=0,maiorElemento,menorElemento,intervalodeClasse,contador;
    var somatorio=0,primeiro='',moda=0,limiteInferiordaClasseModal=0,delta1=0,delta2=0;
    var classeMediana=0,classeMedianaAnterior=0,classeMedianaInferior=0,classe2=0,frequenciaMediana=0,mediana=0,desvioPadrao=0;
    var primeiro="",segundo="",terceiro="";
    var somatorioVariancia=0;
    var vetorElementos=[];
    var vetorAcumulado=[];
    var vetorLimitesAnteriores=[];
    var vetorLimitesPosteriores=[];
    var vetorFrequencia=[];
    var vetorMediaLimites=[];
    var vetorLimestesJuntos=[];
    var vetorMediaPonderada=[];
    var vetorVariancia=[];
    var vetorDi=[];
    var cores = 'rgba('+(cores = Math.floor((Math.random() * 255) + 1))+','+(cores = Math.floor((Math.random() * 255) + 1))+', '+(cores = Math.floor((Math.random() * 10) + 1))+',0.6)';
    pegaValor(vetorElementos,dadosBrutos); 
    vetorElementos.sort();
    amplitudeTotal = vetorElementos[vetorElementos.length-1]-vetorElementos[0];
    numeroClasses = 1+3.22* (Math.log10(vetorElementos.length));
    numeroClasses = parseInt(numeroClasses);
    intervalodeClasse = amplitudeTotal/numeroClasses
    intervalodeClasse = Math.round(intervalodeClasse);
    for(i=0;i<numeroClasses;i++){       
        if(i==0){
            vetorLimitesAnteriores[i] = parseInt(vetorElementos[i]);
            vetorLimitesPosteriores[i] = parseInt(vetorElementos[i])+intervalodeClasse;
            aux = parseInt(vetorLimitesPosteriores[i]);
        }else{
            vetorLimitesAnteriores[i] = aux;
            vetorLimitesPosteriores[i] = parseInt(vetorLimitesAnteriores[i])+intervalodeClasse;
            aux = parseInt(vetorLimitesPosteriores[i]);
        } 
        
    }
    for(i=0;i<numeroClasses;i++){
        contador=0;
        for(var j=0;j<vetorElementos.length;j++){
            if((vetorElementos[j]>=vetorLimitesAnteriores[i])&&(vetorElementos[j]<vetorLimitesPosteriores[i])){
            contador++;
            }
        }
        vetorFrequencia[i] = contador;
    }
    //recolher dados
    for(i=0;i<numeroClasses;i++){
        vetorMediaLimites.push((vetorLimitesAnteriores[i]+vetorLimitesPosteriores[i])/2); 
        somatorio+=vetorFrequencia[i];
        vetorLimestesJuntos.push(vetorLimitesAnteriores[i]+" |-- "+ vetorLimitesPosteriores[i]);
    }
    amplitude = vetorLimitesPosteriores[0]-vetorLimitesAnteriores[0];
    for(i=0;i<numeroClasses;i++){
        if(i==0){
            vetorAcumulado[i] = vetorFrequencia[i];
        }
        else{
            vetorAcumulado[i] = vetorAcumulado[i-1]+vetorFrequencia[i];
        }
    }
    //media
    for(i=0;i<numeroClasses;i++){
        vetorMediaPonderada.push(vetorMediaLimites[i]*vetorFrequencia[i]);
        media += vetorMediaPonderada[i];
    }
    media = media/somatorio;
    //Moda
    for(i=0;i<numeroClasses;i++){
        if(i==0){
            moda = vetorFrequencia[i];
            delta1 = moda;
            delta2 = moda - vetorFrequencia[i+1];
            limiteInferiordaClasseModal = vetorLimitesAnteriores[i];
            classe =i;
            
        }
        else if(moda<vetorFrequencia[i]){
            moda = vetorFrequencia[i];
            delta1 = moda - vetorFrequencia[i-1];
            delta2 = moda - vetorFrequencia[i+1];
            limiteInferiordaClasseModal = vetorLimitesAnteriores[i];
            classe = i; 
                if(moda == vetorFrequencia[numElementos-1]){
                    moda = vetorFrequencia[i];
                    delta2=moda;
                    delta1 = moda - vetorFrequencia[i-1];
                    limiteInferiordaClasseModal = vetorLimitesAnteriores[i];
                    classe = i;            
                }
            
        }
    }
    moda = limiteInferiordaClasseModal + ((delta1)/((delta1)+(delta2)))*amplitude;
    //==========mediana============
    classeMediana = somatorio/2;
    classeMedianaInferior = vetorLimitesAnteriores[0];
    classeMedianaAnterior = 0;
    frequenciaMediana = vetorFrequencia[0];
    for(i=0;i<numeroClasses;i++){
        if(i==0){
            classeMedianaInferior = vetorLimitesAnteriores[0];
            classeMedianaAnterior = 0;
            frequenciaMediana = vetorFrequencia[0];
            classe2 = i; 
        }
        if((i>0)&&(classeMediana>vetorAcumulado[i-1])&&(classeMediana<vetorAcumulado[i+1])){
            classeMedianaInferior = vetorLimitesAnteriores[i];
            classeMedianaAnterior = vetorFrequencia[i-1];
            frequenciaMediana = vetorFrequencia[i];
            classe2 = i;
        }
    }
    mediana = classeMedianaInferior+(((classeMediana - classeMedianaAnterior)/frequenciaMediana)*amplitude);
    for(i=0;i<numeroClasses;i++){
        vetorDi[i] = vetorMediaLimites[i]-media;
        vetorVariancia[i] = (vetorDi[i])**2 * vetorFrequencia[i];
        somatorioVariancia += vetorVariancia[i]; 
    }
    desvioPadrao = Math.sqrt(somatorioVariancia);
    primeiro = '<fieldset>'+
                    '<table class="table table-striped" id="tabela">'+
                        '<legend>'+nomePesquisa+'</legend>'+
                '<thead>'+
                '<tr>'+
                  '<th scope="col"><b>Classes</b></th>'+
                  '<th scope="col"><b>Limites</b>(xi)<br>'+nomeElementos+'</th>'+
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
    for(i=0;i<numeroClasses;i++){
        segundo+='<tr>'+
                  '<th scope="col"><b>'+(i+1)+'ª</b></th>'+
                  '<th scope="col">'+vetorLimestesJuntos[i]+'</th>'+
                  '<th scope="col">'+vetorFrequencia[i]+'</th>'+
                  '<th scope="col">'+((vetorFrequencia[i]/somatorio)*100).toFixed(2)+'%</th>'+
                  '<th scope="col">'+vetorAcumulado[i]+'</th>'+
                  '<th scope="col">'+((vetorAcumulado[i]/somatorio)*100).toFixed(2)+'</th>'+
                  '<th scope="col">'+vetorMediaPonderada[i]+'</th>'+
                  '<th scope="col">'+(vetorDi[i]).toFixed(2)+'</th>'+
                  '<th scope="col">'+(vetorVariancia[i]).toFixed(2)+'</th>'+
                  '<th scope="col">---</th>'+
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
                '<td><b>'+(somatorioVariancia).toFixed(2)+'</b></td>'+
                '<td><b>'+(Math.sqrt(somatorioVariancia)).toFixed(2)+'</b></td>'+
              '</tr>'+
                '</tbody>'+
                '<tfoot>'+
                '</tfoot>'+	
            '</table>'+
        '</fieldset>';  
    document.getElementById('tabela').innerHTML = primeiro+segundo+terceiro;
    primeiro = '<fieldset>'+
                '<legend><h2>Medidas Centrais</h2></legend>'+
                '<div class="col-md-4">'+
                    '<h2>Media<br>'+(media).toFixed(2)+'</h2>'+
                '</div>'+
                '<div class="col-md-4">'+
                    '<h2>Moda<br>'+(classe+1)+'ª classe, '+(moda).toFixed(2)+'</h2>'+
                '</div>'+
                '<div class="col-md-4">'+
                '<h2>Mediana<br>'+(classe2+1)+'ª classe,'+(mediana).toFixed(2)+'</h2>'+
                '</div>'+
                '</fieldset>';
        document.getElementById('medias').innerHTML = primeiro;
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
                fontWeight:'normal',
                color:'#333'
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
}//=======================================Fim da funcao Principal(II)=======================================
    

//Funcao para pegar valor
function pegaValor(vetor,palavra){
            var teste=0;
            vetor[teste]="";
            for(var i=0;i<palavra.length;i++){
              if((palavra.substring(i,i+1)!=';')&&(palavra.substring(i,i+1)!=null)){
                vetor[teste] += palavra.substring(i,i+1); 
              }
              else{
                teste++;
                if(i==palavra.length-1){

                }else{
                    vetor[teste]="";
                }
                
              }
            }    
        }