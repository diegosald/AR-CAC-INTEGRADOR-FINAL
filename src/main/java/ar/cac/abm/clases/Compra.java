package ar.cac.abm.clases;

public class Compra {
	private int id;
	private int idCompra;
	private int idJuego;
	private int cantidadJuego;
	private int idCliente;
	
	public Compra() {
		super();
	}

	public Compra(int idCompra, int idJuego, int cantidadJuego, int idCliente) {
		super();
		this.idCompra = idCompra;
		this.idJuego = idJuego;
		this.cantidadJuego = cantidadJuego;
		this.idCliente = idCliente;
	}
	

	public Compra(int id, int idCompra, int idJuego, int cantidadJuego, int idCliente) {
		super();
		this.id = id;
		this.idCompra = idCompra;
		this.idJuego = idJuego;
		this.cantidadJuego = cantidadJuego;
		this.idCliente = idCliente;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getIdJuego() {
		return idJuego;
	}

	public void setIdJuego(int idJuego) {
		this.idJuego = idJuego;
	}

	public int getCantidadJuego() {
		return cantidadJuego;
	}

	public void setCantidadJuego(int cantidadJuego) {
		this.cantidadJuego = cantidadJuego;
	}

	public int getIdCliente() {
		return idCliente;
	}

	public void setIdCliente(int idCliente) {
		this.idCliente = idCliente;
	}

	public int getIdCompra() {
		return idCompra;
	}

	public void setIdCompra(int idCompra) {
		this.idCompra = idCompra;
	}

	
	

}
