
def find_prefix(array):
    if array[0] == array[1] and array[0] == array[2]:
        return array[0]
    result = ""
    index = 0
    for i in array[0]:
        if i == array[1][index] and i == array[2][index]:
            result += i
            index += 1
        else:
            return result

print(find_prefix(["flower", "flow", "flight"]))
print(find_prefix(["dog", "racecar", "car"]))
print(find_prefix(["apple", "apple", "apple"]))