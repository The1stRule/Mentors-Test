
def containing_array(array):
    # ვამოწმებ თუ სიის სიგრეძე უდრის 1-ს, ვაბრუნებთ მასში არსებული რიცხვს დამატებული ერთი
    if len(array) == 1:
        return array[0] + 1
    # სხვა შემთხვევაში გადავუვლი for loop-ით სიას და ისეთ რიცხვს,
    # რომელიც არ არის 1-დან n-მდე(სიის ბოლო ელემენტამდე) და ვაბრუნებ
    return [i for i in range(1, array[-1] + 1) if i not in array][0]

print(containing_array([1, 2, 4, 5]))
print(containing_array([1]))
print(containing_array([2, 3, 1, 5]))