// Clase abstracta Auto
public abstract class Auto {
    // Atrubutos publicos (pueden ser accedidos desde cualquier clase)
    // Atributos protegidos (pueden ser accedidos por clases hijas)
    // Atributos privados (solo pueden ser accedidos por la misma clase) ENCAPSULAMIENTO 
    private String marca;
    private String modelo;
    private int año;
    private double velocidad;
    
    public static boolean vehiculo = true;
    // Atributo constante final (no se puede modificar) y estático (compartido por todas las instancias de Auto)
    public final static int VELOCIDAD_MAXIMA = 200;

    // System.out.println("Velocidad máxima: " + VELOCIDAD_MAXIMA);

    // Constructor
    public Auto(String marca, String modelo, int año, double velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.velocidad = velocidad;
    }

    // Métodos abstractos (deben ser implementados por las subclases) ABSTRACCIÓN
    public abstract void acelerar();

    public abstract void frenar();

    // Método estático (pertenece a la clase, no a las instancias)
    public static String obtenerTipoDeVehiculo() {
        return "Automóvil";
    }

    // Métodos no void (devuelven valores)
    public String obtenerInfo() {
        return "Marca: " + marca + ", Modelo: " + modelo + ", Año: " + año + ", Velocidad: " + velocidad + " km/h";
    }

    // Método final (no puede ser sobrescrito por las subclases)
    public final boolean isVelocidadMaximaAlcanzada() {
        return velocidad >= VELOCIDAD_MAXIMA;
    }

    // Getters y Setters
    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public int getAño() {
        return año;
    }

    public void setAño(int año) {
        this.año = año;
    }

    public double getVelocidad() {
        return velocidad;
    }

    public void setVelocidad(double velocidad) {
        this.velocidad = velocidad;
    }
}

/*
public: Accesible desde cualquier lugar (clase, paquete, subclases, etc.).
protected: Accesible desde clases hijas y clases del mismo paquete.
private: Solo accesible dentro de la misma clase.
*/

/*
En Java, no se puede colocar código ejecutable directamente 
dentro del cuerpo de una clase fuera de un método, constructor 
o bloque estático.
*/