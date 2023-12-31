<?php
$user = $_COOKIE["usuario"];

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$database = "prueba";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los tres mejores porcentajes en el quiz para el usuario
$PorcentajeTest = "SELECT redes, hardware, prog, base_datos, web FROM score WHERE user = '$user'";
$resultPorcentajeTest = $conn->query($PorcentajeTest);

if ($resultPorcentajeTest->num_rows > 0) {
    $topThreePorcentajes = $resultPorcentajeTest->fetch_assoc();
// Ahora $topThreePorcentajes contiene los tres mejores porcentajes en las áreas
    
    // Crear un arreglo asociativo con los porcentajes
    $data = array(
        "mejoresPorcentajes" => array(
            "Redes" => $topThreePorcentajes['redes'],
            "Hardware" => $topThreePorcentajes['hardware'],
            "Programacion" => $topThreePorcentajes['prog'],
            "Base de Datos" => $topThreePorcentajes['base_datos'],
            "Web" => $topThreePorcentajes['web']
        )
    );
    // Convertir el arreglo en formato JSON y enviarlo como respuesta
    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    echo "No se encontraron porcentajes para el usuario.";
}

$conn->close();
?>
