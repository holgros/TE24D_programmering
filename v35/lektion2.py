# enkel utskrift
print("Tjenaaa!")

# aritmetik
print(1+2)
print(2-1)
print(2*2)
print(4/2)

# restdivision
print(27%5) # 2
print(40%10)    # 0

# heltalsdivision
print(27//5)    # 5
print(123456//3)    # 42252

# exponentiering
print(3**4) # 81, dvs. tre upphöjt till fyra
print(2**10)    # 1024

# variabler
x = 3       # heltalsvariabel
print(x)    # 3
x = 4       # en variabel kan byta värde
print(x)    # 4
en_text = "Hejsan"  # en strängvariabel (text)
sanning = True  # boolesk variabel, sanningsvärde True/False

# variabler och aritmetik
x = 4+5
print(x)    # 9
x = x+1     # öka variabeln x med ett
print(x)    # 10
x += 1      # samma som "x = x+1"
print(x)    # 11

# olika datatyper
print(type(x))  # <class 'int'> dvs. heltal
print(type(en_text))    # <class 'str'> dvs. textsträng
print(type(sanning))    # <class 'bool'> dvs. en "logisk" variabel
x = str(x)      # x är nu texträngen "11" istället för talet 11
print(type(x))  # <class 'str'>
y = "12"    # textsträngen "12"
print(type(y))  # <class 'str'>
# y = y+3 # FEL, vi kan inte addera ett tal till en textsträng...
y = int(y)+3    # ... men vi kan typkonvertera om textsträngen "12" till talet 12 och sedan addera
print(y)    # 15

# hantera stränger
namn = "Holger"
print("Hejsan " + namn) # Hejsan Holger
print(f"Variabeln x har värdet {x}, variabeln y har värdet {y} och deras summa är {int(x)+y}.")

# input
namn = input("Vad heter du?")
print("Hej " + namn + ", trevligt att råkas!")
tal1 = input("Ange ett tal:")
tal2 = input("Ange ett till tal:")
summa = tal1+tal2
print(f"Summan är {summa}, ifall talen tolkas som teckensträngar.") # 12
summa = int(tal1)+int(tal2) # typkonvertera input till heltal
print(f"Summan är {summa}, ifall talen tolkas som heltal.") # 3
