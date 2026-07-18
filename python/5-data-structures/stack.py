""" Stack Implemetation """

stack = []

# Push
stack.append('A')
stack.append('B')
stack.append('C')
print("Stack: ", stack)

# Peek
topElement = stack[-1]
print("Peek: ", topElement)

# Pop
poppedElement = stack.pop()
print("Pop: ", poppedElement)

# Stack after Pop
print("Stack after Pop: ", stack)

# isEmpty
IS_EMPTY = not bool(stack)
print("IS_EMPTY: ", IS_EMPTY)

# Size
print("Size: ", len(stack))
