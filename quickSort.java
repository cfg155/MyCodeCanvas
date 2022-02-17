import java.util.Random;

public class quickSort {

    public static void swap(int arr[], int i, int j) {
        int tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
    }

    public static void sort(int arr[], int start, int n, int pivot) {

        if (start > n)
            return;

        // pivot is the initial value from last value
        int i = start - 1, j = start;
        while (j < n - 1) {
            if (arr[j] < pivot) {
                ++i;
                swap(arr, i, j);
            }

            if (j == n - 2) {
                ++i;
                ++j;
                if (arr[j] < arr[i]) {
                    swap(arr, i, j);
                }
            }

            j++;
        }

        // split into 2 partition left and right
        sort(arr, start, n / 2, arr[n / 2]);
        // sort(arr, n / 2, arr.length, arr[arr.length - 1]);
    }

    public static void printArr(int arr[]) {
        for (int i : arr)
            System.out.print(i + " ");

        System.out.println();
    }

    public static void main(String[] args) {
        // int arr[] = new int[10];
        // int max = 10, min = 1;

        // for (int i = 0; i < 10; i++)
        // arr[i] = new Random().nextInt(max + 1 - min) + min;

        int arr[] = { 10, 80, 30, 90, 40, 50, 70 };

        printArr(arr);

        sort(arr, 0, arr.length, arr[arr.length - 1]);

        printArr(arr);

    }
}