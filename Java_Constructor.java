public class Employee {
    String name = "";
    int salary = 0;

    Employee(String name, int salary) {
        this.name = name;
        this.salary = salary;
    }
}

public class Java_Constructuror {

    public static void main(String[] args) {
        Employee x = new Employee("Louis", 50000);
    }
}