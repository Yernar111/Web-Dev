n=int(input())
i=0
while 2**i<=n:
    if 2**i>=n:
        break
    i+=1
print(i)