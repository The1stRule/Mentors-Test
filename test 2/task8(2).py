def xbonacci_sequence(x, n):
    # შევქმენი result ცვლადი და გავუტოლე ცარიელ სიას
    result = []
    # for ციკლის მეშვეობით result სიაში x-ჯერ ჩავამატე 1
    for _ in range(x):
        result.append(1)
    
    # ვამოწმებ თუ სიის სიგრძე მეტია n-ზე, slicing-ის მეშვეობით დავაბრუნებ n სიგრძის სიას
    if len(result) > n: return result[:n]

    # სანამ result სიის სიგრძე არ უდრის n-ს, მანამდე slicing-ის მეშვეობით reslut სიაში ვამატებ ბოლო სამი ელემენტის ჯამს
    while len(result) != n:
        result.append(sum(result[-x:]))
    
    # ვაბრუნებ result სიას
    return result


print(xbonacci_sequence(3, 10))
print(xbonacci_sequence(2, 10))
print(xbonacci_sequence(4, 6))
print(xbonacci_sequence(5, 8))
print(xbonacci_sequence(3, 1))
# Test Cases:
# ● Input: X = 3, n = 10
# Output: [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]
# Explanation: The first 10 numbers of the Xbonacci sequence starting with [1, 1,
# 1] and X = 3.
# ● Input: X = 2, n = 10
# Output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
# Explanation: This is the Fibonacci sequence, where each number is the sum of the
# previous two numbers.
# ● Input: X = 4, n = 6
# Output: [1, 1, 1, 1, 4, 7]
# Explanation: Starting with [1, 1, 1, 1], the next terms are calculated by
# summing the last 4 terms.
# ● Input: X = 5, n = 8
# Output: [1, 1, 1, 1, 1, 5, 9, 17]
# Explanation: The sequence starts with five 1s, and each subsequent number is the
# sum of the previous 5 numbers.
# ● Input: X = 3, n = 1
# Output: [1]
# Explanation: Only one term in the sequence is required, so the output is [1].