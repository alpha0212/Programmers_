import java.util.*;
class Solution {
    public String[] solution(String my_str, int n) {
		Double cnt = (double) Math.ceil((double) my_str.length() / n) ;
        String[] answer = new String[cnt.intValue()];
        int index = 0;
        for(int i = 0; i < cnt.intValue(); i++) {
            if(my_str.length() % n == 0) {
                answer[i] = my_str.substring(index, index+n);
            } else if (i == cnt - 1) {
                answer[i] = my_str.substring(index);
            } else {
                answer[i] = my_str.substring(index, index+n);
            }
        }
    index+=n;
    return answer;
    }
}