var botaoEnviar = document.querySelector("#enviar");

botaoEnviar.addEventListener("click", function (event) {

    event.preventDefault();

    var form = document.querySelector("#frmContato");

    if (form.email.value == '' && form.telefone.value == '') {
        return alert('Por favor, preencha um e-mail e/ou um telefone para que possa retornar o seu contato.');
    } else {

        msgRetorno = form.nomesobrenome.value + ", agradecemos o seu contato! <br><br>Vamos avaliar suas considerações e retornaremos.";

        document.getElementById('formRetorno').style.display = "block";

        document.getElementById('textoRetorno').innerHTML = msgRetorno;

        document.getElementById('formulario').style.display = "none";

        return;
    }
});