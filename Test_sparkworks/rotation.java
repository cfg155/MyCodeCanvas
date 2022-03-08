public class rotation {

    static public void solve(int n, int number[]) {
        int x[] = new int[n];
        for (int i = 0; i < n; i++) {
            x[i] = number[i];
        }

        int y[] = new int[number.length - n];
        int start = 0;
        for (int i = n; i < number.length; i++) {
            y[start] = number[i];
            start++;
        }

        for (int i = 0; i < y.length; i++) {
            System.out.print(y[i]);
        }

        int finalArr[] = new int[number.length - 1];
        for (int i = 0; i < y.length; i++) {
            finalArr[i] = y[i];
        }

        for (int i = 0; i < x.length; i++) {
            finalArr[y.length] = x[i];
        }

    }

    public static void main(String[] args) {
        int number[] = { 1, 2, 3, 4, 5 };
        solve(2, number);
    }
}
