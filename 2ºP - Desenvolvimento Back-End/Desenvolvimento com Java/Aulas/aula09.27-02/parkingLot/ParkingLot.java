package com.codingloria.aula08.parkingLot;

import java.util.ArrayList;
import java.util.Scanner;

public class ParkingLot {
    static final int MAX_VACANCIES = 10;

    static Scanner sc = new Scanner(System.in);
    static ArrayList<Vehicle> vacancies = new ArrayList<>();

    public static void main(String[] args) {
        int option;

        do {
            System.out.println("\n-------------------------");
            System.out.println("###### Parking Lot ######");
            System.out.println("1 - Park a vehicle");
            System.out.println("2 - Remove a vehicle");
            System.out.println("3 - List all vehicles");
            System.out.println("4 - Show available spots");
            System.out.println("5 - Exit");
            System.out.print("Choose an option: ");
            option = sc.nextInt();
            sc.nextLine();

            switch (option){
                case 1:
                    parkVehicle();
                    break;
                case 2:
                    removeVehicle();
                    break;
                case 3:
                    listVehicles();
                    break;
                case 4:
                    showAvailableSpots();
                    break;
                case 5:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid option");
            }
        } while (option != 5);

        sc.close();
    }

    static void showAvailableSpots() {
        var availableSpots = MAX_VACANCIES - vacancies.size();
        System.out.println("Available spots: " + availableSpots);
    }

    static void listVehicles() {
        if (vacancies.isEmpty()) {
            System.out.println("Parking lot is empty");
            return;
        }

        System.out.println("\nVehicles parked:");
        for (Vehicle vehicle : vacancies) {
            System.out.print("License plate: " + vehicle.getLicensePlate());
            System.out.println("Model: " + vehicle.getModel());
            System.out.println("Entry time: " + vehicle.getEntryTime());
            System.out.println("Time parked: " + vehicle.calculateTime() + " hours");
            System.out.println("-------------------------");
        }
    }

    static void removeVehicle() {
        if (vacancies.isEmpty()) {
            System.out.println("Parking lot is empty");
            return;
        }

        System.out.print("\nEnter the license plate: ");
        var licensePlate = sc.nextLine();

        for (Vehicle vehicle : vacancies) {
            if (vehicle.isSameVehicle(licensePlate)) {
                var time = vehicle.calculateTime();
                var priceToPay = time * 5.0;
                System.out.println("Time parked: " + time + " hours");
                System.out.println("Price: R$" + priceToPay);
                vacancies.remove(vehicle);
                System.out.println("Vehicle removed successfully!");
                return;
            }
            System.out.println("Vehicle not found");
        }

    }

    static void parkVehicle() {
        if (vacancies.size() >= MAX_VACANCIES) {
            System.out.println("Parking lot is full");
            return;
        }

        System.out.print("Enter the license plate: ");
        String licensePlate = sc.nextLine();

        System.out.print("Enter the model: ");
        String model = sc.nextLine();

        var vehicle = new Vehicle(licensePlate, model);
        vacancies.add(vehicle);

        System.out.println("\nVehicle parked successfully!");
    }
}
