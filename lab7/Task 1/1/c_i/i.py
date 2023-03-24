x = int(input())

count_divisors = 0

for i in range(1, int(x**0.5) + 1):
    if x % i == 0:
        count_divisors += 1
        if i != x // i:
            count_divisors += 1

print(count_divisors)