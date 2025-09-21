def has_subset_sum(numbers, num):
    if sum(numbers) == num: return True

    numbers_list = [[i] for i in numbers]

    nums_list = []

    for _ in range(len(numbers) - 1):
        for x in range(len(numbers_list)):
            for y in range(len(numbers)):
                if numbers.count(numbers[y]) > numbers_list[x].count(numbers[y]):
                    nums_list.append(numbers_list[x] + [numbers[y]])
        for z in nums_list:
            if sum(z) == num:
                return True
        numbers_list = nums_list.copy()
        nums_list.clear()
    return False

# Task 7: Subset Sum Check
# Write a function has_subset_sum(nums, target) that returns True if any subset of numbers adds up to target.
# Test Cases:

print(has_subset_sum([3,34,4,12,5,2], 9)) # True  # 4+5
print(has_subset_sum([3,34,4,12,5,2], 30)) # False
print(has_subset_sum([], 0)) # True'