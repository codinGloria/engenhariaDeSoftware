package com.gloriabraz.debug;

public class DebugExample {
    public static void main(String[] args){
        int[] numbers = {1, 2, 3, 4, 5, 6};
        int sum = 0;

        for (int i = 0; i < numbers.length; i++){
            sum += numbers[i];
        }

        System.out.println("The sum is: " + sum);

        /*
        **** Sobre o DEBUG ****
        * Step Over -> Executa a linha atual e vai para a próxima
        * Step Into -> Entra no método da linha atual
        * Step Out -> Sai do método atual
        * Resume Program -> Continua a execução do programa pulando entre os pontos de parada
        * */
    }
}
