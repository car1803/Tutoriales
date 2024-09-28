public class Auto {
    // Atributos privados (encapsulamiento)
    private String marca;
    private String modelo;
    private int año;
    private double velocidad;

    // Constructor
    public Auto(String marca, String modelo, int año, double velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.velocidad = velocidad;
    }

    // Getters y Setters (encapsulamiento)
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

    // Método acelerar
    public void acelerar() {
        velocidad += 10;  // Aumenta la velocidad en 10 km/h
        System.out.println("El auto está acelerando. Velocidad actual: " + velocidad + " km/h");
    }
    //añadir final y abstract
    
    // Método frenar
    public void frenar() {
        velocidad -= 10;  // Disminuye la velocidad en 10 km/h
        if (velocidad < 0) velocidad = 0;  // La velocidad no puede ser negativa
        System.out.println("El auto está frenando. Velocidad actual: " + velocidad + " km/h");
    }
}
