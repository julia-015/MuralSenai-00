from django.shortcuts import render, HttpResponse, get_object_or_404, redirect
from .models import agendamentos, disponibilidadeC, reservas
from .forms import FormCadastro, FormLogin, FormNome
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required, permission_required


def homepage(request):
    context = {}
    dados_agendamentos = agendamentos.objects.all()
    context['dados_agendamentos'] = dados_agendamentos
    context['login_form'] = AuthenticationForm()
    return render(request, 'homepage.html', context)

def cadastro(request):
    if request.method == "POST":
        form = FormCadastro(request.POST)
        if form.is_valid():
            var_first_name = form.cleaned_data['first_name']
            var_last_name = form.cleaned_data['last_name']
            var_email = form.cleaned_data['email']
            var_user = form.cleaned_data['user']
            var_password = form.cleaned_data['password']

            print(var_first_name)
            print(var_last_name)
            print(var_email)
            print(var_user)
            print(var_password)

            user = User.objects.create_user(username= var_user, email=var_email, password=var_password)
            user.first_name = var_first_name
            user.last_name = var_last_name
            user.save()

            

            if user is not None:
                return redirect('home')

            return HttpResponse(
                "<h1 style=\"font-family: 'Courier New', Courier, monospace; background-color: #f5c2dac6; text-align: center; padding: 20px; padding-top: 50px; padding-bottom: 50px\">Cadastro realizado com sucesso!<br> Em breve entraremos em contato com você para mais detalhes.<br>Obrigada por escolher o Hotel Senai!</h1>"
            )
    else:
        form = FormCadastro()

    return render(request, "cadastro.html", {"form": form})

def login(request):
    if request.method == "POST":
        form = FormLogin(request.POST)
        if form.is_valid():
            user = form.cleaned_data['user']
            password = form.cleaned_data['password']

            user = authenticate(username=user, password=password)
            if user is User.objects.filter(username=user).exists():
                auth_login(request, user)  # Autentica o usuário
                return redirect('disponibilidade') # Redireciona para a página de disponibilidade após o login bem-sucedido
            else:
                messages.error(request, 'Usuário ou senha incorretos.')  # Mensagem de erro
    else:
        form = FormLogin()

    return render(request, "homepage.html", {"form": form})

def disponibilidade(request):
    context = {}
    dados_disponibilidade = disponibilidadeC.objects.all()
    dados_agendamentos = agendamentos.objects.all()

    context["dados_disponibilidade"] = dados_disponibilidade

    return render(request, 'disponibilidade.html', context)

def reserva(request):
    if request.method == "POST":
        form = FormNome(request.POST)
        if form.is_valid():
            var_nome = form.cleaned_data['nome']
            var_sobrenome = form.cleaned_data['sobrenome']
            var_email = form.cleaned_data['email']
            var_sala = form.cleaned_data['sala']
            var_data = form.cleaned_data['data']


            user_reserva = reservas(nome=var_nome, sobrenome=var_sobrenome, email=var_email, sala=var_sala, data=var_data)
            user_reserva.save()

            print(var_nome)
            print(var_sobrenome)
            print(var_email)
            print(var_sala)
            print(var_data)

            return HttpResponse(
                "<h1 style=\"font-family: 'Courier New', Courier, monospace; background-color: #f5c2dac6; text-align: center; padding: 20px; padding-top: 50px; padding-bottom: 50px\">Reserva realizada com sucesso!<br> Em breve entraremos em contato com você para mais detalhes.<br>Obrigada por escolher o H Senai!</h1>"
            )
    else:
        form = FormNome()

    return render(request, "reserva.html", {"form": form})



def listaU(request):
    users = User.objects.all()

    return render(request,"listaU.html",{'users': users})

def listaReserva(request):

    reserva = reservas.objects.all()

    return render(request, "listaReserva.html", {'reservas': reserva})

def edit_user(request, user_id):
    user = get_object_or_404(User, id=user_id)
    if request.method == 'POST':
        user.username = request.POST.get('username')
        user.email = request.POST.get('email')
        user.save()
    return redirect('listaU')

def delete_user(request, user_id):
    user = get_object_or_404(User, id=user_id)
    if request.method == 'POST':
        user.delete()
    return redirect('listaU')



def reserva(request):
    context = {}
    dados_disponibilidade = disponibilidadeC.objects.all()
    context["disponibilidades"] = dados_disponibilidade
    return render(request, "reserva.html", context)
