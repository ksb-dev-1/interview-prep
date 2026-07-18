# pylint: disable=missing-docstring

from abc import ABC, abstractmethod


class Shape(ABC):

    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass


class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)


class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2

    def perimeter(self):
        return 2 * 3.14 * self.radius

# -------------------------
# Usage

# s = Shape()  # ❌ Cannot instantiate abstract class


r = Rectangle(5, 10)
print("Rectangle area:", r.area())
print("Rectangle perimeter:", r.perimeter())

c = Circle(7)
print("Circle area:", c.area())
print("Circle perimeter:", c.perimeter())
