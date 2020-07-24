var strLength = 150;
var criar_poli = 0;
var nomePontoEmReta = "Ponto"
var i_interseccao = 0;
var arestas_em_ponto = new Array();
var poligono = new Array();
var resp_aluno;
var maior = 0;
var xml;
var flag = 0;
var teste = '';
var teste2 = '';
var pontos_aux = 0 ;
Event.observe(document, 'flash:SalvaLocal', function(ev){
	flag = 1;
});
Event.observe(window, 'load', function(){
	Event.observe('link_continuar', 'focus', function(evento){
			if(($('link_continuar').className) == 'ativado'){
				setResp('atividade_3',3);
			}
		});
});

function select_q_4_a(){
}

function corrige_q_4_a(){
}
function select_q_5_a(){
}

function corrige_q_5_a(){
}
function select_q_5_b(){
}

function corrige_q_5_b(){
}
function select_q_5_c(){
}

function corrige_q_5_c(){
}
var primeira_vez = true;
function corrige_q_6_a(valor)
{
	var applet = document.ggbApplet;
	for (var i = 0; i <= valor[0].length; i++){
		valor[0] = valor[0].replace(',','');
		valor[0] = valor[0].replace(';','');
		valor[0] = valor[0].replace(':','');
		valor[0] = valor[0].replace('.','');
	}
	valor[0] = valor[0].toUpperCase();
	
	resp_aluno = "";
	resp_aluno = valor[0];
	var string_resp = "";
	for (var i = 0; i < poligono.length; i++){
		string_resp+= poligono[i];
	}
	for (var i = 0; i < poligono.length; i++){
		string_resp+= poligono[i];
	}
	for (var i = 0; i <= pontos_aux; i++){
			
					if (applet.isDefined('det'+i)){
						applet.deleteObject('det'+i);
						
					}
			}
	for (var i = 0; i < poligono.length; i++){
		primeira_vez = true;
		if ((resp_aluno == string_resp.substring(i,poligono.length + i))&&(primeira_vez)){
			primeira_vez = false;
			
			var aux = 3;
			var k = 0;
			var string_area = "";
			var area2 = "";
			var area1 = '"';
			teste2 = '';
			teste = '';
			teste = "= &#189;. {";
			var A = resp_aluno.charAt(0);
			var B = resp_aluno.charAt(1);
						
			for (var j = 0; j < resp_aluno.length-1; j++){
				
						aux++;
						var P1 = resp_aluno.charAt(j);
						var P2 = resp_aluno.charAt(j+1);
						applet.evalCommand("det"+aux+" = Determinant[{{x("+P1+"),y("+P1+")},{x("+P2+"),y("+P2+")}}]");
						
						string_area += 'det'+aux+'+';
						area2 += '"+("+';
						area2+= 'det'+aux;
						area2+= '+")"+';
						area1+= 'Det(M';
						area1+= P1 + ',' + P2;
						area1+= ')+';
						teste += "(" + applet.getValue('det'+aux).toFixed(0) + ")+";
						teste2 += 'Det(M<sub>';
						teste2 += P1 + ',' + P2;
						teste2 += '</sub>)+';
			}
				
				aux = aux+2;
				var P1 = resp_aluno.charAt(j);
				var P2 = resp_aluno.charAt(0);
				applet.evalCommand("det"+aux+" = Determinant[{{x("+P1+"),y("+P1+")},{x("+P2+"),y("+P2+")}}]");
				
				string_area += "det"+aux;
				area2 += '"+("+';
				area2+= 'det'+aux;
				area2+= '+")"+';
				area1+= 'Det (M';
				area1+= P1 + ',' + P2;
				area1+= ')"';
				teste += "(" + applet.getValue('det'+aux).toFixed(0) + ")+";
				teste = teste.substring(0, teste.length-1);
				teste += "}"
				teste2 += 'Det(M<sub>';
				teste2 += P1 + ',' + P2;
				teste2 += '</sub>)+';
				teste2 = teste2.substring(0, teste2.length-1);
				$('span3').update(teste);
				area2 = area2.substring(0, area2.length-1);
				var area3 = '"';
				area3 += area2.substring(2, area2.length);
				area2 = area3;
				area2 = area2.substring(0, area2.length-1);
				area2+= '"+ taux2 '
				applet.evalCommand("area_2 = "+string_area);
				applet.evalCommand("area = area_2/2");
				applet.evalCommand('t1 = Text["Area = ", (0.2,-5)]');
				applet.evalCommand('t2 = Text[area, (2.2,-5)]');
				applet.evalCommand('t3 = Text["= 1/2."+ taux1 +'+area2+', (0.2,-4)]');
				applet.evalCommand('t4 = Text["= 1/2."+ taux1 +'+area1+', (0.2,-3)]');
				applet.registerObjectUpdateListener('poly1', 'funcao_t3')
				$('span1').update("Area = ");
				$('span2').update("= &#189;. {" + teste2 + "}");
				$('span4').update('Area = ' + applet.getValue('area').toFixed(1));
			    $('parte3_q3_a').value = valor[0];
				pontos_aux = aux;
				

					return [true];
		}else if (resp_aluno == string_resp.substring(i,poligono.length + i)){
			funcao_t3();
			$('parte3_q3_a').value = valor[0];
			return [true];
		}
	}

	return [false];
}

function funcao_t3(){
	var applet = document.ggbApplet;
	teste = "= &#189;. {";
	var string_area = "";
	var aux = 3;
	for (var j = 0; j < resp_aluno.length-1; j++){
			aux++;
			teste += "(" + applet.getValue('det'+aux).toFixed(0) + ")+";
			string_area += 'det'+aux+'+';
	}
	aux = aux + 2;
	teste += "(" + applet.getValue('det'+aux).toFixed(0) + ")+";
	string_area += 'det'+aux+'+';
	teste = teste.substring(0, teste.length-1);
	teste += "}";
	$('span3').update(teste);
	if (applet.isDefined('area_2')){applet.deleteObject('area_2');}
	if (applet.isDefined('area')){applet.deleteObject('area');}
	string_area = string_area.substring(0, string_area.length-1);
	applet.evalCommand("area_2 = "+string_area);
	applet.evalCommand("area = area_2/2");

	$('span4').update('Area = ' + applet.getValue('area').toFixed(0));
	
}

function ggbOnInit(){
	var applet = document.ggbApplet;
		applet.setMode(1);
		$('ggbToolbar1_1').click();
		registerListeners_a3_p2();
}
function registerListeners_a3_p2(){
	var applet = document.ggbApplet;
	applet.registerAddListener("addListener_a3_p2");
	applet.registerRemoveListener("removeListener_a3_p2");
}

var pontos_a3_p2 = 0;
function addListener_a3_p2(objName) {
var applet = document.ggbApplet;
	
	if (!criar_poli){
	
	strType = applet.getObjectType(objName);
	strCommand = applet.getCommandString(objName);
	var interseccoes = new Array();
	var indice1;
	var indice2;
	
			if (strType == "point" ){
				if (objName == "ponto_intersec"){
					if(!isNaN(applet.getXcoord(objName))){
						pontosSegmento=getPontosSegmento(strCommand);
						interseccoes.push([i_interseccao,pontosSegmento[0],pontosSegmento[1],applet.getXcoord(objName),applet.getYcoord(objName)]);
						i_interseccao++;
						applet.setVisible(objName, 0);
						applet.renameObject(objName, "int" + i_interseccao);					
						}else{
								applet.deleteObject(objName);
						}				
				}else{
					if ((applet.getYcoord(objName) < 0)||(criar_poli)){
						pontos_a3_p2++;
						applet.deleteObject(objName);
					}else{
						if (pontos_a3_p2 >= 8){
							applet.deleteObject(objName);
						}else{
							if (objName == "ponto_intersec"){
								if(!isNaN(applet.getXcoord(objName))){
									pontosSegmento=getPontosSegmento(strCommand);
									interseccoes.push([i_interseccao,pontosSegmento[0],pontosSegmento[1],applet.getXcoord(objName),applet.getYcoord(objName)]);
									i_interseccao++;
									applet.setVisible(objName, 0);
									applet.renameObject(objName, "int" + i_interseccao);					
								}else{
									applet.deleteObject(objName);
								}				
							}else{
								if(!criar_poli){
									if (strCommand.substring(0,nomePontoEmReta.length)==nomePontoEmReta) {
										applet.deleteObject(objName);
									}
									 else if ((strCommand == "Ponto[xAxis]")||(strCommand == "Ponto[yAxis]")){
										var x = applet.getXcoord(objName);
										var y = applet.getYcoord(objName);
										var nome = objName;
										applet.deleteObject(objName);
										applet.evalCommand(nome + "= (" + x + "," + y + ")");
									}
									else if (pontos_a3_p2 >= 8){
										applet.deleteObject(objName);
									} else {
										
										var x = applet.getXcoord(objName);
										var y = applet.getYcoord(objName);
										
										x = roundNumber(x,0);
										y = roundNumber(y,0);

										//applet.setCoords(objName,x,y);
									
										applet.setPointSize(objName, 3);
										applet.setLabelVisible(objName,1);
										
										applet.evalCommand("distanciaO" + objName + " = Distance[O," + objName + "]");
										pontos_a3_p2++;
									}
								}
							}
						}
					}
				}
			}else{
				applet.setLabelVisible(objName,0);
				if (strType == "angle"){
					applet.setVisible(objName,0);
				}
				if (strType == "segment"){
					arestas_em_ponto.push(0);
					pontosSegmento=getPontosSegmento(strCommand);
					if (!applet.isDefined(pontosSegmento[0])){
						applet.deleteObject(objName);
					}
					else if (!applet.isDefined(pontosSegmento[1])){
						applet.deleteObject(objName);
					}
				}
			}
	}else{
		
		var applet = document.ggbApplet;
		strType = applet.getObjectType(objName);
		if ((strType != "text")&&(strType != "numeric")){
			applet.unregisterRemoveListener("removeListener_a3_p2");
			applet.deleteObject(objName);
			applet.registerRemoveListener("removeListener_a3_p2");
		}
	}
}

function pontos_segmentos_a3_p2(){
	var applet = document.ggbApplet;
	var i;
	var ok = 1;
	var objNumber = applet.getObjectNumber();
	var numero_segmentos = 0;
	if(pontos_a3_p2 <= 2){
		if (applet.isDefined('terror')){applet.deleteObject('terror')};
		applet.evalCommand('terror = Text["O poligono nao esta correto.", (7.3,-1.75)]');
		applet.setColor('terror', 255, 0, 0);
		InitializeTimer();
		limpa_angulos();
		ok = 0;
		return ok;
	}else{
		var pontos_ext = new Array();	
		for (i=0; i < objNumber; i++) {
			strName = applet.getObjectName(i);
			strType = applet.getObjectType(strName);
			strCommand = applet.getCommandString(strName);
			if (strType == "segment" )
				{
				pontosSegmento=getPontosSegmento(strCommand);
				indice1 = (pontosSegmento[0].charCodeAt(0) - 65);
				indice2 = (pontosSegmento[1].charCodeAt(0) - 65);
				arestas_em_ponto[indice1] = 0;
				arestas_em_ponto[indice2] =0;
				}
		}
		
		for (i=0; i < objNumber; i++) {
			strName = applet.getObjectName(i);
			strType = applet.getObjectType(strName);
			strCommand = applet.getCommandString(strName);
			if (strType == "segment" )
				{
				pontosSegmento=getPontosSegmento(strCommand);
				indice1 = (pontosSegmento[0].charCodeAt(0) - 65);
				indice2 = (pontosSegmento[1].charCodeAt(0) - 65);
				arestas_em_ponto[indice1] = arestas_em_ponto[indice1] + 1;
				arestas_em_ponto[indice2] = arestas_em_ponto[indice2] + 1;
				numero_segmentos++;
				}
			else if (strType == "point"){
					pontos_ext.push(strName);
				}
		}
		for (i = 2; i < pontos_ext.length; i++){
				var indice1 = (pontos_ext[i].charCodeAt(0) - 65);
				if (arestas_em_ponto[indice1] != 2){
					if (applet.isDefined('terror')){applet.deleteObject('terror')};
					applet.evalCommand('terror = Text["O poligono nao esta correto.", (7.3,-1.75)]');
					applet.setColor('terror', 255, 0, 0);
					InitializeTimer();
					limpa_angulos();
					ok = 0;
					return ok;
				}
		}

		for (i = 0; i < pontos_a3_p2; i++){
			arestas_em_ponto[i] = 0;
		}
	
		if ((numero_segmentos<3)||(numero_segmentos>14)){
			if (applet.isDefined('terror')){applet.deleteObject('terror')};
			
			applet.evalCommand('terror = Text["O poligono nao esta correto.", (7.3,-1.75)]');
			applet.setColor('terror', 255, 0, 0);
				InitializeTimer();
				limpa_angulos();
			ok = 0;
		}
		return ok;
	}
}

function updateListener_a3_p2(objName) {
}

function removeListener_a3_p2(objName){
	var applet = document.ggbApplet;
	strType = applet.getObjectType(objName);
	if ((objName == 'A') || (objName == 'B') || (objName == 'C') || (objName == 'D') || (objName == 'E')
	|| (objName == 'F') || (objName == 'G') || (objName == 'H'))
	{
		pontos_a3_p2--;
		if (criar_poli){
		removi_ponto_vertice(objName);
		}
	}else {
			if ((objName == 'a_1') || (objName == 'b_1') || (objName == 'c_1') || (objName == 'd_1') || (objName == 'e_1')
			|| (objName == 'f_1') || (objName == 'g_1') || (objName == 'h_1'))
		{
			removi_ponto_vertice(objName);
		}
	}
}

function removi_ponto_vertice(objName){
		var applet = document.ggbApplet;
		strType = applet.getObjectType(objName);
			limpa_angulos();
			criar_poli = false;
			strLength = 150;
			criar_poli = 0;
			nomePontoEmReta = "Ponto"
			i_interseccao = 0;
			poligono = 0;
			poligono = new Array();
			applet.deleteObject("area");
			applet.deleteObject("area2");
			applet.deleteObject("t1");
			applet.deleteObject("t2");
			applet.deleteObject("t3");
			applet.deleteObject("t4");
			applet.deleteObject("t6");
			$('valor_inicial').removeClassName('desabilitada');
			$('link_valor_inicial').show();
			$('unset_inicial').hide();	
			adicionaEsperando({Parte:2, Questao:'parte4_q3', Item: 0});
			
			for (var i = 0; i <= pontos_aux; i++){
			
					if (applet.isDefined('det'+i)){
						applet.deleteObject('det'+i);
						
					}
			}
}

function unset_inicial()
{
	if (this.resultado == 'sim')
	{	
		recomecar_applet_atividade3_parte2();
		$('valor_inicial').removeClassName('desabilitada');
		$('link_valor_inicial').show();
		$('unset_inicial').hide();	
		adicionaEsperando({Parte:2, Questao:'parte4_q3', Item: 0});
		$('span1').update("");
		$('span2').update("");
		$('span3').update("");
		$('span4').update("");
	}
}

function funcao_cria_poli_a3_p2(){
	if (!criar_poli){
		if(pontos_segmentos_a3_p2()){
			verifica_interseccoes_a3_p2();
			
			if (i_interseccao == 0){
				var pontos = new Array();
				var segmentos = new Array();
				var distancias = new Array();
				var applet = document.ggbApplet;
				var objNumber = applet.getObjectNumber();
				var strName;
				var strType;
				var strCommand;
				var i;

				for (i=0; i < objNumber; i++) {
					strName = applet.getObjectName(i);
					strType = applet.getObjectType(strName);
					strCommand = applet.getCommandString(strName);
					if (strType == "segment" )
						{
							applet.evalCommand("angulo" + strName + "EixoX = Angle[xAxis," + strName + "]");
							applet.setVisible("angulo" + strName + "EixoX",0);
						}
				}
				

				for (i=0; i < objNumber; i++) {
					strName = applet.getObjectName(i);
					strType = applet.getObjectType(strName);
					strCommand = applet.getCommandString(strName);

					if (strType == "point" )
						{
							pontos.push([strName,applet.getXcoord(strName),applet.getYcoord(strName)]);
						}
						
					if (strType == "segment" )
						{
							pontosSegmento=getPontosSegmento(strCommand);
							segmentos.push([strName,pontosSegmento[0],pontosSegmento[1],0]);
						}
					if (strType == "numeric")
						{
							pontosSegmento=getPontosSegmento(strCommand);
							distancias.push([strName,pontosSegmento[1],applet.getValue(strName)]);
						}
							
				}
				
				var minimo = new Array();
				minimo.push([0,0,1000]);
				for (i = 0; i < distancias.length; i++){
					if (distancias[i][2] < minimo[0][2])
						{
							
							minimo[0][0] = distancias[i][0];
							minimo[0][1] = distancias[i][1];
							minimo[0][2] = distancias[i][2];
						}
				}
				
				var arestas = new Array();
				for (i = 0; i < segmentos.length; i++){
					
					if ((segmentos[i][1] == minimo[0][1])||(segmentos[i][2] == minimo[0][1])){
						
						arestas.push([segmentos[i][0],segmentos[i][1],segmentos[i][2],segmentos[i][3]]);
					}
				}				applet.setCoords("W", -30,applet.getYcoord(minimo[0][1]));
				if (arestas[0][1]!= minimo [0][1]){
					applet.evalCommand("angulo" + arestas[0][1] + "EixoX = Angle[W," + minimo[0][1] + "," + arestas[0][1] + "]");
					var aux = applet.getValue("angulo" + arestas[0][1] + "EixoX");
					arestas.splice(0,1,([arestas[0][0],arestas[0][1],arestas[0][2],aux]));
					segmentos.splice(0,1,([segmentos[0][0],segmentos[0][1],segmentos[0][2],aux]));
					applet.deleteObject("angulo" + arestas[0][1] + "EixoX");
				}else{
					applet.evalCommand("angulo" + arestas[0][2] + "EixoX = Angle[W," + minimo[0][1] + "," + arestas[0][2] + "]");
					var aux = applet.getValue("angulo" + arestas[0][2] + "EixoX");
					arestas.splice(0,1,([arestas[0][0],arestas[0][1],arestas[0][2],aux]));
					segmentos.splice(0,1,([segmentos[0][0],segmentos[0][1],segmentos[0][2],aux]));
					applet.deleteObject("angulo" + arestas[0][2] + "EixoX");
				}
				if (arestas[1][1] != minimo [0][1]){
					applet.evalCommand("angulo" + arestas[1][1] + "EixoX = Angle[W," + minimo[0][1] + "," + arestas[1][1] + "]");
					aux = applet.getValue("angulo" + arestas[1][1] + "EixoX");
					arestas.splice(1,1,([arestas[1][0],arestas[1][1],arestas[1][2],aux]));
					segmentos.splice(1,1,([segmentos[1][0],segmentos[1][1],segmentos[1][2],aux]));
					applet.deleteObject("angulo" + arestas[1][1] + "EixoX");
				}else{
					applet.evalCommand("angulo" + arestas[1][2] + "EixoX = Angle[W," + minimo[0][1] + "," + arestas[1][2] + "]");
					aux = applet.getValue("angulo" + arestas[1][2] + "EixoX");
					arestas.splice(1,1,([arestas[1][0],arestas[1][1],arestas[1][2],aux]));
					segmentos.splice(1,1,([segmentos[1][0],segmentos[1][1],segmentos[1][2],aux]));
					applet.deleteObject("angulo" + arestas[1][2] + "EixoX");
					}			
				
				var strResposta ="poly1 = Polygon[";
				var atual;

				strResposta += minimo[0][1];
				strResposta += ','
				poligono.push([minimo[0][1]]);
				if (arestas[0][3] < arestas[1][3]){
					if (arestas[0][1]!= minimo [0][1]){
						strResposta += arestas[0][1];
						poligono.push([arestas[0][1]]);
						atual = arestas[0][1];
					}else{
						poligono.push([arestas[0][2]]);
						strResposta += arestas[0][2];
						atual = arestas[0][2];
					}

					for(i = 0; i < segmentos.length; i++){
						if ((poligono[0] == segmentos[i][1])||(poligono[0] == segmentos[i][2])){
							segmentos.splice(i,1,"");
						}
					}
					
				}else{
					if (arestas[1][1] != minimo [0][1]){
						poligono.push([arestas[1][1]]);
						strResposta += arestas[1][1];
						atual = arestas[1][1];
					}else{
						poligono.push([arestas[1][2]]);
						strResposta += arestas[1][2];
						atual = arestas[1][2];
					}

					for(i = 0; i < segmentos.length; i++){
						if ((poligono[0] == segmentos[i][1])||(poligono[0] == segmentos[i][2])){
							segmentos.splice(i,1,"");
						}
					}
				}

				strResposta += ','
				k = 2;
				var atual_aux = atual;
				
				while (k < segmentos.length){
					atual = atual_aux;
					for (i=0; i < segmentos.length; i++) {

						if (atual == segmentos[i][1]){
							atual_aux = segmentos[i][2];
							poligono.push([segmentos[i][2]]);
							strResposta+= atual_aux;
							segmentos.splice(i,1,"");
							strResposta += ',';
						}else if (atual == segmentos[i][2]){
							atual_aux = segmentos[i][1];
							poligono.push([segmentos[i][1]]);
							strResposta+= atual_aux;
							segmentos.splice(i,1,"");
							strResposta += ',';
						}
					}				
					k++;
				}
				
				strResposta = strResposta.substring(0, strResposta.length-1);
				strResposta += ']';
				
				
				
				var pontos_poligono = strResposta.length - 15;
				pontos_poligono--;
				if ((pontos_poligono/2) == pontos_a3_p2){
					applet.evalCommand(strResposta);
					set_a3_p2();
					applet.setColor('poly1', 0, 0, 200);
					criar_poli = 1;
					$('valor_inicial').addClassName('desabilitada');
					$('link_valor_inicial').hide();
					$('unset_inicial').show();
					removeEsperando({Parte: 2, Questao:'parte4_q3', Item: 0}, '');
				}else{
					var applet = document.ggbApplet;		
					if (applet.isDefined('terror')){applet.deleteObject('terror')};
					applet.evalCommand('terror = Text["O poligono nao esta correto.", (7.3,-1.75)]');
					applet.setColor('terror', 255, 0, 0);
					InitializeTimer();
					limpa_angulos();
					ok = 0;
					poligono = new Array();
				}
			}else{
				var applet = document.ggbApplet;		
				if (applet.isDefined('terror')){applet.deleteObject('terror')};
				applet.evalCommand('terror = Text["O poligono nao esta correto.", (7.3,-1.75)]');
				applet.setColor('terror', 255, 0, 0);
				InitializeTimer();
				limpa_angulos();
				ok = 0;
				i_interseccao = 0;
			}
		}else{
				limpa_angulos();
		}
	}
}

function limpa_angulos(){
	var applet = document.ggbApplet;
	var i = 0;
	
	var objNumber = applet.getObjectNumber();
	for (i=0; i < objNumber; i++) {
		strName = applet.getObjectName(i);
		strType = applet.getObjectType(strName);
		strCommand = applet.getCommandString(strName);
		if (strType == "segment" )
			{	
				applet.deleteObject("angulo" + strName + "EixoX");
			}
	}
	
	for (i = 0; i < i_interseccao; i++){
		var aux = i + 1;
		applet.deleteObject("int" + aux);
	}		
}

function verifica_interseccoes_a3_p2(){
	var applet = document.ggbApplet;
	var objNumber = applet.getObjectNumber();
	var pontosSegmento;
	var segbackup = new Array();
	
	for (var i=0; i < objNumber; i++) {
		strName = applet.getObjectName(i);
		strType = applet.getObjectType(strName);
		strCommand = applet.getCommandString(strName);
		if (strType == "segment" )
			{
				pontosSegmento=getPontosSegmento(strCommand);
				segbackup.push([strName,pontosSegmento[0],pontosSegmento[1],applet.getValue("angulo" + strName + "EixoX")]);
			}				
	}

	var applet = document.ggbApplet;
	var aresta_a;
	var aresta_b;
	var j = 0;
	for (var i = 0; i < segbackup.length; i++){
		j = i + 1;
		while(j < segbackup.length){
			aresta_a = segbackup[i][0];
			aresta_b = segbackup[j][0];
			if ((segbackup[i][1] != segbackup[j][1])&&(segbackup[i][1] != segbackup[j][2])&&(segbackup[i][2] != segbackup[j][1])&&(segbackup[i][2] != segbackup[j][2])){
				applet.evalCommand("ponto_intersec = Intersection["+aresta_a+","+aresta_b+"]");
			}
			j++;
		}
	}
}

function recomecar_applet_atividade3_parte2(){
	var applet = document.ggbApplet;
	var j;
	var objNumber = applet.getObjectNumber();
	if (!isNaN(applet.getXcoord("A"))){
		applet.deleteObject("A");
	}
	if (!isNaN(applet.getXcoord("B"))){
		applet.deleteObject("B");
	}
	if (!isNaN(applet.getXcoord("C"))){
		applet.deleteObject("C");
	}
	if (!isNaN(applet.getXcoord("D"))){
		applet.deleteObject("D");
	}
	if (!isNaN(applet.getXcoord("E"))){
		applet.deleteObject("E");
	}
	if (!isNaN(applet.getXcoord("F"))){
		applet.deleteObject("F");
	}
	if (!isNaN(applet.getXcoord("G"))){
		applet.deleteObject("G");
	}
	if (!isNaN(applet.getXcoord("H"))){
		applet.deleteObject("H");
	}
strLength = 150;
criar_poli = 0;
nomePontoEmReta = "Ponto"
i_interseccao = 0;
arestas_em_ponto = 0;
poligono = 0;
arestas_em_ponto = new Array();
poligono = new Array();
var objNumber = applet.getObjectNumber();
var i = 0;
for (i = 0; i < objNumber; i++){
	var strName = applet.getObjectName(i);
		applet.setFixed(strName,false);
}
 applet.deleteObject("area");
 applet.deleteObject("area2");
 applet.deleteObject("t1");
 applet.deleteObject("t2");
 applet.deleteObject("t3");
 applet.deleteObject("t4");
 applet.deleteObject("t6");
}
function set_a3_p2()
{
	//removeEsperando({Parte: 3, Questao:'parte4_q3', Item: 0});
	var applet = document.ggbApplet;
	var objNumber = applet.getObjectNumber();
	var i = 0;
	for (i = 0; i < objNumber; i++){
		var strName = applet.getObjectName(i);
		//applet.setFixed(strName,1);
	}
}
function getPontosSegmento(strCommand) {
	var pontosSegmento=strCommand.split(",");
	pontosSegmento[0] = pontosSegmento[0].charAt(pontosSegmento[0].length-1);
	pontosSegmento[1] = pontosSegmento[1].charAt(1);
	return pontosSegmento;
}






var secs
var timerID = null
var timerRunning = false
var delay = 1000

function InitializeTimer()
{
    secs = 4
    StopTheClock()
    StartTheTimer()
}

function StopTheClock()
{
    if(timerRunning)
        clearTimeout(timerID)
		timerRunning = false
}

function StartTheTimer()
{
    if (secs==0)
    {
        StopTheClock()
		var applet = document.ggbApplet;
		if (applet.isDefined('terror')){applet.deleteObject('terror')};
		applet.deleteObject("terror");    
	}
    else
    {
        self.status = secs
        secs = secs - 1
        timerRunning = true
        timerID = self.setTimeout("StartTheTimer()", delay)
    }
}