from django import forms

class FormCadastro(forms.Form):
    first_name = forms.CharField(label='Nome', max_length=20)
    last_name = forms.CharField(label='Sobrenome', max_length=20)
    user = forms.CharField(label='Usuário', max_length=20)
    email = forms.EmailField(label='Email', max_length=100)
    password= forms.CharField(label="Senha", widget=forms.PasswordInput())

class FormLogin(forms.Form):
    user = forms.CharField(label="Usuário", max_length=20)
    password= forms.CharField(label="Senha", widget=forms.PasswordInput)