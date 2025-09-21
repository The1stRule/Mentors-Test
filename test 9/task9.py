def lis_length(numbers):
    arr = [numbers[0]]

    result = []

    for i in numbers[1:]:
        if i > arr[-1]:
            arr.append(i)
        else:
            result.append(arr)
            arr = [i]
    result.append(arr)

    index = result.index(max(result, key=len))

    if index == 0: res = result[index] + result[index + 1]
    elif index == len(result) - 1: res = result[index - 1] + result[index]
    else:
        if len(result[index] + result[index + 1]) > len(result[index - 1] + result[index]):
            res = result[index] + result[index + 1]
        else:
            res = result[index - 1] + result[index]

    result_list = []

    for i in res:
        if len(result_list) == 0 or i > result_list[-1] or i in result_list:
            result_list.append(i)
        else:
            result_list.pop()
            result_list.append(i)
    return 1 if result_list.count(result_list[-1]) == len(result_list) else len(result_list)

# Task 9: Longest Increasing Subsequence Length
# Write a function lis_length(nums) that returns the length of the longest strictly increasing subsequence.
# Test Cases:

print(lis_length([10,9,2,5,3,7,101,18])) # 4  # [2,3,7,101]
print(lis_length([0,1,0,3,2,3])) # 4
print(lis_length([7,7,7,7])) # 1