function tipoTabela(id,id2){
	document.getElementById(id).innerHTML = '<div class="radio-inline" id="tTabela2"><label><input type="radio" name="optradio2" value="discreta" id="discreta" >Discreta</label></div><div class="radio-inline"><label><input type="radio" name="optradio2" value="continua" id="continua">Continua</label></div>';
	document.getElementById(id2).innerHTML = '';
}
function tipoTabela2(id){
	document.getElementById(id).innerHTML = '';
	numeroElementos();
}
/*Criar Elementos Normalizados podendo ser usado na opcao Qualitativa ou Discreta*/
function criarElementosQualitativos(id1,id2,id3,id4,id5){
	var primeiro="",segundo="",terceiro="";
	var nm1="'qualitativa'",nm2="'discreta'";
	primeiro = '<fieldset>'+
						'<legend>'+document.getElementById(id1).value+'</legend>';
						
	for(var i=0;i<parseInt(document.getElementById(id2).value);i++){
		segundo = segundo + 
					'<div class="form-inline row">'+
							'<div class="col-md-4">'+
								'<label for="elemento'+i+'">'+document.getElementById(id3).value+'</label>'+
								'<span class="input-inline-addon"><i class="glyphicon glyphicon-tag">&nbsp</i></span>'+
								'<input type="text" class="form-control" id="elemento'+i+'" placeholder="Elemento'+(i+1)+'" name="elemento">'+
							'</div>'+
							'<div class="col-md-4 col-md-offset-2">'+
								'<label for="frequencia'+i+'">'+document.getElementById(id4).value+'</label>'+
								'<span class="input-inline-addon"><i class="glyphicon glyphicon-tags">&nbsp</i></span>'+
								'<input type="number" class="form-control" id="frequencia'+i+'" placeholder="Frequencia:'+(i+1)+'" name="frequencia">'+
							'</div>'+
						'</div>';

	}
		terceiro = '</fieldset>'+
							'<div class="row">'+
								'<div class="col-md-12">'+
									'<button type="button" class="btn btn-primary" onclick="principal2('+nm1+','+nm2+')"><span class="glyphicon glyphicon-ok"></span> Prosseguir</button>'+
								'</div>'+
							'</div>';
	document.getElementById(id5).innerHTML = primeiro + segundo + terceiro;					

}
function criarElementosDiscretos(id1,id2,id3,id4,id5){
	var primeiro="",segundo="",terceiro="";
	var nm1="'qualitativa'",nm2="'discreta'";
	primeiro = '<fieldset>'+
						'<legend>'+document.getElementById(id1).value+'</legend>';
	for(var i=0;i<parseInt(document.getElementById(id2).value);i++){
		segundo = segundo + 
					'<div class="form-inline row">'+
							'<div class="col-xs-4">'+
								'<label for="elemento'+i+'">'+document.getElementById(id3).value+'</label>'+
								'<span class="input-inline-addon"><i class="glyphicon glyphicon-tag">&nbsp</i></span>'+
								'<input type="number" class="form-control" id="elemento'+i+'" placeholder="Elemento nº'+(i+1)+'" name="elemento">'+
							'</div>'+
							'<div class="col-xs-4">'+
								'<label for="frequencia'+i+'">'+document.getElementById(id4).value+'</label>'+
								'<span class="input-inline-addon"><i class="glyphicon glyphicon-tags">&nbsp</i></span>'+
								'<input type="number" class="form-control" id="frequencia'+i+'" placeholder="Frequencia nº:'+(i+1)+'" name="frequencia">'+
							'</div>'+
						'</div>';
	}
	terceiro = '</fieldset>'+
						'<div class="row">'+
							'<div class="col-md-12">'+
								'<button type="button" class="btn btn-primary" onclick="principal2('+nm1+','+nm2+')"><span class="glyphicon glyphicon-ok"></span> Prosseguir</button>'+
							'</div>'+
						'</div>';
	document.getElementById(id5).innerHTML = primeiro + segundo + terceiro;
}
/*funcao criacao de elementos Quantitativa - Continua*/
function criarElementosContinuos(id1,id2,id3,id4,id5){
	var primeiro="",segundo="",terceiro="";
	var nm1="'qualitativa'",nm2="'discreta'";
	primeiro = '<fieldset>'+
						'<legend>'+document.getElementById(id1).value+'</legend>';
	for(var i=0;i<parseInt(document.getElementById(id2).value);i++){
		segundo = segundo + 
					'<div class="row">'+
								'<div class="col-xs-2 col-md-2 pull-left">'+
								'<label>Classe nº'+(i+1)+'</label>'+
								'</div>'+
								'<div class="col-xs-2 col-md-2 pull-left">'+
								'<label for="classeInferior'+i+'">Inf.</label>'+
								'<input class="form-control" type="number" id="classeInferior'+i+'" type="text">'+
								'</div>'+
								'<div class="col-xs-2 col-md-2 pull-left">'+
								'<label>Até</label>'+
								'</div>'+
								'<div class="col-xs-2 pull-left">'+
								'<label for="classePosterior'+i+'">Pos.</label>'+
								'<input class="form-control" type="number" id="classePosterior'+i+'" type="text">'+
								'</div>'+
								'<div class="col-xs-4">'+
								'<label for="frequencia'+i+'">'+document.getElementById(id4).value+'</label>'+
								'<input class="form-control" type="number" id="frequencia'+i+'" type="text">'+
								'</div>'+	
							'</div>';
	}
	terceiro = '</fieldset>'+
						'<div class="row">'+
							'<div class="col-md-12">'+
								'<button type="button" class="btn btn-primary" onclick="principal2('+nm1+','+nm2+')"><span class="glyphicon glyphicon-ok"></span> Prosseguir</button>'+
							'</div>'+
						'</div>';
	document.getElementById(id5).innerHTML = primeiro + segundo + terceiro;
}
//====================================================================================================
/*vetores globais e tamanho dos elementos*/
var vetorElementos = [];
var vetorFrequencia = [];
var vetorFrequenciaAcum=[];
var vetorLimitesInferior=[];
var vetorLimitesPosterior=[];
var vetorLimitesMedia=[];
var frequenciaAcumulada=0;
var tamanho=0;
var frequenciaAcumuladaContinua=0;
var mediaDiscreta=0;
var modaDiscreta=0;
var medianaDiscreta="";
var mediaContinua=0;
var modaContinua=0;
var medianaContinua=0;
var mediaPonderadaDiscreta=0;
var mediaQualitativa=0;
var moda=0;
var modaQualitativa="";
var mediana=0;
var medianaQualitativa="";
/*Funcao de recolhimento de dados passando os dados para vetores globais*/
function recolherDados(){
	tamanho = parseInt(document.getElementById('numerodeElementos').value);
	for (var i=0;i<tamanho;i++){
		vetorElementos[i] = document.getElementById('elemento'+i).value;
		vetorFrequencia[i] = parseInt(document.getElementById('frequencia'+i).value);
		vetorFrequenciaAcum[i]=0;
	}	
}
/*Funcao de organizacao de dados passando os dados para vetores globais Organizados em ordem decrecente*/
function organizarDados(){
	var vetorAux = [];
	var vetorAux2=0;
	var primeiro="",segundo="",terceiro="";
	recolherDados();
	for(var i=0;i<tamanho;i++){
		vetorAux[i] = vetorElementos[i];
	}
	vetorElementos.sort()
	for (i=0;i<tamanho;i++){
		for(var g=i;g<tamanho;g++){
			if(vetorAux[g] == vetorElementos[i]){
				vetorAux2 = vetorFrequencia[i];   
				vetorFrequencia[i] = vetorFrequencia[g];
				vetorFrequencia[g] = vetorAux2;
			}
		}
	}
	primeiro = '<fieldset>'+
						'<legend> 2ª Etapa Organização de dados</legend>';
	for(i=0;i<tamanho;i++){
		segundo = segundo + '<div class="col-md-12">'+
							document.getElementById('nomeElementos').value + ':' + vetorElementos[i] + ' - ' + document.getElementById('nomeFrequencia').value + ':' + vetorFrequencia[i] +
							'</div>';
	}
	terceiro = '</fieldset>';
	document.getElementById('organizacaoDados').innerHTML = primeiro + segundo + terceiro;					
}

/*criar Tablea*/
function criarTabelaQualitativa(){
	var primeiro="",segundo="",terceiro="";
	var acumulador=0;
	frequenciaAcumuladaFuncao();
	primeiro = '<fieldset>'+
					   '<table class="table table-striped" id="tabelaT">'+
							'<legend>'+document.getElementById('nomePesquisa').value+'</legend>'+
								'<thead>'+
									'<tr>'+
										'<th scope="col">'+document.getElementById('nomeElementos').value+'</th>'+
										'<th scope="col">'+document.getElementById('nomeFrequencia').value+'</th>'+
										'<th scope="col">'+document.getElementById('nomeFrequencia').value+'(%)</th>'+
										'<th scope="col">'+document.getElementById('nomeFrequencia').value+'<br>Acum.</th>'+
										'<th scope="col">'+document.getElementById('nomeFrequencia').value+'<br>Acum(%).</th>'+
									'</tr>'+
						 		'</thead>'+
							'<tbody>';
	acumulador = valorAcumulado();	
	for(var i=0;i<tamanho;i++){
		segundo = segundo + 
							'<tr>'+
								'<td>'+vetorElementos[i]+'</td>'+
								'<td>'+vetorFrequencia[i]+'</td>'+
								'<td>'+((vetorFrequencia[i]/acumulador)*100).toFixed(2)+'%</td>'+
								'<td>'+(vetorFrequenciaAcum[i])+'</td>'+
								'<td>'+((vetorFrequenciaAcum[i]/acumulador)*100).toFixed(2)+'%</td>'+
							'</tr>';
	}
	terceiro = 				'<tr>'+
								'<td>Total</td>'+
								'<td>'+acumulador+'</td>'+
								'<td>100%</td>'+
								'<td>---</td>'+
								'<td>---</td>'+
							'</tr>'+
					  '</tbody>'+
							'<tfoot>'+
							'</tfoot>'+	
					  '</table>'+
					'</fieldset>';
	document.getElementById('tabela').innerHTML = primeiro + segundo + terceiro;					
}
function criarTabelaDiscreta(){
	var primeiro="",segundo="",terceiro="";
	var acumulador=0,acumulador2=0;
	primeiro = '<fieldset>'+
					   '<table class="table table-striped" id="tabelaT">'+
							'<legend>'+document.getElementById('nomePesquisa').value+'</legend>'+
								'<thead>'+
									'<tr>'+
										'<th scope="col">'+document.getElementById('nomeElementos').value+'</th>'+
										'<th scope="col">'+document.getElementById('nomeFrequencia').value+'</th>'+
										'<th scope="col">'+document.getElementById('nomeFrequencia').value+'(%)</th>'+
										'<th scope="col">'+document.getElementById('nomeFrequencia').value+'<br>Acum.</th>'+
										'<th scope="col">'+document.getElementById('nomeFrequencia').value+'<br>Acum(%).</th>'+
										'<th scope="col">Media Ponderada</th>'+
										'<th scope="col">Variancia</th>'+
										'<th scope="col">Desvio Padrao</th>'+
										'<th scope="col">Coeficiente de Variancia</th>'+
									'</tr>'+
								'</thead>'+
								'<tbody>';
		acumulador = valorAcumulado();
		frequenciaAcumuladaFuncao();
		mediaDiscretaPonderadaFuncao()	
		mediaDiscretaFuncao();								
	for(var i=0;i<tamanho;i++){
		segundo = segundo + 
							'<tr>'+
								'<td>'+vetorElementos[i]+'</td>'+
								'<td>'+vetorFrequencia[i]+'</td>'+
								'<td>'+((vetorFrequencia[i]/acumulador)*100).toFixed(2)+'%</td>'+
								'<td>'+(vetorFrequenciaAcum[i])+'</td>'+
								'<td>'+((vetorFrequenciaAcum[i]/acumulador)*100).toFixed(2)+'%</td>'+
								'<td>'+(vetorElementos[i]*vetorFrequencia[i])+'</td>'+
								'<td>'+((((vetorElementos[i]-mediaPonderadaDiscreta))**2)* vetorFrequencia[i]).toFixed(2)+'</td>'+
								'<td>---</td>'+
								'<td>---</td>'+
							'</tr>';
							acumulador2 = ((((vetorElementos[i]-mediaPonderadaDiscreta))**2)* vetorFrequencia[i])+acumulador2;
	}
	terceiro = 				'<tr>'+
								'<td>Total</td>'+
								'<td>'+acumulador+'</td>'+
								'<td>100%</td>'+
								'<td>---</td>'+
								'<td>---</td>'+
								'<td>'+(mediaPonderadaDiscreta).toFixed(2)+'</td>'+
								'<td>'+(acumulador2/acumulador).toFixed(2)+'</td>'+
								'<td>'+Math.sqrt(acumulador2/acumulador).toFixed(2)+'</td>'+
								'<td>'+(Math.sqrt(acumulador2/acumulador)/mediaDiscreta).toFixed(2)+'</td>'+
							'</tr>'+
					  '</tbody>'+
							'<tfoot>'+
							'</tfoot>'+	
					  '</table>'+
					'</fieldset>';
	document.getElementById('tabela').innerHTML = primeiro + segundo + terceiro;				
	criarMediasDiscretas();						
}
/*---------Valor Acumulado---------*/
function valorAcumulado(){
	var acumulador=0;
	for(var i=0;i<tamanho;i++){
		acumulador = acumulador + vetorFrequencia[i];
	}
	return acumulador;
}
/*-------------Frequencua ACumulada Funcao---------*/
function frequenciaAcumuladaFuncao(){
	for(var i=0;i<tamanho;i++){
		vetorFrequenciaAcum[i] = vetorFrequencia[i];
		if(i!=0){
			vetorFrequenciaAcum[i] = vetorFrequencia[i]+vetorFrequenciaAcum[i-1];
		} 
		else{
			vetorFrequenciaAcum[i] = vetorFrequencia[i];
		}
	frequenciaAcumulada = vetorFrequenciaAcum[i];
	}

}
/*-------------------Media Qualitativa Funcao-------------*/
function mediaQualitativaFuncao(){
	for(var i=0;i<tamanho;i++){
		mediaQualitativa = vetorFrequencia[i]+mediaQualitativa;
	}
	mediaQualitativa = mediaQualitativa/tamanho;
}
function mediaDiscretaPonderadaFuncao(){
	var acumulador=0;
	var acumulador2=0;
	for(var i=0;i<tamanho;i++){
		acumulador = acumulador + vetorElementos[i]*vetorFrequencia[i];
	}
	mediaPonderadaDiscreta = acumulador/frequenciaAcumulada;
}

function modaQualitativaFuncao(){
	var auxiliar=0;
	axiliar = parseInt(vetorFrequencia[0]);
	for(var i=0;i<tamanho;i++){
		if(auxiliar < vetorFrequencia[i]){
			auxiliar = vetorFrequencia[i];
			modaQualitativa = vetorElementos[i];	
		}else{
			modaQualitativa = vetorElementos[0];
		}
	}
}
function medianaQualitativaFuncao(){
	var auxiliar=0;
	auxiliar = tamanho /2;
	auxiliar = Math.round(auxiliar); 
	medianaQualitativa = vetorElementos[auxiliar-1];
	
}

function criarMediasQualitativas(){
	var primeiro="",segundo="";
	mediaQualitativaFuncao();
	modaQualitativaFuncao();
	medianaQualitativaFuncao();
	primeiro='<fieldset>'+
						'<legend> Medias </legend>';
	segundo='<div class="col-md-3">'+
							'<h2 id="media">Media:'+mediaQualitativa.toFixed(1)+'</h2>'+
						'</div>'+	
						'<div class="col-md-3">'+
							'<h2 id="moda">Moda:'+modaQualitativa+'</h2>'+
						'</div>'+
						'<div class="col-md-3">'+
							'<h2 id="mediana">Mediana:'+medianaQualitativa+'</h2>'+
						'</div>'+
					'</fieldset>';					
	
	document.getElementById('medias').innerHTML = primeiro + segundo;
}	
function mediaDiscretaFuncao(){
	var aux=0;
	for(var i=0;i<tamanho;i++){
		mediaDiscreta = mediaDiscreta+(vetorElementos[i]*vetorFrequencia[i]);
		aux = aux + vetorFrequencia[i];
	}
	mediaDiscreta = mediaDiscreta / aux;
}
function modaDiscretaFuncao(){
	var maior=0;
	maior = vetorFrequencia[0];
	modaDiscreta = vetorElementos[0];
	for(var i=0;i<tamanho;i++){
		if(maior<vetorFrequencia[i]){
			maior = vetorFrequencia[i];
			modaDiscreta = vetorElementos[i];
		}	
	}	
}
function medianaDiscretaFuncao(){
	var mediana=0;
	mediana = valorAcumulado();
	mediana = mediana /2;
	for(var i=0;i<tamanho;i++){
		if((vetorFrequenciaAcum[i]>mediana) & (vetorFrequenciaAcum[i-1]<mediana)){
			medianaDiscreta = vetorElementos[i];
		}
	}
}
function criarMediasDiscretas(){
	var primeiro="",segundo="";
	mediaDiscretaFuncao();
	modaDiscretaFuncao();
	medianaDiscretaFuncao();
	primeiro='<fieldset>'+
						'<legend> Medias </legend>';
	segundo='<div class="col-md-3">'+
							'<h2 id="media">Media:'+mediaDiscreta.toFixed(1)+'</h2>'+
						'</div>'+	
						'<div class="col-md-3">'+
							'<h2 id="moda">Moda:'+document.getElementById('nomeElementos').value+':'+modaDiscreta+'</h2>'+
						'</div>'+
						'<div class="col-md-3">'+
							'<h2 id="mediana">Mediana:'+document.getElementById('nomeElementos').value+':'+medianaDiscreta+'</h2>'+
						'</div>'+
					'</fieldset>';					
	
	document.getElementById('medias').innerHTML = primeiro + segundo;
}		
function coletaDadosContinua(){
	tamanho = document.getElementById('numerodeElementos').value;
	for(var i=0;i<tamanho;i++){
		vetorLimitesInferior.push(document.getElementById('classeInferior'+i).value);	
		vetorLimitesPosterior.push(document.getElementById('classePosterior'+i).value);
		vetorLimitesMedia.push((parseInt(vetorLimitesInferior[i])+parseInt(vetorLimitesPosterior[i]))/2);
		vetorFrequencia.push(document.getElementById('frequencia'+i).value);
		if(i>0){
			vetorFrequenciaAcum.push(parseInt(document.getElementById('frequencia'+i).value)+parseInt(vetorFrequenciaAcum[i-1]));
		}else{
			vetorFrequenciaAcum.push(document.getElementById('frequencia'+i).value);	
		}
		frequenciaAcumuladaContinua = vetorFrequenciaAcum[i];	
	}
}
function mediaContinuasFuncao(){
	for(var i=0;i<tamanho;i++){
		mediaContinua = mediaContinua + (vetorFrequencia[i]*vetorLimitesMedia[i]);
	}
	mediaContinua = mediaContinua / frequenciaAcumuladaContinua;
}
function modaContinuaFuncao(){
	var maior=parseInt(vetorFrequencia[0]);
	modaContinua = 'classe:1'+'- '+maior;
	for(var i=1;i<tamanho;i++){
		if(vetorFrequencia[i]>maior){
			maior = parseInt(vetorFrequencia[i]);
			modaContinua = 'classe:'+(i+1)+' - '+maior;
		}
		
	}
}
function medianaContuniaFuncao(){
	var inferior=0,fanterior=0,fiMediana=0,amplitude=0;
	var aux = frequenciaAcumuladaContinua/2;
	amplitude = parseInt(vetorLimitesPosterior[0])-parseInt(vetorLimitesInferior[0]);
	for(var i=0;i<tamanho;i++){
		if(i>0){
			if(aux >= vetorFrequenciaAcum[i]){
				inferior = parseInt(vetorLimitesInferior[i]);
				fanterior= parseInt(vetorFrequenciaAcum[i-1]);
				fiMediana = parseInt(vetorFrequencia[i]);
				medianaContinua = parseFloat(inferior+(((aux - fanterior)/fiMediana)*amplitude));
				break;
			}
		}else{
			inferior = parseInt(vetorLimitesInferior[i]);
			fanterior = 0;
			fiMediana = parseInt(vetorFrequencia[i]);
			medianaContinua = inferior+(((aux - fanterior)/fiMediana)*amplitude);
			
		}
			
	}alert(medianaContinua);
}
function criarMediasContinuas(){
	var primeiro="",segundo="";
	modaContinuaFuncao();
	medianaContuniaFuncao();
	primeiro='<fieldset>'+
						'<legend> Medias </legend>';
	segundo='<div class="col-md-3">'+
							'<h2 id="media">Media:'+mediaContinua.toFixed(1)+'</h2>'+
						'</div>'+	
						'<div class="col-md-3">'+
							'<h2 id="moda">Moda:'+modaContinua+'</h2>'+
						'</div>'+
						'<div class="col-md-3">'+
							'<h2 id="mediana">Mediana:'+medianaContinua.toFixed(2)+'</h2>'+
						'</div>'+
					'</fieldset>';					
	
	document.getElementById('medias').innerHTML = primeiro + segundo;
}
function criarTabelaContinua(){
	var acumulador2=0;
	var primeiro="",segundo="",terceiro="";
	primeiro = '<fieldset>'+
					   '<table class="table table-striped" id="tabelaT">'+
							'<legend>'+document.getElementById('nomePesquisa').value+'</legend>'+
								'<thead>'+
									'<tr>'+
										'<th scope="col">Classes</th>'+
										'<th scope="col">'+document.getElementById('nomeElementos').value+'<br> de |-- até'+'</th>'+
										'<th scope="col">'+document.getElementById('nomeFrequencia').value+'</th>'+
										'<th scope="col">'+document.getElementById('nomeFrequencia').value+'(%)</th>'+
										'<th scope="col">'+document.getElementById('nomeFrequencia').value+'<br>Acum.</th>'+
										'<th scope="col">'+document.getElementById('nomeFrequencia').value+'<br>Acum(%).</th>'+
										'<th scope="col">Media Ponderada</th>'+
										'<th scope="col">Variancia</th>'+
										'<th scope="col">Desvio Padrao</th>'+
										'<th scope="col">Coeficiente de Variancia</th>'+
									'</tr>'+
								'</thead>'+
								'<tbody>';
	mediaContinuasFuncao();	
	for(var i=0;i<tamanho;i++){
		segundo = segundo + 
							'<tr>'+
								'<th scope="col">Classes nº'+(i+1)+'</th>'+
								'<td>'+vetorLimitesInferior[i]+' |-- '+vetorLimitesPosterior[i]+'</td>'+
								'<td>'+vetorFrequencia[i]+'</td>'+
								'<td>'+((vetorFrequencia[i]/frequenciaAcumuladaContinua)*100).toFixed(2)+'%</td>'+
								'<td>'+(vetorFrequenciaAcum[i])+'</td>'+
								'<td>'+((vetorFrequenciaAcum[i]/frequenciaAcumuladaContinua)*100).toFixed(2)+'%</td>'+
								'<td>'+(vetorLimitesMedia[i]*vetorFrequencia[i]).toFixed(2)+'</td>'+
								'<td>'+((((vetorLimitesMedia[i]-mediaContinua))**2)* vetorFrequencia[i]).toFixed(2)+'</td>'+
								'<td>---</td>'+
								'<td>---</td>'+
							'</tr>';
							acumulador2 = ((((vetorLimitesMedia[i]-mediaContinua))**2)* vetorFrequencia[i])+acumulador2;
	}
	terceiro = 				'<tr>'+
								'<th scope="col">---</th>'+
								'<td>Total</td>'+
								'<td>'+frequenciaAcumuladaContinua+'</td>'+
								'<td>100%</td>'+
								'<td>---</td>'+
								'<td>---</td>'+
								'<td>'+(mediaContinua).toFixed(2)+'</td>'+
								'<td>'+(acumulador2/frequenciaAcumuladaContinua).toFixed(2)+'</td>'+
								'<td>'+Math.sqrt(acumulador2/frequenciaAcumuladaContinua).toFixed(2)+'</td>'+
								'<td>'+(Math.sqrt(acumulador2/frequenciaAcumuladaContinua)/mediaContinua).toFixed(2)+'</td>'+
							'</tr>'+
					  '</tbody>'+
							'<tfoot>'+
							'</tfoot>'+	
					  '</table>'+
					'</fieldset>';
					
	document.getElementById('tabela').innerHTML = primeiro + segundo + terceiro;
	criarMediasContinuas()							
}		
//id1=qualitativa,id2=discreta,id3=nomePesquisa,id4=numerodeElementos,id5=nomeElementos,id6=nomeFrequencia,id7=inputElementos
function principal(id1,id2,id3,id4,id5,id6,id7){
	if(document.getElementById(id1).checked == true){
		criarElementosQualitativos(id3,id4,id5,id6,id7);
	}
	else{
		if(document.getElementById(id2).checked == true){
			criarElementosDiscretos(id3,id4,id5,id6,id7);
		}else{
			criarElementosContinuos(id3,id4,id5,id6,id7);
		}
	}
}
//id1=qualitativa,id2=discreta,id3=nomePesquisa,id4=numerodeElementos,id5=nomeElementos,id6=nomeFrequencia,id7=inputElementos
function principal2(id1,id2){
	if(document.getElementById(id1).checked == true){
		organizarDados();
		criarTabelaQualitativa();
		criarMediasQualitativas();
		rodape();
	}
	else{
		if(document.getElementById(id2).checked == true){
			organizarDados();
			criarTabelaDiscreta();
			rodape();
		}else{
			coletaDadosContinua();
			criarTabelaContinua();
			rodape();
		}
	}
}
