n=int(input())
k=1
while k**2<=n:
    n-=1
    print(k**2, end=" ")
    k+=1
