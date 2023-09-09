<?php
$user = $_POST["user"];
$password2 = $_POST["password"];

$servername = "localhost";
$username = "root";
$password = "";
$database = "prueba";

$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión a la base de datos
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Escapar los valores del formulario para prevenir inyección de SQL
$user = $conn->real_escape_string($user);
$password2 = $conn->real_escape_string($password2);

// Consulta SQL para verificar si el usuario y la contraseña coinciden en la tabla de usuarios
$sql = "SELECT * FROM usuarios WHERE user = '$user' AND password = '$password2'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Los datos de inicio de sesión son correctos
    $response = true;
    setcookie("loggedIn", "true", time() + 3600, "/");
    setcookie("usuario", $user, time() + 3600, "/");
    echo json_encode($response);
    header("Location: /index.html");
} else {
    // Los datos de inicio de sesión son incorrectos
    echo "<script>alert('El usuario o la contraseña son incorrectos');window.location.href = '/public/login.html'</script>";
}

// Cerrar la conexión a la base de datos
$conn->close();
?>
