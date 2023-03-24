def minn(a,b,c,d):
    if d<c:c=d
    if b<a:a=b
    if c<a:a=c
    return a
print(minn(*[int(i) for i in input().split()]))