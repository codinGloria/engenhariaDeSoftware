package com.codingloria.aula15.example;

import java.util.ArrayList;
import java.util.List;

public class ArrayListExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        ArrayList<Integer> numbers = new ArrayList<>();

        names.add("Maria");
        names.add("João");
        names.add("Carlos");

        System.out.println(names);
        names.add(1, "Ana");
        System.out.println(names);

        System.out.println("First name: " + names.getFirst());
        System.out.println("List size: " + names.size());

        for (int i = 0; i < names.size(); i++) {
            System.out.println("Name at position " + i + " = " + names.get(i));
        }

        for (String name : names) {
            System.out.println(name);
        }

        names.forEach(System.out::print);
        System.out.println();

        // Removing elements
//        names.remove(2);
//        names.remove("Carlos");
//        System.out.println(names);

        names.set(2, "Joana");
    }
}
