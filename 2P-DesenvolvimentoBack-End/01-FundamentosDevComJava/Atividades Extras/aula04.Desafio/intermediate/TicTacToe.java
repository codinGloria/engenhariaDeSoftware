package com.codingloria.exercise03.intermediate;

import java.util.Scanner;

public class TicTacToe {
    static char[][] board = {{'1', '2', '3'}, {'4', '5', '6'}, {'7', '8', '9'}};

    public static void printBoard() {
        for (int i = 0; i < 3; i++) {
            System.out.println(board[i][0] + " | " + board[i][1] + " | " + board[i][2]);
            if (i < 2) System.out.println("--+---+--");
        }
        System.out.println();
    }

    public static boolean checkWinner(char player) {
        for (int i = 0; i < 3; i++)
            if ((board[i][0] == player && board[i][1] == player && board[i][2] == player) || // Check rows
                    (board[0][i] == player && board[1][i] == player && board[2][i] == player))   // Check columns
                return true;

        return (board[0][0] == player && board[1][1] == player && board[2][2] == player) || // Main diagonal
                (board[0][2] == player && board[1][1] == player && board[2][0] == player);   // Other diagonal
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char currentPlayer = 'X';

        for (int turn = 0; turn < 9; turn++) {
            printBoard();
            System.out.print("Player " + currentPlayer + ", enter your move (1-9): ");
            int move = sc.nextInt() - 1;

            int row = move / 3, col = move % 3;
            if (move < 0 || move >= 9 || board[row][col] == 'X' || board[row][col] == 'O') {
                System.out.println("Invalid move! Try again.");
                turn--;
                continue;
            }

            board[row][col] = currentPlayer;
            if (checkWinner(currentPlayer)) {
                printBoard();
                System.out.println("Player " + currentPlayer + " wins!");
                return;
            }

            currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
        }

        printBoard();
        System.out.println("It's a tie!");
    }
}

