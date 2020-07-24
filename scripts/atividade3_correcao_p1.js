var ponto_escolhido = 'A';
var segmentos = 0;
var acertou01 = 0;
var acertou02 = 0;
var acertou03 = 0;
var acertou04 = 0;
var flag = 1;
Event.observe(document, 'flash:SalvaLocal', function(ev){
	flag = 1;
});



Event.observe(window, 'load', function(){
	if (PosicaoAtual.Parte == 0){
		var posicao = {Parte: 0, Questao: 'parte4_q1', Item:0};
		PegaQuestao(posicao).seleciona();
		if (flag){
			if (getResp('atividade_3') != 3){
				setResp('atividade_3',2);
			}
			if(getResp('a3_parte1_q2_a') != 'undefined'){
				$('parte1_q2_a').value = getResp('a3_parte1_q2_a');
			}

			if(getResp('a3_parte1_q2_b') != 'undefined'){
					$('parte1_q2_b').value = getResp('a3_parte1_q2_b');
				}

			if(getResp('a3_parte1_q2_c') != 'undefined'){
					$('parte1_q2_c').value = getResp('a3_parte1_q2_c');
				}
		}
	}
});
function corrige_q_6_a(){
}

function select_q_4_a(){
	var applet = document.ggbApplet;
	applet.setColor("A", 255, 0, 0);
	applet.setPointSize("A", 4);
	applet.setPointSize("C", 4);
	applet.setPointSize("D", 4);
}

function select_q_5_a(){
	var applet = document.ggbApplet;
	applet.setColor("A", 0, 0, 0);
	applet.setPointSize("A", 3);
	applet.setPointSize("C", 3);
	applet.setPointSize("D", 3);
}
function select_q_5_b(){
	var applet = document.ggbApplet;
	applet.setColor("A", 0, 0, 0);
	applet.setPointSize("A", 3);
	applet.setPointSize("C", 3);
	applet.setPointSize("D", 3);
}
function select_q_5_c(){
	var applet = document.ggbApplet;
	applet.setColor("A", 0, 0, 0);
	applet.setPointSize("A", 3);
	applet.setPointSize("C", 3);
	applet.setPointSize("D", 3);
}
function corrige_q_4_a(){
	var applet = document.ggbApplet;
	if ((applet.isDefined("seg0"))&&(applet.isDefined("seg1"))){
	var seg1 = applet.getCommandString("seg0");
	var seg2 = applet.getCommandString("seg1");
	var pontos1 = pontosSegmento=getPontosSegmento(seg1);
	var pontos2 = pontosSegmento=getPontosSegmento(seg2);
	var ponto1 = pontos1[0];
	var ponto2 = pontos1[1];
	var ponto3 = pontos2[0];
	var ponto4 = pontos2[1];
	var verifica = false;
	if (ponto1 == ponto_escolhido){
		if (ponto3 == ponto_escolhido){
			return [verifica_adjacentes(ponto2, ponto4)]
		}else if (ponto4 == ponto_escolhido){
			return [verifica_adjacentes(ponto2, ponto3)]
		}else{
			return [false];
		}
	}else{
		if (ponto3 == ponto_escolhido){
			return [verifica_adjacentes(ponto1, ponto4)]
		}else if (ponto4 == ponto_escolhido){
			return [verifica_adjacentes(ponto1, ponto3)]
		}else{
			return [false];
		}
	}
		applet.setVisible('text2',  false);
		applet.setVisible('text3',  false);
		applet.setVisible('text4',  false);
		return [false];
	}else{
		applet.setVisible('text2',  false);
		applet.setVisible('text3',  false);
		applet.setVisible('text4',  false);
		return [false];
	}
}

function verifica_adjacentes(P1, P2){
var applet = document.ggbApplet;
	if (ponto_escolhido == "A"){
		if (P1 == "C"){
			if (P2 == "D"){
				acertou01 = 1;
				if((acertou01 == 1)&&(acertou02 == 1)&&(acertou03 == 1)&&(acertou04 == 1)){
					setResp('applet_a3_p2', applet.getXML());
				}
				applet.setVisible('text2',  true);
				applet.setVisible('text3',  true);
				applet.setVisible('text4',  true);
				return true;
			}else{
				applet.setVisible('text2',  false);
				applet.setVisible('text3',  false);
				applet.setVisible('text4',  false);
				return false;
			}
		}else if (P1 == "D"){
			if (P2 == "C"){
				acertou01 = 1;
				applet.setVisible('text2',  true);
				applet.setVisible('text3',  true);
				applet.setVisible('text4',  true);
				return true;
			}else{
				applet.setVisible('text2',  false);
				applet.setVisible('text3',  false);
				applet.setVisible('text4',  false);
				return false;
			}
		}
	}
}

function corrige_q_5_a(valor){
	var aux = valor[0].toUpperCase();
	valor[0] = aux;
	var applet = document.ggbApplet;
	for (var i = 0; i <= valor[0].length; i++){
		valor[0] = valor[0].replace(',','');
		valor[0] = valor[0].replace(';','');
		valor[0] = valor[0].replace(':','');
		valor[0] = valor[0].replace('.','');
	}
	if ((valor[0] == 'ABC')||(valor[0] == 'BCA')||(valor[0] == 'CAB')){
		acertou02 = 1;
				if((acertou01 == 1)&&(acertou02 == 1)&&(acertou03 == 1)&&(acertou04 == 1)){
					setResp('applet_a3_p2', applet.getXML());
				}
		if (!applet.isDefined("Criei1")){
		applet.evalCommand("Criei1 = 1");
		applet.evalCommand("Baux1 = B - (0.5 * (B-A))");
		applet.evalCommand("v_1 = Vector[A,Baux1]");
		applet.evalCommand("Caux1 = C - (0.5 * (C-B))");
		applet.evalCommand("v_2 = Vector[B,Caux1]");
		//applet.evalCommand("Aaux1 = A - (0.6 * (A-C))");
		//applet.evalCommand("v_3 = Vector[C,Aaux1]");
		applet.setVisible("v",true);
		applet.setVisible("v_2",true);
		applet.setVisible("v_1",true);
		}else{
			applet.setVisible("v_1",true);
			applet.setVisible("v_2",true);
			applet.setVisible("v",true);
		}
		setResp('a3_parte1_q2_a',valor[0].toUpperCase());
		$('parte1_q2_a').value = valor[0].toUpperCase();
		return [true];
	}else{
		if (applet.isDefined("Criei1")){
		applet.setVisible("v",false);
		applet.setVisible("v_2",false);
		applet.setVisible("v_1",false);
		}
		return [false];
	}
}
function corrige_q_5_b(valor){
	var aux = valor[0].toUpperCase();
	valor[0] = aux;
	var applet = document.ggbApplet;
	for (var i = 0; i <= valor[0].length; i++){
		valor[0] = valor[0].replace(',','');
		valor[0] = valor[0].replace(';','');
		valor[0] = valor[0].replace(':','');
		valor[0] = valor[0].replace('.','');
	}

	if ((valor[0] == 'ACD')||(valor[0] == 'CDA')||(valor[0] == 'DAC')){
		acertou03 = 1;
				if((acertou01 == 1)&&(acertou02 == 1)&&(acertou03 == 1)&&(acertou04 == 1)){
					setResp('applet_a3_p2', applet.getXML());
				}
		if (!applet.isDefined("Criei2")){
		applet.evalCommand("Criei2 = 1");
		//applet.evalCommand("Baux2 = C - (0.5 * (C-A))");
		//applet.evalCommand("v_4 = Vector[A,Baux2]");
		applet.evalCommand("Caux2 = D - (0.5 * (D-C))");
		applet.evalCommand("v_5 = Vector[C,Caux2]");
		//applet.evalCommand("Aaux2 = A - (0.6 * (A-D))");
		//applet.evalCommand("v_6 = Vector[D,Aaux2]");
		applet.setVisible("z",true);
		applet.setVisible("v_5",true);
		applet.setVisible("u",true);
		}else{
			applet.setVisible("z",true);
			applet.setVisible("v_5",true);
			applet.setVisible("u",true);
		}
		setResp('a3_parte1_q2_b',valor[0].toUpperCase());
		$('parte1_q2_b').value = valor[0].toUpperCase();
		return [true];
	}else{
		if (applet.isDefined("Criei2")){
			applet.setVisible("z",false);
			applet.setVisible("v_5",false);
			applet.setVisible("u",false);
		}
		return [false];
	}

}
function corrige_q_5_c(valor){
	var aux = valor[0].toUpperCase();
	valor[0] = aux;
	var applet = document.ggbApplet;
	for (var i = 0; i <= valor[0].length; i++){
		valor[0] = valor[0].replace(',','');
		valor[0] = valor[0].replace(';','');
		valor[0] = valor[0].replace(':','');
		valor[0] = valor[0].replace('.','');
	}

	if ((valor[0] == 'ADE')||(valor[0] == 'DEA')||(valor[0] == 'EAD')){
		acertou04 = 1;
				if((acertou01 == 1)&&(acertou02 == 1)&&(acertou03 == 1)&&(acertou04 == 1)){
					setResp('applet_a3_p2', applet.getXML());
				}
		if (!applet.isDefined("Criei3")){
		applet.evalCommand("Criei3 = 1");
		//applet.evalCommand("Baux3 = D - (0.5 * (D-A))");
		//zapplet.evalCommand("v_7 = Vector[A,Baux3]");
		applet.evalCommand("Caux3 = E - (0.5 * (E-D))");
		applet.evalCommand("v_8 = Vector[D,Caux3]");
		applet.evalCommand("Aaux3 = A - (0.5 * (A-E))");
		applet.evalCommand("v_9 = Vector[E,Aaux3]");
		applet.setVisible("w",true);
		applet.setVisible("v_8",true);
		applet.setVisible("v_9",true);
		}else{
			applet.setVisible("w",true);
			applet.setVisible("v_8",true);
			applet.setVisible("v_9",true);
		}
		setResp('a3_parte1_q2_c',valor[0].toUpperCase());
		$('parte1_q2_c').value = valor[0].toUpperCase();
		return [true];
	}else{
		if (applet.isDefined("Criei3")){
			applet.setVisible("w",false);
			applet.setVisible("v_8",false);
			applet.setVisible("v_9",false);
		}
		return [false];
	}

}
function ggbOnInit(){
	var applet = document.ggbApplet;
		applet.setMode(15);
		$('ggbToolbar1_0').click();
		registerListeners_a4_p2();
}
function registerListeners_a4_p2(){
	var applet = document.ggbApplet;
		//applet.registerUpdateListener("updateListener_a3_p2");
		applet.registerAddListener("addListener_a4_p2");
		applet.registerRemoveListener("removeListener_a4_p2");
}
var aux = 0;
function addListener_a4_p2(objName){
	var applet = document.ggbApplet;
	strType = applet.getObjectType(objName);
	strCommand = applet.getCommandString(objName);
	if ((objName!= ("Criei1"))&&(objName!= ("Aaux1"))&&(objName!= ("Baux1"))&&(objName!= ("Caux1"))&&
	(objName!= ("v_1"))&&(objName!= ("v_2"))&&(objName!= ("v_3"))&&(objName!= ("Criei2"))&&(objName!= ("Aaux2"))&&(objName!= ("Baux2"))&&(objName!= ("Caux2"))&&
	(objName!= ("v_4"))&&(objName!= ("v_5"))&&(objName!= ("v_6"))&&(objName!= ("Criei3"))&&(objName!= ("Aaux3"))&&(objName!= ("Baux3"))&&(objName!= ("Caux3"))&&
	(objName!= ("v_7"))&&(objName!= ("v_8"))&&(objName!= ("v_9"))&&(strType != "segment")){
		applet.deleteObject(objName);
	}
	if (strType == "segment"){
		pontosSegmento=getPontosSegmento(strCommand);
		if (!applet.isDefined(pontosSegmento[1])||(!applet.isDefined(pontosSegmento[0]))){
			applet.deleteObject(objName);
		}
		else {
			applet.setColor(objName, 255, 0, 0);
			if (segmentos == 0){
				applet.renameObject(objName, "seg0");
			}
			if (segmentos == 1){
				applet.renameObject(objName, "seg1");
			}
			if (segmentos >= 2){

				if ((aux%2)==0){
					applet.deleteObject("seg0");
					applet.renameObject(objName, "seg0");
				}else{
					applet.deleteObject("seg1");
					applet.renameObject(objName, "seg1");
				}
					aux++;
			}
				segmentos++;
		}
	}else{
		applet.setVisible(objName, false);
	}
}

function removeListener_a4_p2(objName){
	if ((objName == "seg0")||(objName == "seg1")){
		segmentos--;
	}
}

function escolher_ponto(){
	ponto_escolhido = $('init01').value;
}

function getPontosSegmento(strCommand) {
	var pontosSegmento=strCommand.split(",");
	pontosSegmento[0] = pontosSegmento[0].charAt(pontosSegmento[0].length-1);
	pontosSegmento[1] = pontosSegmento[1].charAt(1);
	return pontosSegmento;
}
