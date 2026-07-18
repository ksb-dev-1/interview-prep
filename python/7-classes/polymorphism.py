# pylint: disable=missing-docstring

# ----------------------------------------------------------------------
# Method Overriding (Class-based Polymorphism)


class Animal:
    def speak(self):
        print("Some generic sound")


class Dog(Animal):
    def speak(self):
        print("Woof!")


class Cat(Animal):
    def speak(self):
        print("Meow!")


# --------------------------
# Usage
animals = [Dog(), Cat(), Animal()]

for a in animals:
    a.speak()

# ----------------------------------------------------------------------
# Duck Typing (Pythonic Polymorphism)


class Bird:
    def fly(self):
        print("Bird is flying")


class Airplane:
    def fly(self):
        print("Airplane is flying")


# --------------------------
# Usage
things_that_fly = [Bird(), Airplane()]

for thing in things_that_fly:
    thing.fly()   # same method, different classes
