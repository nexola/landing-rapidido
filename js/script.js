const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const numeros = document.querySelectorAll(".index-number");
let indiceAtivo = 0;

function alternarCor() {
  numeros.forEach((num) => num.classList.remove("ativo"));
  numeros.forEach((num) => num.classList.add("padrao"));
  numeros[indiceAtivo].classList.remove("padrao");
  numeros[indiceAtivo].classList.add("ativo");
  indiceAtivo = (indiceAtivo + 1) % numeros.length;
}

alternarCor();

setInterval(alternarCor, 2000);

document
  .getElementById("menuHamburguer")
  .addEventListener("click", function () {
    this.classList.toggle("open");
  });

document.addEventListener("click", function (event) {
  const menu = document.getElementById("menuHamburguer");
  if (!menu.contains(event.target)) {
    menu.classList.remove("open");
  }
});

$("#phone").mask("(00) 00000-0000");

function get(el) {
  return document.getElementById(el);
}

const form = get("contact-form");
const name = get("name");
const phone = get("phone");
const email = get("email");
const subject = get("subject");
const message = get("message");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  name.classList.remove("is-invalid");
  phone.classList.remove("is-invalid");
  email.classList.remove("is-invalid");
  subject.classList.remove("is-invalid");
  message.classList.remove("is-invalid");

  if (name.value.trim() === "") {
    name.classList.add("is-invalid");
    return;
  }
  if (email.value.trim() === "" || !email.value.includes("@")) {
    email.classList.add("is-invalid");
    return;
  }
  if (phone.value.trim() === "" || phone.value.length < 15) {
    phone.classList.add("is-invalid");
    return;
  }
  if (subject.value.trim() === "") {
    subject.classList.add("is-invalid");
    return;
  }
  if (message.value.trim() === "") {
    message.classList.add("is-invalid");
    return;
  }

  const obj = {
    name: name.value,
    phone: phone.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };
});
