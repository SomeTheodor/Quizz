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
    // Definir los campos con valores predeterminados (0 si son nulos o indefinidos)
$js = isset($data['js']) ? intval($data['js']) : 0;
$html = isset($data['html']) ? intval($data['html']) : 0;
$python = isset($data['python']) ? intval($data['python']) : 0;
$c = isset($data['c']) ? intval($data['c']) : 0;
$css = isset($data['css']) ? intval($data['css']) : 0;

    
    // Verificar si el usuario ya tiene un registro en la base de datos
    $user_query = "SELECT user FROM scorequiz WHERE user = '$user'";
    $user_result = $conn->query($user_query);
    
    if ($user_result->num_rows > 0) {
        $update_query = "UPDATE scorequiz SET ";
    
        if ($js !== 0) {
            $update_query .= "javascript = '$js', ";
        }
        if ($html !== 0) {
            $update_query .= "html = '$html', ";
        }
        if ($python !== 0) {
            $update_query .= "python = '$python', ";
        }
        if ($c !== 0) {
            $update_query .= "c = '$c', ";
        }
        if ($css !== 0) {
            $update_query .= "css = '$css', ";
        }
    
        // Eliminar la coma final y agregar la condición WHERE
        $update_query = rtrim($update_query, ", ") . " WHERE user = '$user'";
    
        // Realizar la actualización
        if ($conn->query($update_query) === true) {
            echo "Porcentajes actualizados en la base de datos";
        } else {
            echo "Error al actualizar los porcentajes: " . $conn->error;
        }
    } else {
        if($user){
        $insert_query = "INSERT INTO scorequiz (html, javascript, python, c, css, user) VALUES ('$html', '$js', '$python','$c', '$css','$user')";
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
