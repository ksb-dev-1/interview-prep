""" Exceptions """
# ------------------------------------------------------------Example-1
# try:
#     age = int(input("Age :"))
#     x = 18 / age
# except ValueError as error:
#     print("You didn't enter a valid age.")
#     print(error)
#     print(type(error))
# except ZeroDivisionError:
#     print("Age can not be 0")
# else:
#     print("No exceptions were thrown.")
# finally:
#     print("The 'try except' is finished")

# ------------------------------------------------------------

# Age :10
# No exceptions were thrown.
# The 'try except' is finished

# Age :r
# You didn't enter a valid age.
# invalid literal for int() with base 10: 'r'
# <class 'ValueError'>
# The 'try except' is finished

# Age :0
# Age can not be 0
# The 'try except' is finished

# ------------------------------------------------------------ Example-2

# try:
#     age = int(input("Age :"))
#     x = 18 / age
# except (ValueError, ZeroDivisionError):
#     print("You didn't enter a valid age.")
# else:
#     print("No exceptions were thrown.")
# finally:
#     print("The 'try except' is finished")

# ------------------------------------------------------------Example-3
# try:
#     f = open("file.txt", "w")   # open for writing
#     try:
#         f.write("Lorum Ipsum")
#     except:
#         print("Something went wrong when writing to the file")
#     finally:
#         f.close()
# except FileNotFoundError:
#     print("File not found error.")
# except PermissionError:
#     print("You don't have permission to write to this file.")
# else:
#     print("No exceptions were thrown.")
# finally:
#     print("The 'try except' is finished")

# try:
#     with open("file.txt", "w") as f:
#         f.write("Lorum Ipsum")
# except FileNotFoundError:
#     print("File not found.")
# except PermissionError:
#     print("No permission to write to this file.")
# else:
#     print("No exceptions were thrown.")
# finally:
#     print("The 'try except' is finished")

# ------------------------------------------------------------Example-4 (Raising Exception)


def calculate_xfactor(age: int):
    if age <= 0:
        raise ValueError("Age can not be 0 or less")
    return 10 / age


try:
    calculate_xfactor(-1)
except ValueError as error:
    print(error)
