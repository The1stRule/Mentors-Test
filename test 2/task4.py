def tringle_row(list1):
    # შევქმენი index ცვლადი და გავუტოლე 0-ს.
    # მას ვიყენებ გადმოცემულ სიაში კონკრეტულ index-ზე მდგომ ელემენტზე წვდომის მისაღებად
    index = 0
    # შევქმენი nums_list სია, სადაც ჩავამატებ ახალ ელემენტებს
    nums_list = [1, 1]

    # სანამ index არ უდრის გადმოცემული სიის სიგრძეს -1,
    # nums_list სიაში ბოლო ელემენტის წინ(-1 ინდექსზე მყოფი ელემენტის უკან) ვამატებ,
    # გადმოცემული სიის index-ზე მყოფ ელემენტს დამატებული მისი შემდეგი ელემენტი
    while index != len(list1) -1:
        nums_list.insert(-1, list1[index] + list1[index + 1])
        # index ცვლადს ვზრდი ერთით
        index += 1
    # ვაბრუნებ მიღებულ სიას(nums_list)
    return nums_list
    

#  Main function:
def pascal_triangle(number):
    # ვამოწმებ თუ რიცხვი უდრის 0-ს ან 1-ს ვაბრუნებ შესაბამის პასუხს
    if number == 0: return []
    elif number == 1: return [[1]]
    
    # სხვა შემთხვევაში ვქმნი result მასივს
    result = [[1], [1, 1]]

    # for ციკლით დავიწყე 3-დან და გადმოცემული რიცხვის ჩათვლით result სიაში ჩავამატებ tringle_row
    # ფუნქციის დაბრუნებული მნიშვნელობა(სია). ამ ფუნქციას გადაეცემა result მატრიცის ბოლო ელემენტი
    for _ in range(3, number + 1):
        result.append(tringle_row(result[-1]))
    # საბოლოოდ ვაბრუნებ reuslt მატრიცას
    return result

print(pascal_triangle(1))
print(pascal_triangle(2))
print(pascal_triangle(3))
print(pascal_triangle(5))
print(pascal_triangle(0))

# 1. Input: 1 → Output: [[1]]
# 2. Input: 2 → Output: [[1], [1, 1]]
# 3. Input: 3 → Output: [[1], [1, 1], [1, 2, 1]]
# 4. Input: 5 → Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
# 5. Input: 0 → Output: []