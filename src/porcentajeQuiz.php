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
$PorcentajeQuiz = "SELECT javascript, python, html, c, css FROM scorequiz WHERE user = '$user'";
$resultPorcentajeQuiz = $conn->query($PorcentajeQuiz);

if ($resultPorcentajeQuiz->num_rows > 0) {
    $topBestPorcentajes = $resultPorcentajeQuiz->fetch_assoc();
    
    // Crear un arreglo asociativo con los porcentajes
    $data = array(
        "porcentajeQuiz" => array(
            "JavaScript" => $topBestPorcentajes['javascript'],
            "Python" => $topBestPorcentajes['python'],
            "HTML" => $topBestPorcentajes['html'],
            "C" => $topBestPorcentajes['c'],
            "CSS" => $topBestPorcentajes['css']
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
