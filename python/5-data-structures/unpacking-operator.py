""" Unpacking Operator """

numbers = [1, 2, 3]
print(numbers)  # [1, 2, 3]
print(*numbers)  # 1 2 3

values = [*range(5), *"Hello"]
print(values)

first = {"x": 1}
second = {"x": 3, "y": 10, }
combined = {**first, **second, "z": 30}
print(combined)


SENTENCE = "This is a common interview question"

# 1. Remove spaces
TRIMMED = SENTENCE.replace(" ", "")

# 2. Count characters
counts = {}
for char in TRIMMED:
    if char in counts:
        counts[char] += 1
    else:
        counts[char] = 1
MOST_REPEATED = sorted(counts.items(), key=lambda kv: kv[1], reverse=True)
print(MOST_REPEATED[0])

# # 3. Find the most repeated character
# MOST_COMMON_CHAR = None
# MAX_COUNT = 0
# for char, count in counts.items():
#     if count > MAX_COUNT:
#         MOST_COMMON_CHAR = char
#         MAX_COUNT = count

# # 4. Show result
# print("Most repeated character:", MOST_COMMON_CHAR)
# print("Frequency:", MAX_COUNT)
