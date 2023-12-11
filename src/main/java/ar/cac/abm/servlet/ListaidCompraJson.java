package ar.cac.abm.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;

import com.fasterxml.jackson.databind.ObjectMapper;

import ar.cac.abm.clases.idCompra;
import ar.cac.abm.clases.Conexion;

/**
 * Servlet implementation class ListaidCompraJson
 */
public class ListaidCompraJson extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ListaidCompraJson() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Conexion con;

		con = new Conexion("prueba","12345","ventajuegos") ;
		ArrayList<idCompra> idCompra = new ArrayList<idCompra>();
		ObjectMapper mapper = new ObjectMapper();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter pw = response.getWriter();
		HttpSession var_sesion = request.getSession();
	    System.out.print(var_sesion.getAttribute("user"));
		
		try {
			for( idCompra a : con.listaidCompra()) {
				
				idCompra.add(new idCompra(a.getIdCompra(),a.getIdCliente()));
							
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
		String json = mapper.writeValueAsString(idCompra);
        pw.print(json);
	        
	       // System.out.println(json);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
	}

}
