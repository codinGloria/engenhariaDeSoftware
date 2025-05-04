package com.codingloria.aula12;

public class BankDemo {
    public static void main(String[] args) {
        var op = new BankOperation(2, 200.0);

        op.process();


        private static void example2 () {
            CheckingAccount checkingAccount = new CheckingAccount("Maria", 1000.0, 5.0);
            SavingAccount savingAccount = new SavingAccount("José", 500.0, 2.5);

            BankAccount ref;

            System.out.println();
            ref = checkingAccount;
            ref.displayInformation();

            System.out.println();
            ref = savingAccount;
            ref.displayInformation();
        }

        public static void example1 () {
            CheckingAccount checkingAccount = new CheckingAccount("Maria", 1000.0, 5.0);
            checkingAccount.displayInformation();
            checkingAccount.withdraw(100.0);
            checkingAccount.displayInformation();

            System.out.println("===============================");
            SavingAccount savingAccount = new SavingAccount("José", 500.0, 2.5);
            savingAccount.displayInformation();
            savingAccount.deposit(100.0);
            savingAccount.applyInterest();
            savingAccount.displayInformation();

//        BankAccount account = new BankAccount("Fulano", 1000.0);
//        account.displayInformation();
        }
    }
}
