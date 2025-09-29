def add(a, b):     # Här
  the_sum = a + b  # skapas
  return the_sum   # funktionen

# Huvudprogram nedan
tal_1 = 10
tal_2 = 20
summa = add(tal_1, tal_2) # Här anropas funktionen

print(f"Summan av {tal_1} och {tal_2} är {summa}")
print(add(4, 6)) # 10
print(add) # <function add at ...> meningslös utskrift som antagligen beror på att du glömt parametrarna

def subtract(a, b):
  difference = a - b
  return difference

# Huvudprogram
subtract(1, 2)
# Nedanstående ger ett felmeddelande eftersom
# giltighetsområdet (omfattningen) för variabeln
# the_sum inte räcker till denna nivå i programmet.
# print(difference)

# funktion utan return-sats
def print_multabell(n):
  # Skriver ut fem rader i multiplikationstabell n
  for i in range(1, 6):
    print(f"{i:2.0f} * {n} = {i*n:3.0f}")

print_multabell(12) # Ange önskad tabell att skriva ut här
print_multabell(3)
# Om det inte finns någon särskild return-sats i funktionen så blir returvärdet automatiskt "None" 
print(print_multabell(4)) # skriver ut fyrans tabell, därefter None

# dokumentation av funktion och hantering av flera return-satser
def maximum(a, b):
  '''
  Funktionen returnerar det största av två tal
  Parameter 1: a | ett tal (int eller float)
  Parameter 2: b | ett tal (int eller float)
  Returvärde: Det största av talen. Vid likhet returneras None.
  '''

  if a > b:
    return a
  elif b > a:
    return b
  return None # Onödig rad, utan return-sats returneras None ändå

print(maximum(3, 1)) # 3 (funktionen avbryts vid rad 45, eftersom den når return då)