import time
a = ""
for i in "hello world":
    s=97
    if(i==" "):
        a+=" "
        continue
    while  s!=ord(i)+1:
        print(a + chr(s))
        s+=1
        time.sleep(.15k)
    a+=chr(s-1)
print(a+"!")