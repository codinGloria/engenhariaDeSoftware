package com.codingloria.aula11.inheritance;

public class BankDemo {
    public static void main(String[] args) {
        CheckingAccount ca = new CheckingAccount("Glória", 1000.0, 4.0);
        ca.display();
        ca.withdraw(100.0);
        ca.display();

        System.out.println("====================================");
        SavingsAccount sa = new SavingsAccount("Luan", 200.0, 2.6);
        sa.display();
        sa.applyInterest();
        sa.display();

        BankingAccount ba = new BankingAccount("Zoro", 100.0);
        ba.display();
    }
}
