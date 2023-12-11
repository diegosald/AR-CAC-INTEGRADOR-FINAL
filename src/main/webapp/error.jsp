<%@ page language="java" contentType="text/html;"
    pageEncoding="UTF-8"%>
    <%@page import="java.io.PrintWriter" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/error1.css">
    <title>Error</title>
</head>
<body>

	<%PrintWriter pw = response.getWriter(); %>
    <div class="container">
        <form class="login-form">
            <h1>Oops!</h1>
            <h2><%=request.getParameter("mensaje") %></h2>
            <a id="boton" href="<%=request.getParameter("pagina")%>">VOLVER</a>
        </form>
    </div>
    <% String a = request.getParameter("pagina");
    pw.print("<meta http-equiv='refresh' content=5;URL="+a+">"); %>
</body>
</html>