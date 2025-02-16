# Find the Majority Element

def maj_element(numbers):
    for i in numbers:
        if numbers.count(i) > len(numbers) // 2:
            return i
        
print(maj_element([1,1,1,2]))
print(maj_element([3,4,5,5]))