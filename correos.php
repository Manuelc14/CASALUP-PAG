<?php
    $destinatario = 'gerencia@casalupsas.com';
     //correo a quien se enviara el formulario
    $nombres = $_POST['nombres'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $cuentanos = $_POST['cuentanos'];

    $header = "Enviado desde Pág. Web Casalup Services";
    $mensajeCompleto = $mensaje .  "\n\n Atentamente: " . $nombres . "\n\n Telefono: " . $telefono;

    mail($destinatario, $mensajeCompleto, $header);
    echo"<script> alert('Correo enviado exitosamente')</script>";
    echo "<script> setTimeout(\"location.href='index.html'\",1000) </script>";

?>