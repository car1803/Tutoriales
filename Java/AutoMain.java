public class AutoMain {
    public static void main(String[] args) {
        // Creación de un auto deportivo
        AutoDeportivo autoDeportivo1 = new AutoDeportivo("Ferrari", "488", 2023, 100, true);
        //Auto auto1 = new Auto("Ferrari", "488", 2023, 10);
        
        // Imprimir marca si es public
        //System.out.println("Marca: " + autoDeportivo1.marca);

        // Imprimir la información del auto
        System.out.println(autoDeportivo1.obtenerInfo());

        // Acelerar y frenar
        autoDeportivo1.acelerar();
        autoDeportivo1.frenar();
        System.out.println("Turbo activo: " + autoDeportivo1.isTurboActive());

        // Verificación de si se alcanzó la velocidad máxima
        System.out.println("¿Velocidad máxima alcanzada? " + autoDeportivo1.isVelocidadMaximaAlcanzada());

        // Uso del método estático
        System.out.println("Tipo de vehículo: " + Auto.obtenerTipoDeVehiculo());
        System.out.println(Auto.vehiculo);
    }
}
