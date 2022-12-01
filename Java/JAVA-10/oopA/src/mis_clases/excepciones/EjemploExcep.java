package mis_clases.excepciones;

public class EjemploExcep {
	
	public static int dividir (int a, int b) {
		
		int r = 0;
		
		try {
			
			 r = a / b;
			 
			 return r;
			
		} catch (ArithmeticException e) {
			
			System.out.println("No se puede dividir entre 0");
			
		}
		
		return r;
		
	}

	public static void main(String[] args) {
		
		System.out.println(dividir(1, 2));
		
	}
	
}
