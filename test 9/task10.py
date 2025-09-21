def longest_consecutive_char(text):
    if not text: return "", 0

    result = []
    string1 = text[0]

    for i in text[1:] + " ":
        if string1[-1] == i:
            string1 += i
        else:
            if len(result) == 0:
                result.append(string1[-1])
                result.append(len(string1))
            else:
                if result[-1] < len(string1):
                    result[0] = (string1[-1])
                    result[1] = (len(string1))
            string1 = i

    return result[0], result[1]

# Task 10: Longest Consecutive Characters
# Write a function longest_consecutive_char(s) that returns the longest run of the same character.
# Test Cases:

print(longest_consecutive_char("aaabbbaaac")) # ("a",3)
print(longest_consecutive_char("bbbbb")) # ("b",5)
print(longest_consecutive_char("")) # ("",0)