""" Tuples """

# A tuple is an ordered, immutable collection of heterogenous items in Python.

t1 = (1, 2)
t2 = 1, 2
t3 = 1,
t4 = ()
print(type(t1), type(t2), type(t3), type(t4))

t5 = (1, 2) + (3, 4)
t6 = (1, 2) * 3

print(t5)
print(t6)

l1 = [1, 2]
t7 = tuple(l1)  # converting list to tuple (we can pass all iterables)
t8 = tuple("Hello World")

print(type(t7))

t9 = (1, 2, 3, 4, 5)
print(t9[0])
print(t9[2: 4])
print(t9[1:])
print(t9[2:-1])


X = 10
Y = 11

X, Y = Y, X

print("X : ", X)
print("Y : ", Y)
