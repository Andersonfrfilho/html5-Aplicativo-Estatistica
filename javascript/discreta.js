function discretaPasso1(nomePesquisa,numElementos,nomeElementos,nomeFrequencia){
    var primeiro="",segundo="",terceiro="";
    primeiro =     '<fieldset>'+
                        '<legend>'+nomePesquisa+'</legend>';   
    for(var i=0;i<numElementos;i++){
       segundo =  segundo +
                    '<div class="form-group row">'+
                                '<div class="col-xs-4">'+
                                    '<label for="elementos'+i+'"><span class="glyphicon glyphicon-tag"></span> '+nomeElementos+'(n)</label>'+
                                    '<input class="form-control" id="elementos'+i+'" type="number" placeholder="elemento nº:'+(i+1)+'">'+
                                '</div>'+
                                '<div class="col-xs-3 col-xs-offset-2">'+
                                    '<label for="frequencia'+i+'"><span class="glyphicon glyphicon-tag"></span>  '+nomeFrequencia+'(fi)</label>'+
                                    '<input class="form-control" id="frequencia'+i+'" type="number" placeholder="frequencia nº:'+(i+1)+'">'+
                                '</div>'+ 
                    '</div>';
    }
        terceiro = '</fieldset>'+
                    '<button type="button" class="btn btn-default" id="btnPasso2">Prosseguir</button>';
    document.getElementById('passo2Inicio').innerHTML = primeiro + segundo+terceiro; 
}
function discretaPasso2(nomePesquisa,numElementos,nomeElementos,nomeFrequencia){
    var primeiro,segundo="",terceiro,somatorio=0,somatorioMedia=0,cores,media=0,moda=0,modaSimples=0,mediana,mediana2,auxiliar=0,classeModa,classeMediana,variancia=0,cor=0;
    var vetorElementos = [];
    var vetorFrequencia = [];
    var vetorAcumulado = [];
    var vetorMediaPonderada =[];
    var vetorVariancia=[]
    var vetorCores =[];
    cores = 'rgba('+(cores = randomico())+','+(cores = randomico())+', '+(cores = randomico())+',0.5)';
    //recolher dados
    for(var i=0;i<numElementos;i++){
        vetorElementos.push(parseInt(document.getElementById('elementos'+i).value));
        vetorFrequencia.push(parseInt(document.getElementById('frequencia'+i).value));
    }
    //Media ponderada Simples
    for(i=0;i<numElementos;i++){
        vetorMediaPonderada.push(vetorElementos[i]*vetorFrequencia[i]);
        if(i>0){
            vetorAcumulado.push(vetorFrequencia[i]+vetorAcumulado[i-1]);
        }
        else{
            vetorAcumulado.push(vetorFrequencia[i]);
        }
        somatorioMedia = vetorMediaPonderada[i]+somatorioMedia;
        somatorio = vetorFrequencia[i] + somatorio;
    }
    media = somatorioMedia/somatorio;
    //variancia
    for(i=0;i<numElementos;i++){
        vetorVariancia.push(vetorFrequencia[i]*((vetorElementos[i]-media)**2)); 
        variancia = vetorVariancia[i]+variancia;
    }
    
    variancia = variancia/somatorio;
    //moda simples
    modaSimples=vetorFrequencia[0];
    for(i=0;i<numElementos;i++){
        if(modaSimples<vetorFrequencia[i]){
            modaSimples=vetorFrequencia[i];
            classeModa = i;
        }
    }
    //mediana
    mediana = somatorio/2;
    if(mediana%2==0){
        mediana = (((mediana2=mediana+1)+mediana)/2)
    }
    mediana = arredondar(mediana,0);
    for(i=0;i<numElementos;i++){
        if(mediana<=vetorAcumulado[i]){
            classeMediana = i;
        }
    }
    //tabela
    primeiro = '<fieldset>'+
                    '<table class="table table-striped" id="tabela">'+
                        '<legend>'+nomePesquisa+'</legend>'+
                '<thead>'+
                '<tr>'+
                  '<th scope="col"><b>'+nomeElementos+'</b>(xi)</th>'+
                  '<th scope="col"><b>'+nomeFrequencia+'</b>(fi)</th>'+
                  '<th scope="col"><b>Frequencia Relativa(%)</b></th>'+
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
                                '<td>'+vetorElementos[i]+'</td>'+
                                '<td>'+vetorFrequencia[i]+'</td>'+
                                '<td>'+((vetorFrequencia[i]/somatorio)*100).toFixed(2)+'%</td>'+
                                '<td>'+vetorAcumulado[i]+'</td>'+
                                '<td>'+((vetorAcumulado[i]/somatorio)*100).toFixed(2)+'%</td>'+
                                '<td>'+vetorMediaPonderada[i]+'</td>'+
                                '<td>'+ (vetorElementos[i] - media).toFixed(2) +'</td>'+
                                '<td>'+ (vetorVariancia[i]).toFixed(2)+'</td>'+
                                '<td>---</td>'+
                            '</tr>';                        
    }          
        terceiro =          '<tr>'+
                                '<td><b>Total</b></td>'+
                                '<td><b>'+somatorio+'</b></td>'+
                                '<td><b>100%</b></td>'+
                                '<td><b>---</b></td>'+
                                '<td><b>100%</b></td>'+
                                '<td><b>'+(media).toFixed(2)+'</b></td>'+
                                '<td><b>---</b></td>'+
                                '<td><b>'+variancia.toFixed(2)+'</b></td>'+
                                '<td><b>'+(Math.sqrt(variancia)).toFixed(2)+'</b></td>'+
                            '</tr>'+
                '</tbody>'+
                '<tfoot>'+
                '</tfoot>'+	
            '</table>'+
        '</fieldset>';
        document.getElementById('tabela').innerHTML = primeiro + segundo + terceiro;
        primeiro = 
                '<fieldset>'+
                '<legend><h2>Medidas Centrais</h2></legend>'+
                '<div class="col-md-3">'+
                    '<h2>Media:'+(media).toFixed(2)+'</h2>'+
                '</div>'+
                '<div class="col-md-3">'+
                    '<h2>Moda:'+(classeModa+1)+'ª classe, '+modaSimples+'</h2>'+
                '</div>'+
                '<div class="col-md-6">'+
                '<h2>Mediana:'+(classeMediana)+'ª classe</h2>'+
                '</div>'+
                '</fieldset>';
     document.getElementById('medias').innerHTML = primeiro;
     document.getElementById('espacoGrafico2').innerHTML = '<canvas class="line-chart"></canvas>'; 
    //=======================grafico
    var ctx = document.getElementsByClassName("line-chart");
    var chartGraph = new Chart(ctx,{
                type: 'bar',
                data: {
                    labels: vetorElementos,
                    datasets: [{
                        label: nomeFrequencia,
                        data:vetorFrequencia,
                        borderWidth: 2,
                        borderColor: 'rgba(0,0,0,0.85)',
                        backgroundColor: cores,                        
                        
                    },]
                },
                options: {
                    title:{
                        display:true,
                        fontSize:20,
                        text: nomePesquisa
                    },
                    labels:{
                        fontStyle:"bold"
                    },scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
            }
        }]
    }
                }
});

document.getElementById('btnAtualizar').innerHTML = '<button type="button" class="btn btn-default">Reiniciar</button><br>';
}

function arredondar(d,casas) { 
   var aux = Math.pow(10,casas)
   return Math.floor(d * aux)/aux
}