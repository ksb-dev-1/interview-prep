"""
Primitive types example.
"""

COUNT = 1000
RATING = 25.67
FLAG = False
COLOR = "Blue"
ESCAPE = "Can't"

# you can put any valid expression in between curly braces ex: {len(COLOR)}, {2+2} etc...
FORMATTED_STRING = f"{COLOR} {ESCAPE}"

print("Count:", COUNT, "|", "Rating:", RATING, "|",
      "Flag:", FLAG, "|", "Color:", COLOR)

print(len(COLOR))
print(COLOR[0])
print(COLOR[-1])
print(COLOR[1:])
print(COLOR[1:3])
print(COLOR[:3])

print(ESCAPE)  # \" \' \\ \n

print(FORMATTED_STRING)

x = input("x : ")
print(type(x))
y = int(x) + 2
print(y)
