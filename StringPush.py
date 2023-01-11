def solution(num, total):
    answer = []
    avg = total // num
    sum = 0
    if((1 <= num <= 100) & (0 <= total <= 1000)):
        for i in range(avg - (num-1)//2, avg+(num+2)//2):
            sum+=1
            answer.insert(sum, i)
        return answer