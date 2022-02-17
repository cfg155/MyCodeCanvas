import java.util.List;
import java.util.ArrayList;

public class binarysearch {

    public static int solution(int left, int right, int x, List<Integer> ar) {
        int middle = (left + right) / 2;

        if (left > right)
            return -1;

        // if middle is found
        if (ar.get(middle) == x)
            return middle;

        // if x > n
        if (ar.get(middle) < x)
            return solution(middle + 1, right, x, ar);

        return solution(left - 1, right, x, ar); // x < n
    }

    public static void main(String[] args) {
        List<Integer> ar = new ArrayList<>() {
            {
                add(1);
                add(2);
                add(3);
                add(4);
                add(5);
                add(6);
                add(7);
            }
        };

        int x = 4;
        System.out.println(solution(0, ar.size() - 1, x, ar));
    }
}
