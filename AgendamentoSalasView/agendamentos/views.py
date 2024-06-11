from django.shortcuts import render, HttpResponse, get_object_or_404, redirect
from .models import agendamentos, disponibilidadeC, reservas, usuario
from .forms import FormCadastro, FormLogin, FormNome, ReservaForm, UsuarioForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.forms import AuthenticationForm

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

            user = User.objects.create_user(username=var_user, email=var_email, password=var_password)
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
            var_user = form.cleaned_data['user']
            var_password = form.cleaned_data['password']

            user = authenticate(username=var_user, password=var_password)
            print(user)

            if user is not None:
                return redirect('quartos')
            else:
                return HttpResponse(
                    "<h1 style=\"font-family: 'Courier New', Courier, monospace; background-color: #f5c2dac6; text-align: center; padding: 20px; padding-top: 50px; padding-bottom: 50px\">Usuário ou Senha incorreta</h1>"
                )
    else:
        form = FormLogin()

    return render(request, "login.html", {"form": form})

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
                "<h1 style=\"font-family: 'Courier New', Courier, monospace; background-color: #f5c2dac6; text-align: center; padding: 20px; padding-top: 50px; padding-bottom: 50px\">Reserva realizada com sucesso!<br> Em breve entraremos em contato com você para mais detalhes.<br>Obrigada por escolher o Hotel Senai!</h1>"
            )
    else:
        form = FormNome()

    return render(request, "reserva.html", {"form": form})

# def lista_usuarios(request):
#     usuarios = usuario.objects.all()
#     return render(request, 'reservas/listaU.html', {'usuarios': usuarios})

# def editar_usuario(request, usuario_id):
#     usuario_obj = get_object_or_404(usuario, id=usuario_id)
#     if request.method == 'POST':
#         form = UsuarioForm(request.POST, instance=usuario_obj)
#         if form.is_valid():
#             form.save()
#             return redirect('lista_usuarios')
#     else:
#         form = UsuarioForm(instance=usuario_obj)
#     return render(request, 'reservas/editar_usuario.html', {'form': form})

# def excluir_usuario(request, usuario_id):
#     usuario_obj = get_object_or_404(usuario, id=usuario_id)
#     if request.method == 'POST':
#         usuario_obj.delete()
#         return redirect('lista_usuarios')
#     return render(request, 'reservas/excluir_usuario.html', {'usuario': usuario_obj})

# def lista_reservas(request):
#     reservas_obj = reservas.objects.all()
#     return render(request, 'reservas/listaReserva.html', {'reservas': reservas_obj})

# def editar_reserva(request, reserva_id):
#     reserva_obj = get_object_or_404(reservas, id=reserva_id)
#     if request.method == 'POST':
#         form = ReservaForm(request.POST, instance=reserva_obj)
#         if form.is_valid():
#             form.save()
#             return redirect('lista_reservas')
#     else:
#         form = ReservaForm(instance=reserva_obj)
#     return render(request, 'reservas/editar_reserva.html', {'form': form})

# def excluir_reserva(request, reserva_id):
#     reserva_obj = get_object_or_404(reservas, id=reserva_id)
#     if request.method == 'POST':
#         reserva_obj.delete()
#         return redirect('lista_reservas')
#     return render(request, 'reservas/excluir_reserva.html', {'reserva': reserva_obj})
