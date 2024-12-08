# def find_jsd(num1, num2):
#     for i in range(num1, num1 * num2 + 1):
#         if num1 % i == 0 and num2 % i == 0:
#             return i

# def sum_fractions(frac1, frac2):
#     num1 = frac1[0] + frac2[1]
#     num2 = frac1[1] + frac2[0]
    
#     jsd = find_jsd(frac1[1], frac2[1])

#     return (num1 / jsd) + (num2 / jsd)


# print(sum_fractions((1, 2), (1, 3)))
# print(sum_fractions((1, 4), (1, 4)))
# print(sum_fractions((2, 5), (1, 5)))
# print(sum_fractions((3, 4), (2, 6)))
# print(sum_fractions((5, 12), (7, 15)))

# Test Cases:
# ● Input: frac1 = (1, 2), frac2 = (1, 3)
# Output: (5, 6)
# Explanation: The LCM of 2 and 3 is 6. The sum is (1 * 3) / 6 + (1 * 2) / 6
# = 3/6 + 2/6 = 5/6.
# ● Input: frac1 = (1, 4), frac2 = (1, 4)
# Output: (1, 2)
# Explanation: The LCM of 4 and 4 is 4. The sum is (1/4 + 1/4) = 2/4 = 1/2.
# ● Input: frac1 = (2, 5), frac2 = (1, 5)
# Output: (3, 5)
# Explanation: The LCM of 5 and 5 is 5. The sum is (2/5 + 1/5) = 3/5.
# ● Input: frac1 = (3, 4), frac2 = (5, 6)
# Output: (19, 12)
# Explanation: The LCM of 4 and 6 is 12. The sum is (3 * 3) / 12 + (5 * 2) /
# 12 = 9/12 + 10/12 = 19/12.
# ● Input: frac1 = (5, 12), frac2 = (7, 15)
# Output: (139, 60)
# Explanation: The LCM of 12 and 15 is 60. The sum is (5 * 5) / 60 + (7 * 4)
# / 60 = 25/60 + 28/60 = 53/60.