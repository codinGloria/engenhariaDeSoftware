package com.codingloria.aula09.acessModifiers;

public class ArrayFailSoft {
    private int[] a; // reference to array
    private int errval; // value to return if get() fails
    public int length; // length of array

    // constructor
    public ArrayFailSoft(int size, int errv) {
        a = new int[size];
        errval = errv;
        length = size;
    }

    public boolean put (int index, int val){
        if (indexOK(index)) {
            a[index] = val;
            return true;
        }
        return false;
    }

    private boolean indexOK(int index) {
        return index >= 0 && index < length;
    }

    public int get(int index) {
        if (indexOK(index)) {
            return a[index];
        }
        return errval;
    }

}
