var flag = 0;
var construido = 0;
Event.observe(document, 'flash:SalvaLocal', function(ev){
	flag = 1;
});

Event.observe(window, 'load', function(){
	if (PosicaoAtual.Parte == 0){
		if (flag){			
			if (getResp('atividade_2') != 3){
				setResp('atividade_2',2);
			}
		}
	}
Event.observe('link_continuar', 'focus', function(evento){
	if (PosicaoAtual.Parte == 3){
		if (flag){	
			if(($('link_continuar').className) == 'ativado'){
				setResp('atividade_2',3);
			}
		}
	}
});

});
var salva = 0;
Event.observe(document, 'flash:SalvaLocal', function(){
	salva = true;
	if (PosicaoAtual.Parte == 1){
		$('a2p2_a').update(getResp('sinal01'));
		$('a2p2_b').update(getResp('sinal02'));
		$('a2p2_c').update(getResp('sinal03'));
		$('a2p2_aa').update(getResp('sinal01'));
		$('a2p2_bb').update(getResp('sinal02'));
		$('a2p2_cc').update(getResp('sinal03'));
		if($('a2p2_aaa')){$('a2p2_aaa').update(getResp('sinal01'));}
		if($('a2p2_bbb')){$('a2p2_bbb').update(getResp('sinal02'));}
		if($('a2p2_ccc')){$('a2p2_ccc').update(getResp('sinal03'));}
	}
});

Event.observe(window, 'load', function(){
	BlocoNotas = new Blocao();
	if (PosicaoAtual.Parte == 0){
		$('botao1').addClassName('desabilitado');
		$('botao2').addClassName('desabilitado');
		$('botao3').addClassName('desabilitado');
	}
	
	if (PosicaoAtual.Parte == 1){
		if (salva){
		$('a2p2_aaa').update(getResp('sinal01'));
		$('a2p2_bbb').update(getResp('sinal02'));
		$('a2p2_ccc').update(getResp('sinal03'));
		}
	}
	
	if (PosicaoAtual.Parte == 3){
		if(getResp('parte4_q3_a') != 'undefined'){
				$('parte4_q3_a').value = getResp('parte4_q3_a');
			}

		if(getResp('parte4_q3_b') != 'undefined'){
				$('parte4_q3_b').value = getResp('parte4_q3_b');
			}
			
		if(getResp('parte4_q3_c') != 'undefined'){
				$('parte4_q3_c').value = getResp('parte4_q3_c');
			}
			
		if(getResp('parte4_q3_d') != 'undefined'){
				$('parte4_q3_d').value = getResp('parte4_q3_d');
			}
	
	}
	
});

// função que é chamada sempre que todas as questões de uma determinada parte são acertadas
function tudoCerto()
{
}


function corrige_q_1_a(valor){
	var applet = document.ggbApplet;
	var resposta = (applet.getXcoord("A")*applet.getYcoord("B") - applet.getXcoord("B")*applet.getYcoord("A"))/2;
	if(processaNumero(valor[0]) == resposta)
	{
		setResp('parte2_q2_a_11',$('parte2_q2_a_11').value);
		return [true];
	}
	return [false];
}

function corrige_q_1_b(valor){
	var applet = document.ggbApplet;
	var resposta = (applet.getXcoord("B")*applet.getYcoord("A") - applet.getXcoord("A")*applet.getYcoord("B"))/2;
	if(processaNumero(valor[0]) == resposta)
	{
		setResp('parte2_q2_b_11',$('parte2_q2_b_11').value);
		return [true];
	}
	return [false];
}

function corrige_q_2_a(valor){
	var applet = document.ggbApplet;
	var resposta = (applet.getXcoord("B")*applet.getYcoord("C") - applet.getXcoord("C")*applet.getYcoord("B"))/2;
	if(processaNumero(valor[0]) == resposta)
	{
		setResp('parte2_q3_a_11',$('parte2_q3_a_11').value);
		return [true];
	}
	return [false];
}

function corrige_q_2_b(valor){
	var applet = document.ggbApplet;
	var resposta = (applet.getXcoord("C")*applet.getYcoord("B") - applet.getXcoord("B")*applet.getYcoord("C"))/2;
	if(processaNumero(valor[0]) == resposta)
	{
		setResp('parte2_q3_b_11',$('parte2_q3_b_11').value);
		return [true];
	}
	return [false];
}

function corrige_q_3_a(valor){
	var applet = document.ggbApplet;
	var resposta = (applet.getXcoord("A")*applet.getYcoord("C") - applet.getXcoord("C")*applet.getYcoord("A"))/2;
	if(processaNumero(valor[0]) == resposta)
	{
		setResp('parte2_q4_a_11',$('parte2_q4_a_11').value);
		return [true];
	}
	return [false];
}

function corrige_q_3_b(valor){
	var applet = document.ggbApplet;
	var resposta = (applet.getXcoord("C")*applet.getYcoord("A") - applet.getXcoord("A")*applet.getYcoord("C"))/2;
	if(processaNumero(valor[0]) == resposta)
	{
		setResp('parte2_q4_b_11',$('parte2_q4_b_11').value);
		return [true];
	}
	return [false];
}


function corrige_q_4_a(valor)
{
	return [(valor[0]?true:null),(valor[1]?false:null),(valor[2]?false:null),(valor[3]?false:null)];
}

function corrige_q_8_a(){
	return corrige_q8a();
}


function corrige_q_2_a_drag()
{
	return corrige_q_2_a_drag_aux();
}
function corrige_q_2_b_drag()
{
	return corrige_q_2_b_drag_aux();
}function corrige_q_2_c_drag()
{
	return corrige_q_2_c_drag_aux();
}

function corrige_q_6_a(valor){
	if (valor[0].length >= 3){
		for (var i = 0; i <= valor[0].length; i++){
			valor[0] = valor[0].replace(',','');
			valor[0] = valor[0].replace(';','');
			valor[0] = valor[0].replace(':','');
			valor[0] = valor[0].replace('.','');
		}

		if (((valor[0].charAt(0).toUpperCase()=='A')&&(valor[0].charAt(1).toUpperCase()=='C')&&(valor[0].charAt(2).toUpperCase()=='B'))
				||((valor[0].charAt(0).toUpperCase()=='C')&&(valor[0].charAt(1).toUpperCase()=='B')&&(valor[0].charAt(2).toUpperCase()=='A'))
				||((valor[0].charAt(0).toUpperCase()=='B')&&(valor[0].charAt(1).toUpperCase()=='A')&&(valor[0].charAt(2).toUpperCase()=='C'))){
				setResp('parte4_q3_a',valor[0].toUpperCase());
				$('parte4_q3_a').value = valor[0].toUpperCase(); 	
			return [true];
		}else{
			return [false];
		}
	}else{
			return [false];
		}
}

function corrige_q_6_b(valor){

	if (valor[0].length >= 3){
		for (var i = 0; i <= valor[0].length; i++){
			valor[0] = valor[0].replace(',','');
			valor[0] = valor[0].replace(';','');
			valor[0] = valor[0].replace(':','');
			valor[0] = valor[0].replace('.','');
		}
		if(((valor[0].charAt(0).toUpperCase()=='B')&&(valor[0].charAt(1).toUpperCase()=='C')&&(valor[0].charAt(2).toUpperCase()=='A'))
				||((valor[0].charAt(0).toUpperCase()=='A')&&(valor[0].charAt(1).toUpperCase()=='B')&&(valor[0].charAt(2).toUpperCase()=='C'))
				||((valor[0].charAt(0).toUpperCase()=='C')&&(valor[0].charAt(1).toUpperCase()=='A')&&(valor[0].charAt(2).toUpperCase()=='B'))){
				setResp('parte4_q3_b',valor[0].toUpperCase());
				$('parte4_q3_b').value = valor[0].toUpperCase(); 			
				return [true];
		}else{
			return [false];
		}
	}else{
			return [false];
		}
}

function corrige_q_6_c(valor){
	if (valor[0].length >=3){
		for (var i = 0; i <= valor[0].length; i++){
			valor[0] = valor[0].replace(',','');
			valor[0] = valor[0].replace(';','');
			valor[0] = valor[0].replace(':','');
			valor[0] = valor[0].replace('.','');
		}
		if (((valor[0].charAt(0).toUpperCase()=='A')&&(valor[0].charAt(1).toUpperCase()=='C')&&(valor[0].charAt(2).toUpperCase()=='B'))
				||((valor[0].charAt(0).toUpperCase()=='C')&&(valor[0].charAt(1).toUpperCase()=='B')&&(valor[0].charAt(2).toUpperCase()=='A'))
				||((valor[0].charAt(0).toUpperCase()=='B')&&(valor[0].charAt(1).toUpperCase()=='A')&&(valor[0].charAt(2).toUpperCase()=='C'))){
				setResp('parte4_q3_c',valor[0].toUpperCase());
				$('parte4_q3_c').value = valor[0].toUpperCase(); 
			return [true];
		}else{
			return [false];
		}
	}else{
			return [false];
		}
}

function corrige_q_6_d(valor){
	if (valor[0].length >= 3){
		for (var i = 0; i <= valor[0].length; i++){
			valor[0] = valor[0].replace(',','');
			valor[0] = valor[0].replace(';','');
			valor[0] = valor[0].replace(':','');
			valor[0] = valor[0].replace('.','');
		}

		if(((valor[0].charAt(0).toUpperCase()=='B')&&(valor[0].charAt(1).toUpperCase()=='C')&&(valor[0].charAt(2).toUpperCase()=='A'))
				||((valor[0].charAt(0).toUpperCase()=='A')&&(valor[0].charAt(1).toUpperCase()=='B')&&(valor[0].charAt(2).toUpperCase()=='C'))
				||((valor[0].charAt(0).toUpperCase()=='C')&&(valor[0].charAt(1).toUpperCase()=='A')&&(valor[0].charAt(2).toUpperCase()=='B'))){
				setResp('parte4_q3_d',valor[0].toUpperCase());
				$('parte4_q3_d').value = valor[0].toUpperCase(); 	
				return [true];
		}else{
			return [false];
		}
	}else{
			return [false];
		}
}

function ggbOnInit(){
	if (PosicaoAtual.Parte == 0){
		var applet = document.ggbApplet;
		applet.setMode(1);
		$('ggbToolbar1_1').click();
		if (salva){
			var minhaString = getResp('xml_applet_p1');
			if (minhaString != 'undefined'){
				applet.setXML(minhaString);
				if (getResp('construi_p1') == 1){
				$('valor_inicial').addClassName('desabilitada');
				
				$('link_valor_inicial').hide();
				$('unset_inicial').show();
				removeEsperando({Parte: 0, Questao:'parte1_q1', Item: 0}, '');
				$('botao1').removeClassName('desabilitado');
				$('botao2').removeClassName('desabilitado');
				$('botao3').removeClassName('desabilitado');
				pontos_a2 = 3;
				 
				}
			}else{
				setResp('xml_applet_p1_limpo',applet.getXML());
			}
			setResp('parte1_q1_b',0);
			setResp('parte1_q2_b',0);
			setResp('parte1_q3_b',0);
		}
	registerListeners_a2_p1();
	
	}
	if ((PosicaoAtual.Parte == 1)){
		var applet = document.ggbApplet;
		var minhaString = getResp('xml_applet_p1');
		if(minhaString != 'undefined'){
			applet.setXML(minhaString);
			applet.setLabelStyle("A", 1);
			applet.setLabelStyle("B", 1);
			applet.setLabelStyle("C", 1);
			var a_x = applet.getXcoord("A");
			var a_y = applet.getYcoord("A");
			var b_x = applet.getXcoord("B");
			var b_y = applet.getYcoord("B");
			var c_x = applet.getXcoord("C");
			var c_y = applet.getYcoord("C");

		}
		var applet = document.ggbApplet;
		$('a2_p2_a_ponto1').update("("+applet.getXcoord("A")+","+applet.getYcoord("A")+")");
		$('a2_p2_a_ponto2').update("("+applet.getXcoord("B")+","+applet.getYcoord("B")+")");
		$('a2_p2_a_ponto3').update("("+applet.getXcoord("C")+","+applet.getYcoord("C")+")");
		
		$('a2_p2_b_ponto1').update("("+applet.getXcoord("A")+","+applet.getYcoord("A")+")");
		$('a2_p2_b_ponto2').update("("+applet.getXcoord("B")+","+applet.getYcoord("B")+")");
		$('a2_p2_b_ponto3').update("("+applet.getXcoord("C")+","+applet.getYcoord("C")+")");
		
		$('a2_p2_c_ponto1').update("("+applet.getXcoord("A")+","+applet.getYcoord("A")+")");
		$('a2_p2_c_ponto2').update("("+applet.getXcoord("B")+","+applet.getYcoord("B")+")");
		$('a2_p2_c_ponto3').update("("+applet.getXcoord("C")+","+applet.getYcoord("C")+")");
	}else if (PosicaoAtual.Parte == 2){
		var applet = document.ggbApplet;
		var minhaString = getResp('xml_applet_p1');
		if(minhaString != 'undefined'){
			applet.setXML(minhaString);
			applet.setLabelStyle("A", 1);
			applet.setLabelStyle("B", 1);
			applet.setLabelStyle("C", 1);
			var a_x = applet.getXcoord("A");
			var a_y = applet.getYcoord("A");
			var b_x = applet.getXcoord("B");
			var b_y = applet.getYcoord("B");
			var c_x = applet.getXcoord("C");
			var c_y = applet.getYcoord("C");
			applet.evalCommand("Baux = B - (0.5 * (B-A))");
			applet.evalCommand("v_1 = Vector[A,Baux]");
			applet.evalCommand("Caux = C - (0.5 * (C-B))");
			applet.evalCommand("v_2 = Vector[B,Caux]");
			applet.evalCommand("Aaux = A - (0.5 * (A-C))");
			applet.evalCommand("v_3 = Vector[C,Aaux]");
			applet.setPointSize("A", 3);
			applet.setPointSize("B", 3);
			applet.setPointSize("C", 3);
			applet.setVisible("Aaux", false);
			applet.setVisible("Baux", false);
			applet.setVisible("Caux", false);
			verSetas_A2P3();

			if ($('matrizM1'))
			{
				
				var dados = [
								[{tipo: 'texto', value: a_x},	{tipo: 'texto', value: a_y}],
								[{tipo: 'texto', value: b_x},  {tipo: 'texto', value: b_y}]
							];
				var matriz = new Matriz(dados, false, true);
				$('matrizM1').insert(matriz.divCont);
			}
			if ($('matrizM2'))
			{
				
				var dados = [
								[{tipo: 'texto', value: b_x},	{tipo: 'texto', value: b_y}],
								[{tipo: 'texto', value: c_x},  {tipo: 'texto', value: c_y}]
							];
				var matriz = new Matriz(dados, false, true);
				$('matrizM2').insert(matriz.divCont);
			}
			if ($('matrizM3'))
			{
				
				var dados = [
								[{tipo: 'texto', value: c_x},	{tipo: 'texto', value: c_y}],
								[{tipo: 'texto', value: a_x},  {tipo: 'texto', value:  a_y}]
							];
				var matriz = new Matriz(dados, false, true);
				$('matrizM3').insert(matriz.divCont);
			}
			
		}
	}
}

function registerListeners_a2_p1(){
	var applet = document.ggbApplet;
	applet.registerUpdateListener("updateListener_a2_p1");
	applet.registerAddListener("addListener_a2_p1");
	//applet.registerObjectUpdateListener("t", "funcao_tratadora1");
	//applet.registerObjectUpdateListener("t2", "funcao_tratadora2");
	//applet.registerObjectUpdateListener("t3", "funcao_tratadora3");
}

var pontos_a2 = 0;
var construi_triangulo = 0;
function addListener_a2_p1(objName) { 
	// Se objeto for ponto, adciona label
	var applet = document.ggbApplet;
	strType = applet.getObjectType(objName);
	strCommand = applet.getCommandString(objName);
	
		if (strType == "point" )
			{
				if (((strCommand.length > 1)&&(strCommand.length < 10))||(pontos_a2 == 3)){
					applet.deleteObject(objName);
				}
				else{
					if((pontos_a2 <= 2)&&(pontos_a2 <=2)){
					var x = applet.getXcoord(objName);
					var y = applet.getYcoord(objName);
					
					x = roundNumber(x,0);
					y = roundNumber(y,0);

					applet.setCoords(objName,x,y);
				
					applet.setPointSize(objName, 4);
					applet.setLabelVisible(objName,false);
					applet.evalCommand("distanciaO" + objName + " = Distance[O," + objName + "]");
					pontos_a2++;
					
					if (objName == "A"){
						applet.setCoords("Aux_A",x,y);
					}else if (objName == "B"){
						applet.setCoords("Aux_B",x,y);
					}else if (objName == "C"){
						applet.setCoords("Aux_C",x,y);
					}
					
					}
				}
			}
		else {
			applet.setLabelVisible(objName,false);
			if (strType == "angle"){
				applet.setVisible(objName,false);
			}
		}
}
var t_aux;
var t2_aux;
var t3_aux;

// Esse segundo teste eh o problema. Dependendo do valor, a diferenca eh mto grande.
function updateListener_a2_p1(objName) {
	var applet = document.ggbApplet;
	strType = applet.getObjectType(objName);
	if (strType == "point" )
	{
		if((objName == "A")||(objName == "B")||(objName == "C")){
		var x = applet.getXcoord(objName);
		var y = applet.getYcoord(objName);	
		//x = roundNumber(x,0);
		//y = roundNumber(y,0);
		applet.unRegisterUpdateListener("updateListener_a2_p1");
		//applet.setCoords(objName,x,y);
		if (objName == "A"){
			applet.setCoords("Aux_A",x,y);
		}else if (objName == "B"){
			applet.setCoords("Aux_B",x,y);
		}else if (objName == "C"){
			applet.setCoords("Aux_C",x,y);
		}		
		applet.registerUpdateListener("updateListener_a2_p1");
		}
	}
}
function unset_inicial()
{

	if (this.resultado == 'sim')
	{	
		
		recomecar_applet_atividade2();
		$('valor_inicial').removeClassName('desabilitada');
		$('link_valor_inicial').show();
		$('unset_inicial').hide();
		
		
		adicionaEsperando({Parte:0, Questao:'parte1_q1', Item: 0});

		permiteContinuar(false);   
		setResp('automacao_atividade_2_parte_0',1);
		setResp('automacao_atividade_2_parte_1',0);
		setResp('automacao_atividade_2_parte_2',0);
		setResp('automacao_atividade_2_parte_3',0);

		gerencia_partes();

	}
}
function funcao_applet_atividade2(){
	if((pontos_a2 > 2)&&(!construi_triangulo)){
		$('valor_inicial').addClassName('desabilitada');
		$('link_valor_inicial').hide();
		$('unset_inicial').show();
		removeEsperando({Parte: 0, Questao:'parte1_q1', Item: 0}, '');
		$('botao1').removeClassName('desabilitado');
		$('botao2').removeClassName('desabilitado');
		$('botao3').removeClassName('desabilitado');
		var applet = document.ggbApplet;
		applet.evalCommand("ab = Segment[A,B]");
		applet.evalCommand("bc = Segment[B,C]");
		applet.evalCommand("ca = Segment[C,A]");
		var distanciaOA = applet.getValue("distanciaOA");
		var distanciaOB = applet.getValue("distanciaOB");
		var distanciaOC = applet.getValue("distanciaOC");
		var auxX;
		var auxY;
		// dB < dA
		if (distanciaOB < distanciaOA){
			if(distanciaOB < distanciaOC){
			// B eh o ponto mais perto da origem
			auxX = applet.getXcoord("B");
			auxY = applet.getYcoord("B");
			applet.evalCommand("anguloOA = Angle[W,O,A]");
			applet.evalCommand("anguloOC = Angle[W,O,C]");
			applet.setVisible(anguloOA,false);
			applet.setVisible(anguloOC,false);
			var anguloOA = applet.getValue("anguloOA");
			var anguloOC = applet.getValue("anguloOC");

				if (anguloOA < anguloOC){
					applet.setCoords("B", applet.getXcoord("A"), applet.getYcoord("A"));
					applet.setCoords("A", auxX, auxY);
				}else{

					applet.setCoords("B", applet.getXcoord("C"), applet.getYcoord("C"));
					applet.setCoords("C", applet.getXcoord("A"), applet.getYcoord("A"));
					applet.setCoords("A", auxX, auxY);
				}
			
			}else{

				// C eh o ponto mais perto da origem
				auxX = applet.getXcoord("C");
				auxY = applet.getYcoord("C");
				applet.evalCommand("anguloOA = Angle[W,O,A]");
				applet.evalCommand("anguloOB = Angle[W,O,B]");
				applet.setVisible(anguloOA,false);
				applet.setVisible(anguloOB,false);
				var anguloOA = applet.getValue("anguloOA");
				var anguloOB = applet.getValue("anguloOB");
				if (anguloOA < anguloOB){
					applet.setCoords("C", applet.getXcoord("B"), applet.getYcoord("B"));
					applet.setCoords("B", applet.getXcoord("A"), applet.getYcoord("A"));
					applet.setCoords("A", auxX, auxY);
				}else{

					applet.setCoords("C", applet.getXcoord("A"), applet.getYcoord("A"));
					applet.setCoords("A", auxX, auxY);
				}
			}
		}else{
			if(distanciaOA < distanciaOC){

				// A eh o ponto mais perto da origem
				applet.evalCommand("anguloOC = Angle[W,O,C]");
				applet.evalCommand("anguloOB = Angle[W,O,B]");
				applet.setVisible(anguloOC,false);
				applet.setVisible(anguloOB,false);
				var anguloOC = applet.getValue("anguloOC");
				var anguloOB = applet.getValue("anguloOB");
				if (anguloOC < anguloOB){
					var auxX = applet.getXcoord("C");
					var auxY = applet.getYcoord("C");
					applet.setCoords("C", applet.getXcoord("B"), applet.getYcoord("B"));
					applet.setCoords("B", auxX, auxY);
				}
			}else{
				// C eh o ponto mais perto da origem
				auxX = applet.getXcoord("C");
				auxY = applet.getYcoord("C");
				applet.evalCommand("anguloOA = Angle[W,O,A]");
				applet.evalCommand("anguloOB = Angle[W,O,B]");
				applet.setVisible(anguloOA,false);
				applet.setVisible(anguloOB,false);
				var anguloOA = applet.getValue("anguloOA");
				var anguloOB = applet.getValue("anguloOB");
				if (anguloOA < anguloOB){
					applet.setCoords("C", applet.getXcoord("B"), applet.getYcoord("B"));
					applet.setCoords("B", applet.getXcoord("A"), applet.getYcoord("A"));
					applet.setCoords("A", auxX, auxY);
				}else{

					applet.setCoords("C", applet.getXcoord("A"), applet.getYcoord("A"));
					applet.setCoords("A", auxX, auxY);
				}
			}
		}
		applet.setLabelVisible("A", true);
		applet.setLabelVisible("B", true);
		applet.setLabelVisible("C", true);
		applet.setVisible("O", true);
		applet.setLabelVisible("O", true);
		applet.setVisible("O_1", false);
		applet.setVisible("O_2", false);
		applet.setVisible("O_3", false);
		//applet.setLabelStyle("A", 1);
		//applet.setLabelStyle("B", 1);
		//applet.setLabelStyle("C", 1);
		applet.evalCommand("poligono = Polygon[A,B,C]");
		applet.setFixed("A", true);
		applet.setFixed("B", true);
		applet.setFixed("C", true);
		applet.setFixed("O", true);
		applet.setFixed("ab", true);
		applet.setFixed("bc", true);
		applet.setFixed("ca", true);
		applet.setColor("poligono", 255,255,0);
		applet.setLabelVisible("poligono", false);
		muda_cor("A", "preto");muda_cor("B", "preto");muda_cor("C", "preto");
		applet.setLineThickness("poligono",0);
		applet.setFilling("poligono", 0.99);
		
		applet.setCoords("A_1", applet.getXcoord("A"), applet.getYcoord("A"));
		applet.setCoords("A_2", applet.getXcoord("A"), applet.getYcoord("A"));
		applet.setCoords("B_1", applet.getXcoord("B"), applet.getYcoord("B"));
		applet.setCoords("B_2", applet.getXcoord("B"), applet.getYcoord("B"));
		applet.setCoords("C_1", applet.getXcoord("C"), applet.getYcoord("C"));
		applet.setCoords("C_2", applet.getXcoord("C"), applet.getYcoord("C"));
		
		funcao_applet_atividade2_3triangulos();
		var minhaString = applet.getXML();
		setResp('xml_applet_p1',minhaString);
		set_a2_p1();
		construi_triangulo = 1;
		setResp('construi_p1',1);
	}else{
	//console.log("Pontos");
	}
}

function funcao_applet_atividade2_3triangulos(){
	var applet = document.ggbApplet;
	applet.setLayer("O_1", 4);
	applet.setLayer("O_2", 3);
	applet.setLayer("O_3", 2);
	applet.setLayer("poliABO", 4);
	applet.setLayer("poliACO", 3);
	applet.setLayer("poliBCO", 2);
}

var controle_Poli1 = 0;
var controle_Poli2 = 0;
var controle_Poli3 = 0;
function verPoli1(){
	var applet = document.ggbApplet;
	if (!controle_Poli1){
	applet.setVisible("poliABO", true);
	controle_Poli1 = 1;
	}else{
	applet.setVisible("poliABO", false);
	controle_Poli1 = 0;
	}
}

function verPoli2(){
	var applet = document.ggbApplet;
	if (!controle_Poli2){
	applet.setVisible("poliBCO", true);
	controle_Poli2 = 1;
	}else{
	applet.setVisible("poliBCO", false);
	controle_Poli2 = 0;
	}
}

function verPoli3(){
	var applet = document.ggbApplet;
	if (!controle_Poli3){
	applet.setVisible("poliACO", true);
	controle_Poli3 = 2;
	}else{
	applet.setVisible("poliACO", false);
	controle_Poli3 = 0;
	}
}

var controle_A2_P3;

function verSetas_A2P3(){
	var applet = document.ggbApplet;
	if (controle_A2_P3){
	applet.setVisible("v_1",true);
	applet.setVisible("v_2",true);
	applet.setVisible("v_3",true);
	controle_A2_P3 = 0;
	}else{
	applet.setVisible("v_1",false);
	applet.setVisible("v_2",false);
	applet.setVisible("v_3",false);
	controle_A2_P3 = 1;
	}
}

function recomecar_applet_atividade2(){
	var applet = document.ggbApplet;
	var objNumber = applet.getObjectNumber();
	var i;
	if (!isNaN(applet.getXcoord("A"))){
		applet.deleteObject("A");
	}
	if (!isNaN(applet.getXcoord("B"))){
		applet.deleteObject("B");
	}
	if (!isNaN(applet.getXcoord("C"))){
		applet.deleteObject("C");
	}
	
pontos_a2 = 0;
construi_triangulo = 0;
controle_Poli1 = 1;
controle_Poli2 = 1;
controle_Poli3 = 1;
verPoli1();
verPoli2();
verPoli3();
$('botao1').addClassName('desabilitado');
$('botao2').addClassName('desabilitado');
$('botao3').addClassName('desabilitado');
var minhaString = applet.getXML();
setResp('xml_applet_p1',minhaString);
setResp('construi_p1',0);
}
function set_a2_p1()
{/*
	removeEsperando({Parte: 0, Questao:'parte1_q1', Item: 0});
	removeEsperando({Parte: 0, Questao:'parte1_q1', Item: 1});
	removeEsperando({Parte: 0, Questao:'parte1_q2', Item: 0});
	removeEsperando({Parte: 0, Questao:'parte1_q2', Item: 1});
	removeEsperando({Parte: 0, Questao:'parte1_q3', Item: 0});
	removeEsperando({Parte: 0, Questao:'parte1_q3', Item: 1});
	*/
}

function atualiza_tabela(){/*
var applet = document.ggbApplet;
$('parte1_tabela11').update($('parte1_q1_b').value);
$('parte1_tabela12').update($('parte1_q2_b').value);
$('parte1_tabela13').update($('parte1_q3_b').value);
var parte1_t14 = processaNumero(getResp('parte1_q1_b')) + processaNumero(getResp('parte1_q2_b')) + processaNumero(getResp('parte1_q3_b'));
$('parte1_tabela14').update(Number(processaNumero(parte1_t14)).toPrecision(2));		
*/}