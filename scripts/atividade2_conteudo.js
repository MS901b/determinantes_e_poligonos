var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];
var Partes = ['1','2','3','4'];
var nomeSoft = 'area_poligonos';
var Questoes = 
[
	{//Parte 1
		parte1_q1: //Questão 1
		{
			itens: 
			[
				{//A
					enunciado: 'Após explorar os triângulos ao lado, arraste os sinais adequados para as regiões pontilhadas na equação. Seu objetivo é expressar a área do triângulo ABC como o resultado de somas e subtrações da área dos outros três triângulos.',			
					tipo: 'drag',
					esperando: true,
					corrigir: corrige_q_8_a,
					html: 'drag',
					msgErro: 'Observe quais triângulos recobrem o triângulo ABC, para determinar aqueles que devem aparecer com sinal positivo.'
				}
			]
		}
	},
	{//Parte 1
		parte2_q1: //Questão 1
		{
			itens: 
			[
				{//A
					tipo: 'drag',
					corrigir: corrige_q_2_a_drag,
					html: 'drag',
					enunciado: 'Como deve ser a matriz M<sub>1</sub> para que ½.Det(M<sub>1</sub>) = <span id="a2p2_aaa"></span>A<span style="font-size:8px;">ABO</span>?',
					msgErro: 'Lembre-se que a ordem das linhas interfere no sinal do determinante. Se estiver com dificuldades para resolver essa questão, reveja a Atividade 1.'
				},
				{//B
					tipo: 'drag',
					corrigir: corrige_q_2_b_drag,
					html: 'drag2',
					enunciado: 'Como deve ser a matriz M<sub>2</sub> para que ½.Det(M<sub>2</sub>) = <span id="a2p2_bbb"></span>A<span style="font-size:8px;">BCO</span>?',
					msgErro: 'Lembre-se que a ordem das linhas interfere no sinal do determinante. Se estiver com dificuldades para resolver essa questão, reveja a Atividade 1.'
				}
				,
				{//B
					tipo: 'drag',
					corrigir: corrige_q_2_c_drag,
					html: 'drag3',
					enunciado: 'Como deve ser a matriz M<sub>3</sub> para que ½.Det(M<sub>3</sub>) = <span id="a2p2_ccc"></span>A<span style="font-size:8px;">ACO</span>?',
					msgErro: 'Lembre-se que a ordem das linhas interfere no sinal do determinante. Se estiver com dificuldades para resolver essa questão, reveja a Atividade 1.'
				}
			]
		}
	},
	{//Parte 3
	},
	{//Parte 4
		parte4_q1: //Questão 1
		{
			enunciadoGeral:'Para cada um dos triângulos abaixo, dê uma sequência de caracteres que represente um percurso no sentido anti-horário de seus vértices.',
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_6_a,
					esperando: false,
					dependente: false,
					associado: false,
					enunciado: '<img class="imagem" src="imgs/figura4.png"/>',
					msgErro: 'Digite as respostas na forma ABC.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_6_b,
					esperando: false,
					dependente: false,
					associado: false,
					enunciado: '<img class="imagem" src="imgs/figura2.png"/>',
					msgErro: 'Digite as respostas na forma ABC.'
				},
				{//C
					tipo: 'input',
					corrigir: corrige_q_6_c,
					esperando: false,
					dependente: false,
					associado: false,
					enunciado: '<img class="imagem" src="imgs/figura3.png"/>',
					msgErro: 'Digite as respostas na forma ABC.'
				},
				{//D
					tipo: 'input',
					corrigir: corrige_q_6_d,
					esperando: false,
					dependente: false,
					associado: false,
					enunciado: '<img class="imagem" src="imgs/figura1.png"/>',
					msgErro: 'Digite as respostas na forma ABC.'
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