Start();
var maiorTamanho = 95;
var fome=maiorTamanho, diversao=maiorTamanho, limpeza=maiorTamanho;

function Start(){
    setInterval(()=>{
        fome = atualizaPorcentagem(".barra_progresso--fome", fome);
        diversao = atualizaPorcentagem(".barra_progresso--diversao", diversao);
        limpeza = atualizaPorcentagem(".barra_progresso--limpeza", limpeza);
    }, 5500);
}

function atualizaPorcentagem(nomeClasse, tamanho){
    var atributo = document.querySelector(nomeClasse);
    tamanho = parseInt(tamanho - 10);
    atributo.style.width = tamanho + "%";
    return tamanho;
}

function aumentaAtributo(botao, nome){
    var atributo = document.querySelector(".barra_progresso--" + nome);
    var aumentar = parseInt(atributo.style.width) + 20;
    if (aumentar < maiorTamanho){
        atributo.style.width = aumentar + "%";
        atualizarTamanho(nome, aumentar);
    }
    else{
        atributo.style.width = maiorTamanho + "%";
        atualizarTamanho(nome, maiorTamanho);
    }
}

function atualizarTamanho(nome, valor){
    if(nome === "fome"){
        fome = valor;
    }
    else if(nome === "limpeza"){
        limpeza = valor;
    }
    else{
        diversao= valor;
    }
}