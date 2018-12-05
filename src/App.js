import React, { Component } from 'react';
import Resultados from "./Resultados.js";
import './App.css';

class App extends Component {
    render() {
        return (

            <div className="App">
                <div className="navBar" id="sideBar">
                    <a href="#slider">MENU</a>
                    <hr></hr>
                    <a href="#equipe" >Cadastrar Equipe</a>
                    <a href="#temporada">Cadastro Temporada</a>
                    <a href="#competicao">Cadastro de Competição </a>
                    <a href="#missoes">Cadastro de Missões</a>
                    <a href="#juiz">Cadastro de Juízes</a>
                    <a href="#salaAvaliacao">Cadastro de Salas</a>
                    <a href="#categoria">Cadastro de Categorias</a>
                    <a href="#arena">Cadastro de Arenas</a>
                    <a href="#alternativa">Cadastro de Alternativas</a>
                    <hr></hr>
                    <a href="#novaRodada" onClick={handleRodada}>Nova Rodada</a>
                    </div>

                <div className="slider" id="slider"></div>
                <section id="equipe" className="text-center">
                    <form action="action_page" id="equipe_form">
                        <div className="container">
                            <h1>Cadastre sua Equipe!</h1>
                            <p>Por favor, preencha esse formulário para realizar o cadastro!</p>
                            <hr></hr>
                            <input type="text" placeholder="Nome da Equipe" name="nome_equipe" required></input>

                            <button type="reset" className="registerBt" onClick={handleSaveEquipe}> Cadastrar</button>
                        </div>
                    </form>
                </section>

                <section id="integrantes" className="text-center">
                    <form action="action_page" id="form_integrantes">
                        <div className="container">
                            <h1>Cadastre os Integrantes da Equipe!</h1>
                            <p>Por favor, preencha esse formulário para realizar o cadastro!</p>
                            <hr></hr>

                            <input type="text" id="nome_integrante" placeholder="Nome do integrante" name="nome_integrante" required></input>

                            <input type="text" id="rg_integrante" placeholder="Registro Geral" name="rg_integrante" required></input>

                            <input type="text" id="cpf_integrante" placeholder="CPF" name="cpf_integrante" required></input>

                            <input type="date" id="dataNasci_integrante" placeholder="Data nascimento" name="dataNasci_integrante" required></input>
                            <label for="dataNasci_integrante">Data de Nascimento </label>

                            <input type="text" id="mae_integrante" placeholder="Nome da Mãe" name="mae_integrante" required></input>

                            <input type="text" id="pai_integrante" placeholder="Nome do Pai(Opcional)" name="pai_integrante" ></input>


                            <input type="checkbox"  id="autorizaco_entregue" placeholder="Autorização Entregue" name="autorizacao_integrante" required></input>
                            <label for="autorizaco_entregue">Autorização Entregue </label>

                            <input type="text" id="nome_equipe" placeholder="Nome da Equipe" name="nome_equipe" required></input>

                            <select id="comboBox"></select>

                            <button type="reset" className="registerBt" onClick={handleSaveIntegrantes}> Cadastrar</button>

                        </div>
                    </form>
                </section>

                <section id="temporada" className="text-center">
                    <form action="action_page"  id="form_temporada">
                        <div className="container">
                            <h1>Cadastro de Temporada!</h1>
                            <p>Por favor, preencha esse formulário para realizar o cadastro!</p>
                            <hr></hr>
                            <input type="text" placeholder="Nome da temporada" name="nome_temporada" required></input>
                            <input type="text" placeholder="Descrição" name="descr_temporada" required></input>

                            <button type="submit" className="registerBt" onClick={handleSaveTemporada}> Cadastrar</button>
                        </div>
                    </form>
                </section>

                <section id="competicao" className="text-center">
                    <form action="action_page" id="form_competicao">
                        <div className="container">
                            <h1>Cadastro de Competição!</h1>
                            <p>Por favor, preencha esse formulário para realizar o cadastro!</p>
                            <hr></hr>
                            <input type="text" placeholder="Cidade" name="cidade_competicao" required></input>
                            <input type="text" placeholder="Estado" name="estado_competicao" required></input>
                            <input type="Date" id="data_competicao" placeholder="Date" name="data_competicao" required></input>
                            <label for="data_competicao">Data do evento </label>

                            <input type="text" placeholder="Nome do Responsável" name="responsavel_competicao" required></input>
                            <input type="text" placeholder="Tipo" name="tipo_competicao" required></input>
                            <input type="text" placeholder="Temporada" name="temporada_competico" required></input>

                            <button type="submit" className="registerBt" onClick={handleSaveCompeticao}> Cadastrar</button>
                        </div>
                    </form>
                </section>

                <section id="missoes" className="text-center">
                    <form action="action_page" id="form_missoes">
                        <div className="container">
                            <h1>Cadastro de Missões!</h1>
                            <p>Por favor, preencha esse formulário para realizar o cadastro!</p>
                            <hr></hr>
                            <input type="text" id="nome_missao" placeholder="Nome da missão" name="nome_missão" required></input>
                            <input type="text"  id="descricao_missao" placeholder="Descrição" name="descr_missao" required></input>
                            <input type="text" id="categoria_missao" placeholder="Categoria" name="categoria_missao" required></input>

                            <button type="submit" className="registerBt" onClick={handleSaveMissoes}> Cadastrar</button>
                        </div>
                    </form>
                </section>

                <section id="juiz" className="text-center">
                    <form action="action_page" id="form_juizes">
                        <div className="container">
                            <h1>Cadastre os Juízes da Competição!</h1>
                            <p>Por favor, preencha esse formulário para realizar o cadastro!</p>
                            <hr></hr>

                            <input type="text" id="nome_juiz" placeholder="Nome do juiz" name="nome_juiz"
                                   required></input>

                            <input type="text" id="rg_juiz" placeholder="Registro Geral" name="rg_juiz" required></input>

                            <input type="text" id="cpf_juiz" placeholder="CPF" name="cpf_juiz" required></input>

                            <input type="date" id="data_juiz" placeholder="Data nascimento" name="dataNasci_juiz" required></input>
                            <label for="data_juiz">Data de Nascimento</label>

                            <input type="text" id = "categoria_juiz" placeholder="Categoria" name="categoria_juiz" required></input>

                            <button type="submit" className="registerBt" onClick={handleSaveJuizes}> Cadastrar</button>

                        </div>
                    </form>
                </section>

                <section id="salaAvaliacao" className="text-center">
                    <form action="action_page" id="form_salaAvaliacao">
                        <div className="container">
                            <h1>Cadastre as Salas de Avaliação da Competição!</h1>
                            <p>Por favor, preencha esse formulário para realizar o cadastro!</p>
                            <hr></hr>

                            <input type="text" id="nome_sala" placeholder="Nome da sala" required></input>

                            <input type="text" id="competicao_sala" placeholder="Competição" required></input>

                            <input type="text" id="categoria_sala" placeholder="Categoria" required></input>

                            <button type="submit" className="registerBt" onClick={handleSaveSalaAvaliacao}> Cadastrar</button>

                        </div>
                    </form>
                </section>

                <section id="categoria" className="text-center">
                    <form action="action_page" id="form_categoria">
                        <div className="container">
                            <h1>Cadastre as Categorias da Competição!</h1>
                            <p>Por favor, preencha esse formulário para realizar o cadastro!</p>
                            <hr></hr>

                            <input type="text" id="nome_categoria" placeholder="Nome da Categoria"  required></input>

                            <input type="text" id="descricao_categoria" placeholder="Descrição da Categoria"  required></input>

                            <button type="submit" className="registerBt" onClick={handleSaveCategorias}> Cadastrar</button>

                        </div>
                    </form>
                </section>

                <section id="arena" className="text-center">
                    <form action="action_page" id="form_arena">
                        <div className="container">
                            <h1>Cadastre as Arenas da Competição!</h1>
                            <p>Por favor, preencha esse formulário para realizar o cadastro!</p>
                            <hr></hr>

                            <input type="text" id="nome_arena" placeholder="Nome da Arena" name="nome_arena"
                                   required></input>

                            <input type="text" id="nome_competicao" placeholder="Competição" name="compt_arena" required></input>

                            <button type="submit" className="registerBt" onClick={handleSaveArena}> Cadastrar</button>

                        </div>
                    </form>
                </section>

                <section id="alternativa" className="text-center">
                    <form action="action_page" id="form_alternativa">
                        <div className="container">
                            <h1>Cadastre as Alternativas da Competição!</h1>
                            <p>Por favor, preencha esse formulário para realizar o cadastro!</p>
                            <hr></hr>

                            <input type="text" id="valor_alternativa" placeholder="Valor" name="nome_arena"
                                   required></input>

                            <input type="text"id="missoes_alternativa" placeholder="Missoes" name="missoes_alternativa" required></input>

                            <button type="submit" className="registerBt" onClick={handleSaveAlternativas}> Cadastrar</button>

                        </div>
                    </form>
                </section>

                <div id="novaRodada" className="container" hidden={true}>
                    <div id="novaRodadaInside">
                        <h1>Nova Rodada</h1>
                        <label>Lista de Temporads</label>
                        <select id="listaTemporadas"></select>
                        <br></br>
                        <label>Lista de Competições</label>
                        <hr></hr>

                    </div>
                </div>

                <div id="id_resultados"  className="container">
                    <h1>RESULTADOS</h1>
                </div>
                 </div>


        );
    }
}
    function handleSaveTemporada() {
        const form = new FormData(document.getElementById("form_temporada"));
        console.log(form.toString() + " temporada");
        fetch('http://127.0.0.1:8080/temporadas', {
            method: 'POST',
            headers: {
                "Accept": "Application/json",
                "Content-type": "application/json;charset=utf-8"
            },
            body:
                JSON.stringify({
                    "id": "", "nome": form.get("nome_temporada"), "descricao": form.get("descr_temporada"),
                })
        });
        alert("Cadastrado com sucesso!!");
    }
    function handleSaveEquipe() {
        const form = new FormData(document.getElementById("equipe_form"));
        console.log(form.toString() + " equipe");
        fetch('http://127.0.0.1:8080/equipes', {
            method: 'POST',
            headers: {
                "Accept": "Application/json",
                "Content-type": "application/json;charset=utf-8"
            },
            body:
                JSON.stringify({
                    "id": "", "nome": form.get("nome_equipe").toUpperCase(),
                })
        });
        alert("Cadastrado com sucesso!!");
    }
    function handleSaveCompeticao() {
    try{
        const form = new FormData(document.getElementById("form_competicao"));
        fetch('http://127.0.0.1:8080/competicoes', {
            method: 'POST',
            headers: {
                "Accept": "Application/json",
                "Content-type": "application/json;charset=utf-8"
            },
            body:
                JSON.stringify({
                    "id": "",
                    "cidade": form.get("cidade_competicao"),
                    "estado": form.get("estado_competicao"),
       //             "date": form.get("data_competicao"),
                    "responsavel": form.get("responsavel_competicao"),
                    "tipo": form.get("tipo_competicao"),
                    "temporada":{"id":form.get("temporada_competico")},
                })
        });
        alert("Cadastrado com sucesso!!");
    }catch(e){
        alert("Falha no cadastro!!");
    }
}
    function handleSaveMissoes() {
    try {
        const form = new FormData(document.getElementById("form missoes"));
        const nome = document.getElementById("nome_missao");
        const descricao = document.getElementById("descricao_missao");
        const categoria = document.getElementById("categoria_missao");

        fetch('http://127.0.0.1:8080/missoes', {
            method: 'POST',
            headers: {
                "Accept": "Application/json",
                "Content-type": "application/json;charset=utf-8"
            },
            body:
                JSON.stringify({
                    "id": "",
                    "nome": nome.value,
                    "descricao": descricao.value,
                    "categoria": {"id": categoria.value}
                })
        });
        alert("Cadastrado com sucesso!!");
    }catch (e) {
        alert("Falha no cadastro!");
    }
    }
    function handleSaveIntegrantes() {
    try {
        const form = new FormData(document.getElementById("form_integrantes"));

        let checbox = document.getElementsByName('autorizacao_entregue');
        let retorno = false;
        console.log(form.toString() + "integrante")
        for (let i = 0; i < checbox.length; i++) {
            if (checbox[i].checked === true) {
                retorno = true;
            }
        }
        fetch('http://127.0.0.1:8080/integrantes', {
            method: 'POST',
            headers: {
                "Accept": "Application/json",

                "Content-type": "application/json;charset=utf-8"
            },
            body://"data_nascimento":form.get("dataNasci_integrante"),
                JSON.stringify({
                    "id_integrante": "",
                    "nome": form.get("nome_integrante"),
                    "rg": form.get("rg_integrante"),
                    "cpf": form.get("cpf_integrante"),
                    "pai": form.get("pai_integrante"),
                    "data_nascimento": "null",
                    "mae": form.get("mae_integrante"),
                    "equipe": {"id": form.get("nome_equipe")},
                    "autorizacao_entregue": retorno,
                })
        });
        alert("Cadastrado com sucesso!!");
    }catch (e) {
        alert("Falha no cadastro!!");
    }
}
    function handleSaveJuizes() {
    try{
        const nome = document.getElementById("nome_juiz");
        const cpf = document.getElementById("cpf_juiz");
        const rg = document.getElementById("rg_juiz");
        const categoria = document.getElementById("categoria_juiz");
        fetch('http://127.0.0.1:8080/juizes', {
            method: 'POST',
            headers: {
                "Accept": "Application/json",
                "Content-type": "application/json;charset=utf-8"
            },
            body:
                JSON.stringify({
                    "id": "", "nome": nome.value, "cpf": cpf.value, "rg": rg.value, "categoria":
                        {"id": categoria.value}
                })
        });
        alert("Cadastrado com sucesso!!");
    }catch(ex){
    alert("Falha no cadastro!!");
}
}
    function handleSaveSalaAvaliacao() {
    try{
        const nome = document.getElementById("nome_sala");
        const categoria = document.getElementById("categoria_sala")
        const competicao = document.getElementById("competicao_sala");
        fetch('http://127.0.0.1:8080/salaAvaliacao', {
            method: 'POST',
            headers: {
                "Accept": "Application/json",
                "Content-type": "application/json;charset=utf-8"
            },
            body:
                JSON.stringify({
                    "id": "",
                    "nome": nome.value,
                    "categoria": {"id": categoria.value},
                    "competicao": {"id": competicao.value},
                })
        });
        alert("Cadastrado com sucesso!!");
    }catch(ex){
    alert("Falha no cadastro!");
    }
}
    function handleSaveCategorias() {
        try {
            const nome = document.getElementById('nome_categoria');
            const descr = document.getElementById('descricao_categoria')
            fetch('http://127.0.0.1:8080/categorias', {
                method: 'POST',
                headers: {
                    "Accept": "Application/json",
                    "Content-type": "application/json;charset=utf-8"
                },
                body:
                    JSON.stringify({
                        "id": "", "nome": nome.value, "descricao": descr.value
                    })
            });
            alert("Cadastrado com sucesso!!");
        } catch (ex) {
            alert("Falha no cadastro!!");
        }
    }
    function handleSaveArena(){
    try{
    const nome=document.getElementById("nome_arena");
    const competicao = document.getElementById("nome_competicao");
    fetch('http://127.0.0.1:8080/arenas', {
            method: 'POST',
            headers: {
                "Accept": "Application/json",
                "Content-type": "application/json;charset=utf-8"
            },
            body:
                JSON.stringify({
                    "id": "", "nome": nome.value,"competicao":{"id":competicao.value}
                })
        });
        alert("Cadastrado com sucesso!!");
    }catch(Ex){
        alert("Falha no cadastro!!");
    }
    }
    function handleSaveAlternativas() {
    try {
        const valor = document.getElementById("valor_alternativa");
        const missao = document.getElementById("missoes_alternativa");
        fetch('http://127.0.0.1:8080/alternativas', {
            method: 'POST',
            headers: {
                "Accept": "Application/json",
                "Content-type": "application/json;charset=utf-8"
            },
            body:
                JSON.stringify({
                    "id": "", "valor": valor.value, "missoes": {"id": missao.value}
                })
        });
        alert("Cadastrado com sucesso!!");
    }catch(ex){
        alert("Falha no cadastro!!");
    }
}

function getCompeticoes() {}
function getTemporadas() {
        var list = document.getElementById("listaTemporadas");
        let nome = null;
        var select = document.getElementById("comboBox");
try{
        fetch('http://127.0.0.1:8080/competicoes/all', {
            method: 'get',
            headers: {
                "Accept": "Application/json",
                "Content-type": "application/json;charset=utf-8"
            },
        }).then((result => {
            console.log(result.json());
        }));

        console.log("fetch");
    }catch(ex){
    console.log("falhou");
    }
}
function handleRodada(){
    document.getElementById("novaRodada").hidden=false;
}

export default App;
