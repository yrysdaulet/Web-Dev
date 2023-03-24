x,d = input(), int(input())
count = 0
for digit in x:
    if int(digit) == d:
        count += 1

print(count)    