def reverse_order_of_words(string1):
    # შევქმენი ცვლადი result სადაც შევინახე გასპლიტული(გავხლიჩე space-ბზე) string1 და შემოვაბრუნე
    result = string1.split()[::-1]
    # გამოვიყენე join ფუნქცია, თითოეულ სიტყვას შორის ჩავსვი space-ი და დავაბრუნე
    return " ".join(result)


print(reverse_order_of_words("Hello World"))
print(reverse_order_of_words("Python is great"))
print(reverse_order_of_words("a b c"))
print(reverse_order_of_words(""))
print(reverse_order_of_words(" Spaces "))

# 1. Input: "Hello World" → Output: "World Hello"
# 2. Input: "Python is great" → Output: "great is Python"
# 3. Input: "a b c" → Output: "c b a"
# 4. Input: "" → Output: ""
# 5. Input: " Spaces " → Output: "Spaces"