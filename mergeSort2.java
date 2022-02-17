import java.util.Random;

public class mergeSort2 {
    public static void printArr(int[] arr) {
        System.out.print("Arr : ");
        for (int i : arr) {
            System.out.print(i + " ");
        }

        System.out.println();
    }

    public static void merge(int[] arr) {
        if (arr.length < 2) {
            return;
        }

        int mid = arr.length / 2;

        int leftHand[] = new int[mid];
        int rightHand[] = new int[arr.length - mid];

        // pecah jadi kiri dan kanan
        for (int i = 0; i < mid; i++) {
            leftHand[i] = arr[i];
        }

        for (int i = mid; i < arr.length; i++) {
            rightHand[i - mid] = arr[i];
        }

        merge(leftHand);
        merge(rightHand);

        sort(arr, leftHand, rightHand);
    }

    public static void sort(int[] arr, int leftHand[], int rightHand[]) {
        int leftHandSize = leftHand.length;
        int rightHandSize = rightHand.length;
        int i = 0, j = 0, k = 0;

        while (i < leftHandSize && j < rightHandSize) {
            if (leftHand[i] < rightHand[j]) {
                arr[k] = leftHand[i];
                i++;
                k++;
            } else {
                arr[k] = rightHand[j];
                j++;
                k++;
            }
        }

        while (i < leftHandSize) {
            arr[k] = leftHand[i];
            i++;
            k++;
        }

        while (j < rightHandSize) {
            arr[k] = rightHand[j];
            j++;
            k++;
        }

    }

    public static void main(String[] args) {
        int x[] = new int[10];
        Random rand = new Random();

        for (int i = 0; i < 10; i++)
            x[i] = Math.abs(rand.nextInt(10 - 0) + 0);

        printArr(x);

        merge(x);

        printArr(x);
    }
}
