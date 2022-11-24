package ejecutar;

import clases.MiClase;

public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		MiClase mc = new MiClase(1, "Hola"); // Declaración y definición de la instancia del objeto
		mc.metodo1();
		mc.metodo2(); // Metodos del objeto
		
		//System.out.println(mc.metodo1());
		System.out.println(mc.metodo2());
		System.out.println(mc.getAtr1());
		System.out.println(mc.getAtr2());
		
	}

}
