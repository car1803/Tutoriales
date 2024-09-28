public class Main {
    public static void main(String[] args) {
        // Creación de un auto normal
        Auto auto1 = new Auto("Toyota", "Corolla", 2020, 60);
        System.out.println(auto1);
        auto1.acelerar();
        auto1.frenar();
        System.out.println(auto1 instanceof Auto);
        // Creación de un auto deportivo
        AutoDeportivo autoDeportivo1 = new AutoDeportivo("Ferrari", "488", 2023, 100, true);
        System.out.println(autoDeportivo1);
        autoDeportivo1.acelerar();
        autoDeportivo1.frenar();
    }
}
