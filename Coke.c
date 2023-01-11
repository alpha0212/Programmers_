#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int a, int b, int n) {
    int answer = 0;
    while (true){
        if (n<a){
            break;
        }
        int remain = n % a;
        printf("ㅎ%d", remain);
        n = (n/a) * b;
        answer += n;
        n += remain;
    }
    return answer;
}