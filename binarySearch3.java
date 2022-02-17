public class binarySearch3 {

    public static int binarySearch(int arr[], int start, int end, int target) {
        int middle = (start + end) / 2;

        if (start > end)
            return -1;

        if (arr[middle] == target) {
            return middle;
        }

        if (arr[middle] < target) {
            return binarySearch(arr, middle + 1, end, target);
        }

        return binarySearch(arr, start, middle - 1, target);
    }

    public static void main(String[] args) {
        int arr[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        int target = 15;

        System.out.println(binarySearch(arr, 0, arr.length - 1, target));
    }
}
