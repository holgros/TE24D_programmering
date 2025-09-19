# enkelt inledande exempel med en lista som skrivs ut i en for-loop
lista = [10, 20, 30]
for element in lista:
    print(element, end=" ")
print(f"Loopen avslutas eftersom listan är slut")

# längre lista som konstrueras med funktionen range
for i in range(3, 8):   # Här skapas listan
    print(i, end=" ")
print() # radbyte

# fler exempel med range
lista_A = list(range(10))
lista_B = list(range(-5, 5))
lista_C = list(range(0, 10, 2))
lista_D = list(range(10, 0, -1))
print(f"lista_A = {lista_A}")
print(f"lista_B = {lista_B}")
print(f"lista_C = {lista_C}")
print(f"lista_D = {lista_D}")

# Detta program beräknar och skriver ut "tolvans tabell"
for i in range(1, 13):
    print(f"{i:2.0f} * 12 = {i*12:3.0f}")   # skriver ut i*12 för varje värde på i mellan 1 och 12

# en lista kan innehålla andra element än tal, t.ex. textsträngar
items = ["Klocka", "Kikare", "Termometer"]
print("Du har tillgång till:", end=" ")
for item in items:
    print(item, end=" ")