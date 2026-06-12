"""
Control flow example.
"""

TEMPERATURE = 20

if TEMPERATURE > 30:
    print("Yes")
    print("Stay hydrated.")
elif TEMPERATURE > 20:
    print("It's nice")
else:
    print("No")
print("Done")

print(" ----------------------- ")

# -------------------- ternary

AGE = 18
MESSAGE = "Eligible" if AGE >= 18 else "Not eligible"

print(MESSAGE)

print(" ----------------------- ")
# -------------------------------- and , or , not


print(" ----------------------- ")
# -------------------------------- chaining comparision operators

if 18 <= AGE < 65:
    print("Eligible")

print(" ----------------------- ")
# -------------------------------- for loop

# for number in range(3):
# for number in range(1, 4):
for number in range(1, 10, 2):
    print("For", number, (number + 1) * ".")

print(" ----------------------- ")
# -------------------------------- break

SUCCESSFUL = True

for number in range(3):
    print(number + 1, ": Attempt")
    if SUCCESSFUL:
        print("Attempt successful")
        break
else:
    print("Attempted 3 times and failed")

print(" ----------------------- ")
# --------------------------------

for x in range(3):
    for y in range(3):
        print(f"({x}, {y})")

print(" ----------------------- ")
# -------------------------------- Iterables

print(type(5))
print(type(range(5)))

for x in "Python":
    print(x)

for x in [1, 2, 3, 4, 5]:
    print(x)

print(" ----------------------- ")
# --------------------------------

COMMAND = ""
while COMMAND != "quit":
    COMMAND = input(">")
    print("ECHO", COMMAND)


print(" ----------------------- ")
# --------------------------------
