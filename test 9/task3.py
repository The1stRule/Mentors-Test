def remove_punctuation(text):
    string1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ "

    result = ""

    for i in text:
        if i in string1:
            result += i
    return result

# Task 3: Remove Punctuation
# Write a function remove_punctuation(s) that removes all punctuation characters from a string.
# Test Cases:

print(remove_punctuation("Hello, world!")) # "Hello world"
print(remove_punctuation("Python: easy? Yes!")) # "Python easy Yes"