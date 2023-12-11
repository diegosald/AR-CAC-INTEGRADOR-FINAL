package ar.cac.abm.clases;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class Conexion {
 
	
	public Connection con;
	public Statement stm;
	public Connection con1;
	public Statement stm1;
	
	public Conexion (String usuario, String pass , String database) {
		
		
			try {
				this.con = DriverManager.getConnection("jdbc:mysql://localhost:3306/"+ database,usuario,pass);
				this.stm = this.con.createStatement(); 
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		    
			
	}
	
	
	
public  List<Juego> listaJuegos() throws SQLException   {
		
	   ResultSet rs =  this.stm.executeQuery("select * from juegos");
	   ArrayList<Juego> juego = new ArrayList<Juego>();
			
		while (rs.next()){
			
			juego.add(new Juego(rs.getInt(1),rs.getString(2) ,rs.getString(3), rs.getDouble(4) ,rs.getString(5)));
					
		}
		
		
		
		return juego ;
		
	   			
	}

public  Usuario listarUsuario(int id) throws SQLException   {
	
	   ResultSet rs =  this.stm.executeQuery("select * from usuarios  WHERE id="+id);
	   rs.next();
	   Usuario user = new Usuario(rs.getInt(1),rs.getString(2) ,rs.getString(3), rs.getString(4) ,rs.getString(5));
			
		//while (rs.next()){
			
			//user=(new Usuario(rs.getInt(1),rs.getString(2) ,rs.getString(3), rs.getString(4) ,rs.getString(5)));
					
		//}
		
		
		
		return user ;
		
	   			
	}

public  List<Usuario> listaUsuarios() throws SQLException   {
	
	   ResultSet rs =  this.stm.executeQuery("select * from usuarios");
			   
	   ArrayList<Usuario> user = new ArrayList<Usuario>();
			
		while (rs.next()){
			
			user.add(new Usuario(rs.getInt(1),rs.getString(2) ,rs.getString(4)));
					
		}
		
		
		
		return user;
		
	   			
	}

public  List<Compra> listaCompras() throws SQLException   {
	
	   ResultSet rs =  this.stm.executeQuery("select * from compras");
	   ArrayList<Compra> compra = new ArrayList<Compra>();
			
		while (rs.next()){
			
			compra.add(new Compra(rs.getInt(1),rs.getInt(2) ,rs.getInt(3), rs.getInt(4), rs.getInt(5)));
					
		}
		
		
		
		return compra ;
		
	   			
	}

public  List<idCompra> listaidCompra() throws SQLException   {
	
	   ResultSet rs =  this.stm.executeQuery("select * from compra");
	   ArrayList<idCompra> idCompra = new ArrayList<idCompra>();
			
		while (rs.next()){
			
			idCompra.add(new idCompra(rs.getInt(1),rs.getInt(2)));
					
		}
		
		
		
		return idCompra ;
		
	   			
	}


public  idCompra getNroCompra() throws SQLException   {
	
	idCompra ultimoValor = null;
	
	       ResultSet rsr = this.stm.executeQuery("SELECT * FROM compra ORDER BY idCompra DESC");
	       if(rsr.next()){
	          ultimoValor = new idCompra(rsr.getInt(1), rsr.getInt(2));
	           
	       }
	       
	   		return ultimoValor;
	}

public int eliminarJuego(int id) throws SQLException {
	
	return stm.executeUpdate("delete from juegos where id="+ id );
	
}
	
public int agregarJuego(Juego juego) throws SQLException {
	
	String sqlQ	= "insert into juegos (titulo , genero , precio, imgurl) values (?,?,?,?)";
	PreparedStatement stm  =  this.con.prepareStatement(sqlQ);
	
	stm.setString(1, juego.getTitulo());
	stm.setString(2, juego.getGenero());
	stm.setDouble(3, juego.getPrecio());
	stm.setString(4, juego.getImgurl());
	
	
	return stm.executeUpdate();
	
	}	

public int agregarCompra(Compra compra) throws SQLException {
	
	String sqlQ	= "insert into compras (idCompra, idJuego, cantidadJuego, idCliente) values (?,?,?,?)";
	PreparedStatement stm  =  this.con.prepareStatement(sqlQ);
	
	stm.setInt(1, compra.getIdCompra());
	stm.setInt(2, compra.getIdJuego());
	stm.setInt(3, compra.getCantidadJuego());
	stm.setInt(4, compra.getIdCliente());
	
	
	return stm.executeUpdate();
	
	}	

public int setCompra(idCompra idCompra) throws SQLException {
	
	String sqlQ	= "insert into compra (idCliente) values (?)";
	PreparedStatement stm  =  this.con.prepareStatement(sqlQ);
	
	stm.setInt(1, idCompra.getIdCliente());
	
	
	return stm.executeUpdate();
	
	}	

public int actualizarJuego(Juego juego) throws SQLException {
	String sqlQ;
	PreparedStatement stm = null;
	if (juego.getImgurl().equals("")) {
		sqlQ = "update juegos set titulo = ?, genero = ? , precio = ? where id = ?";
		stm =  this.con.prepareStatement(sqlQ);
			
		stm.setString(1, juego.getTitulo());
		stm.setString(2, juego.getGenero());
		stm.setDouble(3, juego.getPrecio());
		stm.setInt(4, juego.getId());
		}
	else {
		sqlQ = "update juegos set titulo = ?, genero = ? , precio = ? , imgurl = ? where id = ?";
		stm  =  this.con.prepareStatement(sqlQ);
		
		stm.setString(1, juego.getTitulo());
		stm.setString(2, juego.getGenero());
		stm.setDouble(3, juego.getPrecio());
		stm.setString(4, juego.getImgurl());
		stm.setInt(5, juego.getId());
	}
	
	
	
	return stm.executeUpdate();
	
	}
	
	
	
	
	public void cerrarConexion() {
		
		try {
			this.con.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
public Usuario usuarioLog(String user , String pass) {
		
		String sqlQ	= "Select * from usuarios" ;
		PreparedStatement stm;
		Usuario usuarioLog = null;
		
		try {
			stm = this.con.prepareStatement(sqlQ);
			
			ResultSet rs = stm.executeQuery(sqlQ);
			
			while (rs.next()) {
				
				
				if (user.equals(rs.getString(2)) && pass.equals(rs.getString(3)) ) {
					
					
					usuarioLog = new Usuario(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5));
					
				}
					
			}
			
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//System.out.println(usuarioLog.getUsuario());
		return usuarioLog;
				
	}

	public int agregarUsuario(Usuario usuario) throws SQLException {
		
		String sqlQ	= "insert into usuarios (usuario , password , email, rol) values (?,?,?,?)";
		PreparedStatement stm  =  this.con.prepareStatement(sqlQ);
		
		stm.setString(1, usuario.getUser());
		stm.setString(2, usuario.getPass());
		stm.setString(3, usuario.getEmail());
		stm.setString(4, usuario.getRole());
		
		
		return stm.executeUpdate();
		
		}
	
/*	public Usuario usuarioLog(String user , String pass) {
		
		String sqlQ	= "Select * from usuarios" ;
		PreparedStatement stm;
		Usuario usuarioLog = null;
		
		try {
			stm = this.con.prepareStatement(sqlQ);
			
			ResultSet rs = stm.executeQuery(sqlQ);
			
			while (rs.next()) {
				
				
				if (user.equals(rs.getString(2)) && pass.equals(rs.getString(3)) ) {
					
					
					usuarioLog = new Usuario(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4));
					
				}
					
			}
			
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//System.out.println(usuarioLog.getUsuario());
		return usuarioLog;
				
	}*/
	
}
