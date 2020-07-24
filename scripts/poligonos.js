/******************************************************************************************************************************************************
 ****    Flash                         *******
 ******************************************************************************************************************************************************/
// Retorna o elemento do video Flash com o nome movieName
function getFlashMovie(movieName) {
 var isIE = navigator.appName.indexOf("Microsoft") != -1;
 return (isIE) ? window[movieName] : document[movieName];
}

function getResp(id) {
 return getFlashMovie('SalvaLocal').Pega(nomeSoft,id);
}
 
function setResp(id,valor) {
 getFlashMovie('SalvaLocal').Salva(nomeSoft,id,valor);
}

function apagaTodasResp() {
 return (getFlashMovie('SalvaLocal').ApagaTudo(nomeSoft));
}

function init() {
 return (getFlashMovie('SalvaLocal').ApagaTudo(nomeSoft));
}


function roundNumber(num, dec) {
	var result = Math.round( Math.round( num * Math.pow( 10, dec + 1 ) ) / Math.pow( 10, 1 ) ) / Math.pow(10,dec);
	return result;
}

function processaNumero(respStr) 
{	
	var respStrSplited = respStr.split('/');
	
	var respostaValida = true;
	if (respStrSplited.length>1) 
	{
		
		for (var i=0;i<respStrSplited.length;i++)
		{	
			respStrSplited[i]=processaNumero(respStrSplited[i]);
			if (respStrSplited[i]==null) respostaValida=false;
			if (respostaValida) 
			{
				if (i==0) 
				{
					var resp=respStrSplited[i];
				} 
				else 
				{
					resp=resp/respStrSplited[i];
				}
				
			}
		}
		if (respostaValida) return resp;
		else return null;
	} 
	else
	{
		if (respStr.indexOf('%')>-1) 
		{
			respStr=respStr.replace(/%/,'');
			var porcento=true;
		} else var procento=false;
		
		respStr=respStr.replace(/,/g,'.');
		if ( !isNaN(respStr) && (respStr.length>0) ) 
		{
			if (porcento) respStr=respStr/100;
		} else respStr=null;
		return respStr;
	}

}

function muda_cor(objeto, cor){
	var applet = document.ggbApplet;
	if (cor == "preto") applet.setColor(objeto, 0, 0, 0);
	if (cor == "branco") applet.setColor(objeto, 255,255, 255);
}

function validar_numeros(id){
	if(isNaN($(id).value)){
		$(id).value = "";
	}
}

function validar_numeros_limites(id, min, max){
	if((isNaN($(id).value))||(($(id).value)<min)||(($(id).value)>max)){
		$(id).value = "";
	}
}