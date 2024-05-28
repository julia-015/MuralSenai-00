from django.shortcuts import render, HttpResponse
from .models import agendamentos, disponibilidade
from .forms import FormCadastro, FormLogin
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.conf import settings
from django.shortcuts import redirect

# Create your views here.

def homepage(request):
    # return HttpResponse("<h1> Hello World </h1>")
    context = {}
    dados_agendamentos = agendamentos.objects.all()
    context['dados_agendamentos'] = dados_agendamentos   
    return render(request,'homepage.html', context)

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
    context2 = {}
    dados_disponibilidade = disponibilidade.objects.all() 
    dados_agendamentos = agendamentos.objects.all()
    
    context["dados_disponibilidade"] = dados_disponibilidade
    
    return render(request, 'disponibilidade.html', context)