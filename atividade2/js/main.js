
function validar() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var mensagem = document.getElementById("mensagem");
   
    if(nome.value =="") {
        alert("Nome não informado");
        nome.focus();
        return;
    }

    if (email.value == "") {
        alert("E-mail não informado");
        email.focus();
        return;
    }

    if (telefone.value == "") {
        alert("Telefone não informado");
        telefone.focus();
        return;
    }

    if (mensagem.value == "") {
        alert("Escreva a sua mensagem");
        telefone.focus();
        return;
    }

    alert("Formulário enviado com sucesso!")
    //formulario.submit();


}