from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage, name='home'),
    path('cadastro', views.cadastro, name='cadastro'), 
    path('disponibilidade', views.disponibilidade, name='disponibilidade'),
    path('reserva', views.reserva, name='reserva'),
    path('listaU', views.listaU, name='listaU'),
    path('listaReserva', views.listaReserva, name='listaReserva'),
    path('users/edit/<int:user_id>/', views.edit_user, name='edit_user'),
    path('users/delete/<int:user_id>/', views.delete_user, name='delete_user')

]