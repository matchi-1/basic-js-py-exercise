import re

def extract_company(email):
    # regex: match "username@company.com"
    # allows letters, numbers, dots, and underscores in username
    match = re.match(r"^[a-zA-Z0-9._]+@([a-zA-Z]+)\.com$", email)
    
    # return the captured company name if there's a match, otherwise return None
    return match.group(1) if match else None

# test cases
def run_tests():
    test_cases = [
        ("john@google.com", "google"),              # normal case
        ("alice123@microsoft.com", "microsoft"),    # valid: numbers in username
        ("bob@apple.net", None),                    # invalid: domain is not .com
        ("john.doe@amazon.com", "amazon"),          # valid: dot in username
        ("peter_smith@tesla.com", "tesla"),         # valid: underscore in username
        ("@google.com", None),                      # invalid: missing username
        ("chris@IBM.com", "IBM"),                   # valid: uppercase letters in company name
        ("mike@openai.com", "openai"),              # valid: different company
        ("user@123company.com", None),              # invalid: numbers in company name
    ]
    
    for i, (email, expected) in enumerate(test_cases, 1):
        result = extract_company(email)
        print(f"Test {i}: {email} -> Expected: {expected}, Result: {result} {'PASSED' if result == expected else 'FAILED'}")


run_tests()
