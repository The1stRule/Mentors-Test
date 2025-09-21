def max_product(numbers):
    result = []

    for i in range(0, len(numbers)):
        for x in range(0, len(numbers)):
            if i != x:
                result.append(numbers[i] * numbers[x])
    return max(result)

# Task 8: Largest Product of Two Numbers
# Write a function max_product(nums) that returns the largest product of any two numbers in the list.
# Test Cases:

print(max_product([1,2,3,4])) # 12
print(max_product([1,2,3,5,4,5,])) # 25