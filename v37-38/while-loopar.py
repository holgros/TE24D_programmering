'''
While-loopar används när man vill loopa så länge något villkor är sant.
Det kan bli oändligt ifall man inte passar sig!
'''

# Ex: while-loop som körs så länge variabeln i är mindre än 6
# Skriver ut värdet på i och räknar upp värdet med 1
i = 1
while i <= 5:
    # allt som är "intabbat" här görs varje varv i loopen
    print(i)
    i = i+1
print("Loopen avslutad, eftersom i =", str(i))

# Ex: while-loop som frågar efter tal ända tills användaren matar in en nolla
# Därefter skrivs summan av talen ut.
# Detta program beräknar summan av ett antal tal
# Detta program beräknar summan av ett antal tal
# Detta program beräknar summan av ett antal positiva tal
summa = 0
while True: # loop som fortsätter i princip oändligt många gånger, se dock "break" på rad 24
    tal = int(input("Ange ett valfritt tal, noll avslutar -> "))
    if tal == 0:
        break # avslutar loopen och går omedelbart vidare till rad 28
    if tal < 0:
        continue # avslutar detta "varv" (iteration) av loopen och går omedelbart tillbaka till rad 21
    summa += tal
print(f"Summan av de inmatade positiva talen är {summa}")

# Ex: nästlad loop - "en loop i en loop"
# skriver ut 3*3 gånger, dvs. alla kombinationer av i och j från 0 t.o.m. 2
# Detta program demonstrerar nästlade loopar
i = 0
while i < 3: # Start yttre loop
    j = 0
    while j < 3: # Start inre loop
        print(f"i = {i}, j = {j}")
        j += 1
    i += 1
print("Programmet avslutas")