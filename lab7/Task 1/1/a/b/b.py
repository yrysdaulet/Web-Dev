a = int(input())
print("YES" if ((not a%4 and a%100) or not a%400)else "NO")