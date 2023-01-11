def solution(my_str, n):
    answer = my_str
    result2 = []
    i = 0
    for i in range(0, len(answer), n):
        result2.append(answer[i:i+n])
        i += n
    return result2