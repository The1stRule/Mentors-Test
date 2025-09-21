def decode_rle(string1):
    digits = [int(i) for i in string1 if i.isdigit()]

    result = ""
    index = 0

    for i in string1:
        if not i.isdigit():
            result += i * digits[index]
            index += 1
    return result
    

# Task 2: Decode Run-Length Encoding
# Write a function decode_rle(s) that decodes a run-length encoded string.
#  Example: "a3b2c1" → "aaabbc"
# Test Cases:

print(decode_rle("a3b2c1")) # "aaabbc"
print(decode_rle("x5y1")) # "xxxxxy"
print(decode_rle("")) # ""