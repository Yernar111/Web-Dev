class Animal():
    def __init__(self, name, age, isAdopted, isHungry):
        self.name = name
        self.age = age
        self.isAdopted = isAdopted
        self.isHungry = isHungry

    def adopt(self):
        if not self.isAdopted:
            self.isAdopted = True
            return f"{self.name} has been adopted!"
        else:
            return f"{self.name} is already adopted."

    def feed(self):
        if self.isHungry:
            self.isHungry = False
            return f"{self.name} has been fed."
        else:
            return f"{self.name} is not hungry."

    def make_sound(self):
        return f"{self.name} makes a sound."

    def __str__(self):
        return f"{self.name} is a {self.age}-year-old animal. Adopted: {self.isAdopted}, Hungry: {self.isHungry}"


class Dog(Animal):
    def __init__(self, name, age, isAdopted, isHungry, breed):
        super().__init__(name, age, isAdopted, isHungry)
        self.breed = breed

    def make_sound(self):
        return f"{self.name} says: Woof!"

    def __str__(self):
        return f"{self.name} is a {self.age}-year-old {self.breed} dog. Adopted: {self.isAdopted}, Hungry: {self.isHungry}"


class Cat(Animal):
    def __init__(self, name, age, isAdopted, isHungry, color):
        super().__init__(name, age, isAdopted, isHungry)
        self.color = color

    def make_sound(self):
        return f"{self.name} says: Meow!"

    def __str__(self):
        return f"{self.name} is a {self.age}-year-old {self.color} cat. Adopted: {self.isAdopted}, Hungry: {self.isHungry}"