# pylint: disable=missing-docstring


class Animal:
    def __init__(self):
        print("Animal Constructor")
        self.age = 1

    def eat(self):
        print("Eat")


class Mammal(Animal):
    def __init__(self):
        super().__init__()
        print("Mammal Constructor")
        self.weight = 5

    def walk(self):
        print("Walk")


class Fish(Animal):
    def swim(self):
        print("Swim")


a = Animal()
m = Mammal()
f = Fish()

print(isinstance(m, Animal))  # True
print(isinstance(f, Mammal))  # False
print(isinstance(a, object))  # True
print(isinstance(m, object))  # True
print(issubclass(Mammal, Animal))  # True
print(issubclass(Mammal, Fish))  # False
print(issubclass(Mammal, object))  # True

print(m.age)
print(m.weight)

# -------------------------------------------MULTILEVEL INHERITANCE
# Grandparent class


class Vehicle:
    def start_engine(self):
        print("Vehicle engine started")


class Car(Vehicle):
    def open_doors(self):
        print("Car doors opened")


class SportsCar(Car):
    def turbo_boost(self):
        print("SportsCar activated turbo boost")


# Usage
sc = SportsCar()
sc.start_engine()   # from Vehicle
sc.open_doors()     # from Car
sc.turbo_boost()    # from SportsCar


# -------------------------------------------MULTIPLE INHERITANCE


class Flyer:
    def fly(self):
        print("Flying in the sky")


class Swimmer:
    def swim(self):
        print("Swimming in water")


class Duck(Flyer, Swimmer):
    def quack(self):
        print("Duck says quack")


# Usage
d = Duck()
d.fly()    # from Flyer
d.swim()   # from Swimmer
d.quack()  # from Duck
