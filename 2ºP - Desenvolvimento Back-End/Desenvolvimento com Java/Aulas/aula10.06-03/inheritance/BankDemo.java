package com.codingloria.aula10.inheritance;

public class BankDemo {
    public static void main(String[] args) {
        CheckingAccount cc = new CheckingAccount("Glória", 1000.0, 4.0);
        cc.display();
        cc.withdraw(100.0);
        cc.display();

        System.out.println("====================================");
        SavingsAccount cp = new SavingsAccount("Luan", 200.0, 2.6);
        cp.display();
        cp.applyInterest();
        cp.display();
    }
}
