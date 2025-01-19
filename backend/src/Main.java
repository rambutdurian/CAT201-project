package backend.src;

public class Main {
    public static void main(String[] args) {
        Server server = new Server(8080); // Server runs on port 8080
        server.start();
    }
}