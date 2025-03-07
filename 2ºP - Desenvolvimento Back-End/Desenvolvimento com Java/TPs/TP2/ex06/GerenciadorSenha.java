package com.codingloria.TP2.ex06;

public class GerenciadorSenha {
    public static boolean validarSenha(String senha) {
        return senha.length() >= 8 && senha.matches(".*\\d.*") && senha.matches(".*[A-Z].*");
    }
}
