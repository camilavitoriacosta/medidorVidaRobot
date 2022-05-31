Start();
var botoes = document.querySelectorAll(".botao");
var maiorTamanho = 95;
var fome=maiorTamanho, diversao=maiorTamanho, limpeza=maiorTamanho;
var total = fome + diversao + limpeza;

function Start(){
    setInterval(()=>{
        if(total > 0 || fome <= 0 || diversao <=0 || limpeza <= 0){
            fome = atualizaPorcentagem(".barra_progresso--fome", fome);
            diversao = atualizaPorcentagem(".barra_progresso--diversao", diversao);
            limpeza = atualizaPorcentagem(".barra_progresso--limpeza", limpeza);
            total = fome + diversao + limpeza;
            verificaStatus();
        }
    }, 1000);
}

function verificaStatus(){
    // 95 * 3 = 285
    if(fome <= 0 || diversao <=0 || limpeza <= 0){
        document.querySelector(".imagem__bicho").src = "src/img/robot-morto.png";
        botoes.forEach((botao) => {
            botao.disabled = true;
        });
    }

    else if(total > 200){
        document.querySelector(".imagem__bicho").src = "src/img/robot-feliz.png";
    }
    else if(total > 120){
        document.querySelector(".imagem__bicho").src = "src/img/robot-triste.png";
    }
    else if(total > 70){
        document.querySelector(".imagem__bicho").src = "src/img/robots-bravo.png";
    }
    else if((total > 5 && total < 30)){
        document.querySelector(".imagem__bicho").src = "src/img/robot-morto.png";
    }
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