import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;

public class lcm {

    public static int compare(HashMap<Integer, Integer> x, HashMap<Integer, Integer> y) {
        System.out.println(x);
        System.out.println(y);
        // check if there is duplicate key
        for (Integer a : x.keySet()) {
            if (y.containsKey(a) && x.get(a) <= y.get(a)) {
                x.replace(a, y.get(a));
            } else {
                x.put(a, y.get(a));
            }
        }

        System.out.println(x);

        return -1;
    }

    public static HashMap<Integer, Integer> result(List<Integer> z) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < z.size(); i++) {
            if (map.containsKey(z.get(i))) {
                map.replace(z.get(i), map.get(z.get(i)) + 1);
            } else {
                map.put(z.get(i), 1);
            }
        }

        return map;
    }

    public static List<Integer> lcmNum(int x, int y, List<Integer> z) {
        if (y > 9) {
            z.add(x);
            return z;
        }

        if (x % y == 0) {
            z.add(y);

            if (x / y == 1)
                return z;

            return lcmNum(x / y, y, z);
        }

        return lcmNum(x, y + 1, z);
    }

    public static List<Integer> lcmNum(int x) {
        return lcmNum(x, 2, new ArrayList<Integer>());
    }

    public static void main(String[] args) {
        int x = 18;
        int y = 48;
        // System.out.println(result(lcmNum(x)));
        // System.out.println(result(lcmNum(y)));
        System.out.println(compare(result(lcmNum(x)), result(lcmNum(y))));
    }
}