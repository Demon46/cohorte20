package mis_clases.clase_2;

public class Clase_Padre {

	protected int valor1;
	protected String dato1;
	
	public Clase_Padre(int valor1, String dato1) {
		super();
		this.valor1 = valor1;
		this.dato1 = dato1;
	}
	
	public void vis() {
		
		System.out.println(valor1);
		System.out.println(dato1);
		
	}
	
}
