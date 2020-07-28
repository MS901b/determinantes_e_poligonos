var flashInit = 1;
var ggbInit = 0;
var htmlInit = 0;
Event.observe(document, 'flash:SalvaLocal', function(ev){
	flashInit = 1;
	checkInit();
});

function checkInit(){
	if ((flashInit)&&(ggbInit)&&(htmlInit)){
		initGeral();
	}
}

function initGeral(){
	if ($('matriz_inicial'))
	{

		var dados = [
						[{tipo: 'texto', value: 'Xp'},	{tipo: 'texto', value: 'Yp'}],
						[{tipo: 'texto', value: 'Xq'},  {tipo: 'texto', value: 'Yq'}]
					];
		var matriz = new Matriz(dados, false, true);
		$('matriz_inicial').insert(matriz.divCont);
	}
	if (PosicaoAtual.Parte == 0){
			if (getResp('atividade_1') != 3){
				setResp('atividade_1',2);
			}
	}
	Event.observe('link_continuar', 'focus', function(evento){
			if(($('link_continuar').className) == 'ativado'){
				setResp('atividade_1',3);
			}
	});


		registerListeners_a1_p1();
		var applet = document.ggbApplet;
		applet.setMode(1);
		$('ggbToolbar1_1').click();
}

Event.observe(window, 'load', function(){
	htmlInit = 1;
	checkInit();
});



Event.observe(window, 'load', function(){
});

// função que é chamada sempre que todas as questões de uma determinada parte são acertadas
function tudoCerto()
{
	////alert('Parabénss, você acertou tudo');
}

//Um input de texto cuja resposta correta é 'qwe'
function corrige_q_1_a(valor)
{
	var resp = valor[0];
	resp  = resp.replace(',','.');
	valor[0] = resp;
	$('parte1_q1_a').value = valor[0];

	var applet = document.ggbApplet;
	var resposta = applet.getXcoord("P")*applet.getYcoord("Q") - applet.getXcoord("Q")*applet.getYcoord("P");

	if(valor[0] == resposta)
	{
		return [true];
	}
	return [false];
}

//Um input de texto cuja resposta correta é '12,4' ou '12.4', ou ainda '124/10'...
function corrige_q_1_b(valor)
{
	var resp = valor[0];
	resp  = resp.replace(',','.');
	valor[0] = resp;
	$('parte1_q1_b').value = valor[0];
	var applet = document.ggbApplet;
	var resposta = applet.getXcoord("Q")*applet.getYcoord("P") - applet.getXcoord("P")*applet.getYcoord("Q");

	if(valor[0] == resposta)
	{
		return [true];
	}
	return [false];
}

function corrige_q_2_a(valor)
{

	return [(valor[0]?false:null),(valor[1]?false:null),(valor[2]?true:null),(valor[3]?false:null)];

}

function ggbOnInit(){
		ggbInit = 1;
		checkInit();
}

function registerListeners_a1_p1(){
	var applet = document.ggbApplet;
	applet.registerUpdateListener("updateListener_a1_p1");
	applet.registerAddListener("addListener_a1_p1");
}

var pontos_a1 = 0;
var criado = 0;

function addListener_a1_p1(objName) {
	// Se objeto for ponto, adiciona label

	var applet = document.ggbApplet;
	var strType = applet.getObjectType(objName);
	var strCommand = applet.getCommandString(objName);
	
		if (strType == "point" )
			{
				if (((strCommand.length > 1)&&(strCommand.length < 9))||(pontos_a1 >= 2)){
					applet.setLabelVisible(objName,true);
					applet.deleteObject(objName);
				}else if ((strCommand == 'Ponto[EixoX]')||(strCommand == 'Ponto[EixoY]')){
					var x = applet.getXcoord(objName);
					var y = applet.getYcoord(objName);
					applet.deleteObject(objName);
					x = roundNumber(x,0);
					y = roundNumber(y,0);
					if (pontos_a1 == 2){
					applet.evalCommand('Q = ('+x+','+y+')');
					applet.setLabelVisible('Q',1);
					}else{
					applet.evalCommand('P = ('+x+','+y+')');
					applet.setLabelVisible('P',1);
					}

					if (pontos_a1 == 1){
						$('parte1_q1_a_11').update(x);
						$('parte1_q1_a_12').update(y);
						$('parte1_q1_b_21').update(x);
						$('parte1_q1_b_22').update(y);
					}else {

						$('parte1_q1_a_21').update(x);
						$('parte1_q1_a_22').update(y);
						$('parte1_q1_b_11').update(x);
						$('parte1_q1_b_12').update(y);
					}
				}
				else{
					var x = applet.getXcoord(objName);
					var y = applet.getYcoord(objName);

					applet.setPointSize(objName, 4);
					applet.setLabelVisible(objName,1);

					pontos_a1++;
					if (pontos_a1 == 2){
					applet.renameObject(objName, "Q");
					applet.evalCommand("anguloWOQ = Angle[W,O,Q]");
					applet.setVisible("anguloWOQ", 0);

					}else{
					applet.renameObject(objName, "P");
					applet.evalCommand("anguloWOP = Angle[W,O,P]");
					applet.setVisible("anguloWOP", 0);
					}

					if (pontos_a1 == 1){
						$('parte1_q1_a_11').update(x);
						$('parte1_q1_a_12').update(y);
						$('parte1_q1_b_21').update(x);
						$('parte1_q1_b_22').update(y);
					}else {

						$('parte1_q1_a_21').update(x);
						$('parte1_q1_a_22').update(y);
						$('parte1_q1_b_11').update(x);
						$('parte1_q1_b_12').update(y);
					}
				}
			}
	applet.setLabelVisible(objName,0);
}

function updateListener_a1_p1(objName) {
	
	var applet = document.ggbApplet;
	
	var strType = applet.getObjectType(objName);
	if (strType == "point" )
	{
		var x = applet.getXcoord(objName);
		var y = applet.getYcoord(objName);
	
	}
	
	if (objName == "P"){
		$('parte1_q1_a_11').update(x);
		$('parte1_q1_a_12').update(y);
		$('parte1_q1_b_21').update(x);
		$('parte1_q1_b_22').update(y);
	}else if (objName == "Q"){

		$('parte1_q1_a_21').update(x);
		$('parte1_q1_a_22').update(y);
		$('parte1_q1_b_11').update(x);
		$('parte1_q1_b_12').update(y);
	}

	var det1 = applet.getXcoord("P")*applet.getYcoord("Q") - applet.getXcoord("Q")*applet.getYcoord("P");
	var det2 = applet.getXcoord("Q")*applet.getYcoord("P") - applet.getXcoord("P")*applet.getYcoord("Q");

	if (det1 > 0){
		$('parte1_q2_a1').update(det1);
		$('parte1_q2_a2').update(det2);
		$('parte1_q2_a3').update((det1/2));
		$('parte1_q2_a4').update((det2/2));
	}else{
		$('parte1_q2_a1').update(det2);
		$('parte1_q2_a2').update(det1);
		$('parte1_q2_a3').update((det2/2));
		$('parte1_q2_a4').update((det1/2));
	}
		
}

function funcao_applet_atividade1(){
	var applet = document.ggbApplet;
	if ((pontos_a1 == 2)&&(!criado)){
	applet.evalCommand("poligono = Polygon[O,P,Q]");
	applet.setLabelVisible("poligono", 0);
	set_a1_p1();
	criado = 1;
	}
}

function set_a1_p1()
{
	removeEsperando({Parte: 0, Questao:'parte1_q1', Item: 0});
	removeEsperando({Parte: 0, Questao:'parte1_q1', Item: 1});
	removeEsperando({Parte: 0, Questao:'parte1_q2', Item: 0});
	var applet = document.ggbApplet;
	var det1 = applet.getXcoord("P")*applet.getYcoord("Q") - applet.getXcoord("Q")*applet.getYcoord("P");
	var det2 = applet.getXcoord("Q")*applet.getYcoord("P") - applet.getXcoord("P")*applet.getYcoord("Q");

	if (det1 > 0){
		$('parte1_q2_a1').update(det1);
		$('parte1_q2_a2').update(det2);
		$('parte1_q2_a3').update((det1/2));
		$('parte1_q2_a4').update((det2/2));
	}else{
		$('parte1_q2_a1').update(det2);
		$('parte1_q2_a2').update(det1);
		$('parte1_q2_a3').update((det2/2));
		$('parte1_q2_a4').update((det1/2));
	}

}

function muda_ponto(){
var applet = document.ggbApplet;
	if (applet.getValue("anguloWOP") < applet.getValue("anguloWOQ")){
		var ponto = 'P';
	}else{
		var ponto = 'Q';
	}
	$('PontoX').update(ponto);
}
