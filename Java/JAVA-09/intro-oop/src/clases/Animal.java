package clases;

public class Animal {

	private String raza;
	private String nombre;
	private int edad;
	
	
	public Animal(/* String raza */ String nombre /* int edad */) {
		
		//this.raza = raza;
		this.nombre = nombre;
		//this.edad = edad;
		
	}
	
	/*public void setRaza(String raza) {
		this.raza = raza;
	}

	public String getRaza() {
		return raza;
	}*/
	
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getNombre() {
		return nombre;
	}
	
	public void setEdad(int edad) {
		this.edad = edad;
	}

	public int getEdad() {
		return edad;
	}
	
}
