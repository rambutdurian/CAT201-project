// package backend.src; // Uncomment this if you decided to keep the package structure

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {
    private int port;

    public Server(int port) {
        this.port = port;
    }

    public void start() {
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Server is running on port " + port);
            while (true) {
                Socket socket = serverSocket.accept();
                handleRequest(socket);
            }
        } catch (IOException e) {
            System.err.println("Could not start server: " + e.getMessage());
        }
    }

    private void handleRequest(Socket socket) {
        new Thread(() -> {
            try (BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                 PrintWriter out = new PrintWriter(socket.getOutputStream(), true)) {

                String line = in.readLine();
                if (line == null || line.isEmpty() || !line.startsWith("GET")) {
                    out.println("HTTP/1.1 400 Bad Request");
                    out.println("Content-Type: text/plain");
                    out.println();
                    out.println("Invalid request format.");
                    return;
                }

                // Extract the path from the header (e.g., "GET / HTTP/1.1" -> "/")
                String path = line.split(" ")[1];
                System.out.println("Request path: " + path);

                // Routing Logic
                String response = switch (path) {
                    case "/" -> "{\"message\": \"backend worked\"}"; 
                    case "/api/attraction" -> DataHandler.getData("attraction.json");
                    case "/api/data" -> DataHandler.getData("data.json");
                    default -> "{\"error\": \"Endpoint not found\"}";
                };

                // Sending HTTP Headers
                out.println("HTTP/1.1 200 OK");
                out.println("Content-Type: application/json");
                out.println("Access-Control-Allow-Origin: *"); // Important for React to connect
                out.println("Connection: close");
                out.println();
                
                // Sending the actual body
                out.println(response);

            } catch (IOException e) {
                System.err.println("Error handling request: " + e.getMessage());
            } finally {
                try {
                    socket.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }).start();
    }
}