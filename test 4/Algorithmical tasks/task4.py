# Find All Anagrams in a String

def find_anagram(string_s, string_p):
    if len(string_s) != len(string_p): return False

    for i in string_s:
        if string_s.count(i) != string_p.count(i):
            return False
    return True

print(find_anagram("bbaa", "bbaa"))
print(find_anagram("baab", "baba"))
print(find_anagram("abb", "baa"))