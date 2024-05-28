from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage, name='home'),
    path('cadastro', views.cadastro, name='cadastro'), 
    path('login', views.login, name='login'),
    path('disponibilidade', views.disponibilidade, name='disponibilidade'),
    path('reserva', views.reserva, name='reserva')
]