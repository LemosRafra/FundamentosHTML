let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");

nome.style.width = "100%";
email.style.width = "100%";
assunto.style.width = "100%";

function validaNome() {
  let txt = document.querySelector("#txtNome");

  if (nome.value.length < 3) {
    txt.innerHTML = "Nome invalido";
    txt.style.color = "red";
  } else {
    txt.innerHTML = "Nome invalido";
    txt.style.color = "green";
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "Email invalido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "Nome valido";
    txtEmail.style.color = "green";
  }
}
