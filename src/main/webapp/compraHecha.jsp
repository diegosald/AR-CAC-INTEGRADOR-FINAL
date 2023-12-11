<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@page import="java.io.PrintWriter" %> 
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/compraHecha.css">
    <title>Compra</title>
</head>
<body>
<%PrintWriter pw = response.getWriter(); %>
<% String user = request.getParameter("user");%>
    <div class="container">
        <form class="login-form">
            <h1>Compra realizada</h1>
            <h2>Su compra se ha cargado correctamente.</h2>
            <a id="boton" href="<%=user%>">VOLVER</a>
        </form>
    </div>
    <% pw.print("<meta http-equiv='refresh' content=5;URL="+user+">"); %>
</body>
</html>