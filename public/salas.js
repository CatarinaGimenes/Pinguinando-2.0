function procurarSala() {
    //procurar salas
    // if 0 salas
    //criar sala
    // if 1+ salas
    //entrar na sala

    fetch(`/cardJitsu/procurarSalas`, {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((resposta2) => {
                console.log("respostata.::.")
                console.log(resposta2)

                if(resposta2.length == 0) {
                    criarSala()
                } else {
                    toast("Sala encontrada")
                    inserirP2(resposta2[0].idSala)
                }
                
            })
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function inserirP2(idSala) {

    var player2Var = localStorage.idJogador
    var salaVar = idSala

    fetch("/cardjitsu/inserirP2", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            player2: player2Var,
            idSala: salaVar,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function criarSala() {

    var codigo           = '';
    var caracteres       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 8; i++ ) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    var codigoVar = codigo
    var player1Var = localStorage.idJogador

    toast(`${codigo} <br> ${player1Var}`)

    fetch("/cardjitsu/criarSala", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            codigo: codigoVar,
            idJogador: player1Var,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function toast(mensagem) {
    exibirToasts.innerHTML = `
    <div id="fundo-toasts">
        <div class="toast">
            <h1>${mensagem}</h1>
            <button onclick="ok()">Ok</button>
        </div>
    </div>
    `
}

function ok() {
    exibirToasts.innerHTML = ""
}

function gerarCodigo() {
    // implementar checagem de codigos...
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}