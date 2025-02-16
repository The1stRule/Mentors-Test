# Product of Array Except Self

def arr_product(numbers):
    result = []

    for i in range(len(numbers)):
        num = 1
        for x in range(len(numbers)):
            if x != i:
                num *= numbers[x]
        result.append(num)
    return result

print(arr_product([1,2,3]))