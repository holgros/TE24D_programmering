# ett enkelt villkor med else-tillägg
a = -1
if a > 0:
    print('a är större än noll')
else:
    print('a är inte större än noll')

# ett annat exempel (se presentation för flödesschema)
e_gräns = 15
poäng = int(input('Ange din provpoäng -> '))
if poäng >= e_gräns:
   print('Godkänt')
else:
    print('Ej godkänt')
print('Programmet avslutas')

# jämförelseoperatorer
print(3 == 3)   # True (lika med)
print(3 <= 3)   # True (mindre eller lika med)
print(3 != 3)   # False (ej lika med)
print(3 != 4)   # True (ej lika med)
a = 3  # Tilldelande
b = 8  # Tilldelande
print(a == b) # Jämförande (False)

# booleska variabler
my_boolean = True
if my_boolean:
   print("Den booleska variabelns värde var True")
my_second_boolean = False
if (not my_second_boolean):
   print("Den booleska variabelns värde var inte True")

# booleska operatorer
a = True
b = False
print(a and b) # False
print(a or b) # True
print((a or b) and a) # True
print(not a) # False
print(not b) # True

# ett lite mer komplext program (se presentation för flödesschema)
tal = int(input('Ange valfritt heltal ->'))
if tal >= 0:
   if tal == 0:
      print('Noll')
   else:
      print('Positivt')
else:
   print('Negativt')

print('Programmet avslutas')