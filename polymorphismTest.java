public class polymorphismTest {

    public static void x(int y, int z) {
        if (y == 5)
            return;

        System.out.println(y);
        x(y += 1, z);
    }

    public static void x(int y) {
        if (y == 5)
            return;

        System.out.println(y);
        x(y += 1, 0);
    }

    public static void main(String[] args) {
        int y = 1;
        x(y);
    }
}
