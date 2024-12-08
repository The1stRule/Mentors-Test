
def are_anagrams(string1, string2):
    # გადავაქციე string1 სიად, რომ შევძლო ელემენტების ამოშლა
    string1 = list(string1)
    # for ციკლით გადავუარე string2-ს
    for i in string2:
        # ვამოწმებ თუ i საიტერაციო ცვლადის მნიშვნელობა არის string1 სიაში ამოვშლია მას
        if i in string1:
            string1.remove(i)
    # საბოლოოდ ვამოწმებ, თუ string1 სია ცარიელია დავაბრუნებ True-ს რადგან ანაგრამაა, სხვა შემთხვევაში False
    return True if len(string1) == 0 else False

print(are_anagrams("listen", "silent"))
print(are_anagrams("triangle", "integral"))
print(are_anagrams("apple", "pale"))
print(are_anagrams("a", "a"))
print(are_anagrams("rat", "car"))

# 1. Input: ("listen", "silent") → Output: True
# 2. Input: ("triangle", "integral") → Output: True
# 3. Input: ("apple", "pale") → Output: False
# 4. Input: ("a", "a") → Output: True
# 5. Input: ("rat", "car") → Output: False