let X = Number(prompt("Valor X (1, 2 ou 3):"));
let A = Number(prompt("Valor A:"));
let B = Number(prompt("Valor B:"));
let C = Number(prompt("Valor C:"));

if (X === 1) {
    if (A > B) {
        let temp = A;
        A = B;
        B = temp;
    }
    if (A > C) {
        let temp = A;
        A = C;
        C = temp;
    }
    if (B > C) {
        let temp = B;
        B = C;
        C = temp;
    }
    alert(A + " " + B + " " + C);
    
} else if (X === 2) {
    if (A < B) {
        let temp = A;
        A = B;
        B = temp;
    }
    if (A < C) {
        let temp = A;
        A = C;
        C = temp;
    }
    if (B < C) {
        let temp = B;
        B = C;
        C = temp;
    }
    alert(A + " " + B + " " + C);
    
} else if (X === 3) {
    if (A > B && A > C) {
        alert(B + " " + A + " " + C);
    } else if (B > A && B > C) {
        alert(A + " " + B + " " + C);
    } else if (C > A && C > B) {
        alert(A + " " + C + " " + B);
    }
    
} else {
    alert("Valor de X inválido.");
}