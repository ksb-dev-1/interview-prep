""" Sets """
# Set items are unordered, unchangeable, and do not allow duplicate values.

numbers = [1, 2, 3, 2, 4, 3, 5]
uniques = set(numbers)

print(uniques)  # {1, 2, 3, 4, 5}

first = set(numbers)
second = {1, 6, 7}

print(first | second)  # union
print(first & second)  # intersection
print(first - second)  # difference
print(first ^ second)  # symmetric difference

set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = {"John", "Elena"}
set4 = {"apple", "bananas", "cherry"}

myset = set1.union(set2, set3, set4)
print(myset)

# ----------------------------------------------- ADD
# add
thisset = {"apple", "banana", "cherry"}
thisset.add("orange")
print(thisset)

# update
# To add items from another set into the current set, use the update() method.
thisset = {"apple", "banana", "cherry"}
tropical = {"pineapple", "mango", "papaya"}
thisset.update(tropical)
print(thisset)

# adding iterable
thisset = {"apple", "banana", "cherry"}
mylist = ["kiwi", "orange"]
thisset.update(mylist)
print(thisset)

for x in thisset:  # when we loop over order is random
    print(x)

# ----------------------------------------------- REMOVE
thisset = {"apple", "banana", "cherry"}
thisset.remove("banana")
print(thisset)
# Note: If the item to remove does not exist, remove() will raise an error.


thisset = {"apple", "banana", "cherry"}
thisset.discard("banana")
print(thisset)
# Note: If the item to remove does not exist, discard() will NOT raise an error.


# Remove a random item by using the pop() method:
thisset = {"apple", "banana", "cherry"}
x = thisset.pop()
print(x)
print(thisset)
# Note: Sets are unordered, so when using the pop() method, you do not know which item that gets removed.


# The clear() method empties the set:
thisset = {"apple", "banana", "cherry"}
thisset.clear()
print(thisset)


# The del keyword will delete the set completely:
thisset = {"apple", "banana", "cherry"}
del thisset
