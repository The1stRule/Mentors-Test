def count_unique(string1):
    # შევქმენი ცარიელი სია result, სადაც ჩავამატებ ყველა უნიკალურ სიტყვას
    result = []
    # გადმოცემული string1 გადავიყვანე დაბალ რეგისტრში, გავსპლიტე(string-ი გაიხლიჩა ყველა space-ზე)
    # და გადავუარე for ციკლით
    for i in string1.lower().split():
        # ვამოწმებ, თუ სიტყვა არ არის result სიაში, ჩავამატებ
        if i not in result:
            result.append(i)
    # საბოლოოდ ვაბრუნებ result სიის სიგრძეს(უნიკალური სიტყვების რაოდენობა)
    return len(result)

print(count_unique("The quick brown fox jumps over the lazy dog"))
print(count_unique("Hello hello world!"))
print(count_unique(""))
print(count_unique("Python is fun. Python is cool."))
print(count_unique("One word"))

# 1. Input: "The quick brown fox jumps over the lazy dog" → Output: 8
# 2. Input: "Hello hello world!" → Output: 2
# 3. Input: "" → Output: 0
# 4. Input: "Python is fun. Python is cool." → Output: 4
# 5. Input: "One word" → Output: 2