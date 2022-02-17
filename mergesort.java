import java.util.List;
import java.util.ArrayList;

public class mergesort {

    public static List<Integer> solution(List<Integer> ar) {
        int middle = ar.size() / 2;

        return ar;
    }

    public static void main(String[] args) {
        List<Integer> ar = new ArrayList<>() {
            {
                add(5);
                add(1);
                add(3);
                add(8);
                add(2);
                add(9);
                add(4);
                add(7);
                add(10);
            }
        };
        boolean a = true;
        boolean b = false;
        if ((!a != b) && (a || !b) == b && (a || a)) {
            System.out.println("test");
        }
    }

}
