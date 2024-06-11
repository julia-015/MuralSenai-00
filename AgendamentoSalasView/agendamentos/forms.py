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

class FormNome(forms.Form):
    nome = forms.CharField(label= 'Nome', max_length= 20)
    sobrenome = forms.CharField(label= 'Sobrenome', max_length= 20)
    email = forms.CharField(label= 'Email', max_length= 50)
    sala = forms.ChoiceField(label= 'Sala')
    data = forms.DateField(label='Data', widget=forms.DateInput(attrs={'type': 'date'}))
# Se possível, podemos colocar o horário

# reservas/forms.py
# from django import forms
# from .models import usuario, reservas

# class UsuarioForm(forms.ModelForm):
#     class Meta:
#         model = usuario
#         fields = ['nome', 'email']

# class ReservaForm(forms.ModelForm):
#     class Meta:
#         model = reservas
#         fields = ['usuario', 'data', 'detalhes']



