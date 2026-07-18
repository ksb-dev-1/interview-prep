# pylint: disable=missing-docstring

# Can use all list methods like append(), extend(), pop(), sort(), etc.

class MyList(list):
    def sum(self):
        """Return the sum of all numeric elements"""
        return sum(self)

    def average(self):
        """Return the average of all numeric elements"""
        return sum(self) / len(self)

    def append(self, value):                            # Overriding existing behaviour
        print(f"Adding {value} to the list")
        super().append(value)


# Usage
numbers = MyList([1, 2, 3, 4, 5])
print(numbers.sum())      # 15
print(numbers.average())  # 3.0

# Still behaves like a normal list
numbers.append(6)
print(numbers)            # [1, 2, 3, 4, 5, 6]
