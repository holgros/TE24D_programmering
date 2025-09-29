#
#   for-loopar används när man vet hur många gånger man behöver loopa.
#

import random as rand
for x in range(5):  # range genererar heltal 0-4
    print(x)

print("\n"*2)

for c in "Hello":
    print(c)

print("\n"*2)

# Ex. Nästlade for-loopar. När man använder en for-loop i en for-loop.
for x in range(1, 11):  # range genererar heltal 1-10
    for y in range(1, 11):  # Den här loopen kommer köras en gång för varje värde på x
        print(f"({x},{y})")

print("\n"*2)
print("Slumpmönster")

for x in range(10):
    row = ""
    for y in range(10):
        if rand.randint(0, 9) > 5:
            row += "*"
        else:
            row += "-"
    print(row)


print("\n"*2)
print("Loop över lista")

# En lista med strängar.
# Alla strängar omges av hakparenterser "[" och "]"
# Strängarna separeras med kommatecken.
lista = ["Hello", "list", "world", "!"]
for s in lista:
    print(f"Strängen {s} är {len(s)} tecken lång.")