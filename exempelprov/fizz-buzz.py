# Se uppgift https://docs.google.com/document/d/1jAf795aPWnR5mtIbu8mshaAdVC4p2ZDWqXG80d1qzAg/edit?tab=t.0#heading=h.1w3b6biixjqz
for i in range(99):
    divisible_by_three = (i+1) % 3 == 0
    divisible_by_five = (i+1) % 5 == 0
    if divisible_by_three and not divisible_by_five:
        print("Fizz, ", end="")
    if not divisible_by_three and divisible_by_five:
        print("Buzz, ", end="")
    if divisible_by_three and divisible_by_five:
        print("Fizz Buzz, ", end="")
    if not (divisible_by_three or divisible_by_five):
        print(i+1, end=", ")

print("Buzz") # för 100, utan kommatecken+mellanslag (", ") på slutet