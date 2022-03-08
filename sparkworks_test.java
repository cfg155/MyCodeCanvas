public class sparkworks_test {

    static boolean search(int dataset[], int value) {
        boolean found = false;
        for (int i = 0; i <= dataset.length; i++) {
            if (dataset[i] == value) {
                found = true;
            }
        }

        return found;
    }

    public static void main(String[] args) {
        int dataset[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        System.out.println(search(dataset, 10));
    }
}