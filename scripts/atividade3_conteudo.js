/*
	Padronização do ID: 
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/
 
var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];
var Partes = ['1','2','3'];
var nomeSoft = 'area_poligonos';
/*
	Questoes
	
	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item
	
	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/

var Questoes = 
[
	{
		parte4_q1: //Questão 1
		{
			itens: 
			[
				{//A
					tipo: 'instrucao',
					corrigir: corrige_q_4_a,
					selecionada: select_q_4_a,
					esperando: false,
					enunciado: 'Crie segmentos unindo o vértice A aos vértices do pentágono não adjacentes a ele.	',
					msgErro: 'Conecte o vértice A aos vértices não adjacentes a ele (destacados em tamanho maior) selecionando a ferramenta <a id="link_segmento">segmento</a> e então clicando nos vértices.'
				}
			]
		},
		parte4_q2: //Questão 1
		{
			enunciadoGeral:'Dê o percurso que resulta na área de cada um dos triângulos.',
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_5_a,
					selecionada: select_q_5_a,
					esperando: false,
					dependente: false,
					associado: false,
					enunciado: 'Triângulo 1',
					msgAjuda: 'Escreva o percurso no formato PQR, usando as letras correspondentes ao vértices dos triângulos.',
					msgErro: ' Lembre-se que a ordem dos vértices deve sugerir um percurso no sentido anti-horário.'
				},
				{//A
					tipo: 'input',
					corrigir: corrige_q_5_b,
					selecionada: select_q_5_b,
					esperando: false,
					dependente: false,
					associado: false,
					enunciado: 'Triângulo 2',
					msgAjuda: 'Escreva o percurso no formato PQR, usando as letras correspondentes ao vértices dos triângulos.',
					msgErro: ' Lembre-se que a ordem dos vértices deve sugerir um percurso no sentido anti-horário.'
				},
				{//A
					tipo: 'input',
					corrigir: corrige_q_5_c,
					selecionada: select_q_5_c,
					esperando: false,
					dependente: false,
					associado: false,
					enunciado: 'Triângulo 3',
					msgAjuda: 'Escreva o percurso no formato PQR, usando as letras correspondentes ao vértices dos triângulos.',
					msgErro: ' Lembre-se que a ordem dos vértices deve sugerir um percurso no sentido anti-horário.'
				}
			]
		}
	},
	{
	},
	{
		parte4_q3: //Questão 1
		{
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_6_a,
					esperando: true,
					enunciado: 'Para esse polígono que você criou, qual deve ser o percurso para que o método que você aprendeu calcule corretamente a área dele?',
					msgErro: 'Lembre-se que o percurso deve ser no sentido anti-horário.',
					msgAjuda: 'Escreva o percurso no formato PQR, usando as letras correspondentes ao vértices dos triângulos.'
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