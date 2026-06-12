""" Classes """


class Point:
    """ Point class """
    default_color = "red"

    def __init__(self, x, y):
        self.x = x
        self.y = y

    @classmethod
    def zero(cls):
        """ class method """
        return cls(0, 0)

    def __str__(self):
        return f"({self.x}, {self.y})"

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __gt__(self, other):
        return self.x > other.x and self.y > other.y

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def draw(self):
        """ Draw method """
        print(f"Drawing at ({self.x}, {self.y})")


point = Point(10, 20)
print(type(point))  # <class '__main__.Point'>
print(isinstance(point, Point))  # True
print(point.y)
point.draw()

another = Point(1, 2)

print(point.default_color)  # red
print(another.default_color)  # red

Point.default_color = "Orange"

print(point.default_color)  # orange
print(another.default_color)  # orange

temp = Point.zero()
temp.draw()

# (1,2) because we have defined __str__ or else we'll get
# <__main__.Point object at 0x00000121B4516A50>
print(point)


# ----------------------------------COMPARING OBJECTS

print(point == another)
print(point > another)
print(point + another)
