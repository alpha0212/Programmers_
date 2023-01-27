def solution(A, B):
    answer = 0
    text = list(A)
    B = list(B)
    B[0] = A.strip()[-1]
    if (B[0] == 'o'):
        return 1
    else:
        return -1
