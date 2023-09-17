// Recupera el nombre de usuario de la cookie y actualiza el título
const nombreUsuario = getCookie("usuario");
if (nombreUsuario) {
    document.getElementById("nombreUsuario").textContent = `Bienvenido, ${nombreUsuario}`;
} 

// Función para obtener el valor de una cookie por su nombre
function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

// Función para cargar los porcentajes desde el servidor
function loadPorcentajes() {
    // Realiza una petición AJAX para obtener los porcentajes
    fetch("/src/porcentajes.php")
        .then(response => response.json())
        .then(data => {
            // Verifica si data.mejoresPorcentajes existe y es un objeto
            if (data.mejoresPorcentajes && typeof data.mejoresPorcentajes === "object") {
                // Ordena los porcentajes en función de sus valores en orden descendente
                const porcentajesArray = Object.entries(data.mejoresPorcentajes)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 3); // Selecciona solo los tres mejores

                // Asigna los tres mejores porcentajes a los spans correspondientes
                for (let i = 0; i < porcentajesArray.length; i++) {
                    const [area, porcentaje] = porcentajesArray[i];
                    const spanId = `porcentaje${i + 1}`;
                    const spanElement = document.getElementById(spanId);
                    if (spanElement) {
                        spanElement.textContent = `${area}: ${porcentaje}%`;
                    }
                }
            } else {
                console.error("La propiedad data.mejoresPorcentajes no existe o no es un objeto.");
            }
        })
        .catch(error => {
            console.error("Error al cargar los porcentajes:", error);
        });

        fetch("/src/porcentajeQuiz.php")
        .then(response => response.json())
        .then(data => {
            // Verifica si data.porcentajeQuiz existe y es un objeto
            if (data.porcentajeQuiz && typeof data.porcentajeQuiz === "object") {
                // Convierte el objeto en un array de pares clave-valor
                const porcentajesArray = Object.entries(data.porcentajeQuiz);
    
                // Ordena los porcentajes en función de sus valores en orden descendente
                porcentajesArray.sort(([, a], [, b]) => b - a);
    
                // Selecciona solo los tres mejores
                porcentajesArray.forEach(([area, porcentaje], i) => {
                    const spanId = `porcentajeQuiz${i + 1}`;
                    const spanElement = document.getElementById(spanId);
                    if (spanElement) {
                        spanElement.textContent = `${area}: ${porcentaje}%`;
                    }
                });
            } else {
                console.error("La propiedad data.porcentajeQuiz no existe o no es un objeto.");
            }
        })
        .catch(error => {
            console.error("Error al cargar los porcentajes:", error);
        });
    
    }



loadPorcentajes();