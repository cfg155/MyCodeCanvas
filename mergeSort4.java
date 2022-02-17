import java.util.Random;

public class mergeSort4 {
    public static void printArr(int arr[]) {
        for (int i : arr) {
            System.out.print(i + " ");
        }

        System.out.println("");
    }

    public static void merge(int arr[]) {
        if (arr.length < 2)
            return;

        int mid = arr.length / 2;

        // split the to left and right
        int leftHand[] = new int[mid];
        int rightHand[] = new int[arr.length - mid];

        for (int i = 0; i < mid; i++)
            leftHand[i] = arr[i];

        for (int i = mid; i < arr.length; i++)
            rightHand[i - mid] = arr[i];

        merge(leftHand);
        merge(rightHand);

        sort(arr, leftHand, rightHand);
    }

    public static void sort(int arr[], int leftHand[], int rightHand[]) {
        int i = 0, j = 0, k = 0;

        while (i < leftHand.length && j < rightHand.length) {
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

        while (i < leftHand.length) {
            arr[k] = leftHand[i];
            i++;
            k++;
        }

        while (j < rightHand.length) {
            arr[k] = rightHand[j];
            j++;
            k++;
        }
    }

    public static void main(String[] args) {
        int arr[] = new int[10];

        for (int i = 0; i < arr.length; i++) {
            arr[i] = new Random().nextInt(10) + 1;
        }
        System.out.print("Number : ");
        printArr(arr);

        merge(arr);

        System.out.print("Answer : ");
        printArr(arr);
    }
}
