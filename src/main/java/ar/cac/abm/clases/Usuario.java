package ar.cac.abm.clases;

public class Usuario {

	private int id;
	private String user;
	private String pass;
	private String email;
	private String role;
	
	public Usuario(int id, String user, String pass, String email, String role) {
		this.id = id;
		this.user = user;
		this.pass = pass;
		this.email = email;
		this.role = role;
	}
	public Usuario( String user, String pass, String email, String role) {
		
		this.user = user;
		this.pass = pass;
		this.email = email;
		this.role = role;
	}
	
	
	
	public Usuario(int id, String user, String email) {
		super();
		this.id = id;
		this.user = user;
		this.email = email;
	}
	
	public Usuario() {

	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
}
