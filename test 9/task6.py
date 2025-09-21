def count_substring(text, string1):
    result = 0

    for i in range(0, len(text) - 1):
        if text[i: i + len(string1)] == string1:
            result += 1
    return result

# Task 6: Count Substring Occurrences
# Write a function count_substring(text, sub) that returns how many times a substring sub occurs in text (overlaps allowed).
# Test Cases:

print(count_substring("aaaa", "aa")) # 3
print(count_substring("hello hello", "lo")) # 2
print(count_substring("banana", "ana")) # 2