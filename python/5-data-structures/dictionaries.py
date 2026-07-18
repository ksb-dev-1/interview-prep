""" Dictionaries """

from sys import getsizeof

# Dictionaries are used to store data values in key:value pairs.
# A dictionary is a collection which is ordered*, changeable and do not allow duplicates.

thisdict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}

print(thisdict)  # {'brand': 'Ford', 'model': 'Mustang', 'year': 1964}
print(type(thisdict))  # <class 'dict'>
print(len(thisdict))  # 3

# dict constructor
# thisdict = dict(name="John", age=36, country="Norway")
# print(thisdict)


# --------------------------------------------------- ACCESS ITEMS

X = thisdict["model"]
print(X)  # Mustang

X = thisdict.get("model")
print(X)  # Mustang

X = thisdict.keys()
print(X)  # dict_keys(['brand', 'model', 'year'])

X = thisdict.values()
print(X)  # dict_values(['Ford', 'Mustang', 1964])

# The items() method will return each item in a dictionary, as tuples in a list.
X = thisdict.items()
# dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964)])
print(X)

# --------------------------------------------------- CHANGE ITEMS

thisdict["year"] = 1980
# {'brand': 'Ford', 'model': 'Mustang', 'year': 1980}
print(thisdict)

thisdict.update({"year": 2020})
# {'brand': 'Ford', 'model': 'Mustang', 'year': 2020}
print(thisdict)

# --------------------------------------------------- ADD ITEMS

thisdict["color"] = "White"
# {'brand': 'Ford', 'model': 'Mustang', 'year': 1980, 'color': 'White'}
print(thisdict)

thisdict.update({"color": "Blue"})
# {'brand': 'Ford', 'model': 'Mustang', 'year': 2020, 'color': 'Blue'}
print(thisdict)


X = thisdict.keys()
print(X)  # dict_keys(['brand', 'model', 'year', 'color'])

X = thisdict.values()
print(X)  # dict_values(['Ford', 'Mustang', 2020, 'Blue'])

# --------------------------------------------------- REMOVE ITEMS

car = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964,
    "color": "Blue"
}

# print(car["a"])  # if we access value that doesn't exist you'll get error
print(car.get("a"))  # None
print(car.get("a", 0))  # 0


car.pop("model")
print(car)  # {'brand': 'Ford', 'year': 1964, 'color': 'Blue'}

car.popitem()
print(car)  # {'brand': 'Ford', 'year': 1964}

del car["brand"]
print(car)  # {'year': 1964}

car.clear()
print(car)  # {}

del car

# --------------------------------------------------- LOOP DICTIONARIES

for x in thisdict:  # by default thisdict.keys()
    print(x)

# for x in thisdict:
#     print(thisdict[x])

for x in thisdict:
    print(x)

for x in thisdict.values():
    print(x)

for x, y in thisdict.items():
    print(x, y)

# --------------------------------------------------- COPY DICTIONARIES

mydict = thisdict.copy()
# {'brand': 'Ford', 'model': 'Mustang', 'year': 2020, 'color': 'Blue'}
print(mydict)

mydict = dict(thisdict)
# {'brand': 'Ford', 'model': 'Mustang', 'year': 2020, 'color': 'Blue'}
print(mydict)

# LOOPING OVER NESTED DICTIONARIES
students = {
    "s1": {"name": "Alice", "age": 25},
    "s2": {"name": "Bob", "age": 22}
}

for student_id, info in students.items():
    print(student_id)       # outer key
    for key, value in info.items():
        print(" ", key, ":", value)

# --------------------------------------------------- DICTIONARY COMPREHENSIONS
values = []

for x in range(5):
    values.append(x * 2)
print(values)

comprehension = [x * 2 for x in range(5)]
print(comprehension)

comprehension = {x: x * 2 for x in range(5)}
print(comprehension)

comprehension = (x * 2 for x in range(1000000))
print(comprehension)  # <generator object <genexpr> at 0x000001ECA253A4D0>
print("generator size:", getsizeof(comprehension))  # generator: 200

comprehension = [x * 2 for x in range(1000000)]
print("list size:", getsizeof(comprehension))  # list: 8448728
