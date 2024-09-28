//extender de la clase Auto (herencia)
public class AutoDeportivo extends Auto {
    private boolean turbo;

    // Constructor que usa el constructor de la clase base (super)
    public AutoDeportivo(String marca, String modelo, int año, double velocidad, boolean turbo) {
        super(marca, modelo, año, velocidad);
        this.turbo = turbo;
    }

    // Getter y Setter para el turbo
    public boolean getTurbo() {
        return turbo;
    }

    public void setTurbo(boolean turbo) {
        this.turbo = turbo;
    }

    // Sobrescritura del método acelerar (polimorfismo)
    @Override
    public void acelerar() {
        if (turbo) {
            setVelocidad(getVelocidad() + 30);  // Si el turbo está activado, acelera más rápido
        } else {
            setVelocidad(getVelocidad() + 15);  // Acelera más rápido que un auto normal
        }
        System.out.println("El auto deportivo está acelerando. Velocidad actual: " + getVelocidad() + " km/h");
    }

    // Sobrescritura del método frenar
    @Override
    public void frenar() {
        setVelocidad(getVelocidad() - 20);  // Los autos deportivos frenan más rápido
        if (getVelocidad() < 0) setVelocidad(0);
        System.out.println("El auto deportivo está frenando. Velocidad actual: " + getVelocidad() + " km/h");
    }
}
