import java.util.*;

class Solution {
    public String[] solution(String my_str, int n) {
        String[] answer = {};
        String[] array = { my_str };
        String Str = Arrays.toString(array);
        for (int i = 0; i < Str.length(); i++) {
            answer[0] = my_str.substring(i, i + 1);
            if (Str.charAt(i) == Str.charAt(n)) {
                break;
            }
        }
        return answer;
    }
}