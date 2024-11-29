import requests
response = requests.get('API_URL')
try:
    data = response.json()  # Chắc chắn API trả về JSON
except ValueError:
    print("API phản hồi không phải JSON hợp lệ:", response.text)
