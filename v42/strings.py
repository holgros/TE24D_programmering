my_string = "Hello, world"

# Hur man får fram tecken på viss position och position för ett visst tecken (eller en viss teckenföljd)
print(f"Strängkonstanten är: {my_string}")
print(f"Strängkonstantens första tecken är: {my_string[0]}")
print(f"Strängkonstantens tredje tecken är: {my_string[2]}, osv.")
print(f"Tecknet \"o\" finns första gången på index: {my_string.index('o')}")
print(f"Teckenföljden \"or\" finns första gången på index: {my_string.index('or')}")

# Hur man får fram delsträngar
my_str = "Detta är en sträng som består av 42 tecken"
print(my_str[:8])
print(my_str[19:29])
print(my_str[33:])

# Loopa igenom sträng
# exempel: ersätt alla konsonanter med asterisker
vowels = "aeiouyåäö"
chars = "Hello, world"
for char in chars:
    if char.lower() in vowels: # metoden "lower" gör om till liten bokstav
        print(char, end="")
    else:
        print("*", end="")
print("\n") # ny rad

# liknande exempel: bygga en sträng från en tom sträng
vowels = "aeiouyåäö"
source = "Hello, world"
destination = "" # en tom sträng
for char in source: # bygg successivt på strängen med nya tecken i loopen
    if char.lower() in vowels:
        destination += char
    else:
        destination += "*"
print(destination)

# observera att strängmetoder inte ändrar den ursprungliga strängen
my_str = "Detta är en sträng som består av 42 tecken"
my_upper_str = my_str.upper()
print(my_str) # oförändrad
print(my_upper_str) # med stora bokstäver (versaler)

# vill man ändra en sträng så får man tilldela den ett nytt värde
my_str = "Detta är en sträng som består av 42 tecken"
my_str = my_str.upper()
print(my_str) # med stora bokstäver (versaler)
