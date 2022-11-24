package ejecutar;

import clases.Animal;

public class AnimalPrincipal {

	public static void main(String[] args) {
		
		Animal miAnimal = new Animal("Falco");
		
		miAnimal.setEdad(3);
		
		System.out.print("El nombre es " + miAnimal.getNombre());
		
		System.out.println(" y tiene " + miAnimal.getEdad() + " años");
		
		
		System.out.println("********************************************************");
		
		
		Animal otroAnimal = new Animal("Firulais");
		
		otroAnimal.setNombre("Pulgas");
		
		otroAnimal.setEdad(5);
		
		System.out.print("El nombre es " + otroAnimal.getNombre());
		
		System.out.println(" y tiene " + otroAnimal.getEdad() + " años");
		
	}
	
}
