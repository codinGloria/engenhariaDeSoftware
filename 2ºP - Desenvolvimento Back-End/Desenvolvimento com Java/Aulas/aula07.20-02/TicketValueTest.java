package com.codingloria.aula07.oop;

public class TicketValueTest {

    // Method to duplicate the value of a ticket, but without returning the value
//    static void duplicateValue(int value) {
//        value *= 2;
//        System.out.println("Value inside the method: " + value);
//    }

    // Method to duplicate the value of a ticket, returning the value
    static int duplicateValue(int value) {
        value *= 2;
        System.out.println("Value inside the method: " + value);
        return value;
    }

    public static void main(String[] args) {
        int ticketValue = 50;
        System.out.println("Ticket value: " + ticketValue);
        ticketValue = duplicateValue(ticketValue);
        System.out.println("Ticket value after the method: " + ticketValue);
    }

}
