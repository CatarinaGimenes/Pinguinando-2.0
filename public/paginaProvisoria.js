function mostrarCadastro() {
    document.getElementById("btn_logar").outerHTML = '<button onclick="cadastrar()" id="btn_cadastrar">cadastrar</button>'
    document.getElementById("tit-cadastro").style.color = '#888064'
    document.getElementById("tit-login").style.color = '#b8ac86'
}

function mostrarLogin() {
    document.getElementById("btn_cadastrar").outerHTML = '<button onclick="logar()" id="btn_logar">Logar</button>'
    document.getElementById("tit-login").style.color = '#888064'
    document.getElementById("tit-cadastro").style.color = '#b8ac86'
}

function cadastrar() {

    var nomeVar = nome_txt.value
    var senhaVar = senha_txt.value

    fetch(`/cardjitsu/validar/${nomeVar}`, {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((resposta2) => {
                console.log(resposta2)

                if (resposta2.length > 0) {
                    return
                }

                fetch("/cardjitsu/cadastrar", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nome: nomeVar,
                        senha: senhaVar,
                    }),
                })
                    .then(function (resposta) {
                        console.log("resposta: ", resposta);
                    })
                    .catch(function (resposta) {
                        console.log(`#ERRO: ${resposta}`);
                    });
            })
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        nome_txt.value = ""
        senha_txt.value = ""
}

function logar() {
    var nomeVar = nome_txt.value
    var senhaVar = senha_txt.value

        fetch("/cardjitsu/logar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome: nomeVar,
                senha: senhaVar,
            }),
        })
            .then(function (resposta) {
                resposta.json().then((resposta2) => {
                    console.log(resposta2)
                    if (resposta2.length == 0) {
                        return
                    }
                    localStorage.idJogador = resposta2[0].idJogador
                    localStorage.nome = resposta2[0].nome
                    
                })
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

    senha_txt.value = ""
    nome_txt.value = ""
}