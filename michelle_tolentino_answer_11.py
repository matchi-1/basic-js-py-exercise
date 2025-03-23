#  Write a function named format_number that takes a non-negative number as its only parameter.
#  Your function should convert the number to a string and add commas as a thousand separator.
#  For example, calling format_number(1000000) should return "1,000,000".

def format_number(n):
    return f"{n:,}"  # built-in string formatting to insert commas as thousand separators

# test cases
test_cases = [
    (1000000, "1,000,000"),
    (1234567890, "1,234,567,890"),
    (0, "0"),
    (999, "999"),
    (1000, "1,000"),
    (100000, "100,000"),
    (9876543210, "9,876,543,210"),
]

for i, (num, expected) in enumerate(test_cases, 1):
    result = format_number(num)
    print(f"Test {i}: Input: {num} | Expected: {expected} | Result: {result} | {'PASSED' if result == expected else 'FAILED'}")
