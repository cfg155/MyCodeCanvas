import java.util.Vector;

public class testObj {
    public static void main(String[] args) {
        Vector<Object> x = new Vector<>() {
            {
                add(1);
                add(2);
                add(3);
            }
        };

        for (int i = 0; i < x.size(); i++) {
            System.out.println(x.get(i));
        }
    }
}