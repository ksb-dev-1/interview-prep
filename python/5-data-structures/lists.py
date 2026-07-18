""" 
List Data Structure examples in Python
"""

# ---------------------------- Creating lists
letters = ["a", "b", "c", "d", "e", "f"]         # simple list
matrix = [[0, 1], [2, 3]]                        # nested list (matrix)
zeroes = [0] * 5                                 # list with repeated elements
combined = zeroes + letters                      # concatenating lists
numbers = list(range(20))                        # list from 0 to 19
# list of characters from string
chars = list("Hello World")

# ---------------------------- Printing lists
# concatenation of letters + matrix
print(letters + matrix)
print(zeroes)                                     # [0, 0, 0, 0, 0]
print(numbers)                                    # numbers from 0 to 19
print(combined)                                   # zeroes + letters
print(len(chars))                                 # length of character list

print("-------------------------------------")

# ---------------------------- Modifying list elements
letters[0] = "A"                                  # update first element

print(letters[0])                                 # print first element
print(letters[0:3])                               # slicing: first 3 elements
print(letters[::2])                               # every second element
print(letters[::-1])                              # reversed list

print("-------------------------------------")

# ---------------------------- Unpacking lists
numbers = [1, 2, 3]
first, second, third = numbers

one, two, *others, last = letters

print(first, second, third)
print(one, two, others, last)

print("-------------------------------------")

# ---------------------------- Looping over lists
# enumerate returns (index, value) tuple
for letter in enumerate(letters):
    print(letter)
    print(letter[0], letter[1])                   # index, value

for index, letter in enumerate(letters):          # unpack directly
    print(index, letter)

print("-------------------------------------")

# ---------------------------- Adding and removing elements
letters.append("g")                               # add at end
letters.insert(0, "---")                          # insert at beginning
print(letters)

letters.pop()                                     # remove last element
letters.remove("---")                             # remove specific element
print(letters)

# del letters[0]                                  # delete by index
# del letters[0:3]                                # delete slice

# letters.clear()                                 # remove all elements

print(letters)

print("-------------------------------------")

# ---------------------------- Finding elements
if "c" in letters:                                # check existence
    print(letters.count("d"))
    print(letters.index("c"))                     # find index

print("-------------------------------------")

# ---------------------------- Sorting lists
integers = [1, 34, 12, 8, 56, 32, 44]

integers.sort()                                   # sort in-place ascending
print(integers)

integers.sort(reverse=True)                       # sort in-place descending
print(integers)

# returns new sorted list ascending
print(sorted(integers))
# returns new sorted list ascending
print(sorted(integers, reverse=False))

# original list remains unchanged if using sorted()
print(integers)

# Sorting list of tuples
products = [
    ("Product1", 10),
    ("Product2", 9),
    ("Product3", 12)
]
# default sorts by first element of tuple
products.sort()
print(products)


def sort_products(item):
    """Return second element for sorting products by price."""
    return item[1]


products.sort(key=sort_products)                  # sort by price ascending
print(products)

# sort by price descending
products.sort(key=lambda product: product[1], reverse=True)
print(products)

print("-------------------------------------")
# ---------------------------- Map , Filter & List comprehensions

prices = []

for product in products:
    prices.append(product[1])

print(prices)

print("-------------------------------------")

x = map(lambda product: product[1], products)

for product in x:
    print(product)

print("-------------------------------------")

prices = list(map(lambda product: product[1], products))
print(prices)

prices = [product[1] for product in products]  # list comprehension
print(prices)

prices = sorted(map(lambda product: product[1], products), reverse=False)
print(prices)

print("-------------------------------------")

filtered = []

filteredPrices = list(filter(lambda product: product[1] >= 10, products))
print(filteredPrices)

# list comprehension
filteredPrices = [product for product in products if product[1] >= 10]
print(filteredPrices)

filteredPrices = list(map(lambda product: product[1],
                          filter(lambda product: product[1] >= 10, products)))
print(filteredPrices)

# ---------------------------- Zip function
list1 = [1, 2, 3]
list2 = [10, 20, 30]

print(list(zip("abc", list1, list2)))
