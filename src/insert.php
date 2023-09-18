<?php
$user = $_COOKIE["usuario"];

// Obtener los porcentajes enviados por la solicitud POST
$data = json_decode(file_get_contents('php://input'), true);

    // Conectar a la base de datos
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "prueba";
    $conn = new mysqli($servername, $username, $password, $database);

    // Verificar la conexión a la base de datos
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Obtener los datos del usuario
    $programacion = $conn->real_escape_string($data['programacion']);
    $web = $conn->real_escape_string($data['web']);
    $baseDatos = $conn->real_escape_string($data['baseDatos']);
    $hardware = $conn->real_escape_string($data['hardware']);
    $redes = $conn->real_escape_string($data['redes']);

    // Verificar si el usuario ya tiene un registro en la base de datos
    $user_query = "SELECT user FROM score WHERE user = '$user'";
    $user_result = $conn->query($user_query);

    if ($user_result->num_rows > 0) {
        // El usuario ya tiene un registro, realizar una actualización
        $update_query = "UPDATE score SET prog = '$programacion', web = '$web', base_datos = '$baseDatos', redes = '$redes', hardware = '$hardware' WHERE user = '$user'";
        if ($conn->query($update_query) === true) {
            echo "Porcentajes actualizados en la base de datos";
        } else {
            echo "Error al actualizar los porcentajes: " . $conn->error;
        }
    } else {
        if($user){
        $insert_query = "INSERT INTO score (prog, web, base_datos, redes, hardware, user) VALUES ('$programacion', '$web', '$baseDatos','$redes', '$hardware','$user')";
        if ($conn->query($insert_query) === true) {
            echo "Porcentajes guardados en la base de datos";
        } else {
            echo "Error al guardar los porcentajes: " . $conn->error;
        }
        }
        
    }

    // Cerrar la conexión a la base de datos
    $conn->close();

?>
