# Se uppgift https://docs.google.com/document/d/1jAf795aPWnR5mtIbu8mshaAdVC4p2ZDWqXG80d1qzAg/edit?tab=t.0#heading=h.cgm7esky88de
unchanged = "aeoueiyåäö .,!?"
def rovar_sprak(my_input): # observera att det är en FUNKTION som efterfrågas!
    output = ""
    for ch in my_input:
        if ch in unchanged:
            output += ch
        else:
            output += ch + "o" + ch
    return output

print(rovar_sprak("Kaka kaka!"))
print(rovar_sprak("javascript"))