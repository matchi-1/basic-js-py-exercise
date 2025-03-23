# Write a function that analyzes a binary string consisting of only zeros and ones.
# Your function should return the biggest number of consecutive zeros in the string. 
# For example, given the string: "1001101000110"- The biggest number of consecutive zeros is 3.

# Define a function named consecutive_zeros that takes a single parameter,
# which is the string of zeros and ones. Your function should return the number described above

def consecutive_zeros(binary_string):
    return max(map(len, binary_string.split('1')))  # split by '1', find the longest sequence of '0'

# test cases
test_cases = [
    ("1001101000110", 3),  # example case
    ("0000", 4),           # all zeros
    ("1111", 0),           # no zeros
    ("1010101", 1),        # only single zeros between ones
    ("1000001", 5),        # one large block of zeros
    ("1000000001", 8),     # even larger block
    ("100100100", 2),      # multiple short zero sequences
    ("0", 1),              # single zero
    ("1", 0),              # single one, no zeros
    ("000100000010", 6),   # two blocks, return the longest
    ("1000000000000000001", 17)  # very large block of zeros
]

for i, (binary_str, expected) in enumerate(test_cases, 1):
    result = consecutive_zeros(binary_str)
    print(f"Test {i}: Input: '{binary_str}' | Expected: {expected} | Result: {result} | {'PASSED' if result == expected else 'FAILED'}")
