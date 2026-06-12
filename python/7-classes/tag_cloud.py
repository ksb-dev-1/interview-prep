""" Custom Smart Dictionary """

import dataclasses


@dataclasses.dataclass
class TagCloud:
    """ TagCloud Class """

    def __init__(self):
        self.__tags = {}

    def add(self, tag):
        """ Add tag """
        self.__tags[tag.lower()] = self.__tags.get(tag.lower(), 0) + 1

    def __getitem__(self, tag):
        return self.__tags.get(tag.lower(), 0)

    def __setitem__(self, tag, count):
        self.__tags[tag.lower()] = count

    def __len__(self):
        return len(self.__tags)

    def __iter__(self):
        return iter(self.__tags)

    def print(self):
        """ Print """
        print(self.__tags)


cloud = TagCloud()

# add tags
cloud.add("Python")
cloud.add("python")
cloud.add("PYTHON")
cloud.add("JavaScript")

# show dictionary
cloud.print()   # {'python': 3, 'javascript': 1}

# get counts
print(cloud["Python"])       # 3
print(cloud["JavaScript"])   # 1
print(cloud["C++"])          # 0

# set counts
cloud["Python"] = 10
cloud["C++"] = 2
cloud.print()   # {'python': 10, 'javascript': 1, 'c++': 2}

# length
print(len(cloud))   # 3

# iterate
for t in cloud:
    print(t, "->", cloud[t])

# print(cloud.__dict__)
# print(cloud._TagCloud__tags)
