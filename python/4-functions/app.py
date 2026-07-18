"""
Functions example.
"""

from typing import Union


def greet(first_name: str, last_name: str) -> str:
    """ Function prints Welcome & returns fullname """
    print("Welcome!")
    return f"{first_name} {last_name}"


RESULT = greet("John", "Doe")

with open("content.txt", "w", encoding="utf-8") as file:
    file.write(RESULT)

print(RESULT)

print("-----------------------------------------------------------------------------------")


def increment(number: int, by: int = 1, another: int = 2) -> int:
    """Return the sum of number and by."""
    return number + by + another


print(increment(2, by=3))  # by=3 is a keyword argument

print("-----------------------------------------------------------------------------------")

# Use *args when you don’t know how many arguments will be passed.


def add_all(*numbers: int) -> int:
    """Return the sum of all given numbers."""
    return sum(numbers)


print(add_all(1, 2, 3))          # 6
print(add_all(5, 10, 15, 20))    # 50
print(add_all())                 # 0

print("-----------------------------------------------------------------------------------")

# Use *args when you don’t know how many arguments will be passed.


def print_user(**user) -> None:
    """Print all keyword arguments as a dictionary."""
    print(user)


print_user(id=1, name="Alice", age=25)


print("-----------------------------------------------------------------------------------")

# You can mix normal args, defaults, *args, and **kwargs. *args should come first.


def combine(a: int,  *args: int, b: int = 2, **kwargs: str) -> None:
    """Example showing how to combine *args and **kwargs."""
    print("a:", a)
    print("b:", b)
    print("args:", args)      # tuple of extra positional args
    print("kwargs:", kwargs)  # dict of extra keyword args


combine(1, 4, 5, 6, b=3, x="hello", y="world")

print("-----------------------------------------------------------------------------------")

MESSAGE = "a"


def print_message() -> None:
    """ Scopes """
    MESSAGE = "b"   # modifies the global MESSAGE instead of creating a local one
    print(MESSAGE)


print_message()
print(MESSAGE)  # prints "a"

print("-----------------------------------------------------------------------------------")


def fizz_buzz(number: int) -> Union[str, int]:
    """
    Return 'Fizz' if number is divisible by 3,
    'Buzz' if divisible by 5,
    'FizzBuzz' if divisible by both,
    otherwise return the number itself.
    """
    if number % 3 == 0 and number % 5 == 0:
        return "FizzBuzz"

    if number % 3 == 0:
        return "Fizz"

    if number % 5 == 0:
        return "Buzz"

    return number


print(fizz_buzz(9))
