class Substancia{
    nome;
    nomeQmc;
    elementos = [  ];
}

//criando elementos

//criando cloreto de sodio
const cloretoDeSodio = new Substancia();
cloretoDeSodio.nome = "Cloreto de Sodio"
cloretoDeSodio.nomeQmc  = "NaCl";
cloretoDeSodio.elementos = ["Na", "Cl"];

//criando acido cloridrico
const acidoCloridrico = new Substancia();
acidoCloridrico.nome = "Acido Cloridrico"
acidoCloridrico.nomeQmc  = "HCl";
acidoCloridrico.elementos = ["H", "Cl"];

//criando hidroxido de sodio
const hidroxidoDeSodio = new Substancia();
hidroxidoDeSodio.nome = "Hidroxido de Sodio"
hidroxidoDeSodio.nomeQmc  = "NaOH";
hidroxidoDeSodio.elementos = ["Na", "O", "H"];

//criando agua
const agua = new Substancia();
agua.nome = "Agua"
agua.nomeQmc  = "H2O";
agua.elementos = ["H", "H", "O"];


/// tem que mandar isso aqui pra outro arquivo !!!!
//teste do level1 
ladoEsquerdo = acidoCloridrico.elementos.concat( hidroxidoDeSodio.elementos);
ladoDireito = cloretoDeSodio.elementos.concat( agua.elementos);

//corrige o level vem do arquivo script
console.log(corrigeLevel(ladoEsquerdo, ladoDireito));

console.log(cloretoDeSodio);

