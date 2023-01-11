def solution(A, B):
    answer = 0
    A = list(A)
    for i in range(len(A)):
        if "".join(A) == B:
            return answer
        else:
            A.insert(0, A.pop())
            answer += 1
        
    return -1