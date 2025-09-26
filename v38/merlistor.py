lista = [11, 2, 6, 8, 12, 3] # lista med heltal
print(lista[-1]) # 3
print(lista[-4]) # 6

lista = [] # en tom lista
lista.append("hejsan")
print(lista) # ["hejsan"]
# print(lista[1]) # IndexError: list index out of range (index som inte finns)

lista = [11, 2, 6, 8, 12, 3]
element = lista[0] # läser värdet på plats 0
print(element)  # skriver ut 11
print(lista) # skriver ut [11, 2, 6, 8, 12, 3]
lista[0] = "hej" # ändrar värdet på position 0
print(lista) # skriver ut [“hej”, 2, 6, 8, 12, 3]

# metoder i listor: append, pop
lista = [1, 2, 3]
lista.append(42) # append lägger på ett element på slutet
print(lista) # skriver ut [1, 2, 3, 42]
lista = [1, 2, 3]
# pop() tar bort det sista elementet och returnerar det
element = lista.pop()
print(element) # skriver ut 3
print(lista) # skriver ut [1, 2]
lista = [1, 2, 3]
# pop(index) tar bort elementet med det angivna indexet 
# och returnerar det
element = lista.pop(1)
print(element)  # skriver ut 2
print(lista)  # skriver ut [1, 3]

# loopa igenom en lista
lista = ["ett", False, 2.0, 2]  
for x in lista:
    print(x)

# lista i en lista
table = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for row in table:
    for column in row:
        print(column, end="")
    print()