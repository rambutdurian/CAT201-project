package backend.src;

import java.nio.file.Files;
import java.nio.file.Paths;

public class DataHandler {
    public static String getData() {
        try {
            return new String(Files.readAllBytes(Paths.get("public/data.json")));
        } catch (Exception e) {
            return "{\"error\": \"Could not load data\"}";
        }
    }
}
