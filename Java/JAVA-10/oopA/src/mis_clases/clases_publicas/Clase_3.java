package mis_clases.clases_publicas;

public class Clase_3 {

	private int valor;
	
	public Clase_3() {

	}

	public int getValor() {
		return valor;
	}
	
	public void setValor(int valor) {
		this.valor = valor;
	}

	public static void main(String[] args){
		
		Clase_3 obj3 = new Clase_3();
		
		obj3.setValor(20);
		
		System.out.println(obj3.getValor());
		
	}
}
