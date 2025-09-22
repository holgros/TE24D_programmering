# skapa en lista
lista = [1, 2]

#skriv ut lista
print(lista) # [1, 2]

# skriv ut position med index
print(lista[1]) # 2

# ändra i listan genom att hänvisa till index
lista[1] = 3
print(lista) # [1, 3]

# lägg till element i slutet av listan genom att använda append
lista.append(4)
print(lista) # [1, 3, 4]

# lägg till element på godtycklig plats i listan genom att använda insert
lista.insert(1, 5) # två argument: ett för plats i lista och ett för det nya elementet
print(lista) # [1, 5, 3, 4]

# ta bort från listan genom att använda pop
variabel = lista.pop() # tar bort sista elementet och sparar i en variabel
print(lista) # [1, 5, 3]
print(variabel) # 4

# pop kan även användas för att ta bort ett godtyckligt element (från godtyckligt index)
variabel = lista.pop(1) # tar bort element på index 1
print(lista) # [1, 3]
print(variabel) # 5

# BTW: listor kan innehålla element av olika datatyper
lista = [1, 3.14, True, "Holger"] # heltal, decimaltal, boolean, textsträng
for element in lista: # loopa igenom lista
    print(element)