# First Missing Positive Integer

def first_missing(numbers):
    sorted_nums = sorted(numbers)

    for i in range(len(numbers) - 1):
        if sorted_nums[i] + 1 != sorted_nums[i + 1]:
            return sorted_nums[i] + 1
    return 1

print(first_missing([-1,-2,-3]))
print(first_missing([3,1]))
print(first_missing([3,5,1,2,6]))
print(first_missing([4,5,6]))
print(first_missing([1,4,5]))