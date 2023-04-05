import openai


openai.api_key = "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"

content = """my address 210.210.0.0/16
i have 540 hosts in lan1, 300 hosts in lan2, 8 hosts in lan3 and 120 hosts in reserve 
how to distribute addresses""" 
response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are chatbot"},
        {"role": "user", "content": content},
    ]
)
answer = response.choices[0].message.content
print(answer)
