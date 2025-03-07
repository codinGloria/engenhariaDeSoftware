package com.codingloria.aula10.overload;

public class OverloadConstructDemo {
    public static void main(String[] args) {
        OverloadConstruct oc1 = new OverloadConstruct();
        OverloadConstruct oc2 = new OverloadConstruct(2);
        OverloadConstruct oc3 = new OverloadConstruct(3, 4);
        OverloadConstruct oc4 = new OverloadConstruct(oc2);

        System.out.println(oc1.x);
        System.out.println(oc2.x);
        System.out.println(oc3.x);
        System.out.println(oc4.x);
    }
}
