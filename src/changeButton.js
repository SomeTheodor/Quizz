// Función para actualizar el botón después de iniciar sesión
function updateButton() {
  const button = document.getElementById("loginButton");
  const loggedInCookie = getCookie("loggedIn");

  if (loggedInCookie === "true") {
    button.textContent = "Mi Perfil";
    button.setAttribute("href", "/public/perfil.html");
  } 
}

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}

window.onload = () => {
  updateButton();
};
