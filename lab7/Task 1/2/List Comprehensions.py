from itertools import permutations
l = [int(input()) for i in range(3)]
n= int(input())
l1 =[]
for i in range(l[0]+1):
    for j in range(l[1]+1):
        for k in range(l[2]+1):
            if not (i+j+k)==n:
                l1.append([i, j, k])
print(l1)
