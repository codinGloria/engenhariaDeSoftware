package com.codingloria.aula16;

import java.io.File;
import java.io.IOException;

public class FilesExample {
    public static void main(String[] args) throws IOException {
        var homedir = new File(System.getProperty("user.home"));
        var f = new File(homedir, "Downloads/desenvolvimentoJava/src/main/java/com/codingloria/aula16");
        var newFile = f.createNewFile();

        if (f.exists() && f.isFile() && f.canRead()) {
            var confdir = new File(homedir, "Downloads/desenvolvimentoJava/src/main/java/com/codingloria/aula16");
            confdir.mkdir();
            f.renameTo(new File(confdir, "conf"));
        } else {
            System.out.println("Something went wrong");
        }
    }
}
