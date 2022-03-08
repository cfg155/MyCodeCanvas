public class sorting {
    static void printArr(int number[]) {
        for (int i = 0; i < number.length; i++) {
            System.out.print(number);
        }
    }

    static void sort(int number[]) {
        for (int i = 0; i < number.length - 1; i++) {
            for (int j = 0; j < number.length - 1; j++) {
                if (number[j] < number[j + 1]) {
                    int tmp = number[j];
                    number[j] = number[j + 1];
                    number[j + 1] = tmp;
                }
            }
        }

        printArr(number);
    }

    public static void main(String[] args) {
        int number[] = { 5, 1, 3, 5, 4, 7, 6, 8, 2, 1 };
        sort(number);
    }
}