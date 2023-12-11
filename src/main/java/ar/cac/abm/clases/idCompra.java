package ar.cac.abm.clases;

public class idCompra {
	private int idCompra;
	private int idCliente;
	
	public idCompra() {
		super();
	}
	
	

	public idCompra(int idCliente) {
		super();
		this.idCliente = idCliente;
	}



	public idCompra(int idCompra, int idCliente) {
		super();
		this.idCompra = idCompra;
		this.idCliente = idCliente;
	}

	public int getIdCompra() {
		return idCompra;
	}

	public void setIdCompra(int idCompra) {
		this.idCompra = idCompra;
	}

	public int getIdCliente() {
		return idCliente;
	}

	public void setIdCliente(int idCliente) {
		this.idCliente = idCliente;
	}
	
	
}
