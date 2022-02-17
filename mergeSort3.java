import java.util.Random;
import java.util.List;
import java.util.ArrayList;

public class mergeSort3 {

    public static void merge(List<Integer> arr) {
        if (arr.size() < 2) {
            return;
        }

        int mid = arr.size() / 2;

        // bagi 2
        List<Integer> leftHand = new ArrayList<>();
        List<Integer> rightHand = new ArrayList<>();

        // masukin value
        for (int i = 0; i < mid; i++) {
            leftHand.add(arr.get(i));
        }

        for (int i = mid; i < arr.size(); i++) {
            rightHand.add(arr.get(i));
        }

        merge(leftHand);
        merge(rightHand);

        sort(arr, leftHand, rightHand);
    }

    public static void sort(List<Integer> arr, List<Integer> leftHand, List<Integer> rightHand) {
        int i = 0, j = 0, k = 0;

        while (i < leftHand.size() && j < rightHand.size()) {
            if (leftHand.get(i) < rightHand.get(j)) {
                arr.set(k, leftHand.get(i));
                i++;
                k++;
            } else {
                arr.set(k, rightHand.get(j));
                j++;
                k++;
            }
        }

        while (i < leftHand.size()) {
            arr.set(k, leftHand.get(i));
            i++;
            k++;
        }

        while (j < rightHand.size()) {
            arr.set(k, rightHand.get(j));
            j++;
            k++;
        }
    }

    public static void main(String[] args) {
        List<Integer> arr = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            arr.add(new Random().nextInt(11 - 1) + 1);
        }

        System.out.println("Arr : " + arr);
        merge(arr);

        System.out.println("Arr : " + arr);

    }
}
