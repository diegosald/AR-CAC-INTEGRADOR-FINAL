package ar.cac.abm.clases;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Mensaje {
	private String valor;
	private String mensaje;

	public Mensaje() {};
	public Mensaje(String valor, String mensaje) {
		
		this.valor = valor;
		this.mensaje = mensaje;
		
		
	}
	public String getValor() {
		return valor;
	}
	public void setValor(String valor) {
		this.valor = valor;
	}
	public String getMensaje() {
		return mensaje;
	}
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}

	
}
