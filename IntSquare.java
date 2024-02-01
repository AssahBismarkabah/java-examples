public class IntSquare {
    private int squareValue;

//making the constructor public

    public IntSquare(int num) {
        squareValue = num;
    }

    private int calculateSquare(int value) {
        return value * value;
    }
//data encapsulation
    public int getSquare(int value) {
        squareValue = calculateSquare(value);
        return squareValue;
    }
}
