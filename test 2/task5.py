def encrypt_and_Decrypt(string1, num):
    # შევქმენი ცვლადი letters სადაც შევინახე ანბანი 2-ჯერ
    letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    # შევქმენი result ცვლადი და გავუტოლე ცარიელ string-ს
    result = ""
    # გადაუარე გადმოცემულ string1-ს
    for i in string1:
        # ვამოწმებ, თუ i არ არის letters string-ში, მაშინ ის არის სხვა პუნქტუაცია ან სხვა
        # ამიტომაც უბრალოდ ვამატებ result ცვლადში
        if i not in letters:
            result += i
        else:
            # სხვა შემთხვევაში საიტერაციო ცვლადიში შენახული სიმბოლოს ინდექსს, დავუმატებ num გადმოცემულ პარამეტრს
            # და result ცლვადში ჩავამატებ, კონკადინაციის მეშვეობით letters stirng-იდან მიღებულ index-ზე მყოფ სიმბოლოს
            result += letters[letters.index(i) + num]
    # საბოლოოდ ვაბრუნებ result string-ს
    return result

print(encrypt_and_Decrypt("abc", 2))
print(encrypt_and_Decrypt("xyz", 3))
print(encrypt_and_Decrypt("Hello, World!", 5))
print(encrypt_and_Decrypt("Python", 0))
print(encrypt_and_Decrypt("abc", -1))

# 1. Input: ("abc", 2) → Output: "cde"
# 2. Input: ("xyz", 3) → Output: "abc"
# 3. Input: ("Hello, World!", 5) → Output: "Hjqqt, Wtwqi!"
# 4. Input: ("Python", 0) → Output: "Python"
# 5. Input: ("abc", -1) → Output: "zab"