/*
	Padronização do ID: 
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/
var Partes = ['1'];
var nomeSoft = 'area_poligonos';
var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];

/*
	Questoes
	
	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item
	
	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/

var Questoes = 
[
	{//Parte 1
		parte1_q1: //Questão 1
		{
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_1_a,
					esperando: true,
					dependente: false,
					associado: false,
					enunciado: 'Qual é o valor do determinante da matriz abaixo, cuja primeira linha é formada pelas coordenadas de P e a segunda pelas coordenadas de Q?',
					depois_enunciado: '<div class="matriz margem_questao"><div class="supe_esq"></div><div class="supe_dir"></div><span id="parte1_q1_a_11">Xp</span><span id="parte1_q1_a_12">Yp</span><br class="limpador" /><span id="parte1_q1_a_21">Xq</span><span id="parte1_q1_a_22">Yq</span><br class="limpador" /><div class="esquerda inferior infe_esq"></div><div class="direita inferior infe_dir"></div></div><br class="limpador" />',
					antes: 'Det =',
					msgErro: 'Lembre-se que o valor do determinante é dado por: a<sub style="color:red">11</sub>*a<sub style="color:red">22</sub> - a<sub style="color:red">21</sub>*a<sub style="color:red">12</sub>'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_1_b,
					esperando: true,
					dependente: false,
					associado: false,
					enunciado: 'Qual é o valor do determinante da matriz abaixo, cuja primeira linha é formada pelas coordenadas de Q e a segunda pelas coordenadas de P?',
					depois_enunciado: '<div class="matriz margem_questao"><div class="supe_esq"></div><div class="supe_dir"></div><span id="parte1_q1_b_11">Xq</span><span id="parte1_q1_b_12">Yq</span><br class="limpador" /><span id="parte1_q1_b_21">Xp</span><span id="parte1_q1_b_22">Yp</span><br class="limpador" /><div class="esquerda inferior infe_esq"></div><div class="direita inferior infe_dir"></div></div><br class="limpador" />', 
					antes: 'Det =',
					msgErro: 'Lembre-se que o valor do determinante é dado por: a<sub style="color:red">11</sub>*a<sub style="color:red">22</sub> - a<sub style="color:red">21</sub>*a<sub style="color:red">12</sub>'
				}
			]
		},
		parte1_q2:
		{
			itens: 
			[
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_2_a,
					esperando: true,
					enunciado: 'Qual é a área do triângulo formado por P, Q e a origem?',
					dados:	[
						{value: '0', label: '<span id="parte1_q2_a1"></span>'},
						{value: '0', label: '<span id="parte1_q2_a2"></span>'},
						{value: '1', label: '<span id="parte1_q2_a3"></span>'},
						{value: '0', label: '<span id="parte1_q2_a4"></span>'}
					],
					msgErro: 'Lembre-se que a área deste triângulo é dada por: (a<sub_red>11</sub_red>*a<sub_red>22</sub_red> - a<sub_red>21</sub_red>*a<sub_red>12</sub_red>)/2'
				}
			]
		}
	}
]

var MeuBloco = new Array(
);

Event.observe(window, 'load', function(){
	BlocoNotas = new Blocao();
});