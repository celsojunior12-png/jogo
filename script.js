const candidatos = [
    {
        numero: "11",
        nome: "Ana Silva",
        turma: "Turma A",
        foto: "https://picsum.photos/200?random=1"
    },
    {
        numero: "22",
        nome: "Bruno Souza",
        turma: "Turma B",
        foto: "https://picsum.photos/200?random=2"
    },
    {
        numero: "33",
        nome: "Carla Oliveira",
        turma: "Turma C",
        foto: "https://picsum.photos/200?random=3"
    },
    {
        numero: "44",
        nome: "Daniel Lima",
        turma: "Turma D",
        foto: "https://picsum.photos/200?random=4"
    }
];

let numeroDigitado = "";

const campoNumero = document.getElementById("numero");
const foto = document.getElementById("foto");
const nome = document.getElementById("nome");
const partido = document.getElementById("partido");
const mensagem = document.getElementById("mensagem");

limparTela();

function limparTela() {
    numeroDigitado = "";

    campoNumero.innerHTML = "";
    foto.src = "https://via.placeholder.com/180x220?text=Foto";
    nome.innerHTML = "---";
    partido.innerHTML = "---";
    mensagem.innerHTML = "Digite dois números.";
}

function digitar(numero){

    if(numeroDigitado.length >= 2)
        return;

    numeroDigitado += numero;

    campoNumero.innerHTML = numeroDigitado;

    procurarCandidato();

}

function procurarCandidato(){

    if(numeroDigitado.length < 2)
        return;

    const candidato = candidatos.find(c => c.numero === numeroDigitado);

    if(candidato){

        foto.src = candidato.foto;
        nome.innerHTML = candidato.nome;
        partido.innerHTML = candidato.turma;
        mensagem.innerHTML = "Confirme seu voto.";

    }else{

        foto.src="https://via.placeholder.com/180x220?text=?";
        nome.innerHTML="VOTO NULO";
        partido.innerHTML="";
        mensagem.innerHTML="Número inexistente.";

    }

}

function confirmar(){

    if(numeroDigitado.length == 0){

        alert("Digite um número.");

        return;

    }

    let votos = JSON.parse(localStorage.getItem("votos")) || {};

    if(votos[numeroDigitado]){

        votos[numeroDigitado]++;

    }else{

        votos[numeroDigitado]=1;

    }

    localStorage.setItem("votos",JSON.stringify(votos));

    mensagem.innerHTML="✔ Voto Computado";

    setTimeout(limparTela,1500);

}

function votarBranco(){

    let votos = JSON.parse(localStorage.getItem("votos")) || {};

    if(votos["BRANCO"]){

        votos["BRANCO"]++;

    }else{

        votos["BRANCO"]=1;

    }

    localStorage.setItem("votos",JSON.stringify(votos));

    mensagem.innerHTML="✔ Voto em Branco";

    setTimeout(limparTela,1500);

}

function corrigir(){

    limparTela();

}