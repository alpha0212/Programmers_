def solution(number):
    i = 0
    result = 0
    for i in range(len(number)):
        result += number[i]
    if (len(number) > 5):
        return result + 5
    else:
        return -result
