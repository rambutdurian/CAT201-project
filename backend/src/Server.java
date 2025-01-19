package backend.src;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.file.Files;
import java.nio.file.Paths;

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
            e.printStackTrace();
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

                String path = line.split(" ")[1];
                System.out.println("Request path: " + path);
                String response = switch (path) {
                    case "/api/attraction" -> DataHandler.getData("attraction.json");
                    case "/api/data" -> DataHandler.getData("data.json");
                    default -> "{\"error\": \"Endpoint not found\"}";
                };

                out.println("HTTP/1.1 200 OK");
                out.println("Content-Type: application/json");
                out.println("Access-Control-Allow-Origin: *");
                out.println("Connection: close");
                out.println();
                out.println(response);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }).start();
    }
}
