import java.nio.file.Files;
import java.nio.file.Paths;

public class DataHandler {
    public static String getData() {
        try {
            // Ensure the file exists and contains the right JSON data
            return new String(Files.readAllBytes(Paths.get("public/data.json")));
        } catch (Exception e) {
            return "{\"error\": \"Could not load data\"}";
        }
    }
}
