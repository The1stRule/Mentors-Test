def remove_consecutive_duplicates(string1):
    result = ""

    for i in string1:
        if i not in result:
            result += i
    return result

# Task 5: Remove Consecutive Duplicates
# Write a function remove_consecutive_duplicates(s) that removes consecutive duplicate characters from a string.
# Test Cases:

print(remove_consecutive_duplicates("aaabbcddd")) # "abcd"
print(remove_consecutive_duplicates("hellooo")) # "helo"
print(remove_consecutive_duplicates("abc")) # "abc"