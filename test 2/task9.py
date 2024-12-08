def is_prime(num):
    # for loop-ით 2 დან, გადმოცემულ რიცხვამდე გადავუარე ყველა რიცხვს
    for i in range(2, num):
        # ვამოწმებ, თუ გადმოცემული რიცხვი გაყოფილი საიტერაციო ცვლადის ამჟამინდელ მნიშვნელობაზე
        # ნაშთს აბრუნებს 0-ს, ის არ არის მარტივი და პირდაპირ ვაბრუნებ False-ს
        if num % i == 0:
            return False
    # თუ For loop-ი დამთავრდა და არაფერი დაბრუნებულა, ესეიგი რიცხვი მარტივია და ვაბრუნებ True-ს
    return True

# Main Function
def primorial_of_number(n):
    # შევქმენი ცვლადი result და გავუტოლე ის 1-ს
    result = 1
    
    # [i for i in range(1, n + 1) if is_prime(i)] - for ციკლით გადავუარე 1-დან n-ის ჩათვლით ყველა რიცხვს
    # გამოვიძახე ფუნქცია is_prime და გადავეცი მას ამჟამინდელი i-ის მნიშვნელობა. თუ ის დააბრუნებს True-ს,
    # ესეიგი რიცხვი არის მარტივი და ჩავამატებ მას სიაში

    # for ციკლით გადავუარე მიღებულს სიას და ყველა რიცხვი გავამრავლე ერთმანეთზე
    for i in [i for i in range(1, n + 1) if is_prime(i)]:
        result *= i
    # საბოლოოდ დავაბრუნე ეს სია
    return result

print(primorial_of_number(5))
print(primorial_of_number(10))
print(primorial_of_number(1))
print(primorial_of_number(7))
print(primorial_of_number(11))

# Test Cases:
# ● Input: n = 5
# Output: 30
# Explanation: The prime numbers less than or equal to 5 are 2, 3, and 5. Their product
# is 2 * 3 * 5 = 30.
# ● Input: n = 10
# Output: 210
# Explanation: The prime numbers less than or equal to 10 are 2, 3, 5, and 7. Their
# product is 2 * 3 * 5 * 7 = 210.
# ● Input: n = 1
# Output: 1
# Explanation: There are no primes less than or equal to 1, so the primorial is 1 by
# definition.
# ● Input: n = 7
# Output: 210
# Explanation: The prime numbers less than or equal to 7 are 2, 3, 5, and 7. Their
# product is 2 * 3 * 5 * 7 = 210.
# ● Input: n = 11
# Output: 2310
# Explanation: The prime numbers less than or equal to 11 are 2, 3, 5, 7, and 11. Their
# product is 2 * 3 * 5 * 7 * 11 = 2310.