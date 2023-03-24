

def xor(x, y):
    return (x and not y) or (y and not x)
print(xor( *list(map(int, input().split() ))) * 1)