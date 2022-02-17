public class MetrodataTest {
    public static void main(String[] args) {
        boolean check = true;

        for (int i = 1; i < 21; i++) {
            if (i % 2 == 0) {
                for (int j = 2; j < 9; j++) {
                    if (i % j == 0 && i != j) {
                        check = false;
                        break;
                    }

                }

                if (check)
                    System.out.println(i);
            }
        }
    }
}
