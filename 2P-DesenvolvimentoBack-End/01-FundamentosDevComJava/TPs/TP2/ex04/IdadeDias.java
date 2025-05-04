package com.codingloria.TP2.ex04;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class IdadeDias {
    private LocalDate dataNascimento;

    public IdadeDias(int dia, int mes, int ano) {
        this.dataNascimento = LocalDate.of(ano, mes, dia);
    }

    public long calcularIdadeEmDias() {
        LocalDate dataAtual = LocalDate.now();
        return ChronoUnit.DAYS.between(dataNascimento, dataAtual);
    }
}
