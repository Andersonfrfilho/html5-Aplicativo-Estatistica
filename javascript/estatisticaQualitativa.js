function qualitativaPasso1(nomePesquisa,numElementos,nomeElementos,nomeFrequencia){
    var primeiro="",segundo="",terceiro="";
    primeiro = '<div class="row-fluid" id="passo2Inicio">'+
                    '<fieldset>'+
                        '<legend>'+nomePesquisa+'</legend>';   
                            
    for(var i=0;i<numElementos;i++){
       segundo =  segundo +
                    '<div class="form-group row">'+
                                '<div class="col-xs-4">'+
                                    '<label for="elementos'+i+'"><span class="glyphicon glyphicon-tag"></span> '+nomeElementos+'('+(i+1)+'º)</label>'+
                                    '<input class="form-control" id="elementos'+i+'" type="text">'+
                                '</div>'+
                                '<div class="col-xs-3 col-xs-offset-2">'+
                                    '<label for="frequencia'+i+'"><span class="glyphicon glyphicon-tag"></span>  '+nomeFrequencia+'('+(i+1)+'º)'+'</label>'+
                                    '<input class="form-control" id="frequencia'+i+'" type="number">'+
                                '</div>'+ 
                    '</div>';
    }
    terceiro =   '<button type="button" class="btn btn-default" id="btnPasso2">Prosseguir</button>';
    document.getElementById('passo2Inicio').innerHTML = primeiro + segundo+terceiro; 
}
function qualitativaPasso2(nomePesquisa,numElementos,nomeElementos,nomeFrequencia){
    var primeiro,segundo="",terceiro,somatorio=0,cores,media=0,moda=0,mediana="",auxiliar=0,classeMediana,classeModa,x=0;
    var vetorElementos = [];
    var vetorFrequencia = [];
    var vetorAcumulado = [];
    var vetorCores =[];
    var cores = 'rgba('+(cores = Math.floor((Math.random() * 255) + 1))+','+(cores = Math.floor((Math.random() * 255) + 1))+', '+(cores = Math.floor((Math.random() * 10) + 1))+',0.7)';
    for(var i=0;i<numElementos;i++){
        vetorElementos.push(document.getElementById('elementos'+i).value);
        vetorFrequencia.push(parseInt(document.getElementById('frequencia'+i).value));
        vetorCores.push(cores);
    }
           
    primeiro = '<fieldset>'+
                    '<table class="table table-striped" id="tabela">'+
                        '<legend>'+nomePesquisa+'</legend>'+
                '<thead>'+
                '<tr>'+
                  '<th scope="col">'+nomeElementos+'</th>'+
                  '<th scope="col">'+nomeFrequencia+'</th>'+
                  '<th scope="col">Frequencia(%)</th>'+
                  '<th scope="col">FrequeniaAcumulada</th>'+
                  '<th scope="col">FrequeniaAcumulada(%)</th>'+
                '</tr>'+
              '</thead>'+
              '<tbody>';
              
     for(i=0;i<numElementos;i++){
         somatorio = vetorFrequencia[i]+somatorio;
         if(i==0){
             vetorAcumulado[i] = vetorFrequencia[i];
         }
         else{
            vetorAcumulado[i] = vetorAcumulado[i-1] + vetorFrequencia[i];
         } 
     }
     for(i=0;i<numElementos;i++){
       segundo= segundo+ '<tr>'+
                  '<td>'+vetorElementos[i]+'</td>'+
                  '<td>'+vetorFrequencia[i]+'</td>'+
                  '<td>'+((vetorFrequencia[i]/somatorio)*100).toFixed(2)+'%</td>'+
                  '<td>'+vetorAcumulado[i]+'</td>'+
                   '<td>'+((vetorAcumulado[i]/somatorio)*100).toFixed(2)+'%</td>'+
                 '</tr>';
     }
     
     terceiro =  '<tr>'+
                  '<td>---</td>'+
                  '<td>'+somatorio+'</td>'+
                  '<td>100%</td>'+
                  '<td>'+somatorio+'</td>'+
                  '<td>100%</td>'+
                 '</tr>'+
                    '</tbody>'+
                    '<tfoot>'+
                    '</tfoot>'+	
                    '</table>'+
                '</fieldset>';   
     document.getElementById('tabela').innerHTML = primeiro + segundo+terceiro;                  
    media = somatorio/numElementos;
    
    moda = vetorFrequencia[0];
    for(i=1;i<numElementos;i++){
        if(moda<=vetorFrequencia[i]){
            moda = vetorFrequencia[i];
            classeModa = i;
        }
    }
    auxiliar = somatorio/2;
    for(i=0;i<numElementos;i++){
        if(auxiliar >= vetorAcumulado[i]){
            mediana = vetorElementos[i];
            classeMediana = i;
        }
    }
    primeiro = '<div class="col-md-3">'+
                    '<h2>Media:'+(media).toFixed(2)+'</h2>'+
               '</div>'+
                '<div class="col-md-3">'+
                    '<h2>Moda:'+(classeModa+1)+'ª classe, '+moda+'</h2>'+
                '</div>'+
                '<div class="col-md-6">'+
                '<h2>Mediana:Elemento '+mediana+', '+(classeMediana+1)+'ª classe</h2>'+
                '</div>';
     document.getElementById('medias').innerHTML = primeiro;
     document.getElementById('espacoGrafico2').innerHTML = '<canvas class="line-chart"></canvas>';
    
//=============================================
    var ctx = document.getElementsByClassName("line-chart");
    var x=0;
    var chartGraph = new Chart(ctx,{
                type: 'bar',
                data: {
                    labels: vetorElementos,
                    datasets: [{
                        label: nomeFrequencia,
                        data:vetorFrequencia,
                        borderWidth: 2,
                        borderColor: 'rgba(0,0,0,0.85)',
                        backgroundColor:cores,
                        
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
    document.getElementById('btnAtualizar').innerHTML = '<button type="button" id="reiniciar" class="btn btn-default"><span class="glyphicon glyphicon-refresh"></span> Reiniciar</button><br>';
}

function randomico() {
     return Math.floor((Math.random() * 255) + 0);
}

    