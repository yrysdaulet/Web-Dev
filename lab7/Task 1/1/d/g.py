n = int(input())
a = list(map(int, input().split()))
for i in range(n // 2):
    a[i], a[n-i-1] = a[n-i-1], a[i]
for i in range(n):
    print(a[i], end=" ")