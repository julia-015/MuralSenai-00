from django.shortcuts import render, HttpResponse
from .models import agendamentos, disponibilidadeC, usuario, cadastro
from .forms import FormCadastro, FormLogin, FormNome
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.conf import settings
from django.shortcuts import redirect
from django.views.generic.edit import DeleteView

# Create your views here.

from django.contrib.auth.forms import AuthenticationForm

def homepage(request):
    context = {}
    dados_agendamentos = agendamentos.objects.all()
    context['dados_agendamentos'] = dados_agendamentos
    context['login_form'] = AuthenticationForm()
    return render(request, 'homepage.html', context)

def cadastro (request):
    if request.method == "POST":
        form = FormCadastro(request.POST)
        if form.is_valid():

            var_first_name = form.cleaned_data['first_name']
            var_last_name = form.cleaned_data['last_name']
            var_email = form.cleaned_data['email']
            var_user = form.cleaned_data['user']
            var_password = form.cleaned_data['password']

            user = User.objects.create_user(username= var_user, email= var_email, password=var_password)
            user.first_name = var_first_name
            user.last_name = var_last_name
            user.save()

            print(var_first_name)
            print(var_last_name)
            print(var_email)
            print(var_user)
            print(var_password)

            if user is not None:
                return redirect('login') 

            return HttpResponse("<h1 style=\"font-family: 'Courier New', Courier, monospace; background-color: #f5c2dac6; text-align: center; padding: 20px; padding-top: 50px; padding-bottom: 50px\">Cadastro realizado com sucesso!<br> Em breve entraremos em contato com você para mais detalhes.<br>Obrigada por escolher o Hotel Senai!</h1>")
        
            

    else:
        form = FormCadastro()

    return render(request, "cadastro.html", {"form": form})

def login (request):
    if request.method == "POST":
        form = FormLogin(request.POST)
        if form.is_valid():

            var_user = form.cleaned_data['user']
            var_password = form.cleaned_data['password']

            user = authenticate(username=var_user, password = var_password)
            print(user)

            if user is not None:
                # return redirect(f"{settings.LOGIN_URL}?next={request.path}")
                return redirect('quartos') 
            else:
                # return render(request, 'login.html', {'form': form, 'error_message': 'Usuário ou senha incorreta'})
                return HttpResponse("<h1 style=\"font-family: 'Courier New', Courier, monospace; background-color: #f5c2dac6; text-align: center; padding: 20px; padding-top: 50px; padding-bottom: 50px\">Usuário ou Senha incorreta</h1>")
                # return redirect('login')
    else:
        form = FormLogin()

    return render(request, "login.html", {"form": form})

def disponibilidade(request):
    context = {}
    dados_disponibilidade = disponibilidadeC.objects.all() 
    dados_agendamentos = agendamentos.objects.all()
    
    context["dados_disponibilidade"] = dados_disponibilidade
    
    return render(request, 'disponibilidade.html', context)


def reserva (request):
    if request.method == "POST":
        form = FormNome(request.POST)
        if form.is_valid():
             
             var_nome = form.cleaned_data['nome']
             var_sobrenome = form.cleaned_data['sobrenome']
             var_email = form.cleaned_data['email']
             var_sala = form.cleaned_data['sala']
             var_data = form.cleaned_data['data']

             user = usuario(nome = var_nome, sobrenome = var_sobrenome, email = var_email, sala = var_sala, data = var_data)
             user.save()

             print(var_nome)
             print(var_sobrenome)
             print(var_email)
             print(var_sala)
             print(var_data)
             
             return HttpResponse("<h1 style=\"font-family: 'Courier New', Courier, monospace; background-color: #f5c2dac6; text-align: center; padding: 20px; padding-top: 50px; padding-bottom: 50px\">Reserva realizada com sucesso!<br> Em breve entraremos em contato com você para mais detalhes.<br>Obrigada por escolher o Hotel Senai!</h1>")
        
    else:
        form = FormNome()

    return render(request, "reserva.html", {"form": form})


def listaReserva(request):
     context = {}
     dados_listaReserva = listaReserva.objects.all() 
    
     context["dados_disponibilidade"] = dados_listaReserva
    
     return render(request, 'listaReserva.html', context)

def user(request):
     context = {}
#     dados_user = user.objects.all() 

#     context["dados_user"] = dados_user
    
#     return render(request, 'usuarios.html', context)