<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@page import="java.io.PrintWriter" %> 
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/fine.css">
    <title>Bienvenido</title>
</head>
<body>
	<%PrintWriter pw = response.getWriter(); %>
    <div class="container">
        <form class="login-form">
            <h1>Bienvenido</h1>
            <h2>Te has registrado correctamente</h2>
            <a id="boton" href="iniciarSesion.html">INICIAR SESION</a>
        </form>
    </div>
    <%pw.print("<meta http-equiv='refresh' content=5;URL=iniciarSesion.html>"); %>
</body>
</html>