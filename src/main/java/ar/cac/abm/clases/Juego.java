package ar.cac.abm.clases;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Juego {

	private int id;
	private String titulo;
	private double precio;
	private String genero;
	private String imgurl;

	public Juego(int id, String titulo, String genero, double precio, String imgurl) {

		this.id = id;
		this.titulo = titulo;
		this.precio = precio;
		this.genero = genero;
		this.imgurl = imgurl;
	}

	public Juego(String titulo, String genero, double precio, String imgurl) {

		this.titulo = titulo;
		this.precio = precio;
		this.genero = genero;
		this.imgurl = imgurl;
	}

	public Juego(int id, String titulo, String genero, double precio) {
		super();
		this.id = id;
		this.titulo = titulo;
		this.precio = precio;
		this.genero = genero;
	}
	
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getImgurl() {
		return imgurl;
	}

	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}

	@Override
	public String toString() {
		return "Juego [id=" + id + ", titulo=" + titulo + ", precio=" + precio + ", genero=" + genero + ", imgurl="
				+ imgurl + "]";
	}

}
