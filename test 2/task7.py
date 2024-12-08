# შევქმენი ფუნქცია, რომელიც იგებს არის თუ არა გადმოცემული რიცხვი მარტივი
def is_prime(num):
    # for loop-ით 2 დან, გადმოცემულ რიცხვამდე გადავუარე ყველა რიცხვს
    for i in range(2, num):
        # ვამოწმებ, თუ გადმოცემული რიცხვი გაყოფილი საიტერაციო ცვლადის ამჟამინდელ მნიშვნელობაზე
        # ნაშთს აბრუნებს 0-ს, ის არ არის მარტივი და პირდაპირ ვაბრუნებ False-ს
        if num % i == 0:
            return False
    # თუ For loop-ი დამთავრდა და არაფერი დაბრუნებულა, ესეიგი რიცხვი მარტივია და ვაბრუნებ True-ს
    return True

# Main Function:
def find_primes(start, end):
    # შევქმენი ცარიელი სია result, სადაც ცავამატებ ელემენტებს
    result = []
    # for loop-ით საწყისი მნიშვნელობიდან(start), გადმოცემულ საბოლოო(end) მნიშვნელობამდე გადავუვლი ყველა რიცხვს
    for i in range(start, end):
        # შემდეგ ვამოწმებ, გამოვიძახებ is_prime ფუნქციას და თუ ის დააბრუნებს True-ს ესეიგი რიცხვი მარტივია
        # და ჩავამატებ მას სიაში
        if is_prime(i):
            result.append(i)
    # საბოლოოდ ვაბრუნებ ამ სიას
    return result

print(find_primes(10, 20))
print(find_primes(1, 10))
print(find_primes(20, 30))
print(find_primes(24, 25))
print(find_primes(1, 1))

# Test Cases:
# ● Input: start = 10, end = 20
# Output: [11, 13, 17, 19]
# ● Input: start = 1, end = 10
# Output: [2, 3, 5, 7]
# ● Input: start = 20, end = 30
# Output: [23, 29]
# ● Input: start = 24, end = 25
# Output: []
# ● Input: start = 1, end = 1
# Output: []