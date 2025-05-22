var form = document.getElementById('formulario');
var campo = document.getElementById('campo');


form.addEventListener('submit', function(e) {
  if (campo.value.toLowerCase() !== "m&g") {
    alert("Senha Errada! Tente Novamente!");
    campo.value = "";
  } else {
    alert("Senha Correta! Redirecionando...");
    localStorage.setItem("logado", "true");
    window.location.href = "main.html";
  }

  e.preventDefault();
});