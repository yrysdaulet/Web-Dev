a, b, c, d = [int(input()) for i in range(4)]

for i in range(a, b + 1):
    if i % d == c:
        print(i, end=' ')