# definiera klassen "Adventurer" med en konstruktor och två metoder
class Adventurer:
    def __init__(self, name):
        self.name = name
        self.inventory = []
    def collect(self, item):
        if len(self.inventory) < 3:
            self.inventory.append(item)
            print(f"Lade till {item} i ryggsäcken.")
        else:
            print(f"Fel: Du får inte ha fler än tre föremål i ryggsäcken!")
    def drop(self, item):
        if item in self.inventory:
            self.inventory.remove(item)
            print(f"Tog bort {item} från ryggsäcken.")
        else:
            print(f"Fel: {item} finns inte i ryggsäcken!")

# Skapa en äventyrare, anropa metoder och gör några utskrifter
my_adventurer = Adventurer("Holger")
print(f"Äventyraren heter {my_adventurer.name}.")   # Äventyraren heter Holger
my_adventurer.collect("bredsvärd")
my_adventurer.collect("trolldryck")
my_adventurer.collect("rep")
my_adventurer.collect("ringbrynja") # Fel: Du får inte ha fler än tre föremål i ryggsäcken!
print(my_adventurer.inventory)  # ['bredsvärd', 'trolldryck', 'rep']
my_adventurer.drop("trolldryck")
print(my_adventurer.inventory)  # ['bredsvärd', 'rep']
my_adventurer.drop("mobiltelefon")  # Fel: mobiltelefon finns inte i ryggsäcken!