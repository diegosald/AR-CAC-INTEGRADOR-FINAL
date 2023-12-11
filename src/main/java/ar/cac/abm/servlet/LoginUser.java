package ar.cac.abm.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

import ar.cac.abm.clases.Conexion;
import ar.cac.abm.clases.Usuario;

/**
 * Servlet implementation class LoginUser
 */
public class LoginUser extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginUser() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		Conexion con = new Conexion("prueba","12345","ventajuegos") ;
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();		
		Usuario usuario = null;
		String user = request.getParameter("username");
		String pass = request.getParameter("password");
		
		
		if ( user != "" && pass != "" ) {

            System.out.println(user + " " + pass); 
			usuario = con.usuarioLog(user, pass);
              
            
             if (usuario != null) {
            	 
            	pw.print("<h1>BIENVENIDO " +usuario.getUser()+  "</h1>");
      			
            	if (usuario.getRole().equals("admin")) { 
            		
            		response.sendRedirect("administracion.jsp");
            	}
            	
            	else {
            		response.sendRedirect("userVista.jsp?id="+usuario.getId());
            		
            	}
            	
      			
             }
		  
             else {
            	 //response.sendRedirect("login.html?mensaje=error");
            	String error = "User o Password invalidos";
     			String pagina = "iniciarSesion.html";
     			response.sendRedirect("error.jsp?mensaje="+error+"&pagina="+pagina);
     		}
	
		 
		}
		else {
			String error = "Usuario o Contraseña invalidos";
			String pagina = "iniciarSesion.html";
			response.sendRedirect("error.jsp?mensaje="+error+"&pagina="+pagina);
			
			//pw.print("<h1>DEBE INICIAR SESSION</h1>");
			//pw.print("<meta http-equiv='refresh' content=5;URL='login.html'>");
			//pw.println("<br><br><a href= 'login.html'>Login</a>");
		}
		
		
		con.cerrarConexion();
	
	
	}

}
