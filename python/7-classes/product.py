""" Product Class """


# class Product:
#     """Product class with price validation"""

#     def __init__(self, price):
#         self.set_price(price)

#     def get_price(self):
#         """Getter for price"""
#         return self.__price

#     def set_price(self, value):
#         """Setter with validation"""
#         if value < 0:
#             raise ValueError("Value can't be negative.")
#         self.__price = value

#     price = property(get_price, set_price)


class Product:
    """Product class with price validation"""

    def __init__(self, price):
        self.price = price   # ✅ assign, triggers setter

    @property
    def price(self):
        """Getter for price"""
        return self.__price

    @price.setter
    def price(self, value):
        """Setter with validation"""
        if value < 0:
            raise ValueError("Value can't be negative.")
        self.__price = value


try:
    product = Product(-50)
except ValueError as e:
    print("Error:", e)

p = Product(10)
print(p.price)
p.price = 20
print(p.price)
