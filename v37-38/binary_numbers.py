# gör om binära tal till decimala
number_string = input("Skriv ett binärt tal: ")
sum = 0
index = len(number_string)
for character in number_string:
    index = index-1
    if character == "1":
        sum = sum+2**index
print("Talet motsvarar", str(sum))