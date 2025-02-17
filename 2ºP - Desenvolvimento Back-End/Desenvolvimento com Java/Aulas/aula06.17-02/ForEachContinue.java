package com.codingloria.aula06;

public class ForEachContinue {
    public static void main(String[] args) {
        String[] comidas = {"Pizza", "Coxinha", "Hamburguer", "Sorvete", "Beterraba", "Churrasco"};

        for(String comida : comidas){
            if(comida.equals("Beterraba")){
                System.out.println("Eu não gosto de beterraba! BLEH :P");
                continue;
            }

            System.out.println("Comendo " + comida);
        }
    }
}
