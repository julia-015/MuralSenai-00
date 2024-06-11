from django.contrib import admin
from .models import agendamentos,disponibilidadeC, usuario, reserva

admin.site.register(agendamentos)
admin.site.register(disponibilidadeC)
# admin.site.register(usuario)
# admin.site.register(reserva)