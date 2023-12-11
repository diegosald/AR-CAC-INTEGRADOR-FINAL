<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@page import="java.io.PrintWriter" %> 
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/crud.css">
    <title>Mensaje</title>
</head>
<body>
	<%PrintWriter pw = response.getWriter(); %>
    <div class="container">
        <form class="login-form">
            <h2><%=request.getParameter("mensaje") %></h2>
            <a id="boton" href="abmjuegos.jsp">VOLVER</a>
            <% pw.print("<meta http-equiv='refresh' content=5;URL=juegos.jsp>"); %>
        </form>
    </div>
</body>
</html>