package com.codingloria.aula16;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.nio.file.attribute.FileTime;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;

public class MenuIOExample {
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        int option;
        do {
            System.out.println("\n==== Interactive Menu for Path, Files, FileSystem... ====");
            System.out.println("1. Create file;");
            System.out.println("2. Delete file;");
            System.out.println("3. Copy file;");
            System.out.println("4. Move or rename file;");
            System.out.println("5. File info;");
            System.out.println("6. Read file;");
            System.out.println("7. Write to file;");
            System.out.println("0. Exit;");
            System.out.print("Choose an option: ");
            option = Integer.parseInt(scanner.nextLine());

            switch (option) {
                case 1 -> createFile();
                case 2 -> deleteFile();
                case 3 -> copyFile();
                case 4 -> moveOrRename();
                case 5 -> fileInfo();
                case 6 -> readFile();
                case 7 -> writeToFile();
                case 0 -> System.out.println("Exiting...");
                default -> System.out.println("Invalid option");
            }
        } while (option != 0);
    }

    private static void writeToFile() throws IOException {
        System.out.print("Which file do you want to write to: ");
        Path file = Path.of(scanner.nextLine());
        System.out.println("Type the content. Type 'END' to finish:");
        var builder = new StringBuilder();

        while (true) {
            String line = scanner.nextLine();
            if (line.equalsIgnoreCase("END")) break;
            builder.append(line).append("\n");
        }

        Files.writeString(file, builder.toString(), StandardCharsets.UTF_8);
        System.out.println("File saved at: " + file.toAbsolutePath());
    }

    private static void readFile() throws IOException {
        System.out.print("Which file to read: ");
        Path file = Path.of(scanner.nextLine());

        if (Files.exists(file)) {
            List<String> lines = Files.readAllLines(file, StandardCharsets.UTF_8);
            lines.forEach(System.out::println);
        } else {
            System.out.println("File not found!");
        }
    }

    private static void fileInfo() throws IOException {
        System.out.print("Which file to inspect: ");
        Path file = Path.of(scanner.nextLine());

        if (Files.exists(file)) {
            System.out.println("Size: " + Files.size(file) + " bytes");
            FileTime lastModified = Files.getLastModifiedTime(file);
            System.out.println("Last modified: " + lastModified.to(TimeUnit.SECONDS) + " seconds ago");
            System.out.println("Is directory: " + Files.isDirectory(file));
            Map<String, ?> attributes = Files.readAttributes(file, "*");
            System.out.println("Attributes: " + attributes);
        }
    }

    private static void moveOrRename() throws IOException {
        System.out.print("Source file: ");
        Path source = Path.of(scanner.nextLine());
        System.out.print("New name or destination: ");
        Path destination = Path.of(scanner.nextLine());

        Files.move(source, destination, StandardCopyOption.REPLACE_EXISTING);
        System.out.println("File moved or renamed");
    }

    private static void copyFile() throws IOException {
        System.out.print("Source file: ");
        Path source = Path.of(scanner.nextLine());
        System.out.print("Destination file: ");
        Path destination = Path.of(scanner.nextLine());

        Files.copy(source, destination, StandardCopyOption.COPY_ATTRIBUTES);
        System.out.println("File copied!");
    }

    private static void deleteFile() throws IOException {
        System.out.print("File to delete: ");
        Path file = Path.of(scanner.nextLine());

        if (Files.exists(file)) {
            Files.delete(file);
            System.out.println("File deleted!");
        } else {
            System.out.println("File not found!");
        }
    }

    private static void createFile() throws IOException {
        System.out.print("Name of the file to create: ");
        Path file = Path.of(scanner.nextLine());
        Files.createFile(file);
        System.out.println("File created: " + file.toAbsolutePath());
    }
}
