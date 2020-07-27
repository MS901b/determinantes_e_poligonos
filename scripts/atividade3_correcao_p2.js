var flag = 1;
Event.observe(document, 'flash:SalvaLocal', function(ev){
	flag = 1;
});



Event.observe(window, 'load', function(){
	if (PosicaoAtual.Parte == 0){
		if (flag){
			if (getResp('atividade_3') != 3){
				setResp('atividade_3',2);
			}
		}
	}else if (PosicaoAtual.Parte == 1){
		$('grade').setChecked(true);
		if ($('grade').checked){
			ver_arestas_internas(false);
		}else{
			ver_arestas_internas(true);
		}
	}
});

	function ver_arestas_internas2(){
		if ($('grade').checked){
			//alert("true true");
			ver_arestas_internas(false);
		}else{
			//alert("false false");
			ver_arestas_internas(true);
		}
	}

var strLength = 150;
var criar_poli = 0;
var nomePontoEmReta = "Ponto"
var i_interseccao = 0;
var arestas_em_ponto = new Array();
var poligono = new Array();
var resp_aluno;
var maior = 0;
var xml;

var ggb_abriu = false;
function ggbOnInit(){
		if (PosicaoAtual.Parte == 1){
			var applet = document.ggbApplet;
			if (flag){
				var minhaString = getResp('applet_a3_p2');
			}
			if(minhaString != 'undefined'){
			applet.setXML(minhaString);
			if (applet.isDefined('Baux1')){
				applet.deleteObject('Baux1');
			}
			if (applet.isDefined('v_1')){
				applet.deleteObject('v_1');
			}
			if (applet.isDefined('Caux1')){
				applet.deleteObject('Caux1');
			}
			if (applet.isDefined('v_2')){
				applet.deleteObject('v_2');
			}

			applet.setVisible('text2',  false);
			applet.setVisible('text3',  false);
			applet.setVisible('text4',  false);

			applet.evalCommand("Baux1 = B - (0.5 * (B-A))");
			applet.evalCommand("v_1 = Vector[A,Baux1]");
			applet.evalCommand("Caux1 = C - (0.5 * (C-B))");
			applet.evalCommand("v_2 = Vector[B,Caux1]");
			applet.setVisible("v",true);
			applet.setVisible("v_2",true);
			applet.setVisible("v_1",true);

			if (applet.isDefined('Caux2')){
				applet.deleteObject('Caux2');
			}
			if (applet.isDefined('v_5')){
				applet.deleteObject('v_5');
			}
			if (applet.isDefined('Caux3')){
				applet.deleteObject('Caux3');
			}
			if (applet.isDefined('v_8')){
				applet.deleteObject('v_8');
			}
			if (applet.isDefined('Aaux3')){
				applet.deleteObject('Aaux3');
			}
			if (applet.isDefined('v_9')){
				applet.deleteObject('v_9');
			}
			applet.evalCommand("Caux2 = D - (0.5 * (D-C))");
			applet.evalCommand("v_5 = Vector[C,Caux2]");

			applet.evalCommand("Caux3 = E - (0.5 * (E-D))");
			applet.evalCommand("v_8 = Vector[D,Caux3]");
			applet.evalCommand("Aaux3 = A - (0.5 * (A-E))");
			applet.evalCommand("v_9 = Vector[E,Aaux3]");
			applet.setVisible("w",true);
			applet.setVisible("v_8",true);
			applet.setVisible("v_9",true);

			applet.setVisible("z",true);
			applet.setVisible("v_5",true);
			applet.setVisible("u",true);
			applet.setVisible("Baux1",false);
			applet.setVisible("Caux1",false);
			applet.setVisible("Aaux1",false);
			applet.setVisible("Baux2",false);
			applet.setVisible("Caux2",false);
			applet.setVisible("Aaux2",false);
			applet.setVisible("Baux3",false);
			applet.setVisible("Caux3",false);
			applet.setVisible("Aaux3",false);

			}
		}
		registerListeners_a3_p2();
		ggb_abriu = true;
}

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
function corrige_q_6_a(){
}
var ver_internas = 1;
function ver_arestas_internas(booleano){
	if (ggb_abriu == true) {
		var applet = document.ggbApplet;
		if (booleano){
			ver_internas = 0;
			applet.setVisible("seg0",false);
			applet.setVisible("seg1",false);
			applet.setVisible("u",false);
			applet.setVisible("v",false);
			applet.setVisible("z",false);
			applet.setVisible("w",false);
			applet.setVisible('text2',  false);
			applet.setVisible('text3',  false);
			applet.setVisible('text4',  false);

		}else{
			ver_internas = 1;
			applet.setVisible("seg0",true);
			applet.setVisible("seg1",true);
			applet.setVisible("u",true);
			applet.setVisible("v",true);
			applet.setVisible("z",true);
			applet.setVisible("w",true);
			applet.setVisible('text2',  true);
			applet.setVisible('text3',  true);
			applet.setVisible('text4',  true);
		}
	}
}

function registerListeners_a3_p2(){
	var applet = document.ggbApplet;
	if (PosicaoAtual.Parte == 0){
		applet.registerUpdateListener("updateListener_a3_p2");
		applet.registerAddListener("addListener_a3_p2");
		applet.registerRemoveListener("removeListener_a3_p2");
	}
}

var pontos_a3_p2 = 0;
function addListener_a3_p2(objName) {
}

function pontos_segmentos_a3_p2(){
}

function updateListener_a3_p2(objName) {
}

function removeListener_a3_p2(objName){
}
function funcao_cria_poli_a3_p2(){
}

function limpa_angulos(){
}

function verifica_interseccoes_a3_p2(){
}

function recomecar_applet_atividade3_parte2(){
}

var controle_A2_P3;

function verSetas_A3P3(){
}

function set_a3_p2(){
}
function getPontosSegmento(strCommand) {
	var pontosSegmento=strCommand.split(",");
	pontosSegmento[0] = pontosSegmento[0].charAt(pontosSegmento[0].length-1);
	pontosSegmento[1] = pontosSegmento[1].charAt(1);
	return pontosSegmento;
}
