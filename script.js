
function gerarCuriosidade(){
    var img = document.getElementById("foto")
    var botao = document.getElementById("botao")
    
    let numero = Math.floor(Math.random() * 10 + 1)
    if (numero == 1){
        img = img.setAttribute('src', 'images/lua.jpg')
        var parentElem = botao.parentNode   
        parentElem.removeChild ( botao )
    var descricao = document.getElementById("d4")
descricao.innerHTML = 'A Lua é uma linguagem de programação brasileira desenvolvida no instituto Tecgraf da PUC-Rio (Pontifícia Universidade Católica do Rio de Janeiro), em Julho de 1993, graças aos cientistas Roberto Ierusalimschy, Luiz Henrique de Figueiredo e Waldemar Celes. Seu nome deriva da linguagem SOL e DEL que inspiraram sua implementação e desenvolvimento.'
var frase = document.getElementById("d1")
frase.innerHTML =  'Linguagem Brasileira?'}
    if (numero == 2){
        img = img.setAttribute('src', 'images/java.jpg')
        var parentElem = botao.parentNode   
        parentElem.removeChild ( botao ) 
        var descricao = document.getElementById("d4")
        descricao.innerHTML = 'Java é uma ilha da Indonésia em que são produzidos os cafés mais caros do mundo. Os cafés vindos de lá carregam esse nome, e esse café era diariamente consumido pela equipe!' 
        var frase = document.getElementById("d1")
frase.innerHTML =  'Por que Java?' }
    if (numero == 3){
        img = img.setAttribute('src', 'images/ada.jpg')
        var parentElem = botao.parentNode   
        parentElem.removeChild ( botao )
        var descricao = document.getElementById("d4")
        descricao.innerHTML = 'Ada Lovelace, uma matemática britânica, publicou em 1843 a descrição de um algoritmo a ser processado por uma das “Máquinas Analíticas” de Charles Babbage. O script desenvolvido por ela permitiria àquele computador rudimentar da época calcular valores de funções matemáticas. Por conta disso, Ada é conhecida até hoje como a primeira programadora da História.' 
        var frase = document.getElementById("d1")
        frase.innerHTML =  'O primeiro algoritmo computacional foi escrito por uma mulher' }
    if (numero == 4){
        img = img.setAttribute('src', 'images/lena.png')
        var parentElem = botao.parentNode   
        parentElem.removeChild ( botao ) 
        var descricao = document.getElementById("d4")
        descricao.innerHTML = 'Lena Söderberg, uma modelo da revista masculina “Playboy” fotografada em 1972, é o rosto mais usado no desenvolvimento de softwares de processamento de imagens. Segundo David Munson, chefe do setor de Transações e Processamento de Imagens do Instituto de Engenheiros Eletricistas e Eletrônicos (IEEE), o motivo é a qualidade da foto original.'  
        var frase = document.getElementById("d1")
        frase.innerHTML =  'Uma foto da revista “Playboy” é a mais usada em testes de processamento de imagens' }
    if (numero == 5){
        img = img.setAttribute('src', 'images/Alura.jpg')
        var parentElem = botao.parentNode   
        parentElem.removeChild ( botao )
        var descricao = document.getElementById("d4")
        descricao.innerHTML = 'Todo programador é um poliglota. Isso não é uma surpresa, já que os códigos com os quais trabalham todos os dias são, na verdade, meios de comunicar às máquinas comandos necessários para seu funcionamento. O incrível é que, embora programadores conheçam, em média, de 30 a 50 linguagens de programação, estima-se que mais de 1500 linguagens já tenham sido desenvolvidas; destas, 3 são oficialmente brasileiras.'  
        var frase = document.getElementById("d1")
        frase.innerHTML =  'Poliglotas'  }
    if (numero == 6){
        img = img.setAttribute('src', 'images/software.jpg')
        var parentElem = botao.parentNode   
        parentElem.removeChild ( botao )
        var descricao = document.getElementById("d4")
        descricao.innerHTML = 'Uma das principais regras dos empresários diz que é muito mais caro conseguir um novo cliente do que manter um cliente existente. No entanto, de acordo com pesquisas de engenharia de software, a realidade é um pouco diferente quando se trata de código: manter o código em execução por meio de tarefas de manutenção pode custar até 90% de todos os custos do projeto.'
        var frase = document.getElementById("d1")
        frase.innerHTML =  'A manutenção de software consome entre 40% e 90% dos custos'   }
    if (numero == 7){
        img = img.setAttribute('src', 'images/navegar.jpg')
        var parentElem = botao.parentNode   
        parentElem.removeChild ( botao )
        var descricao = document.getElementById("d4")
        descricao.innerHTML = 'De acordo com um estudo importante, verificou-se que aproximadamente 30% do tempo de trabalho de um programador não são gastos editando o texto (incluindo, editando ou excluindo), mas surfando entre vários arquivos ao longo do código fonte. A navegação envolve pesquisa, observação, coleta de informações, memorização e outras atividades. Ou seja, você poderia dizer que a programação é uma atividade cuja terceira parte é apenas contemplativa.'  
        var frase = document.getElementById("d1")
frase.innerHTML =  'Programadores gastam aproximadamente 30% do tempo navegando no código fonte'   }
    if (numero == 8){
        img = img.setAttribute('src', 'images/dna.jpg')
        var parentElem = botao.parentNode   
        parentElem.removeChild ( botao )
        var descricao = document.getElementById("d4")
        descricao.innerHTML = 'Bioengenheiros da Universidade de Washington criaram uma linguagem de programação capaz de produzir DNA sintético para transportar informações às células. Em outras palavras a linguagem pode gerenciar o comportamento da genética humana. Estima-se que dentro de um futuro próximo os químicos e biólogos poderão programar o DNA de seres vivos por meio de linguagens análogas a Java, C++, Lua e Elixir. A diferença é que o resultado, ao invés de ser exteriorizado no ecrã, será convertido em reações químicas.' 
        var frase = document.getElementById("d1")
        frase.innerHTML =  ' Programação de DNA'  }
    if (numero == 9){
        img = img.setAttribute('src', 'images/programador.jpg')
        var parentElem = botao.parentNode   
        parentElem.removeChild ( botao ) 
        var descricao = document.getElementById("d4")
        descricao.innerHTML = 'A codificação engloba um conjunto de medidas envolvendo experiência, planejamento, criatividade e raciocínio, ou seja, vários coeficientes da individualidade humana. Não é à toa que existem vários programas — desenvolvidos para um mesmo objetivo e atribuindo a mesma linguagem — que são mais rápidos, eficientes, atraentes, leves, etc. Por isso, dois ou mais programadores podem escrever o mesmo software, porém, seus códigos jamais serão idênticos. Sempre haverá diferenças que podem refletir no desempenho do programa.' 
        var frase = document.getElementById("d1")
        frase.innerHTML =  'Não existem códigos idênticos'  }
    if (numero == 10){
        img = img.setAttribute('src', 'images/fortran.png')
        var parentElem = botao.parentNode   
        parentElem.removeChild ( botao )
        var descricao = document.getElementById("d4")
        descricao.innerHTML = 'A primeira linguagem de programação de alto nível a ser desenvolvida foi o FORTRAN (IBM Mathematical Formula Translation System), criado pelo cientista norte-americano John Backus em parceria com a IBM (International Business Machines) entre 1954 a 1957. A partir daí, muitas outras linguagens de alto nível, aproximando-se do inglês utilizado para nos comunicar, acabaram sendo desenvolvidas.'  
        var frase = document.getElementById("d1")
        frase.innerHTML =  'A primeira linguagem de alto nível' }
}
