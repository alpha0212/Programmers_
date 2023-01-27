class Solution {
    public int solution(int n) {
        Integer answer = 0;
        Integer result = 0;
        for (int i = 2; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                result = i / j;
                if (result instanceof Integer) {
                    answer += 1;
                } else
                    break;
            }
        }
        return answer;
    }
}