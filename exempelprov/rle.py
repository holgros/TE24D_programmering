# Se uppgift https://docs.google.com/document/d/1jAf795aPWnR5mtIbu8mshaAdVC4p2ZDWqXG80d1qzAg/edit?tab=t.0#heading=h.qgwcxwwchixe
def rle(text):
    i = 0
    output = ""
    while i < len(text):
        letter = text[i]
        number_of_letters = 0
        while i < len(text) and text[i] == letter:
            i = i+1
            number_of_letters = number_of_letters + 1
        if number_of_letters == 1: # om bara en förekomst av bokstaven så skriver vi inte ut "1"
            output = output + letter
        else:
            output = output + str(number_of_letters) + letter
    return output

print(rle("WWWWAARRRRRRGHH"))