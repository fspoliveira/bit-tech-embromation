var phrases_1 = [
        { id:1, name: 'Caros colegas' },
        { id:2, name: 'Por outro lado, ' },
        { id:3, name: 'Não podemos esquecer que ' },       
        { id:4, name: 'Do mesmo modo ' },
        { id:5, name: 'A prática mostra que ' },
        { id:6, name: 'Nunca é demais insistir que ' },
        { id:7, name: 'A experiência mostra que ' },
        { id:8, name: 'É fundamental ressaltar que ' },
        { id:9, name: 'O incentivo ao avanço tecnológico ' },
        { id:10, name: 'Assim como ' },
        { id:11, name: 'Assim mesmo  ' }
    ];

var phrases_2 = [
        { id:1, name: 'a execução deste projeto, ' },
        { id:2, name: 'a complexidade dos estudos efetuados, ' },
        { id:3, name: 'a atual estrutura de organização  , ' },       
        { id:4, name: 'o novo modelo estrutural aqui preconizado ' },
        { id:5, name: 'o desenvolvimento de formas distintas de atuação ' },
        { id:6, name: 'a constante divulgação das informações ' },
        { id:7, name: 'a consolidação das estruturas, ' },
        { id:8, name: 'o início do programa de formação de atitudes, ' },
        { id:9, name: 'a análise dos diversos resultados, ' },
        { id:10, name: 'a análise dos diversos resultados, ' },
        { id:11, name: 'a expansão de nossa atividade, ' },
    ];   

 var phrases_3 = [
        { id:1, name: 'nos obriga à análise ' },
        { id:2, name: 'cumpre um papel essencial na formulação ' },
        { id:3, name: 'auxilia a preparação e a estruturação  ' },       
        { id:4, name: 'contribui para a correta determinação ' },
        { id:5, name: 'assume importantes posições na definição ' },
        { id:6, name: 'facilita a definição ' },
        { id:7, name: 'a consolidação das estruturas ' },
        { id:8, name: 'prejudica a percepção da importância  ' },
        { id:9, name: 'oferece uma boa oportunidade de verificação ' },
        { id:10, name: 'acarreta um processo de reformulação ' },
        { id:11, name: 'exige precisão e definição, ' },
    ];  

 var phrases_4 = [
        { id:1, name: 'das nossas opções de desenvolvimento futuro.' },
        { id:2, name: 'das nossas metas financeiras e administrativas.' },
        { id:3, name: 'das atitudes e das atribuições da diretoria.' },       
        { id:4, name: 'das novas proposições.' },
        { id:5, name: 'assume importantes posições na definição' },
        { id:6, name: 'facilita a definição' },
        { id:7, name: 'das opções básicas para o sucesso do programa.' },
        { id:8, name: 'do nosso sistema de formação de quadros.' },
        { id:9, name: 'das condições apropriadas para os negócios.' },
        { id:10, name: 'dos índices pretendidos.' },
        { id:11, name: 'dos conceitos de participação geral' },
    ];           

exports.myPhrases = function () { 
var data = [];

for(var i=1; i<=10; i++) {

     var rand_1 = phrases_1[Math.floor(Math.random() * phrases_1.length)].name;
     var rand_2 = phrases_2[Math.floor(Math.random() * phrases_2.length)].name;
     var rand_3 = phrases_3[Math.floor(Math.random() * phrases_3.length)].name;
     var rand_4 = phrases_4[Math.floor(Math.random() * phrases_4.length)].name;     
     
     var randomPhrase= rand_1 + rand_2 + rand_3 + rand_4;
  
data.push({
    "id": i, 
     "name": randomPhrase,  
})
}
    return data;
};