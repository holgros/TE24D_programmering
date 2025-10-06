# ===============================================
# Yttre scope
# ===============================================


# En variabel skapas och tilldelas ett värde i huvudprogrammet
en_variabel = "hej"
print(en_variabel)

# I den här funktionen kan man komma åt variabeln som skapats i huvudprogrammet
# men man får INTE ändra den.


def en_funktion():
    # att läsa värdet i en variabel i ett yttre scope (utanför funktionen) går bra.
    print(en_variabel)

    # men ett försök att ändra på huvudprogrammets variabel inne i en funktion går inte.
    # avkommentera raden nedan och testkör programmet
    # en_variabel += " världen"


en_funktion()

# ===============================================
# Inre scope
# ===============================================

# En variabel som skapas i en funktion är inte synlig i huvudprogrammet eller i någon annan funktion.


def en_funktion_med_variabel():
    en_lokal_variabel_i_en_funktion = "Ett värde"


en_funktion_med_variabel()
# Raden här nedanför kommer ge ett fel om den körs.
# print(en_lokal_variabel_i_en_funktion)


# ===============================================
# Bra vana
#
# Det är bra vana att inte försöka sätta om variabler som är definierade
# i ett yttre scope. Det är bättre att skicka in värden i funktioner och
# returnera värden från funtioner.
#
# Väl strukturerad kod har funktioner utan "side effects", alltså att
# funktionerna ändrar saker (t.ex. värdet på variabler) i huvudprogrammet.
# ===============================================

# en variabel som håller räkningen defineras i huvudprogrammet
raknare = 0


def add_one(tal):
    '''
    Den här funktionen tar ett tal som inparameter,
    lägger till ett till talet och returnerar det.
    '''
    added = tal + 1
    return added


# huvudprogrammet anropar funktionen add_one, med värdet i variabeln
# raknare som argument. Därefter tilldelas variabeln raknare det värde
# som returneras från add_one.
raknare = add_one(raknare)

print(f"Räknare: {raknare}")