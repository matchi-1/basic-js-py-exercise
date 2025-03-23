#  Write a program that accepts a sequence of words separated by whitespace as input to print the words composed of digits only.
#  Example:
    #  If the following words are given as input to the program:
    #  2 cats and 3 dogs.
#  Then, the output of the program should be:
    #  ['2', ' 3']
#  In the case of input data being supplied to the question, it should be assumed to be a console input.

import re

def extract_digit_words():
    text = input("Enter a sentence: ")  
    numbers = re.findall(r'\b\d+\b', text)  # find all occurrences of numbers (whole numbers (digits) only) in the text
    print(numbers) 

extract_digit_words()
