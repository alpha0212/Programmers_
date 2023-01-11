def solution(array):
    i = 0
    answer = 0
    array = str(array)
    for i in range(len(array)):
        if (array[i] == '7'):
            answer += 1

    return answer