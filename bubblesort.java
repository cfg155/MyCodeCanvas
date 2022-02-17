import java.util.List;
import java.util.ArrayList;

public class bubblesort {
    public static List<Integer> solution(List<Integer> x) {

        for (int i = 0; i < x.size() - 1; i++) {
            for (int j = 0; j < x.size() - 1; j++) {
                if (x.get(j) > x.get(j + 1)) {
                    int tmp = x.get(j);
                    x.set(j, x.get(j + 1));
                    x.set(j + 1, tmp);
                }
            }
        }

        return x;
    }

    public static void main(String[] args) {
        List<Integer> x = new ArrayList<>() {
            {
                add(1);
                add(5);
                add(2);
                add(7);
                add(10);
            }
        };

        System.out.println(solution(x));
    }
}