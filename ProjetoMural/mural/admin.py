from django.contrib import admin
from .models import agendamentos,disponibilidadeC, cadastro

admin.site.register(agendamentos)
admin.site.register(cadastro)
admin.site.register(disponibilidadeC)