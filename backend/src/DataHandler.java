//package backend.src; //

import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.Path;

public class DataHandler {
    public static String getData(String fileName) {
        Path filePath = Paths.get("public", fileName);  // Corrected path
        if (Files.exists(filePath)) {
            try {
                return new String(Files.readAllBytes(filePath));
            } catch (Exception e) {
                System.err.println("Error reading file: " + e.getMessage());
                return "{\"error\": \"Could not read " + fileName + ". Error: " + e.getMessage() + "\"}";
            }
        } else {
            System.err.println("File not found: " + fileName);
            return "{\"error\": \"File " + fileName + " not found\"}";
        }
    }
}
