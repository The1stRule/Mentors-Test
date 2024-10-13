
def find_majority(array):
    return [i for i in array if array.count(i) > len(array) // 2][0]

print(find_majority([3, 2, 3]))
print(find_majority([2, 2, 1, 1, 2]))
print(find_majority([1, 1, 1, 1, 1]))