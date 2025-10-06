# Om en funktion inte returnerar någonting och man försöker
# tilldela en variabel resultatet av en sådan funktion blir
# variabelns värde None.
#
# None är en egen datatyp https://www.w3schools.com/python/ref_keyword_none.asp

def en_funktion_som_inte_returnerar():
    print("I funktionen")


# variabeln kommer tilldelas ett tomt värde som heter None eftersom funktionen inte returnerar någonting.
variabel = en_funktion_som_inte_returnerar()

print(variabel)

# man kan skriva villkor som kontrollerar om en variabel är None
if variabel == None:
    print("Variabeln är None")