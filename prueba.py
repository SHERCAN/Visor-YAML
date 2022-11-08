from yaml import safe_load
with open('settings.yml', 'r') as file:
    prime_service = safe_load(file)
print(prime_service)
