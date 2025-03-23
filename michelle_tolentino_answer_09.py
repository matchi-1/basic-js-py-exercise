# Define a simple class named Circle which can be constructed by a radius.
# The Circle class has a method that can compute the area.

import math

class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * (self.radius ** 2)



circleObj = Circle(10)
print(f"Area: {circleObj.area():.2f}") 
