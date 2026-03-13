from models import Animal, Dog, Cat

def make_sound(animal: Animal):
    return animal.make_sound()

dog1 = Dog("Rex", 3, False, True, "Golden Retriever")
cat1 = Cat("Tom", 2, False, True, "Tabby")

a = list()
a.append(dog1)
a.append(cat1)
for i in a:
    print(i)
    print(i.adopt())
    print(make_sound(i))