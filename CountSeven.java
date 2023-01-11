import java.util.*;

class SevenArrayJava {
    public int main(int[] array) {
        int answer = 0;
        String str = Arrays.toString(array);
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == '7') {
                answer++;
            }
        }
        return answer;
    }
}