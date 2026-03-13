isDegreeOfTwo = int(input())
# if isDegreeOfTwo & (isDegreeOfTwo - 1) == 0: # if n is a degree of two, then n & (n-1) will be 0, be
#     print("YES")
# else:
#     print("NO")
i=1
while i<=isDegreeOfTwo:
    if i==isDegreeOfTwo:
        print("YES")
        break
    i*=2
else:
    print("NO")