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
    $js = isset($data['js']) ? $conn->real_escape_string($data['js']) : null;
    $html = isset($data['html']) ? $conn->real_escape_string($data['html']) : null;
    $python = isset($data['python']) ? $conn->real_escape_string($data['python']) : null;
    $c = isset($data['c']) ? $conn->real_escape_string($data['c']) : null;
    $css = isset($data['css']) ? $conn->real_escape_string($data['css']) : null;
    
    // Verificar si el usuario ya tiene un registro en la base de datos
    $user_query = "SELECT user FROM scorequiz WHERE user = '$user'";
    $user_result = $conn->query($user_query);
    
    if ($user_result->num_rows > 0) {
        $update_query = "UPDATE scorequiz SET ";
    
        if ($js !== null) {
            $update_query .= "javascript = '$js', ";
        }
        if ($html !== null) {
            $update_query .= "html = '$html', ";
        }
        if ($python !== null) {
            $update_query .= "python = '$python', ";
        }
        if ($c !== null) {
            $update_query .= "c = '$c', ";
        }
        if ($css !== null) {
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
        $insert_query = "INSERT INTO scorequiz (html, javascript, python, c, css, user) VALUES ('$html', '$javascript', '$python','$c', '$css','$user')";
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
