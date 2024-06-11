from django import forms

class FormCadastro(forms.Form):
    first_name = forms.CharField(label='Nome', max_length=20)
    last_name = forms.CharField(label='Sobrenome', max_length=20)
    user = forms.CharField(label='Usuário', max_length=20)
    email = forms.EmailField(label='Email', max_length=100)
    cpf = forms.CharField(label='CPF', max_length=11)
    telefone = forms.CharField(label='Telefone', max_length=11)
    password= forms.CharField(label="Senha", widget=forms.PasswordInput())

class FormLogin(forms.Form):
    user = forms.CharField(label="Usuário", max_length=20)
    password= forms.CharField(label="Senha", widget=forms.PasswordInput)

class FormNome(forms.Form):
    nome = forms.CharField(label= 'Nome', max_length= 20)
    sobrenome = forms.CharField(label= 'Sobrenome', max_length= 20)
    email = forms.CharField(label= 'Email', max_length= 50)
    sala = forms.ChoiceField(label= 'Sala')
    data = forms.DateField(label='Data', widget=forms.DateInput(attrs={'type': 'date'}))
# Se possível, podemos colocar o horário




