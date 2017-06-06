var vetorInputX=[];
var vetorInputY=[];
var vetorxXy=[];
var vetorxII=[];
var vetoryII=[];
var vetorPontos=[];
var vetorPontosGrafico=[];
var id,vetores,posicao,valor,j=0; 
var somatorioX=0,somatorioY=0,somatorioxXy=0,somatorioXII=0,somatorioYII=0;
var r,tipoCorrelacao,a,b,tipoCorrelacaoII,aux,rII,variacao,mediaY,mediaX,equacao,coeficiente,label,minimo,maximo;
function correlacaoPasso1(n){

    var primeiro,segundo='',terceiro;
    primeiro = '<div class="row-fluid">'+
                '<fieldset>'+
                '<table class="table table-striped">'+
                    '<legend>Tabela Dispersão</legend>'+
                '<thead>'+
                    '<tr>'+
                    '<th scope="col"><b>(n)</th>'+
                    '<th scope="col">Independente(x)</th>'+
                    '<th scope="col">Dependente(y)</th>'+
                    '<th scope="col">(X*Y)</th>'+
                    '<th scope="col">(x²)</th>'+
                    '<th scope="col">(y²)</b></th>'+
                    '</tr>'+
                '</thead>'+
                '<tbody>';
    for(var i=0;i<n;i++){
        segundo +=  '<tr>'+
                        '<td>'+(i+1)+'</td>'+
                        '<td><input type="number" id="inputX'+i+'" class="inputTabela"></input></td>'+
                        '<td><input type="number" id="inputY'+i+'" class="inputTabela"></input></td>'+
                        '<td><span id="xXy'+i+'" class="inputTabela"></span></td>'+
                        '<td><span id="xII'+i+'" class="inputTabela"></span></td>'+
                        '<td><span id="yII'+i+'" class="inputTabela"></span></td>'+
                    '</tr>'; 
    }
    
    terceiro = '<tr>'+
                        '<td><b>Total</td>'+
                        '<td><span id="inputXTotal"></span></td>'+
                        '<td><span id="inputYTotal"></span></td>'+
                        '<td><span id="xXyTotal"></span></td>'+
                        '<td><span id="xIITotal"></span></td>'+
                        '<td><span id="yIITotal"></span></b></td>'+
                    '</tr>'+
                    '</tbody>'+
                    '<tfoot>'+
                    '</tfoot>'+	
                    '</table>'+
                    '</fieldset>'+
                '</div>'; 
    document.getElementById('tabela').innerHTML = primeiro + segundo + terceiro;
    
    $(document).on('keyup',".inputTabela",function(){
        id = 'vetor'+$(this).attr('id');
        valor = id.length-11;
        posicao = apenasNumeros(id);
        id=id.substring(0,id.length-valor);
       if((id != "" && id != null) && (id != "undefined" )){
                if(id=='vetorinputX'){
                    vetorInputX[posicao] = parseFloat($(this).val());      
                }
                else{
                    vetorInputY[posicao] = parseFloat($(this).val());
                }          
        }
        if((vetorInputX[posicao] != "" && vetorInputX[posicao] != null)&&(vetorInputY[posicao] != "" && vetorInputY[posicao] != null)){
            vetorxXy[posicao] = vetorInputX[posicao]*vetorInputY[posicao];
            vetorxII[posicao] = vetorInputX[posicao]**2;
            vetoryII[posicao] = vetorInputY[posicao]**2;
            $('#xXy'+posicao).text(vetorxXy[posicao].toFixed(2));
            $('#xII'+posicao).text(vetorxII[posicao].toFixed(2));
            $('#yII'+posicao).text(vetoryII[posicao].toFixed(2));
        }
            if((vetorInputX.length==n)&&(vetorInputY.length==n)&&(vetorxXy.length==n)&&(vetorxII.length==n)&&(vetoryII.length==n)){
                //========================intervalo de tempo para o somatorio pegar valores===========
                setTimeout(somatorioFuncao(n,vetorInputX,vetorInputY,vetorxXy,vetorxII,vetoryII,somatorioX,somatorioY,somatorioXII,somatorioYII,somatorioxXy,r,a,tipoCorrelacao), 3000);
                //=========================encontrar o valor de r=======
                //r= (n*(somatorioxXy)-(somatorioX*somatorioY))/Math.sqrt((n*somatorioXII-(somatorioX)**2)*(n*somatorioYII-(somatorioY)**2));
            }
    });//=======================================================fim do jquery        
}//=============================================fim da funcao
//=========================funcao Somatorio
function somatorioFuncao(n,vetorInputX,vetorInputY,vetorxXy,vetorxII,vetoryII,somatorioX,somatorioY,somatorioXII,somatorioYII,somatorioxXy,r,tipoCorrelacao,tipoCorrelacaoII){
    for(var i=0;i<n;i++){
        somatorioX+=vetorInputX[i];
        somatorioY+=vetorInputY[i];
        somatorioxXy+=vetorxXy[i];; 
        somatorioXII+=vetorxII[i];;     
        somatorioYII+=vetoryII[i];;
        $('#inputXTotal').text(somatorioX.toFixed(2));
        $('#inputYTotal').text(somatorioY.toFixed(2));
        $('#xXyTotal').text(somatorioxXy.toFixed(2));
        $('#xIITotal').text(somatorioXII.toFixed(2));
        $('#yIITotal').text(somatorioYII.toFixed(2));    
        }
   
        $('#botaoProsseguir2').html('<div class="row-fluid"><button type="button" class="btn btn-default" id="btnCorrelacao2">Prosseguir</button></div>');
    $(document).on('click','#btnCorrelacao2', function(){
        
        r= (n*(somatorioxXy)-(somatorioX*somatorioY));
        aux = Math.sqrt(n*somatorioXII-somatorioX**2)*Math.sqrt(n*somatorioYII-somatorioY**2);
        r = r/aux;
        rII = r**2;
        variacao = 1-rII;
        b=n*somatorioxXy-(somatorioX*somatorioY);
        aux = n*somatorioXII-somatorioX**2;
        b = b/aux;
        mediaY = somatorioY/n;
        mediaX = somatorioX/n;
        a=mediaY-b*mediaX;
        equacao = '	&#402;(x)='+a.toFixed(2) +" + "+b.toFixed(2)+"x";

        console.log(equacao);
        if((r>=-0.03)&&(r<=0.03)){
            tipoCorrelacao="Nula";
            label="label label-default";
        }
        else if((r>=-0.35)&&(r<=0.35)){
            tipoCorrelacao="Fraca";
            label="label label-primary";
        }
        else if((r>=-0.65)&&(r<=0.65)){
            tipoCorrelacao="Média";    
            label="label label-success";
        }
        else if((r>=-0.95)&&(r<=0.95)){
            tipoCorrelacao="Forte";
            label="label label-info";
        }
        else if((r>-1)&&(r<1)){
            tipoCorrelacao="Muito Forte";
            label="label label-warning";
        }else{
            tipoCorrelacao="Perfeita";
            label="label label-danger";
        }
        if(r>0){
            tipoCorrelacaoII = "Correlaçao Direta";
        }
        else if(r==0){
            tipoCorrelacaoII = "Correlacao Nula";
        }
        else{
            tipoCorrelacaoII = "Correlacao Inversa";
        }
        primeiro = '<div class="row-fluid">'+
                  '<div class="col-md-4">'+
                    '<legend>Coeficiente de Relação</legend>'+
                    '<h2><span class="label label-default">'+(r*100).toFixed(2)+'%</span></h2>'+
                  '</div>'+  
                  '<div class="col-md-4">'+
                    '<legend>Tipo de Relação</legend>'+
                    '<h2><span id="tipoCorrelacao" class="label label-default">'+tipoCorrelacao+'</span></h2>'+
                    '<h2><span class="label label-default">'+tipoCorrelacaoII+'</span></h2>'+
                  '</div>'+ 
                '<div class="col-md-4">'+
                  '<legend>Equação(&#402;)</legend>'+
                  '<h2><span class="label label-default">'+equacao+'</span></h2>'+
                '</div>'+ 
              '</div>';
            $("#coeficiente").html(primeiro);
            $("#tipoCorrelacao").removeClass("label label-default");
            $("#tipoCorrelacao").addClass(label);
            for(var i=0;i<n;i++){
                vetorPontos[i] = a+b*vetorInputX[i];
                vetorPontosGrafico[i] = [vetorInputX[i],vetorInputY[i]];
                if(i==0){
                    minimo = vetorPontos[i];
                    maximo = vetorPontos[i];
                }
                if(minimo>=vetorPontos[i]){
                    minimo = vetorPontos[i];
                }
                if(maximo<=vetorPontos[i]){
                    maximo = vetorPontos[i];
                }

            }
            if(minimo>=0){
                minimoGrafico=0;
            }
            //=======================================================\\
           //=====================Grafico=============================\\
          //===========================================================\\
          document.getElementById('grafico').innerHTML = '<div class="row-fluid">'+
                                                            '<legend>Grafico Regressão</legend>'+
                                                                '<div id="GraficoRegressao" style="min-width: 310px; height: 400px; margin: 0 auto"></div>'+
                                                          '</div>';

          Highcharts.chart('GraficoRegressao', {
            xAxis: {
            //===========Minimo e maximo de x
                min: vetorInputX[0]-1,
                max: vetorInputX[vetorInputX.length-1]+1
            },
            //============minimo e maximo de y
            yAxis: {
                min: minimo
            },
            title: {
            //============Titulo Grafico
                text: 'Grafico Regressão'
            },
            series: [{
                type: 'line',
                name: 'Linha de Regressão',
                //=================POnto minimo e o ponto maximo [xInicio,f(xInicio)],[xFinal,f(xFinal)]=======
                data: [[vetorInputX[0], vetorPontos[0]], [vetorInputX[vetorInputX.length-1], vetorPontos[vetorPontos.length-1]]],
                marker: {
                    enabled: false
                },
                states: {
                    hover: {
                        lineWidth: 0
                    }
                },
                enableMouseTracking: false
            }, {
                type: 'scatter',
                name: 'Pontos',
                //===================vetor de valores da funcao=======\\
                data: vetorPontosGrafico,
                marker: {
                    radius: 4
                }
            }]
        });

                    
    });
}
/*<div class="row-fluid">
    <fieldset>
    <table class="table table-striped">
        <legend>Tabela Dispersão</legend>
    <thead>
        <tr>
        <th scope="col"><b>(n)</th>
        <th scope="col">Independente(x)</th>
        <th scope="col">Dependente(y)</th>
        <th scope="col">(X*Y)</th>
        <th scope="col">(x²)</th>
        <th scope="col">(y²)</b></th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>1</td>
        <td><input></input></td>
        <td><input></input></td>
        <td></td>
        <td></td>
        <td></td>
        </tr> 
    </tbody>
    <tfoot>
    </tfoot>	
    </table>
    </fieldset>
</div>*/
function apenasNumeros(string) 
{
    var numsStr = string.replace(/[^0-9]/g,'');
    return parseInt(numsStr);
}
