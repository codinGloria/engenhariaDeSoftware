namespace ComandosRepeticao;

class ForAndWhile {
    static void Main(string[] args) {
        /* For ir used when we know the number of iterations
         * 
         * Initialization of the control variable i
         * Exit condition
         * Increment the control variable
        */

        const int N = 10;
        int sum = 0;
        int sum2 = 0;
        
        
        for(int i = 0; i < N; i++) {
            sum += i;
        }
        Console.WriteLine("Sum = " + sum);
        
        // Same code using while:
        int j = 0;
        while (j <= N) {
            sum2 += j;
            j++;
        }
        Console.WriteLine("Sum = " + sum2);
        
    }
}